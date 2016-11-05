---
layout: post
title: Creating Duell Lib
author: Khaled Garbaya
---

In this multipart article I will show you how to create duell library with different backends.
The example library will show a platform native popup with “hello world” message, in html5 a browser popup, UIAlertView in IOS and PopupWindow in Android.

## Structure of a duell lib

A duell library can be full haxe code or a mix of haxe code and native code which will be the one we create today. The structure of duell library can be like so. If you excute duell create libraryProject you will get a template of a duell library with the following structure.

```
├── backends(1)
│   ├── sample_android
│   │   ├── duell_library.xml
│   │   ├── java
│   │   │   └── com
│   │   │       └── test
│   │   │           └── ExternalInterface.java
│   │   └── sample
│   │       └── ExternSample.hx
│   ├── sample_html5
│   │   ├── duell_library.xml
│   │   └── sample
│   │       ├── ExternSample.hx
│   │       └── ExternShared.hx
│   ├── sample_ios
│   │   ├── duell_library.xml
│   │   ├── project
│   │   │   ├── Build.xml
│   │   │   └── src
│   │   │       └── ExternalInterface.mm
│   │   └── sample
│   │       └── ExternSample.hx
│   └── sample_shared
│       ├── duell_library.xml
│       └── sample
│           └── ExternShared.hx
├── duell_library.xml(2)
├── sample
│   ├── Common.hx
│   ├── ExternSample.hx(3)
│   └── ExternShared.hx
└── schema.xsd
```
let's go through some stuff here.

### 1. backends folder

this folder will contain all the library's backends like html5, android, ios and even you can share a backend across platform if you want. It can be named whatever you want and it is not even required because everything is configurable in the duell_library.xml, it is a matter of organization. The big benefit of the backends is the clear seperation between each platform implementation this is beneficial team wise so you can have one developer with javascript expertise to focus on the html5 side and another one at the same time with IOS expertise coding the ios backend they just need to respect the API defined in the Externs.

### 2. duell_library.xml

Any duell library is recognized by its duell_library.xml, this is how the duell tool will know it and parse its configuration. Every backend have duell_library.xml also so you can have some extra configuration specific to a platform.

### 3. Externs

The idea behind the externs is to have a clean way to define the common API between the backends to respect and for developer to know what this duell library will do without caring about backends implementations.

## Coding

### Before we start

In this article I will assume that you already installed [duell tool](http://github.com/gameduell/duell) if not make sure to check my previous articles and you ran these commands.

```
$ haxelib install duell
$ haxelib run duell self_setup
$ duell setup mac
$ duell setup android
```
You may noticed that there is no duell setup html5, because we don't need one.

### Folder structure

I will start with template provided by the duell tool and rename/remove some stuff so we'll end up with the following.

```
├── backends
│ ├── alert_android
│ │ ├── com
│ │ │ └── khaled
│ │ │     └── alert
│ │ │         └── NativeAlert.hx
│ │ ├── duell_library.xml
│ │ └── java
│ │     └── com
│ │         └── khaled
│ │             └── alertnative
│ │                 └── ExternalInterface.java
│ ├── alert_html5
│ │ ├── com
│ │ │ └── khaled
│ │ │     └── nativealert
│ │ │         └── NativeAlert.hx
│ │ └── duell_library.xml
│ └── alert_ios
│     ├── com
│     │ └── khaled
│     │     └── alert
│     │         └── NativeAlert.hx
│     ├── duell_library.xml
│     └── project
│         ├── Build.xml
│         └── src
│             └── ExternalInterface.mm
├── com
│ └── khaled
│     └── alert
│         └── NativeAlert.hx(1)
├── duell_library.xml
└── schema.xsd
```

You don't have to create this manually, just clone the the sample library from [here](https://github.com/Khaledgarbaya/duelltooltutorials) inside of that you will find the folder called alert that contain our library.
Let's define our API first and to do that we need to create an extern class, number one in the tree. The class contains one static method called alert that accept a string as message.

```
package com.khaled.alert;

/**
    The logic of this class is distributed through the different backends.
**/
extern class NativeAlert
{
    /**
        Does "alert" different in each platform.
    **/
    public static function alert(message: String = ""): Void;
}
```

Now that we defined our API let's implement it in the native backends.

### HTML5 Backend

I will start first with the easiest one, the html5 backend, since it will be only haxe code.Navigate to `backends/alert_html5/` directory and change the `com.khaled.alert.NativeAlert` `class` like so.

```
package com.khaled.alert;
import js.Browser;
class NativeAlert
{
    /**
        Native Alert in html5
    **/
    public static function alert(message: String = ""): Void
    {
        // alert(message) in javascript
        Browser.alert(message);
    }
}
```

### IOS Backend

Thanks to the awesome hxcpp backend for haxe we can communicate with `Objective C`, this will require some configuration and a little bit more code.
First let's add some configuration specific to the ios backend, remember when I mentioned that each backend have `duell_library.xml`, for this case the configuration will be simple we just need to specify the ndll name and the path to its Build.xml configuration. And Yes Duell tool can build ndlls at runtime.
`backends/alert_ios/duell_library.xml` should look like so.

```
<?xml version="1.0" encoding="utf-8"?>
<library xmlns="duell">
    <!-- Special configuration for the iOS backend goes here. -->

    <ndll name="alert_ios" build-file-path="project/Build.xml" bin-path="ndll" />

</library>
```

This bring us to the `Build.xml` file and if you are used to hxcpp this should be straight forward for you.

```
<xml>

	<include name="${HXCPP}/build-tool/BuildCommon.xml"/>

	<files id="src">

        <include name="${haxelib:duell_duellbuildios}/native/native.xml" />

		<!-- Our external interface that will contain the native code for the alert popup -->
		<file name="src/ExternalInterface.mm"/>

	</files>

	<target id="NDLL" output="${LIBPREFIX}alert_ios${DBG}${LIBEXTRA}" tool="linker" toolid="${STD_MODULE_LINK}">

		<outdir name="../ndll/${BINDIR}"/>
		<files id="src"/>

	</target>

	<target id="default">

		<target id="NDLL"/>

	</target>

</xml>
```

now the haxe side of the native extension which is `backends/alert_ios/com/khaled/alert/NativeAlert.hx`

```
package com.khaled.alert;
import cpp.Lib;
class NativeAlert
{
    /**
        Native Alert in ios
    **/
    /// link to function in the native side
    public static alertNative = Lib.load("alert_ios", "alert_ios_alert_native", 1);
    public static function alert(message: String = ""): Void
    {
        /// call the native function
        alertNative(message);
    }
}
```

Native side is a mix of cpp code and objective C which should be easy to understand if you have done some native extension before. The `backends/alert_ios/project/src/ExternalInterface.mm` should look like so

```
#ifndef STATIC_LINK
#define IMPLEMENT_API
#endif

#include <hx/CFFI.h>
#include <Foundation/Foundation.h>


static value alert_ios_alert_native(value hxString)
{
    /// convert value to NSString
    NSString *messageString = [NSString stringWithCString:val_get_string(hxString) encoding:NSUTF8StringEncoding];

    // do alert native using UIAlertView
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"Native ios Alert"
                                                 message:messageString
                                                 delegate:nil
                                                 cancelButtonTitle:@"OK"
                                                 otherButtonTitles:nil];
    [alert show];
    [alert release];

	return alloc_null();
}

DEFINE_PRIM(alert_ios_alert_native, 1);


extern "C" int alert_ios_register_prims() { return 0; }
```

### Android Backend

First we need to tell the tool where is the java source which is done in the `duell_library.xml`

```
<?xml version="1.0" encoding="utf-8"?>
<library xmlns="duell">
    <!-- Special configuration for the Android backend goes here. -->

    <platform-config>
        <android>
            <java-source name="ALERT_JAVA" path="java" />
        </android>
    </platform-config>
</library>
```

if you noticed there is a folder called java that contains our java code. so if you have let say a java class like `com.khaled.nativealert.NativeAlert` it should be in `java/com/khaled/nativealert` directory and should look like so

```
package com.khaled.nativealert;
/// duell activity is created by the duell build android plugin
import org.haxe.duell.DuellActivity;

public class ExternalInterface
{
    public static void alert(String messageString)
    {
        AlertDialog alertDialog = new AlertDialog.Builder(DuellActivity.getInstance().this).create();
        alertDialog.setTitle("Android Alert");
        alertDialog.setMessage(messageString);
        alertDialog.setButton(AlertDialog.BUTTON_NEUTRAL, "OK",
        new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int which) {
                dialog.dismiss();
            }
        });
        alertDialog.show();
    }
}
```

You may noticed the usage of DuellActivity in the code which is already provided by the build plugin, in ios also you can have access to the DUELLAppDelegate which I will cover in other articles.
Now haxe code in backends/alert_android/com/khaled/NativeAlert.hx

```
package com.khaled.alert;
import hxjni.JNI;
class NativeAlert
{
    /**
        Native Alert in android
    **/
    private static var alertNative = JNI.createStaticMethod("com/khaled/alertnative/ExternalInterface",
    "alert", "(Ljava/lang/String;)V");

    public static function alert(message: String = ""): Void
    {
        alertNative(message);
    }
}
```

## Connecting everything together

Now we need to tell the tool which backend to pick and when which can be done in the top duell_library.xml config file

```
<?xml version="1.0" encoding="utf-8"?>
<library xmlns="duell">
    <!-- Setting up independent backends. For further native configuration check available libraries. -->
    <include path="backends/alert_ios/duell_library.xml" if="ios" />
    <include path="backends/alert_android/duell_library.xml" if="android" />
    <include path="backends/alert_html5/duell_library.xml" if="html5" />

</library>
```

As you can see here we are telling the duell tool what to pick as a backend for each platform.
In the next article I will show how to add the library to the lib_list and how to use in a duell project, until then happy hxCoding.

Cheers,
Khaled
