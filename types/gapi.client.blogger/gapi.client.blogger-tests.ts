/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('blogger', 'v3', () => {
        /** now we can use gapi.client.blogger */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Manage your Blogger account */
            'https://www.googleapis.com/auth/blogger',
            /** View your Blogger account */
            'https://www.googleapis.com/auth/blogger.readonly',
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
        /** Gets one blog and user info pair by blogId and userId. */
        await gapi.client.blogger.blogUserInfos.get({
            blogId: "blogId",
            maxPosts: 2,
            userId: "userId",
        });
        /** Gets one blog by ID. */
        await gapi.client.blogger.blogs.get({
            blogId: "blogId",
            maxPosts: 2,
            view: "view",
        });
        /** Retrieve a Blog by URL. */
        await gapi.client.blogger.blogs.getByUrl({
            url: "url",
            view: "view",
        });
        /** Retrieves a list of blogs, possibly filtered. */
        await gapi.client.blogger.blogs.listByUser({
            fetchUserInfo: true,
            role: "role",
            status: "status",
            userId: "userId",
            view: "view",
        });
        /** Marks a comment as not spam. */
        await gapi.client.blogger.comments.approve({
            blogId: "blogId",
            commentId: "commentId",
            postId: "postId",
        });
        /** Delete a comment by ID. */
        await gapi.client.blogger.comments.delete({
            blogId: "blogId",
            commentId: "commentId",
            postId: "postId",
        });
        /** Gets one comment by ID. */
        await gapi.client.blogger.comments.get({
            blogId: "blogId",
            commentId: "commentId",
            postId: "postId",
            view: "view",
        });
        /** Retrieves the comments for a post, possibly filtered. */
        await gapi.client.blogger.comments.list({
            blogId: "blogId",
            endDate: "endDate",
            fetchBodies: true,
            maxResults: 4,
            pageToken: "pageToken",
            postId: "postId",
            startDate: "startDate",
            status: "status",
            view: "view",
        });
        /** Retrieves the comments for a blog, across all posts, possibly filtered. */
        await gapi.client.blogger.comments.listByBlog({
            blogId: "blogId",
            endDate: "endDate",
            fetchBodies: true,
            maxResults: 4,
            pageToken: "pageToken",
            startDate: "startDate",
            status: "status",
        });
        /** Marks a comment as spam. */
        await gapi.client.blogger.comments.markAsSpam({
            blogId: "blogId",
            commentId: "commentId",
            postId: "postId",
        });
        /** Removes the content of a comment. */
        await gapi.client.blogger.comments.removeContent({
            blogId: "blogId",
            commentId: "commentId",
            postId: "postId",
        });
        /** Retrieve pageview stats for a Blog. */
        await gapi.client.blogger.pageViews.get({
            blogId: "blogId",
            range: "range",
        });
        /** Delete a page by ID. */
        await gapi.client.blogger.pages.delete({
            blogId: "blogId",
            pageId: "pageId",
        });
        /** Gets one blog page by ID. */
        await gapi.client.blogger.pages.get({
            blogId: "blogId",
            pageId: "pageId",
            view: "view",
        });
        /** Add a page. */
        await gapi.client.blogger.pages.insert({
            blogId: "blogId",
            isDraft: true,
        });
        /** Retrieves the pages for a blog, optionally including non-LIVE statuses. */
        await gapi.client.blogger.pages.list({
            blogId: "blogId",
            fetchBodies: true,
            maxResults: 3,
            pageToken: "pageToken",
            status: "status",
            view: "view",
        });
        /** Update a page. This method supports patch semantics. */
        await gapi.client.blogger.pages.patch({
            blogId: "blogId",
            pageId: "pageId",
            publish: true,
            revert: true,
        });
        /** Publishes a draft page. */
        await gapi.client.blogger.pages.publish({
            blogId: "blogId",
            pageId: "pageId",
        });
        /** Revert a published or scheduled page to draft state. */
        await gapi.client.blogger.pages.revert({
            blogId: "blogId",
            pageId: "pageId",
        });
        /** Update a page. */
        await gapi.client.blogger.pages.update({
            blogId: "blogId",
            pageId: "pageId",
            publish: true,
            revert: true,
        });
        /**
         * Gets one post and user info pair, by post ID and user ID. The post user info contains per-user information about the post, such as access rights,
         * specific to the user.
         */
        await gapi.client.blogger.postUserInfos.get({
            blogId: "blogId",
            maxComments: 2,
            postId: "postId",
            userId: "userId",
        });
        /**
         * Retrieves a list of post and post user info pairs, possibly filtered. The post user info contains per-user information about the post, such as access
         * rights, specific to the user.
         */
        await gapi.client.blogger.postUserInfos.list({
            blogId: "blogId",
            endDate: "endDate",
            fetchBodies: true,
            labels: "labels",
            maxResults: 5,
            orderBy: "orderBy",
            pageToken: "pageToken",
            startDate: "startDate",
            status: "status",
            userId: "userId",
            view: "view",
        });
        /** Delete a post by ID. */
        await gapi.client.blogger.posts.delete({
            blogId: "blogId",
            postId: "postId",
        });
        /** Get a post by ID. */
        await gapi.client.blogger.posts.get({
            blogId: "blogId",
            fetchBody: true,
            fetchImages: true,
            maxComments: 4,
            postId: "postId",
            view: "view",
        });
        /** Retrieve a Post by Path. */
        await gapi.client.blogger.posts.getByPath({
            blogId: "blogId",
            maxComments: 2,
            path: "path",
            view: "view",
        });
        /** Add a post. */
        await gapi.client.blogger.posts.insert({
            blogId: "blogId",
            fetchBody: true,
            fetchImages: true,
            isDraft: true,
        });
        /** Retrieves a list of posts, possibly filtered. */
        await gapi.client.blogger.posts.list({
            blogId: "blogId",
            endDate: "endDate",
            fetchBodies: true,
            fetchImages: true,
            labels: "labels",
            maxResults: 6,
            orderBy: "orderBy",
            pageToken: "pageToken",
            startDate: "startDate",
            status: "status",
            view: "view",
        });
        /** Update a post. This method supports patch semantics. */
        await gapi.client.blogger.posts.patch({
            blogId: "blogId",
            fetchBody: true,
            fetchImages: true,
            maxComments: 4,
            postId: "postId",
            publish: true,
            revert: true,
        });
        /** Publishes a draft post, optionally at the specific time of the given publishDate parameter. */
        await gapi.client.blogger.posts.publish({
            blogId: "blogId",
            postId: "postId",
            publishDate: "publishDate",
        });
        /** Revert a published or scheduled post to draft state. */
        await gapi.client.blogger.posts.revert({
            blogId: "blogId",
            postId: "postId",
        });
        /** Search for a post. */
        await gapi.client.blogger.posts.search({
            blogId: "blogId",
            fetchBodies: true,
            orderBy: "orderBy",
            q: "q",
        });
        /** Update a post. */
        await gapi.client.blogger.posts.update({
            blogId: "blogId",
            fetchBody: true,
            fetchImages: true,
            maxComments: 4,
            postId: "postId",
            publish: true,
            revert: true,
        });
        /** Gets one user by ID. */
        await gapi.client.blogger.users.get({
            userId: "userId",
        });
    }
});
