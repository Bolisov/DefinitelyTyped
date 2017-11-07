/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('cloudfunctions', 'v1', () => {
        /** now we can use gapi.client.cloudfunctions */

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
         * Gets the latest state of a long-running operation.  Clients can use this
         * method to poll the operation result at intervals as recommended by the API
         * service.
         */
        await gapi.client.cloudfunctions.operations.get({
            name: "name",
        });
        /**
         * Lists operations that match the specified filter in the request. If the
         * server doesn't support this method, it returns `UNIMPLEMENTED`.
         *
         * NOTE: the `name` binding allows API services to override the binding
         * to use different resource name schemes, such as `users/&#42;/operations`. To
         * override the binding, API services can add a binding such as
         * `"/v1/{name=users/&#42;}/operations"` to their service configuration.
         * For backwards compatibility, the default name includes the operations
         * collection id, however overriding users must ensure the name binding
         * is the parent resource, without the operations collection id.
         */
        await gapi.client.cloudfunctions.operations.list({
            filter: "filter",
            name: "name",
            pageSize: 3,
            pageToken: "pageToken",
        });
    }
});
