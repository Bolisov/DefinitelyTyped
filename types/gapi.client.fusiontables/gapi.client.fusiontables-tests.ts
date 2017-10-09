/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('fusiontables', 'v2', () => {
        /** now we can use gapi.client.fusiontables */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Manage your Fusion Tables */
            'https://www.googleapis.com/auth/fusiontables',
            /** View your Fusion Tables */
            'https://www.googleapis.com/auth/fusiontables.readonly',
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
        /** Deletes the specified column. */
        await gapi.client.column.delete( {
            columnId: "columnId",
            tableId: "tableId",
        });
        /** Retrieves a specific column by its ID. */
        await gapi.client.column.get( {
            columnId: "columnId",
            tableId: "tableId",
        });
        /** Adds a new column to the table. */
        await gapi.client.column.insert( {
            tableId: "tableId",
        });
        /** Retrieves a list of columns. */
        await gapi.client.column.list( {
            maxResults: 1,
            pageToken: "pageToken",
            tableId: "tableId",
        });
        /** Updates the name or type of an existing column. This method supports patch semantics. */
        await gapi.client.column.patch( {
            columnId: "columnId",
            tableId: "tableId",
        });
        /** Updates the name or type of an existing column. */
        await gapi.client.column.update( {
            columnId: "columnId",
            tableId: "tableId",
        });
        /**
         * Executes a Fusion Tables SQL statement, which can be any of
         * - SELECT
         * - INSERT
         * - UPDATE
         * - DELETE
         * - SHOW
         * - DESCRIBE
         * - CREATE statement.
         */
        await gapi.client.query.sql( {
            hdrs: true,
            sql: "sql",
            typed: true,
        });
        /**
         * Executes a SQL statement which can be any of
         * - SELECT
         * - SHOW
         * - DESCRIBE
         */
        await gapi.client.query.sqlGet( {
            hdrs: true,
            sql: "sql",
            typed: true,
        });
        /** Deletes a style. */
        await gapi.client.style.delete( {
            styleId: 1,
            tableId: "tableId",
        });
        /** Gets a specific style. */
        await gapi.client.style.get( {
            styleId: 1,
            tableId: "tableId",
        });
        /** Adds a new style for the table. */
        await gapi.client.style.insert( {
            tableId: "tableId",
        });
        /** Retrieves a list of styles. */
        await gapi.client.style.list( {
            maxResults: 1,
            pageToken: "pageToken",
            tableId: "tableId",
        });
        /** Updates an existing style. This method supports patch semantics. */
        await gapi.client.style.patch( {
            styleId: 1,
            tableId: "tableId",
        });
        /** Updates an existing style. */
        await gapi.client.style.update( {
            styleId: 1,
            tableId: "tableId",
        });
        /** Copies a table. */
        await gapi.client.table.copy( {
            copyPresentation: true,
            tableId: "tableId",
        });
        /** Deletes a table. */
        await gapi.client.table.delete( {
            tableId: "tableId",
        });
        /** Retrieves a specific table by its ID. */
        await gapi.client.table.get( {
            tableId: "tableId",
        });
        /** Imports more rows into a table. */
        await gapi.client.table.importRows( {
            delimiter: "delimiter",
            encoding: "encoding",
            endLine: 3,
            isStrict: true,
            startLine: 5,
            tableId: "tableId",
        });
        /** Imports a new table. */
        await gapi.client.table.importTable( {
            delimiter: "delimiter",
            encoding: "encoding",
            name: "name",
        });
        /** Creates a new table. */
        await gapi.client.table.insert( {
        });
        /** Retrieves a list of tables a user owns. */
        await gapi.client.table.list( {
            maxResults: 1,
            pageToken: "pageToken",
        });
        /**
         * Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated. This method supports patch
         * semantics.
         */
        await gapi.client.table.patch( {
            replaceViewDefinition: true,
            tableId: "tableId",
        });
        /** Replaces rows of an existing table. Current rows remain visible until all replacement rows are ready. */
        await gapi.client.table.replaceRows( {
            delimiter: "delimiter",
            encoding: "encoding",
            endLine: 3,
            isStrict: true,
            startLine: 5,
            tableId: "tableId",
        });
        /** Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated. */
        await gapi.client.table.update( {
            replaceViewDefinition: true,
            tableId: "tableId",
        });
        /** Deletes a specific task by its ID, unless that task has already started running. */
        await gapi.client.task.delete( {
            tableId: "tableId",
            taskId: "taskId",
        });
        /** Retrieves a specific task by its ID. */
        await gapi.client.task.get( {
            tableId: "tableId",
            taskId: "taskId",
        });
        /** Retrieves a list of tasks. */
        await gapi.client.task.list( {
            maxResults: 1,
            pageToken: "pageToken",
            startIndex: 3,
            tableId: "tableId",
        });
        /** Deletes a template */
        await gapi.client.template.delete( {
            tableId: "tableId",
            templateId: 2,
        });
        /** Retrieves a specific template by its id */
        await gapi.client.template.get( {
            tableId: "tableId",
            templateId: 2,
        });
        /** Creates a new template for the table. */
        await gapi.client.template.insert( {
            tableId: "tableId",
        });
        /** Retrieves a list of templates. */
        await gapi.client.template.list( {
            maxResults: 1,
            pageToken: "pageToken",
            tableId: "tableId",
        });
        /** Updates an existing template. This method supports patch semantics. */
        await gapi.client.template.patch( {
            tableId: "tableId",
            templateId: 2,
        });
        /** Updates an existing template */
        await gapi.client.template.update( {
            tableId: "tableId",
            templateId: 2,
        });
    }
});
