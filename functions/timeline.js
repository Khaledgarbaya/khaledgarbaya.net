exports.handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        id: '5deec11261a7b2250800537d',
        createdAt: 'Sun Dec 14 1980 03:15:13 GMT+0000 (UTC)',
        favoriteCount: 116,
        retweetCount: 63,
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        user: {
          name: 'Dillon',
          screenName: 'Olson',
          profileImageUrl:
            'https://api.adorable.io/avatars/150/5deec11247dc7d2491b40afa.png',
        },
      },
      {
        id: '5deec112f296afdc9a22ea59',
        createdAt: 'Sun Sep 09 2007 14:39:42 GMT+0000 (UTC)',
        favoriteCount: 180,
        retweetCount: 11,
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        user: {
          name: 'Janette',
          screenName: 'Colleen',
          profileImageUrl:
            'https://api.adorable.io/avatars/150/5deec112c6fdf2b89faf27b4.png',
        },
      },
      {
        id: '5deec112e4a5071dcb6ebd25',
        createdAt: 'Mon Nov 01 2004 21:17:09 GMT+0000 (UTC)',
        favoriteCount: 123,
        retweetCount: 112,
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        user: {
          name: 'Jenkins',
          screenName: 'Claudine',
          profileImageUrl:
            'https://api.adorable.io/avatars/150/5deec11241e5beb2d41ccb16.png',
        },
      },
      {
        id: '5deec112bdd8da93b1f2617c',
        createdAt: 'Fri Jul 01 1988 04:26:16 GMT+0000 (UTC)',
        favoriteCount: 155,
        retweetCount: 36,
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        user: {
          name: 'Maggie',
          screenName: 'Ramirez',
          profileImageUrl:
            'https://api.adorable.io/avatars/150/5deec11272c09524019ef899.png',
        },
      },
      {
        id: '5deec11217cc0db825e27d9e',
        createdAt: 'Sun Oct 30 1994 07:12:47 GMT+0000 (UTC)',
        favoriteCount: 138,
        retweetCount: 10,
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        user: {
          name: 'Bobbi',
          screenName: 'Reeves',
          profileImageUrl:
            'https://api.adorable.io/avatars/150/5deec112a9d40b9495d16578.png',
        },
      },
      {
        id: '5deec112effeb692f383f4b1',
        createdAt: 'Wed Mar 02 2016 06:19:18 GMT+0000 (UTC)',
        favoriteCount: 4,
        retweetCount: 76,
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        user: {
          name: 'Gentry',
          screenName: 'Minnie',
          profileImageUrl:
            'https://api.adorable.io/avatars/150/5deec112fe569e6056a4128e.png',
        },
      },
      {
        id: '5deec112e462e02fe660ef40',
        createdAt: 'Mon Jul 11 2005 11:28:16 GMT+0000 (UTC)',
        favoriteCount: 18,
        retweetCount: 192,
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        user: {
          name: 'Grimes',
          screenName: 'Robin',
          profileImageUrl:
            'https://api.adorable.io/avatars/150/5deec11272c1648da4a7f453.png',
        },
      },
      {
        id: '5deec112134f71a3896329d4',
        createdAt: 'Fri Sep 02 1977 13:51:27 GMT+0000 (UTC)',
        favoriteCount: 130,
        retweetCount: 183,
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        user: {
          name: 'Juliet',
          screenName: 'Hallie',
          profileImageUrl:
            'https://api.adorable.io/avatars/150/5deec11225c4cb21775e388b.png',
        },
      },
      {
        id: '5deec1126e9984ed76d9526b',
        createdAt: 'Sun Jul 03 1988 21:59:03 GMT+0000 (UTC)',
        favoriteCount: 162,
        retweetCount: 147,
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        user: {
          name: 'Burch',
          screenName: 'Maria',
          profileImageUrl:
            'https://api.adorable.io/avatars/150/5deec112c0c3329e084a7d4d.png',
        },
      },
    ]),
  };
};
