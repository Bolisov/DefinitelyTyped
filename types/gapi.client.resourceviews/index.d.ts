// Type definitions for Google Google Compute Engine Instance Groups API v1beta2 1.0
// Project: https://developers.google.com/compute/
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// IMPORTANT
// This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
// Generated from: https://www.googleapis.com/discovery/v1/apis/resourceviews/v1beta2/rest

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Google Compute Engine Instance Groups API v1beta2 */
    function load(name: "resourceviews", version: "v1beta2"): PromiseLike<void>;    
    function load(name: "resourceviews", version: "v1beta2", callback: () => any): void;    
    
    const zoneOperations: resourceviews.ZoneOperationsResource; 
    
    const zoneViews: resourceviews.ZoneViewsResource; 
    
    namespace resourceviews {
        
        interface Label {
            /** Key of the label. */
            key?: string;
            /** Value of the label. */
            value?: string;
        }
        
        interface ListResourceResponseItem {
            /** The list of service end points on the resource. */
            endpoints?: Record<string, number[]>;            
            /** The full URL of the resource. */
            resource?: string;
        }
        
        interface Operation {
            /** [Output only] An optional identifier specified by the client when the mutation was initiated. Must be unique for all operation resources in the project. */
            clientOperationId?: string;
            /** [Output Only] The time that this operation was requested, in RFC3339 text format. */
            creationTimestamp?: string;
            /** [Output Only] The time that this operation was completed, in RFC3339 text format. */
            endTime?: string;
            /** [Output Only] If errors occurred during processing of this operation, this field will be populated. */
            error?: {            
                /** [Output Only] The array of errors encountered while processing this operation. */
                errors?: Array<{                
                    /** [Output Only] The error type identifier for this error. */
                    code?: string;
                    /** [Output Only] Indicates the field in the request which caused the error. This property is optional. */
                    location?: string;
                    /** [Output Only] An optional, human-readable error message. */
                    message?: string;
                }>;                
            };            
            /** [Output only] If operation fails, the HTTP error message returned. */
            httpErrorMessage?: string;
            /** [Output only] If operation fails, the HTTP error status code returned. */
            httpErrorStatusCode?: number;
            /** [Output Only] Unique identifier for the resource, generated by the server. */
            id?: string;
            /** [Output Only] The time that this operation was requested, in RFC3339 text format. */
            insertTime?: string;
            /** [Output only] Type of the resource. */
            kind?: string;
            /** [Output Only] Name of the resource. */
            name?: string;
            /** [Output only] Type of the operation. Operations include insert, update, and delete. */
            operationType?: string;
            /** [Output only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess at when the operation will be complete. This number should be monotonically increasing as the operation progresses. */
            progress?: number;
            /** [Output Only] URL of the region where the operation resides. Only available when performing regional operations. */
            region?: string;
            /** [Output Only] Server-defined fully-qualified URL for this resource. */
            selfLink?: string;
            /** [Output Only] The time that this operation was started by the server, in RFC3339 text format. */
            startTime?: string;
            /** [Output Only] Status of the operation. */
            status?: string;
            /** [Output Only] An optional textual description of the current status of the operation. */
            statusMessage?: string;
            /** [Output Only] Unique target ID which identifies a particular incarnation of the target. */
            targetId?: string;
            /** [Output only] URL of the resource the operation is mutating. */
            targetLink?: string;
            /** [Output Only] User who requested the operation, for example: user@example.com. */
            user?: string;
            /** [Output Only] If there are issues with this operation, a warning is returned. */
            warnings?: Array<{            
                /** [Output only] The warning type identifier for this warning. */
                code?: string;
                /** [Output only] Metadata for this warning in key:value format. */
                data?: Array<{                
                    /** [Output Only] Metadata key for this warning. */
                    key?: string;
                    /** [Output Only] Metadata value for this warning. */
                    value?: string;
                }>;                
                /** [Output only] Optional human-readable details for this warning. */
                message?: string;
            }>;            
            /** [Output Only] URL of the zone where the operation resides. Only available when performing per-zone operations. */
            zone?: string;
        }
        
        interface OperationList {
            /** Unique identifier for the resource; defined by the server (output only). */
            id?: string;
            /** The operation resources. */
            items?: Operation[];
            /** Type of resource. */
            kind?: string;
            /** A token used to continue a truncated list request (output only). */
            nextPageToken?: string;
            /** Server defined URL for this resource (output only). */
            selfLink?: string;
        }
        
        interface ResourceView {
            /** The creation time of the resource view. */
            creationTimestamp?: string;
            /** The detailed description of the resource view. */
            description?: string;
            /** Services endpoint information. */
            endpoints?: ServiceEndpoint[];
            /** The fingerprint of the service endpoint information. */
            fingerprint?: string;
            /** [Output Only] The ID of the resource view. */
            id?: string;
            /** Type of the resource. */
            kind?: string;
            /** The labels for events. */
            labels?: Label[];
            /** The name of the resource view. */
            name?: string;
            /** The URL of a Compute Engine network to which the resources in the view belong. */
            network?: string;
            /** A list of all resources in the resource view. */
            resources?: string[];
            /** [Output Only] A self-link to the resource view. */
            selfLink?: string;
            /** The total number of resources in the resource view. */
            size?: number;
        }
        
        interface ServiceEndpoint {
            /** The name of the service endpoint. */
            name?: string;
            /** The port of the service endpoint. */
            port?: number;
        }
        
        interface ZoneViewsAddResourcesRequest {
            /** The list of resources to be added. */
            resources?: string[];
        }
        
        interface ZoneViewsGetServiceResponse {
            /** The service information. */
            endpoints?: ServiceEndpoint[];
            /** The fingerprint of the service information. */
            fingerprint?: string;
        }
        
        interface ZoneViewsList {
            /** The result that contains all resource views that meet the criteria. */
            items?: ResourceView[];
            /** Type of resource. */
            kind?: string;
            /** A token used for pagination. */
            nextPageToken?: string;
            /** Server defined URL for this resource (output only). */
            selfLink?: string;
        }
        
        interface ZoneViewsListResourcesResponse {
            /** The formatted JSON that is requested by the user. */
            items?: ListResourceResponseItem[];
            /** The URL of a Compute Engine network to which the resources in the view belong. */
            network?: string;
            /** A token used for pagination. */
            nextPageToken?: string;
        }
        
        interface ZoneViewsRemoveResourcesRequest {
            /** The list of resources to be removed. */
            resources?: string[];
        }
        
        interface ZoneViewsSetServiceRequest {
            /** The service information to be updated. */
            endpoints?: ServiceEndpoint[];
            /** Fingerprint of the service information; a hash of the contents. This field is used for optimistic locking when updating the service entries. */
            fingerprint?: string;
            /** The name of the resource if user wants to update the service information of the resource. */
            resourceName?: string;
        }
        
        interface ZoneOperationsResource {
            /** Retrieves the specified zone-specific operation resource. */
            get(request: {            
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Name of the operation resource to return. */
                operation: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Name of the project scoping this request. */
                project: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided. */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
                /** Name of the zone scoping this request. */
                zone: string;
            }): Request<Operation>;            
            
            /** Retrieves the list of operation resources contained within the specified zone. */
            list(request: {            
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** Optional. Filter expression for filtering listed resources. */
                filter?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500. */
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request. */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Name of the project scoping this request. */
                project: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided. */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
                /** Name of the zone scoping this request. */
                zone: string;
            }): Request<OperationList>;            
            
        }
        
        interface ZoneViewsResource {
            /** Add resources to the view. */
            addResources(request: {            
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** The project name of the resource view. */
                project: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided. */
                quotaUser?: string;
                /** The name of the resource view. */
                resourceView: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
                /** The zone name of the resource view. */
                zone: string;
            }): Request<Operation>;            
            
            /** Delete a resource view. */
            delete(request: {            
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** The project name of the resource view. */
                project: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided. */
                quotaUser?: string;
                /** The name of the resource view. */
                resourceView: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
                /** The zone name of the resource view. */
                zone: string;
            }): Request<Operation>;            
            
            /** Get the information of a zonal resource view. */
            get(request: {            
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** The project name of the resource view. */
                project: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided. */
                quotaUser?: string;
                /** The name of the resource view. */
                resourceView: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
                /** The zone name of the resource view. */
                zone: string;
            }): Request<ResourceView>;            
            
            /** Get the service information of a resource view or a resource. */
            getService(request: {            
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** The project name of the resource view. */
                project: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided. */
                quotaUser?: string;
                /** The name of the resource if user wants to get the service information of the resource. */
                resourceName?: string;
                /** The name of the resource view. */
                resourceView: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
                /** The zone name of the resource view. */
                zone: string;
            }): Request<ZoneViewsGetServiceResponse>;            
            
            /** Create a resource view. */
            insert(request: {            
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** The project name of the resource view. */
                project: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided. */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
                /** The zone name of the resource view. */
                zone: string;
            }): Request<Operation>;            
            
            /** List resource views. */
            list(request: {            
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000) */
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request. */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** The project name of the resource view. */
                project: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided. */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
                /** The zone name of the resource view. */
                zone: string;
            }): Request<ZoneViewsList>;            
            
            /** List the resources of the resource view. */
            listResources(request: {            
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** The requested format of the return value. It can be URL or URL_PORT. A JSON object will be included in the response based on the format. The default format is NONE, which results in no JSON in the response. */
                format?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The state of the instance to list. By default, it lists all instances. */
                listState?: string;
                /** Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000) */
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request. */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** The project name of the resource view. */
                project: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided. */
                quotaUser?: string;
                /** The name of the resource view. */
                resourceView: string;
                /** The service name to return in the response. It is optional and if it is not set, all the service end points will be returned. */
                serviceName?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
                /** The zone name of the resource view. */
                zone: string;
            }): Request<ZoneViewsListResourcesResponse>;            
            
            /** Remove resources from the view. */
            removeResources(request: {            
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** The project name of the resource view. */
                project: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided. */
                quotaUser?: string;
                /** The name of the resource view. */
                resourceView: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
                /** The zone name of the resource view. */
                zone: string;
            }): Request<Operation>;            
            
            /** Update the service information of a resource view or a resource. */
            setService(request: {            
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** The project name of the resource view. */
                project: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided. */
                quotaUser?: string;
                /** The name of the resource view. */
                resourceView: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
                /** The zone name of the resource view. */
                zone: string;
            }): Request<Operation>;            
            
        }
    }
}
