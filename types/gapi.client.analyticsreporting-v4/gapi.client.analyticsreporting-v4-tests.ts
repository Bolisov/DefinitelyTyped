/* This is stub file for gapi.client.analyticsreporting definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('analyticsreporting', 'v4', () => {
        // now we can use gapi.client.analyticsreporting
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // View your Google Analytics data
                'https://www.googleapis.com/auth/analytics.readonly',
            
                // View and manage your Google Analytics data
                'https://www.googleapis.com/auth/analytics',
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
        
        // Returns the Analytics data.
        await gapi.client.reports.batchGet({  });
    }
});
