/* This is stub file for gapi.client.dataflow definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('dataflow', 'v1b3', () => {
        // now we can use gapi.client.dataflow
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // View and manage your Google Compute Engine resources
                'https://www.googleapis.com/auth/compute',
            
                // View and manage your data across Google Cloud Platform services
                'https://www.googleapis.com/auth/cloud-platform',
            
                // View your email address
                'https://www.googleapis.com/auth/userinfo.email',
            
                // View your Google Compute Engine resources
                'https://www.googleapis.com/auth/compute.readonly',
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
        
        // Send a worker_message to the service.
        await gapi.client.projects.workerMessages({ projectId: "projectId",  });
    }
});
