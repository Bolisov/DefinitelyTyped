/* This is stub file for gapi.client.streetviewpublish definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('streetviewpublish', 'v1', () => {
        // now we can use gapi.client.streetviewpublish
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // Publish and manage your 360 photos on Google Street View
                'https://www.googleapis.com/auth/streetviewpublish',
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
        
        // Deletes a list of Photos and their metadata.
        // 
        // Note that if
        // BatchDeletePhotos
        // fails, either critical fields are missing or there was an authentication
        // error. Even if
        // BatchDeletePhotos
        // succeeds, there may have been failures for single photos in the batch.
        // These failures will be specified in each
        // PhotoResponse.status
        // in
        // BatchDeletePhotosResponse.results.
        // See
        // DeletePhoto
        // for specific failures that can occur per photo.
        await gapi.client.photos.batchDelete({  }); 
        
        // Updates the metadata of Photos, such
        // as pose, place association, connections, etc. Changing the pixels of photos
        // is not supported.
        // 
        // Note that if
        // BatchUpdatePhotos
        // fails, either critical fields are missing or there was an authentication
        // error. Even if
        // BatchUpdatePhotos
        // succeeds, there may have been failures for single photos in the batch.
        // These failures will be specified in each
        // PhotoResponse.status
        // in
        // BatchUpdatePhotosResponse.results.
        // See
        // UpdatePhoto
        // for specific failures that can occur per photo.
        await gapi.client.photos.batchUpdate({  }); 
        
        // Gets the metadata of the specified
        // Photo batch.
        // 
        // Note that if
        // BatchGetPhotos
        // fails, either critical fields are missing or there was an authentication
        // error. Even if
        // BatchGetPhotos
        // succeeds, there may have been failures for single photos in the batch.
        // These failures will be specified in each
        // PhotoResponse.status
        // in
        // BatchGetPhotosResponse.results.
        // See
        // GetPhoto
        // for specific failures that can occur per photo.
        await gapi.client.photos.batchGet({  }); 
        
        // Lists all the Photos that belong to the user.
        await gapi.client.photos.list({  }); 
        
        // Updates the metadata of a Photo, such
        // as pose, place association, connections, etc. Changing the pixels of a
        // photo is not supported.
        // 
        // This method returns the following error codes:
        // 
        // * google.rpc.Code.PERMISSION_DENIED if the requesting user did not
        // create the requested photo.
        // * google.rpc.Code.INVALID_ARGUMENT if the request is malformed.
        // * google.rpc.Code.NOT_FOUND if the requested photo does not exist.
        await gapi.client.photo.update({ id: "id",  }); 
        
        // After the client finishes uploading the photo with the returned
        // UploadRef,
        // CreatePhoto
        // publishes the uploaded Photo to
        // Street View on Google Maps.
        // 
        // This method returns the following error codes:
        // 
        // * google.rpc.Code.INVALID_ARGUMENT if the request is malformed.
        // * google.rpc.Code.NOT_FOUND if the upload reference does not exist.
        // * google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the
        // storage limit.
        await gapi.client.photo.create({  }); 
        
        // Creates an upload session to start uploading photo bytes. The upload URL of
        // the returned UploadRef is used to
        // upload the bytes for the Photo.
        // 
        // In addition to the photo requirements shown in
        // https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604,
        // the photo must also meet the following requirements:
        // 
        // * Photo Sphere XMP metadata must be included in the photo medadata. See
        // https://developers.google.com/streetview/spherical-metadata for the
        // required fields.
        // * The pixel size of the photo must meet the size requirements listed in
        // https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, and
        // the photo must be a full 360 horizontally.
        // 
        // After the upload is complete, the
        // UploadRef is used with
        // CreatePhoto
        // to create the Photo object entry.
        await gapi.client.photo.startUpload({  }); 
        
        // Deletes a Photo and its metadata.
        // 
        // This method returns the following error codes:
        // 
        // * google.rpc.Code.PERMISSION_DENIED if the requesting user did not
        // create the requested photo.
        // * google.rpc.Code.NOT_FOUND if the photo ID does not exist.
        await gapi.client.photo.delete({ photoId: "photoId",  }); 
        
        // Gets the metadata of the specified
        // Photo.
        // 
        // This method returns the following error codes:
        // 
        // * google.rpc.Code.PERMISSION_DENIED if the requesting user did not
        // create the requested Photo.
        // * google.rpc.Code.NOT_FOUND if the requested
        // Photo does not exist.
        await gapi.client.photo.get({ photoId: "photoId",  });
    }
});
