let db = {
    users: [
        {
            userId: 'djfdofsflkdsjfks',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2020-01-15T10:59:52.798Z',
            imageUrl: 'image/dsdflkdsfksjfls/sdlkslkfjs',
            bio: 'Hello my name is user',
            website: 'https://user.com',
            location: 'TN, USA'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2020-02-20T20:31:41.795Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'sldkflsdkflsfkjdslf',
            body: 'noice',
            createdAt: '2019-03-15T10:50:52.798Z'
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'sldkjfsldkfjdslkfjsl',
            type: 'like | comment',
            createdAt: 'isostring'
        }
    ]
};
const userDetails = {
    //Redux
    credentials: {
        userId: 'djfdofsflkdsjfks',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2020-01-15T10:59:52.798Z',
            imageUrl: 'image/dsdflkdsfksjfls/sdlkslkfjs',
            bio: 'Hello my name is user',
            website: 'https://user.com',
            location: 'TN, USA'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'jjsldkjjkdlsj'
        },
        {
            userHandle: 'user',
            screamId: 'dlkjfj2lk32lkj2l3kj4j'
        }
    ]
}