/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('ml', 'v1', () => {
        /** now we can use gapi.client.ml */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /**
         * Get the service account information associated with your project. You need
         * this information in order to grant the service account persmissions for
         * the Google Cloud Storage location where you put your model training code
         * for training the model with Google Cloud Machine Learning.
         */
        await gapi.client.projects.getConfig( {
            name: "name",
        });
        /**
         * Performs prediction on the data in the request.
         *
         * &#42;&#42;&#42;&#42; REMOVE FROM GENERATED DOCUMENTATION
         */
        await gapi.client.projects.predict( {
            name: "name",
        });
    }
});
