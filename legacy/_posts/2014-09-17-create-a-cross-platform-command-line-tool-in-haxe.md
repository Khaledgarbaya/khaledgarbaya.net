---
layout: post
title: Create a cross-platform command line tool in haxe
author: Khaled Garbaya
---

To Help you getting started with [haxe](http://haxe.org/) I had this idea about creating a simple (Hello world) cross-platform command line tool which is really simple and it took me not more than 30 min.

So you maybe want a super awesome command line tool to help you automate some process generate files etc… and you want it cross platform , Haxe got you covered.

I choose to build the app targeting [Neko VM](http://nekovm.org/) which is the goto platform to build command line tools.

Let’s go through the classes and explain them.

```
/**
*@author kgarbaya
**/
import net.khaledgarbaya.processor.CmdProcessor;
import net.khaledgarbaya.helper.LogHelper;
class CommandLineTool
{
	/// parse commands and perform action
    private var processor:CmdProcessor;

    /// this is how haxe will know that this is the main class
    public static function main() : Void
    {
        var interpreter = new CommandLineTool();
        interpreter.run();
    }
	public function new()
	{
        processor = new CmdProcessor();
	}
	public function run():Void
	{
	    var command = getCommandFromSysArgs();
	    try
        {
            var ret = processor.process(command,Sys.args());
            if( ret != null )
                LogHelper.println(ret+"\n");
        }
        catch (ex:CmdError)
        {
            LogHelper.error("Unknown Command");
        }
	}

	public function getCommandFromSysArgs() : String
	{
        for(arg in Sys.args())
        {
            if(arg.charAt(0) == "-")
            {
            	/// here you handle command config like -arg
            }
            else
            {
                return arg;
            }
        }

        return "help";
	}
}
```

This is the main class you cann tell that by the static function main so haxe when compiling will know that this is the main class. CommandLineTool class what it does is getting all the args from Sys.args which is the argument passed after your executable name for example  : `$mycmdtool arg1 arg2 .....`, give the args to a command process that will process these args and devide them to command and arg and then execute the command mapped to the command passed by the user if it found a match. See the code bellow.

```
/**
*@author kgarbaya
**/
package net.khaledgarbaya.processor;
import net.khaledgarbaya.helper.LogHelper;
import net.khaledgarbaya.command.SayHelloCommand;
import net.khaledgarbaya.command.impl.ICommand;
using Lambda;
using StringTools;
enum CmdError
{
    IncompleteStatement;
    InvalidStatement(msg :String);
}

class CmdProcessor
{
    /** connecting command to a specific function */
    public static var commands : List<{ name : String, doc : String, command : ICommand }>;
    private var currentTime:Float;

	public function new()
	{
        commands = new List();

        addCommand('hello', SayHelloCommand.helpString, new SayHelloCommand());
	}

	function addCommand( name, doc, command ) : Void
    {
        commands.add({ name : name, doc : doc, command : command });
    }
/**
    * process a line of user input
    **/
    public function process(cmd : String, args : Array<String>) :String
    {
        var output:String;
        if( cmd.endsWith('\\') )
        {
            throw "IncompleteStatement";
        }

        /** If the command is help **/
        if( cmd == 'help' )
        {
            return printHelp();
        }

        /** Other commands **/
        for( c in commands )
        {
            if( c.name == cmd )
            {
                currentTime = Date.now().getTime();
                output = c.command.execute(cmd, args);
                LogHelper.println(' Time passed '+((Date.now().getTime()-currentTime)/1000)+' sec for command "$cmd"');
                return output;
            }
        }
        return 'Command ' + cmd + ' Not Found, try to type help for more info';
    }

    public static function printHelp() :String
    {
        var ret : String = 'Awesome Shell  \n';

        for (c in commands)
        {
            ret += '\n--------------------------\n\n' + c.doc ;
        }
        ret += '\n--------------------------\n';
        return ret;
    }


}
```

each Command is basically a class that implements the ICommand Interface which contains only one method execute(cmd,args):String , but you can add more if you want for example undo and redo etc.For the purpose of the demo I just created a simple command to print in the shell hello with the current time.

```
/**
*@author kgarbaya
**/
package net.khaledgarbaya.command;

import net.khaledgarbaya.command.impl.ICommand;
class SayHelloCommand implements ICommand
{
	public static var helpString : String = "hello , Just Saying Hello with the current date";
	public function new()
	{}
	public function execute(cmd : String, args:Array<String>) : String
	{
	    return "Hello the date is : " + Date.now().toString();
	}

}
```

After your command line  app is done what you need to do is build using neko.

```
neko Build.hxml
```

the `Build.hxml` actually is a shortcut used instead of typing a lot of command you just list them in this file and Haxe will execute them.

```
-main CommandLineTool
-neko ../bin/cmd_tool.n
```

If you want to test the app navigate to the bin folder with your terminal and execute the folowing command

```
neko cmd_tool.n hello
```

If you don't want to use Neko any more you can create a native excuteable for it using this command

```
nekotools boot cmd_tool.n
```

you can find the full source on github [here](https://github.com/Khaledgarbaya/haxe-samples/tree/master/command-line-tool) , feel free to fork and play around and let me know about your awesome command line tool.

Cheers,

Khaled
