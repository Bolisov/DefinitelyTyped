/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('drive', 'v3', () => {
        /** now we can use gapi.client.drive */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage the files in your Google Drive */
            'https://www.googleapis.com/auth/drive',
            /** View and manage its own configuration data in your Google Drive */
            'https://www.googleapis.com/auth/drive.appdata',
            /** View and manage Google Drive files and folders that you have opened or created with this app */
            'https://www.googleapis.com/auth/drive.file',
            /** View and manage metadata of files in your Google Drive */
            'https://www.googleapis.com/auth/drive.metadata',
            /** View metadata for files in your Google Drive */
            'https://www.googleapis.com/auth/drive.metadata.readonly',
            /** View the photos, videos and albums in your Google Photos */
            'https://www.googleapis.com/auth/drive.photos.readonly',
            /** View the files in your Google Drive */
            'https://www.googleapis.com/auth/drive.readonly',
            /** Modify your Google Apps Script scripts' behavior */
            'https://www.googleapis.com/auth/drive.scripts',
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
        /** Gets information about the user, the user's Drive, and system capabilities. */
        await gapi.client.about.get( {
        });
        /** Gets the starting pageToken for listing future changes. */
        await gapi.client.changes.getStartPageToken( {
            supportsTeamDrives: true,
            teamDriveId: "teamDriveId",
        });
        /** Lists the changes for a user or Team Drive. */
        await gapi.client.changes.list( {
            includeCorpusRemovals: true,
            includeRemoved: true,
            includeTeamDriveItems: true,
            pageSize: 4,
            pageToken: "pageToken",
            restrictToMyDrive: true,
            spaces: "spaces",
            supportsTeamDrives: true,
            teamDriveId: "teamDriveId",
        });
        /** Subscribes to changes for a user. */
        await gapi.client.changes.watch( {
            includeCorpusRemovals: true,
            includeRemoved: true,
            includeTeamDriveItems: true,
            pageSize: 4,
            pageToken: "pageToken",
            restrictToMyDrive: true,
            spaces: "spaces",
            supportsTeamDrives: true,
            teamDriveId: "teamDriveId",
        });
        /** Stop watching resources through this channel */
        await gapi.client.channels.stop( {
        });
        /** Creates a new comment on a file. */
        await gapi.client.comments.create( {
            fileId: "fileId",
        });
        /** Deletes a comment. */
        await gapi.client.comments.delete( {
            commentId: "commentId",
            fileId: "fileId",
        });
        /** Gets a comment by ID. */
        await gapi.client.comments.get( {
            commentId: "commentId",
            fileId: "fileId",
            includeDeleted: true,
        });
        /** Lists a file's comments. */
        await gapi.client.comments.list( {
            fileId: "fileId",
            includeDeleted: true,
            pageSize: 3,
            pageToken: "pageToken",
            startModifiedTime: "startModifiedTime",
        });
        /** Updates a comment with patch semantics. */
        await gapi.client.comments.update( {
            commentId: "commentId",
            fileId: "fileId",
        });
        /** Creates a copy of a file and applies any requested updates with patch semantics. */
        await gapi.client.files.copy( {
            fileId: "fileId",
            ignoreDefaultVisibility: true,
            keepRevisionForever: true,
            ocrLanguage: "ocrLanguage",
            supportsTeamDrives: true,
        });
        /** Creates a new file. */
        await gapi.client.files.create( {
            ignoreDefaultVisibility: true,
            keepRevisionForever: true,
            ocrLanguage: "ocrLanguage",
            supportsTeamDrives: true,
            useContentAsIndexableText: true,
        });
        /**
         * Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a Team Drive the user must be an organizer on the
         * parent. If the target is a folder, all descendants owned by the user are also deleted.
         */
        await gapi.client.files.delete( {
            fileId: "fileId",
            supportsTeamDrives: true,
        });
        /** Permanently deletes all of the user's trashed files. */
        await gapi.client.files.emptyTrash( {
        });
        /** Exports a Google Doc to the requested MIME type and returns the exported content. Please note that the exported content is limited to 10MB. */
        await gapi.client.files.export( {
            fileId: "fileId",
            mimeType: "mimeType",
        });
        /** Generates a set of file IDs which can be provided in create requests. */
        await gapi.client.files.generateIds( {
            count: 1,
            space: "space",
        });
        /** Gets a file's metadata or content by ID. */
        await gapi.client.files.get( {
            acknowledgeAbuse: true,
            fileId: "fileId",
            supportsTeamDrives: true,
        });
        /** Lists or searches files. */
        await gapi.client.files.list( {
            corpora: "corpora",
            corpus: "corpus",
            includeTeamDriveItems: true,
            orderBy: "orderBy",
            pageSize: 5,
            pageToken: "pageToken",
            q: "q",
            spaces: "spaces",
            supportsTeamDrives: true,
            teamDriveId: "teamDriveId",
        });
        /** Updates a file's metadata and/or content with patch semantics. */
        await gapi.client.files.update( {
            addParents: "addParents",
            fileId: "fileId",
            keepRevisionForever: true,
            ocrLanguage: "ocrLanguage",
            removeParents: "removeParents",
            supportsTeamDrives: true,
            useContentAsIndexableText: true,
        });
        /** Subscribes to changes to a file */
        await gapi.client.files.watch( {
            acknowledgeAbuse: true,
            fileId: "fileId",
            supportsTeamDrives: true,
        });
        /** Creates a permission for a file or Team Drive. */
        await gapi.client.permissions.create( {
            emailMessage: "emailMessage",
            fileId: "fileId",
            sendNotificationEmail: true,
            supportsTeamDrives: true,
            transferOwnership: true,
        });
        /** Deletes a permission. */
        await gapi.client.permissions.delete( {
            fileId: "fileId",
            permissionId: "permissionId",
            supportsTeamDrives: true,
        });
        /** Gets a permission by ID. */
        await gapi.client.permissions.get( {
            fileId: "fileId",
            permissionId: "permissionId",
            supportsTeamDrives: true,
        });
        /** Lists a file's or Team Drive's permissions. */
        await gapi.client.permissions.list( {
            fileId: "fileId",
            pageSize: 2,
            pageToken: "pageToken",
            supportsTeamDrives: true,
        });
        /** Updates a permission with patch semantics. */
        await gapi.client.permissions.update( {
            fileId: "fileId",
            permissionId: "permissionId",
            removeExpiration: true,
            supportsTeamDrives: true,
            transferOwnership: true,
        });
        /** Creates a new reply to a comment. */
        await gapi.client.replies.create( {
            commentId: "commentId",
            fileId: "fileId",
        });
        /** Deletes a reply. */
        await gapi.client.replies.delete( {
            commentId: "commentId",
            fileId: "fileId",
            replyId: "replyId",
        });
        /** Gets a reply by ID. */
        await gapi.client.replies.get( {
            commentId: "commentId",
            fileId: "fileId",
            includeDeleted: true,
            replyId: "replyId",
        });
        /** Lists a comment's replies. */
        await gapi.client.replies.list( {
            commentId: "commentId",
            fileId: "fileId",
            includeDeleted: true,
            pageSize: 4,
            pageToken: "pageToken",
        });
        /** Updates a reply with patch semantics. */
        await gapi.client.replies.update( {
            commentId: "commentId",
            fileId: "fileId",
            replyId: "replyId",
        });
        /** Permanently deletes a revision. This method is only applicable to files with binary content in Drive. */
        await gapi.client.revisions.delete( {
            fileId: "fileId",
            revisionId: "revisionId",
        });
        /** Gets a revision's metadata or content by ID. */
        await gapi.client.revisions.get( {
            acknowledgeAbuse: true,
            fileId: "fileId",
            revisionId: "revisionId",
        });
        /** Lists a file's revisions. */
        await gapi.client.revisions.list( {
            fileId: "fileId",
            pageSize: 2,
            pageToken: "pageToken",
        });
        /** Updates a revision with patch semantics. */
        await gapi.client.revisions.update( {
            fileId: "fileId",
            revisionId: "revisionId",
        });
        /** Creates a new Team Drive. */
        await gapi.client.teamdrives.create( {
            requestId: "requestId",
        });
        /** Permanently deletes a Team Drive for which the user is an organizer. The Team Drive cannot contain any untrashed items. */
        await gapi.client.teamdrives.delete( {
            teamDriveId: "teamDriveId",
        });
        /** Gets a Team Drive's metadata by ID. */
        await gapi.client.teamdrives.get( {
            teamDriveId: "teamDriveId",
        });
        /** Lists the user's Team Drives. */
        await gapi.client.teamdrives.list( {
            pageSize: 1,
            pageToken: "pageToken",
        });
        /** Updates a Team Drive's metadata */
        await gapi.client.teamdrives.update( {
            teamDriveId: "teamDriveId",
        });
    }
});
