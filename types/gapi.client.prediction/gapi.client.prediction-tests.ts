/* This is stub file for gapi.client.prediction definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('prediction', 'v1.6', () => {
        // now we can use gapi.client.prediction
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // View and manage your data across Google Cloud Platform services
                'https://www.googleapis.com/auth/cloud-platform',
            
                // Manage your data and permissions in Google Cloud Storage
                'https://www.googleapis.com/auth/devstorage.full_control',
            
                // View your data in Google Cloud Storage
                'https://www.googleapis.com/auth/devstorage.read_only',
            
                // Manage your data in Google Cloud Storage
                'https://www.googleapis.com/auth/devstorage.read_write',
            
                // Manage your data in the Google Prediction API
                'https://www.googleapis.com/auth/prediction',
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
        
        // Submit input and request an output against a hosted model.
        await gapi.client.hostedmodels.predict({ hostedModelName: "hostedModelName", project: "project",  }); 
        
        // Get analysis of the model and the data the model was trained on.
        await gapi.client.trainedmodels.analyze({ id: "id", project: "project",  }); 
        
        // Delete a trained model.
        await gapi.client.trainedmodels.delete({ id: "id", project: "project",  }); 
        
        // Check training status of your model.
        await gapi.client.trainedmodels.get({ id: "id", project: "project",  }); 
        
        // Train a Prediction API model.
        await gapi.client.trainedmodels.insert({ project: "project",  }); 
        
        // List available models.
        await gapi.client.trainedmodels.list({ project: "project",  }); 
        
        // Submit model id and request a prediction.
        await gapi.client.trainedmodels.predict({ id: "id", project: "project",  }); 
        
        // Add new data to a trained model.
        await gapi.client.trainedmodels.update({ id: "id", project: "project",  });
    }
});
