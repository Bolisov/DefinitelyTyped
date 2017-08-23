/* This is stub file for gapi.client.translate definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('translate', 'v2', () => {
        // now we can use gapi.client.translate
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // View and manage your data across Google Cloud Platform services
                'https://www.googleapis.com/auth/cloud-platform',
            
                // Translate text from one language to another using Google Translate
                'https://www.googleapis.com/auth/cloud-translation',
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
        
        // Detects the language of text within a request.
        await gapi.client.detections.detect({  }); 
        
        // Detects the language of text within a request.
        await gapi.client.detections.list({ q: "q",  }); 
        
        // Returns a list of supported languages for translation.
        await gapi.client.languages.list({  }); 
        
        // Translates input text, returning translated text.
        await gapi.client.translations.list({ target: "target", q: "q",  }); 
        
        // Translates input text, returning translated text.
        await gapi.client.translations.translate({  });
    }
});
