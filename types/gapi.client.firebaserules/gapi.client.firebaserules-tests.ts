/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('firebaserules', 'v1', () => {
        /** now we can use gapi.client.firebaserules */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** View and administer all your Firebase data and settings */
            'https://www.googleapis.com/auth/firebase',
            /** View all your Firebase data and settings */
            'https://www.googleapis.com/auth/firebase.readonly',
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
         * Test `Source` for syntactic and semantic correctness. Issues present, if
         * any, will be returned to the caller with a description, severity, and
         * source location.
         *
         * The test method may be executed with `Source` or a `Ruleset` name.
         * Passing `Source` is useful for unit testing new rules. Passing a `Ruleset`
         * name is useful for regression testing an existing rule.
         *
         * The following is an example of `Source` that permits users to upload images
         * to a bucket bearing their user id and matching the correct metadata:
         *
         * _&#42;Example&#42;_
         *
         * // Users are allowed to subscribe and unsubscribe to the blog.
         * service firebase.storage {
         * match /users/{userId}/images/{imageName} {
         * allow write: if userId == request.auth.uid
         * && (imageName.matches('&#42;.png$')
         * || imageName.matches('&#42;.jpg$'))
         * && resource.mimeType.matches('^image/')
         * }
         * }
         */
        await gapi.client.projects.test( {
            name: "name",
        });
    }
});
