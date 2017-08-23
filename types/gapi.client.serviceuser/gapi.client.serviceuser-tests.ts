/* This is stub file for gapi.client.serviceuser definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('serviceuser', 'v1', () => {
        // now we can use gapi.client.serviceuser
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // View and manage your data across Google Cloud Platform services
                'https://www.googleapis.com/auth/cloud-platform',
            
                // Manage your Google API service configuration
                'https://www.googleapis.com/auth/service.management',
            
                // View your data across Google Cloud Platform services
                'https://www.googleapis.com/auth/cloud-platform.read-only',
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
        
        // Search available services.
        // 
        // When no filter is specified, returns all accessible services. For
        // authenticated users, also returns all services the calling user has
        // "servicemanagement.services.bind" permission for.
        await gapi.client.services.search({  });
    }
});
