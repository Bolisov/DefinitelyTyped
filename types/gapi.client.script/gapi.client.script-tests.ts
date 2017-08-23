/* This is stub file for gapi.client.script definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('script', 'v1', () => {
        // now we can use gapi.client.script
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // View and manage your forms in Google Drive
                'https://www.googleapis.com/auth/forms',
            
                // Manage your contacts
                'https://www.google.com/m8/feeds',
            
                // View your email address
                'https://www.googleapis.com/auth/userinfo.email',
            
                // Manage your calendars
                'https://www.google.com/calendar/feeds',
            
                // View and manage your Google Groups
                'https://www.googleapis.com/auth/groups',
            
                // View and manage forms that this application has been installed in
                'https://www.googleapis.com/auth/forms.currentonly',
            
                // View and manage the files in your Google Drive
                'https://www.googleapis.com/auth/drive',
            
                // View and manage your spreadsheets in Google Drive
                'https://www.googleapis.com/auth/spreadsheets',
            
                // Read, send, delete, and manage your email
                'https://mail.google.com/',
            
                // View and manage the provisioning of users on your domain
                'https://www.googleapis.com/auth/admin.directory.user',
            
                // View and manage the provisioning of groups on your domain
                'https://www.googleapis.com/auth/admin.directory.group',
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
        
        // Runs a function in an Apps Script project. The project must be deployed
        // for use with the Apps Script Execution API.
        // 
        // This method requires authorization with an OAuth 2.0 token that includes at
        // least one of the scopes listed in the [Authorization](#authorization)
        // section; script projects that do not require authorization cannot be
        // executed through this API. To find the correct scopes to include in the
        // authentication token, open the project in the script editor, then select
        // **File > Project properties** and click the **Scopes** tab.
        await gapi.client.scripts.run({ scriptId: "scriptId",  });
    }
});
