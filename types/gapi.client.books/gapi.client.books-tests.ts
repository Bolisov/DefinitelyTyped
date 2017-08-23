/* This is stub file for gapi.client.books definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('books', 'v1', () => {
        // now we can use gapi.client.books
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // Manage your books
                'https://www.googleapis.com/auth/books',
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
        
        // Retrieves metadata for a specific bookshelf for the specified user.
        await gapi.client.bookshelves.get({ shelf: "shelf", userId: "userId",  }); 
        
        // Retrieves a list of public bookshelves for the specified user.
        await gapi.client.bookshelves.list({ userId: "userId",  }); 
        
        await gapi.client.cloudloading.addBook({  }); 
        
        // Remove the book and its contents
        await gapi.client.cloudloading.deleteBook({ volumeId: "volumeId",  }); 
        
        await gapi.client.cloudloading.updateBook({  }); 
        
        // Returns a list of offline dictionary metadata available
        await gapi.client.dictionary.listOfflineMetadata({ cpksver: "cpksver",  }); 
        
        // Gets the layer summary for a volume.
        await gapi.client.layers.get({ summaryId: "summaryId", volumeId: "volumeId",  }); 
        
        // List the layer summaries for a volume.
        await gapi.client.layers.list({ volumeId: "volumeId",  }); 
        
        // Gets the current settings for the user.
        await gapi.client.myconfig.getUserSettings({  }); 
        
        // Release downloaded content access restriction.
        await gapi.client.myconfig.releaseDownloadAccess({ cpksver: "cpksver", volumeIds: "volumeIds",  }); 
        
        // Request concurrent and download access restrictions.
        await gapi.client.myconfig.requestAccess({ cpksver: "cpksver", nonce: "nonce", source: "source", volumeId: "volumeId",  }); 
        
        // Request downloaded content access for specified volumes on the My eBooks shelf.
        await gapi.client.myconfig.syncVolumeLicenses({ cpksver: "cpksver", nonce: "nonce", source: "source",  }); 
        
        // Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.
        await gapi.client.myconfig.updateUserSettings({  }); 
        
        // Returns notification details for a given notification id.
        await gapi.client.notification.get({ notification_id: "notification_id",  }); 
        
        // List categories for onboarding experience.
        await gapi.client.onboarding.listCategories({  }); 
        
        // List available volumes under categories for onboarding experience.
        await gapi.client.onboarding.listCategoryVolumes({  }); 
        
        // Returns a stream of personalized book clusters
        await gapi.client.personalizedstream.get({  }); 
        
        await gapi.client.promooffer.accept({  }); 
        
        await gapi.client.promooffer.dismiss({  }); 
        
        // Returns a list of promo offers available to the user
        await gapi.client.promooffer.get({  }); 
        
        // Returns Series metadata for the given series ids.
        await gapi.client.series.get({ series_id: "series_id",  }); 
        
        // Gets volume information for a single volume.
        await gapi.client.volumes.get({ volumeId: "volumeId",  }); 
        
        // Performs a book search.
        await gapi.client.volumes.list({ q: "q",  });
    }
});
