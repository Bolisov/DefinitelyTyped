// Type definitions for Google YouTube Reporting API v1 1.0
// Project: https://developers.google.com/youtube/reporting/v1/reports/
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/** IMPORTANT.  */
/** This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually. */
/** In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator */
/** Generated from: https://youtubereporting.googleapis.com/$discovery/rest?version=v1 */

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load YouTube Reporting API v1 */
    function load(name: "youtubereporting", version: "v1"): PromiseLike<void>;    
    function load(name: "youtubereporting", version: "v1", callback: () => any): void;    
    
    const reportTypes: youtubereporting.ReportTypesResource; 
    
    const media: youtubereporting.MediaResource; 
    
    const jobs: youtubereporting.JobsResource; 
    
    namespace youtubereporting {
        
        interface Job {
            /** True if this a system-managed job that cannot be modified by the user; */
            /** otherwise false. */
            systemManaged?: boolean;
            /** The server-generated ID of the job (max. 40 characters). */
            id?: string;
            /** The creation date/time of the job. */
            createTime?: string;
            /** The date/time when this job will expire/expired. After a job expired, no */
            /** new reports are generated. */
            expireTime?: string;
            /** The type of reports this job creates. Corresponds to the ID of a */
            /** ReportType. */
            reportTypeId?: string;
            /** The name of the job (max. 100 characters). */
            name?: string;
        }
        
        interface ListReportsResponse {
            /** The list of report types. */
            reports?: Report[];
            /** A token to retrieve next page of results. */
            /** Pass this value in the */
            /** ListReportsRequest.page_token */
            /** field in the subsequent call to `ListReports` method to retrieve the next */
            /** page of results. */
            nextPageToken?: string;
        }
        
        interface Media {
            /** Name of the media resource. */
            resourceName?: string;
        }
        
        interface Report {
            /** The ID of the job that created this report. */
            jobId?: string;
            /** The server-generated ID of the report. */
            id?: string;
            /** The date/time when the job this report belongs to will expire/expired. */
            jobExpireTime?: string;
            /** The end of the time period that the report instance covers. The value is */
            /** exclusive. */
            endTime?: string;
            /** The URL from which the report can be downloaded (max. 1000 characters). */
            downloadUrl?: string;
            /** The start of the time period that the report instance covers. The value is */
            /** inclusive. */
            startTime?: string;
            /** The date/time when this report was created. */
            createTime?: string;
        }
        
        interface ListReportTypesResponse {
            /** The list of report types. */
            reportTypes?: ReportType[];
            /** A token to retrieve next page of results. */
            /** Pass this value in the */
            /** ListReportTypesRequest.page_token */
            /** field in the subsequent call to `ListReportTypes` method to retrieve the next */
            /** page of results. */
            nextPageToken?: string;
        }
        
        interface ReportType {
            /** The date/time when this report type was/will be deprecated. */
            deprecateTime?: string;
            /** The name of the report type (max. 100 characters). */
            name?: string;
            /** True if this a system-managed report type; otherwise false. Reporting jobs */
            /** for system-managed report types are created automatically and can thus not */
            /** be used in the `CreateJob` method. */
            systemManaged?: boolean;
            /** The ID of the report type (max. 100 characters). */
            id?: string;
        }
        
        interface ListJobsResponse {
            /** The list of jobs. */
            jobs?: Job[];
            /** A token to retrieve next page of results. */
            /** Pass this value in the */
            /** ListJobsRequest.page_token */
            /** field in the subsequent call to `ListJobs` method to retrieve the next */
            /** page of results. */
            nextPageToken?: string;
        }
        
        interface ReportTypesResource {
            /** Lists report types. */
            list(request: {            
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** Data format for response. */
                alt?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** If set to true, also system-managed report types will be returned; */
                /** otherwise only the report types that can be used to create new reporting */
                /** jobs will be returned. */
                includeSystemManaged?: boolean;
                /** A token identifying a page of results the server should return. Typically, */
                /** this is the value of */
                /** ListReportTypesResponse.next_page_token */
                /** returned in response to the previous call to the `ListReportTypes` method. */
                pageToken?: string;
                /** Requested page size. Server may return fewer report types than requested. */
                /** If unspecified, server will pick an appropriate default. */
                pageSize?: number;
                /** The content owner's external ID on which behalf the user is acting on. If */
                /** not set, the user is acting for himself (his own channel). */
                onBehalfOfContentOwner?: string;
            }): Request<ListReportTypesResponse>;            
            
        }
        
        interface MediaResource {
            /** Method for media download. Download is supported */
            /** on the URI `/v1/media/{+name}?alt=media`. */
            download(request: {            
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** Data format for response. */
                alt?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Name of the media that is being downloaded.  See */
                /** ReadRequest.resource_name. */
                resourceName: string;
            }): Request<Media>;            
            
        }
        
        interface ReportsResource {
            /** Gets the metadata of a specific report. */
            get(request: {            
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** Data format for response. */
                alt?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** The ID of the job. */
                jobId: string;
                /** The content owner's external ID on which behalf the user is acting on. If */
                /** not set, the user is acting for himself (his own channel). */
                onBehalfOfContentOwner?: string;
                /** The ID of the report to retrieve. */
                reportId: string;
            }): Request<Report>;            
            
            /** Lists reports created by a specific job. */
            /** Returns NOT_FOUND if the job does not exist. */
            list(request: {            
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** Data format for response. */
                alt?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** If set, only reports created after the specified date/time are returned. */
                createdAfter?: string;
                /** If set, only reports whose start time is greater than or equal the */
                /** specified date/time are returned. */
                startTimeAtOrAfter?: string;
                /** A token identifying a page of results the server should return. Typically, */
                /** this is the value of */
                /** ListReportsResponse.next_page_token */
                /** returned in response to the previous call to the `ListReports` method. */
                pageToken?: string;
                /** Requested page size. Server may return fewer report types than requested. */
                /** If unspecified, server will pick an appropriate default. */
                pageSize?: number;
                /** The content owner's external ID on which behalf the user is acting on. If */
                /** not set, the user is acting for himself (his own channel). */
                onBehalfOfContentOwner?: string;
                /** If set, only reports whose start time is smaller than the specified */
                /** date/time are returned. */
                startTimeBefore?: string;
                /** The ID of the job. */
                jobId: string;
            }): Request<ListReportsResponse>;            
            
        }
        
        interface JobsResource {
            /** Deletes a job. */
            delete(request: {            
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** Data format for response. */
                alt?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** The ID of the job to delete. */
                jobId: string;
                /** The content owner's external ID on which behalf the user is acting on. If */
                /** not set, the user is acting for himself (his own channel). */
                onBehalfOfContentOwner?: string;
            }): Request<{}>;            
            
            /** Gets a job. */
            get(request: {            
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** Data format for response. */
                alt?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** The ID of the job to retrieve. */
                jobId: string;
                /** The content owner's external ID on which behalf the user is acting on. If */
                /** not set, the user is acting for himself (his own channel). */
                onBehalfOfContentOwner?: string;
            }): Request<Job>;            
            
            /** Lists jobs. */
            list(request: {            
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** Data format for response. */
                alt?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** The content owner's external ID on which behalf the user is acting on. If */
                /** not set, the user is acting for himself (his own channel). */
                onBehalfOfContentOwner?: string;
                /** If set to true, also system-managed jobs will be returned; otherwise only */
                /** user-created jobs will be returned. System-managed jobs can neither be */
                /** modified nor deleted. */
                includeSystemManaged?: boolean;
                /** A token identifying a page of results the server should return. Typically, */
                /** this is the value of */
                /** ListReportTypesResponse.next_page_token */
                /** returned in response to the previous call to the `ListJobs` method. */
                pageToken?: string;
                /** Requested page size. Server may return fewer jobs than requested. */
                /** If unspecified, server will pick an appropriate default. */
                pageSize?: number;
            }): Request<ListJobsResponse>;            
            
            /** Creates a job and returns it. */
            create(request: {            
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** JSONP */
                callback?: string;
                /** V1 error format. */
                "$.xgafv"?: string;
                /** Data format for response. */
                alt?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** The content owner's external ID on which behalf the user is acting on. If */
                /** not set, the user is acting for himself (his own channel). */
                onBehalfOfContentOwner?: string;
            }): Request<Job>;            
            
            reports: ReportsResource;
        }
    }
}
