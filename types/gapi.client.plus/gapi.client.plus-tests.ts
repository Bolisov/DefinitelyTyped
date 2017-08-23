/* This is stub file for gapi.client.plus definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('plus', 'v1', () => {
        // now we can use gapi.client.plus
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // Know the list of people in your circles, your age range, and language
                'https://www.googleapis.com/auth/plus.login',
            
                // Know who you are on Google
                'https://www.googleapis.com/auth/plus.me',
            
                // View your email address
                'https://www.googleapis.com/auth/userinfo.email',
            
                // View your basic profile info
                'https://www.googleapis.com/auth/userinfo.profile',
            ];
        const immediate = true;

        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /* handle succesfull authorization */
                run();
            } else {
                /* handle authorization error */
            }
        }); 
    });

    async function run() {  
        
        // Get an activity.
        await gapi.client.activities.get({ activityId: "activityId",  }); 
        
        // List all of the activities in the specified collection for a particular user.
        await gapi.client.activities.list({ collection: "collection", userId: "userId",  }); 
        
        // Search public activities.
        await gapi.client.activities.search({ query: "query",  }); 
        
        // Get a comment.
        await gapi.client.comments.get({ commentId: "commentId",  }); 
        
        // List all of the comments for an activity.
        await gapi.client.comments.list({ activityId: "activityId",  }); 
        
        // Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
        await gapi.client.people.get({ userId: "userId",  }); 
        
        // List all of the people in the specified collection.
        await gapi.client.people.list({ collection: "collection", userId: "userId",  }); 
        
        // List all of the people in the specified collection for a particular activity.
        await gapi.client.people.listByActivity({ activityId: "activityId", collection: "collection",  }); 
        
        // Search all public profiles.
        await gapi.client.people.search({ query: "query",  });
    }
});
