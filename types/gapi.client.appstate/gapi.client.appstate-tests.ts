/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('appstate', 'v1', () => {
        /** now we can use gapi.client.appstate */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data for this application */
            'https://www.googleapis.com/auth/appstate',
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
         * Clears (sets to empty) the data for the passed key if and only if the passed version matches the currently stored version. This method results in a
         * conflict error on version mismatch.
         */
        await gapi.client.appstate.states.clear({
            currentDataVersion: "currentDataVersion",
            stateKey: 2,
        });
        /**
         * Deletes a key and the data associated with it. The key is removed and no longer counts against the key quota. Note that since this method is not safe
         * in the face of concurrent modifications, it should only be used for development and testing purposes. Invoking this method in shipping code can result
         * in data loss and data corruption.
         */
        await gapi.client.appstate.states.delete({
            stateKey: 1,
        });
        /** Retrieves the data corresponding to the passed key. If the key does not exist on the server, an HTTP 404 will be returned. */
        await gapi.client.appstate.states.get({
            stateKey: 1,
        });
        /** Lists all the states keys, and optionally the state data. */
        await gapi.client.appstate.states.list({
            includeData: true,
        });
        /**
         * Update the data associated with the input key if and only if the passed version matches the currently stored version. This method is safe in the face
         * of concurrent writes. Maximum per-key size is 128KB.
         */
        await gapi.client.appstate.states.update({
            currentStateVersion: "currentStateVersion",
            stateKey: 2,
        });
    }
});
