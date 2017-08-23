// Type definitions for Google Stackdriver Error Reporting API v1beta1 1.0
// Project: https://cloud.google.com/error-reporting/
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/** IMPORTANT.  */
/** This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually. */
/** In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator */
/** Generated from: https://clouderrorreporting.googleapis.com/$discovery/rest?version=v1beta1 */

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Stackdriver Error Reporting API v1beta1 */
    function load(name: "clouderrorreporting", version: "v1beta1"): PromiseLike<void>;    
    function load(name: "clouderrorreporting", version: "v1beta1", callback: () => any): void;    
    
    const projects: clouderrorreporting.ProjectsResource; 
    
    namespace clouderrorreporting {
        
        interface ListGroupStatsResponse {
            /** If non-empty, more results are available. */
            /** Pass this token, along with the same query parameters as the first */
            /** request, to view the next page of results. */
            nextPageToken?: string;
            /** The timestamp specifies the start time to which the request was restricted. */
            /** The start time is set based on the requested time range. It may be adjusted */
            /** to a later time if a project has exceeded the storage quota and older data */
            /** has been deleted. */
            timeRangeBegin?: string;
            /** The error group stats which match the given request. */
            errorGroupStats?: ErrorGroupStats[];
        }
        
        interface SourceReference {
            /** Optional. A URI string identifying the repository. */
            /** Example: "https://github.com/GoogleCloudPlatform/kubernetes.git" */
            repository?: string;
            /** The canonical and persistent identifier of the deployed revision. */
            /** Example (git): "0035781c50ec7aa23385dc841529ce8a4b70db1b" */
            revisionId?: string;
        }
        
        interface ErrorEvent {
            /** The `ServiceContext` for which this error was reported. */
            serviceContext?: ServiceContext;
            /** Time when the event occurred as provided in the error report. */
            /** If the report did not contain a timestamp, the time the error was received */
            /** by the Error Reporting system is used. */
            eventTime?: string;
            /** Data about the context in which the error occurred. */
            context?: ErrorContext;
            /** The stack trace that was reported or logged by the service. */
            message?: string;
        }
        
        interface ReportedErrorEvent {
            /** [Optional] A description of the context in which the error occurred. */
            context?: ErrorContext;
            /** [Required] The error message. */
            /** If no `context.reportLocation` is provided, the message must contain a */
            /** header (typically consisting of the exception type name and an error */
            /** message) and an exception stack trace in one of the supported programming */
            /** languages and formats. */
            /** Supported languages are Java, Python, JavaScript, Ruby, C#, PHP, and Go. */
            /** Supported stack trace formats are: */
            /**  */
            /** &#42; &#42;&#42;Java&#42;&#42;: Must be the return value of [`Throwable.printStackTrace()`](https://docs.oracle.com/javase/7/docs/api/java/lang/Throwable.html#printStackTrace%28%29). */
            /** &#42; &#42;&#42;Python&#42;&#42;: Must be the return value of [`traceback.format_exc()`](https://docs.python.org/2/library/traceback.html#traceback.format_exc). */
            /** &#42; &#42;&#42;JavaScript&#42;&#42;: Must be the value of [`error.stack`](https://github.com/v8/v8/wiki/Stack-Trace-API) */
            /** as returned by V8. */
            /** &#42; &#42;&#42;Ruby&#42;&#42;: Must contain frames returned by [`Exception.backtrace`](https://ruby-doc.org/core-2.2.0/Exception.html#method-i-backtrace). */
            /** &#42; &#42;&#42;C#&#42;&#42;: Must be the return value of [`Exception.ToString()`](https://msdn.microsoft.com/en-us/library/system.exception.tostring.aspx). */
            /** &#42; &#42;&#42;PHP&#42;&#42;: Must start with `PHP (Notice|Parse error|Fatal error|Warning)` */
            /** and contain the result of [`(string)$exception`](http://php.net/manual/en/exception.tostring.php). */
            /** &#42; &#42;&#42;Go&#42;&#42;: Must be the return value of [`runtime.Stack()`](https://golang.org/pkg/runtime/debug/#Stack). */
            message?: string;
            /** [Required] The service context in which this error has occurred. */
            serviceContext?: ServiceContext;
            /** [Optional] Time when the event occurred. */
            /** If not provided, the time when the event was received by the */
            /** Error Reporting system will be used. */
            eventTime?: string;
        }
        
        interface ErrorContext {
            /** Source code that was used to build the executable which has */
            /** caused the given error message. */
            sourceReferences?: SourceReference[];
            /** The location in the source code where the decision was made to */
            /** report the error, usually the place where it was logged. */
            /** For a logged exception this would be the source line where the */
            /** exception is logged, usually close to the place where it was */
            /** caught. */
            reportLocation?: SourceLocation;
            /** The HTTP request which was processed when the error was */
            /** triggered. */
            httpRequest?: HttpRequestContext;
            /** The user who caused or was affected by the crash. */
            /** This can be a user ID, an email address, or an arbitrary token that */
            /** uniquely identifies the user. */
            /** When sending an error report, leave this field empty if the user was not */
            /** logged in. In this case the */
            /** Error Reporting system will use other data, such as remote IP address, to */
            /** distinguish affected users. See `affected_users_count` in */
            /** `ErrorGroupStats`. */
            user?: string;
        }
        
        interface TrackingIssue {
            /** A URL pointing to a related entry in an issue tracking system. */
            /** Example: https://github.com/user/project/issues/4 */
            url?: string;
        }
        
        interface ErrorGroupStats {
            /** Approximate total number of events in the given group that match */
            /** the filter criteria. */
            count?: string;
            /** Approximate last occurrence that was ever seen for this group and */
            /** which matches the given filter criteria, ignoring the time_range */
            /** that was specified in the request. */
            lastSeenTime?: string;
            /** Approximate number of affected users in the given group that */
            /** match the filter criteria. */
            /** Users are distinguished by data in the `ErrorContext` of the */
            /** individual error events, such as their login name or their remote */
            /** IP address in case of HTTP requests. */
            /** The number of affected users can be zero even if the number of */
            /** errors is non-zero if no data was provided from which the */
            /** affected user could be deduced. */
            /** Users are counted based on data in the request */
            /** context that was provided in the error report. If more users are */
            /** implicitly affected, such as due to a crash of the whole service, */
            /** this is not reflected here. */
            affectedUsersCount?: string;
            /** Service contexts with a non-zero error count for the given filter */
            /** criteria. This list can be truncated if multiple services are affected. */
            /** Refer to `num_affected_services` for the total count. */
            affectedServices?: ServiceContext[];
            /** The total number of services with a non-zero error count for the given */
            /** filter criteria. */
            numAffectedServices?: number;
            /** An arbitrary event that is chosen as representative for the whole group. */
            /** The representative event is intended to be used as a quick preview for */
            /** the whole group. Events in the group are usually sufficiently similar */
            /** to each other such that showing an arbitrary representative provides */
            /** insight into the characteristics of the group as a whole. */
            representative?: ErrorEvent;
            /** Approximate number of occurrences over time. */
            /** Timed counts returned by ListGroups are guaranteed to be: */
            /**  */
            /** - Inside the requested time interval */
            /** - Non-overlapping, and */
            /** - Ordered by ascending time. */
            timedCounts?: TimedCount[];
            /** Group data that is independent of the filter criteria. */
            group?: ErrorGroup;
            /** Approximate first occurrence that was ever seen for this group */
            /** and which matches the given filter criteria, ignoring the */
            /** time_range that was specified in the request. */
            firstSeenTime?: string;
        }
        
        interface ListEventsResponse {
            /** If non-empty, more results are available. */
            /** Pass this token, along with the same query parameters as the first */
            /** request, to view the next page of results. */
            nextPageToken?: string;
            /** The timestamp specifies the start time to which the request was restricted. */
            timeRangeBegin?: string;
            /** The error events which match the given request. */
            errorEvents?: ErrorEvent[];
        }
        
        interface TimedCount {
            /** End of the time period to which `count` refers (excluded). */
            endTime?: string;
            /** Start of the time period to which `count` refers (included). */
            startTime?: string;
            /** Approximate number of occurrences in the given time period. */
            count?: string;
        }
        
        interface ErrorGroup {
            /** Associated tracking issues. */
            trackingIssues?: TrackingIssue[];
            /** Group IDs are unique for a given project. If the same kind of error */
            /** occurs in different service contexts, it will receive the same group ID. */
            groupId?: string;
            /** The group resource name. */
            /** Example: <code>projects/my-project-123/groups/my-groupid</code> */
            name?: string;
        }
        
        interface SourceLocation {
            /** Human-readable name of a function or method. */
            /** The value can include optional context like the class or package name. */
            /** For example, `my.package.MyClass.method` in case of Java. */
            functionName?: string;
            /** The source code filename, which can include a truncated relative */
            /** path, or a full path from a production machine. */
            filePath?: string;
            /** 1-based. 0 indicates that the line number is unknown. */
            lineNumber?: number;
        }
        
        interface ServiceContext {
            /** Type of the MonitoredResource. List of possible values: */
            /** https://cloud.google.com/monitoring/api/resources */
            /**  */
            /** Value is set automatically for incoming errors and must not be set when */
            /** reporting errors. */
            resourceType?: string;
            /** Represents the source code version that the developer provided, */
            /** which could represent a version label or a Git SHA-1 hash, for example. */
            /** For App Engine standard environment, the version is set to the version of */
            /** the app. */
            version?: string;
            /** An identifier of the service, such as the name of the */
            /** executable, job, or Google App Engine service name. This field is expected */
            /** to have a low number of values that are relatively stable over time, as */
            /** opposed to `version`, which can be changed whenever new code is deployed. */
            /**  */
            /** Contains the service name for error reports extracted from Google */
            /** App Engine logs or `default` if the App Engine default service is used. */
            service?: string;
        }
        
        interface HttpRequestContext {
            /** The URL of the request. */
            url?: string;
            /** The HTTP response status code for the request. */
            responseStatusCode?: number;
            /** The type of HTTP request, such as `GET`, `POST`, etc. */
            method?: string;
            /** The IP address from which the request originated. */
            /** This can be IPv4, IPv6, or a token which is derived from the */
            /** IP address, depending on the data that has been provided */
            /** in the error report. */
            remoteIp?: string;
            /** The referrer information that is provided with the request. */
            referrer?: string;
            /** The user agent information that is provided with the request. */
            userAgent?: string;
        }
        
        interface GroupStatsResource {
            /** Lists the specified groups. */
            list(request: {            
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** [Optional] The exact value to match against */
                /** [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service). */
                "serviceFilter.service"?: string;
                /** [Optional] The maximum number of results to return per response. */
                /** Default is 20. */
                pageSize?: number;
                /** [Optional] The sort order in which the results are returned. */
                /** Default is `COUNT_DESC`. */
                order?: string;
                /** [Optional] The exact value to match against */
                /** [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version). */
                "serviceFilter.version"?: string;
                /** [Optional] The exact value to match against */
                /** [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type). */
                "serviceFilter.resourceType"?: string;
                /** [Optional] Time where the timed counts shall be aligned if rounded */
                /** alignment is chosen. Default is 00:00 UTC. */
                alignmentTime?: string;
                /** [Required] The resource name of the Google Cloud Platform project. Written */
                /** as <code>projects/</code> plus the */
                /** <a href="https://support.google.com/cloud/answer/6158840">Google Cloud */
                /** Platform project ID</a>. */
                /**  */
                /** Example: <code>projects/my-project-123</code>. */
                projectName: string;
                /** [Optional] The preferred duration for a single returned `TimedCount`. */
                /** If not set, no timed counts are returned. */
                timedCountDuration?: string;
                /** [Optional] A `next_page_token` provided by a previous response. To view */
                /** additional results, pass this token along with the identical query */
                /** parameters as the first request. */
                pageToken?: string;
                /** Restricts the query to the specified time range. */
                "timeRange.period"?: string;
                /** [Optional] The alignment of the timed counts to be returned. */
                /** Default is `ALIGNMENT_EQUAL_AT_END`. */
                alignment?: string;
                /** [Optional] List all <code>ErrorGroupStats</code> with these IDs. */
                groupId?: string;
            }): gapi.client.Request<ListGroupStatsResponse>;            
            
        }
        
        interface GroupsResource {
            /** Get the specified group. */
            get(request: {            
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** [Required] The group resource name. Written as */
                /** <code>projects/<var>projectID</var>/groups/<var>group_name</var></code>. */
                /** Call */
                /** <a href="/error-reporting/reference/rest/v1beta1/projects.groupStats/list"> */
                /** <code>groupStats.list</code></a> to return a list of groups belonging to */
                /** this project. */
                /**  */
                /** Example: <code>projects/my-project-123/groups/my-group</code> */
                groupName: string;
            }): gapi.client.Request<ErrorGroup>;            
            
            /** Replace the data for the specified group. */
            /** Fails if the group does not exist. */
            update(request: {            
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** The group resource name. */
                /** Example: <code>projects/my-project-123/groups/my-groupid</code> */
                name: string;
            }): gapi.client.Request<ErrorGroup>;            
            
        }
        
        interface EventsResource {
            /** Lists the specified events. */
            list(request: {            
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** [Required] The group for which events shall be returned. */
                groupId?: string;
                /** [Optional] The exact value to match against */
                /** [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service). */
                "serviceFilter.service"?: string;
                /** [Optional] A `next_page_token` provided by a previous response. */
                pageToken?: string;
                /** [Optional] The maximum number of results to return per response. */
                pageSize?: number;
                /** [Optional] The exact value to match against */
                /** [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version). */
                "serviceFilter.version"?: string;
                /** [Optional] The exact value to match against */
                /** [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type). */
                "serviceFilter.resourceType"?: string;
                /** Restricts the query to the specified time range. */
                "timeRange.period"?: string;
                /** [Required] The resource name of the Google Cloud Platform project. Written */
                /** as `projects/` plus the */
                /** [Google Cloud Platform project */
                /** ID](https://support.google.com/cloud/answer/6158840). */
                /** Example: `projects/my-project-123`. */
                projectName: string;
            }): gapi.client.Request<ListEventsResponse>;            
            
            /** Report an individual error event. */
            /**  */
            /** This endpoint accepts <strong>either</strong> an OAuth token, */
            /** <strong>or</strong> an */
            /** <a href="https://support.google.com/cloud/answer/6158862">API key</a> */
            /** for authentication. To use an API key, append it to the URL as the value of */
            /** a `key` parameter. For example: */
            /** <pre>POST https://clouderrorreporting.googleapis.com/v1beta1/projects/example-project/events:report?key=123ABC456</pre> */
            report(request: {            
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** [Required] The resource name of the Google Cloud Platform project. Written */
                /** as `projects/` plus the */
                /** [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). */
                /** Example: `projects/my-project-123`. */
                projectName: string;
            }): gapi.client.Request<{}>;            
            
        }
        
        interface ProjectsResource {
            /** Deletes all error events of a given project. */
            deleteEvents(request: {            
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth access token. */
                access_token?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** [Required] The resource name of the Google Cloud Platform project. Written */
                /** as `projects/` plus the */
                /** [Google Cloud Platform project */
                /** ID](https://support.google.com/cloud/answer/6158840). */
                /** Example: `projects/my-project-123`. */
                projectName: string;
            }): gapi.client.Request<{}>;            
            
            groupStats: GroupStatsResource;
            groups: GroupsResource;
            events: EventsResource;
        }
    }
}
