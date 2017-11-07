/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('youtubeanalytics', 'v1', () => {
        /** now we can use gapi.client.youtubeanalytics */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Manage your YouTube account */
            'https://www.googleapis.com/auth/youtube',
            /** View your YouTube account */
            'https://www.googleapis.com/auth/youtube.readonly',
            /** View and manage your assets and associated content on YouTube */
            'https://www.googleapis.com/auth/youtubepartner',
            /** View monetary and non-monetary YouTube Analytics reports for your YouTube content */
            'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
            /** View YouTube Analytics reports for your YouTube content */
            'https://www.googleapis.com/auth/yt-analytics.readonly',
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
        /** Removes an item from a group. */
        await gapi.client.youtubeanalytics.groupItems.delete({
            id: "id",
            onBehalfOfContentOwner: "onBehalfOfContentOwner",
        });
        /** Creates a group item. */
        await gapi.client.youtubeanalytics.groupItems.insert({
            onBehalfOfContentOwner: "onBehalfOfContentOwner",
        });
        /** Returns a collection of group items that match the API request parameters. */
        await gapi.client.youtubeanalytics.groupItems.list({
            groupId: "groupId",
            onBehalfOfContentOwner: "onBehalfOfContentOwner",
        });
        /** Deletes a group. */
        await gapi.client.youtubeanalytics.groups.delete({
            id: "id",
            onBehalfOfContentOwner: "onBehalfOfContentOwner",
        });
        /** Creates a group. */
        await gapi.client.youtubeanalytics.groups.insert({
            onBehalfOfContentOwner: "onBehalfOfContentOwner",
        });
        /**
         * Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you
         * can retrieve one or more groups by their unique IDs.
         */
        await gapi.client.youtubeanalytics.groups.list({
            id: "id",
            mine: true,
            onBehalfOfContentOwner: "onBehalfOfContentOwner",
            pageToken: "pageToken",
        });
        /** Modifies a group. For example, you could change a group's title. */
        await gapi.client.youtubeanalytics.groups.update({
            onBehalfOfContentOwner: "onBehalfOfContentOwner",
        });
        /** Retrieve your YouTube Analytics reports. */
        await gapi.client.youtubeanalytics.reports.query({
            currency: "currency",
            dimensions: "dimensions",
            "end-date": "end-date",
            filters: "filters",
            ids: "ids",
            "include-historical-channel-data": true,
            "max-results": 7,
            metrics: "metrics",
            sort: "sort",
            "start-date": "start-date",
            "start-index": 11,
        });
    }
});
