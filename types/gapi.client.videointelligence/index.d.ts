// Type definitions for Google Google Cloud Video Intelligence API v1beta1 1.0
// Project: https://cloud.google.com/video-intelligence/docs/
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/** IMPORTANT.  */
/** This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually. */
/** In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator */
/** Generated from: https://videointelligence.googleapis.com/$discovery/rest?version=v1beta1 */

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Google Cloud Video Intelligence API v1beta1 */
    function load(name: "videointelligence", version: "v1beta1"): PromiseLike<void>;    
    function load(name: "videointelligence", version: "v1beta1", callback: () => any): void;    
    
    const videos: videointelligence.VideosResource; 
    
    namespace videointelligence {
        
        interface GoogleCloudVideointelligenceV1_VideoAnnotationResults {
            /** If set, indicates an error. Note that for a single `AnnotateVideoRequest` */
            /** some videos may succeed and some may fail. */
            error?: GoogleRpc_Status;
            /** Shot annotations. Each shot is represented as a video segment. */
            shotAnnotations?: GoogleCloudVideointelligenceV1_VideoSegment[];
            /** Safe search annotations. */
            safeSearchAnnotations?: GoogleCloudVideointelligenceV1_SafeSearchAnnotation[];
            /** Video file location in */
            /** [Google Cloud Storage](https://cloud.google.com/storage/). */
            inputUri?: string;
            /** Label annotations. There is exactly one element for each unique label. */
            labelAnnotations?: GoogleCloudVideointelligenceV1_LabelAnnotation[];
        }
        
        interface GoogleCloudVideointelligenceV1_LabelLocation {
            /** Video segment. Unset for video-level labels. */
            /** Set to a frame timestamp for frame-level labels. */
            /** Otherwise, corresponds to one of `AnnotateSpec.segments` */
            /** (if specified) or to shot boundaries (if requested). */
            segment?: GoogleCloudVideointelligenceV1_VideoSegment;
            /** Label level. */
            level?: string;
            /** Confidence that the label is accurate. Range: [0, 1]. */
            confidence?: number;
        }
        
        interface GoogleCloudVideointelligenceV1_AnnotateVideoProgress {
            /** Progress metadata for all videos specified in `AnnotateVideoRequest`. */
            annotationProgress?: GoogleCloudVideointelligenceV1_VideoAnnotationProgress[];
        }
        
        interface GoogleLongrunning_Operation {
            /** If the value is `false`, it means the operation is still in progress. */
            /** If true, the operation is completed, and either `error` or `response` is */
            /** available. */
            done?: boolean;
            /** The normal response of the operation in case of success.  If the original */
            /** method returns no data on success, such as `Delete`, the response is */
            /** `google.protobuf.Empty`.  If the original method is standard */
            /** `Get`/`Create`/`Update`, the response should be the resource.  For other */
            /** methods, the response should have the type `XxxResponse`, where `Xxx` */
            /** is the original method name.  For example, if the original method name */
            /** is `TakeSnapshot()`, the inferred response type is */
            /** `TakeSnapshotResponse`. */
            response?: Record<string, any>;            
            /** The server-assigned name, which is only unique within the same service that */
            /** originally returns it. If you use the default HTTP mapping, the */
            /** `name` should have the format of `operations/some/unique/name`. */
            name?: string;
            /** The error result of the operation in case of failure or cancellation. */
            error?: GoogleRpc_Status;
            /** Service-specific metadata associated with the operation.  It typically */
            /** contains progress information and common metadata such as create time. */
            /** Some services might not provide such metadata.  Any method that returns a */
            /** long-running operation should document the metadata type, if any. */
            metadata?: Record<string, any>;            
        }
        
        interface GoogleCloudVideointelligenceV1beta1_VideoAnnotationResults {
            /** Safe search annotations. */
            safeSearchAnnotations?: GoogleCloudVideointelligenceV1beta1_SafeSearchAnnotation[];
            /** Video file location in */
            /** [Google Cloud Storage](https://cloud.google.com/storage/). */
            inputUri?: string;
            /** Label annotations. There is exactly one element for each unique label. */
            labelAnnotations?: GoogleCloudVideointelligenceV1beta1_LabelAnnotation[];
            /** If set, indicates an error. Note that for a single `AnnotateVideoRequest` */
            /** some videos may succeed and some may fail. */
            error?: GoogleRpc_Status;
            /** Shot annotations. Each shot is represented as a video segment. */
            shotAnnotations?: GoogleCloudVideointelligenceV1beta1_VideoSegment[];
        }
        
        interface GoogleCloudVideointelligenceV1_AnnotateVideoResponse {
            /** Annotation results for all videos specified in `AnnotateVideoRequest`. */
            annotationResults?: GoogleCloudVideointelligenceV1_VideoAnnotationResults[];
        }
        
        interface GoogleCloudVideointelligenceV1beta1_LabelAnnotation {
            /** Textual description, e.g. `Fixed-gear bicycle`. */
            description?: string;
            /** Where the label was detected and with what confidence. */
            locations?: GoogleCloudVideointelligenceV1beta1_LabelLocation[];
            /** Language code for `description` in BCP-47 format. */
            languageCode?: string;
        }
        
        interface GoogleCloudVideointelligenceV1beta1_AnnotateVideoResponse {
            /** Annotation results for all videos specified in `AnnotateVideoRequest`. */
            annotationResults?: GoogleCloudVideointelligenceV1beta1_VideoAnnotationResults[];
        }
        
        interface GoogleCloudVideointelligenceV1_LabelAnnotation {
            /** Textual description, e.g. `Fixed-gear bicycle`. */
            description?: string;
            /** Where the label was detected and with what confidence. */
            locations?: GoogleCloudVideointelligenceV1_LabelLocation[];
            /** Language code for `description` in BCP-47 format. */
            languageCode?: string;
        }
        
        interface GoogleCloudVideointelligenceV1beta1_VideoContext {
            /** Model to use for shot change detection. */
            /** Supported values: "latest" and "stable" (the default). */
            shotChangeDetectionModel?: string;
            /** If label detection has been requested, what labels should be detected */
            /** in addition to video-level labels or segment-level labels. If unspecified, */
            /** defaults to `SHOT_MODE`. */
            labelDetectionMode?: string;
            /** Whether the video has been shot from a stationary (i.e. non-moving) camera. */
            /** When set to true, might improve detection accuracy for moving objects. */
            stationaryCamera?: boolean;
            /** Model to use for safe search detection. */
            /** Supported values: "latest" and "stable" (the default). */
            safeSearchDetectionModel?: string;
            /** Video segments to annotate. The segments may overlap and are not required */
            /** to be contiguous or span the whole video. If unspecified, each video */
            /** is treated as a single segment. */
            segments?: GoogleCloudVideointelligenceV1beta1_VideoSegment[];
            /** Model to use for label detection. */
            /** Supported values: "latest" and "stable" (the default). */
            labelDetectionModel?: string;
        }
        
        interface GoogleCloudVideointelligenceV1beta1_VideoAnnotationProgress {
            /** Time when the request was received. */
            startTime?: string;
            /** Video file location in */
            /** [Google Cloud Storage](https://cloud.google.com/storage/). */
            inputUri?: string;
            /** Approximate percentage processed thus far. */
            /** Guaranteed to be 100 when fully processed. */
            progressPercent?: number;
            /** Time of the most recent update. */
            updateTime?: string;
        }
        
        interface GoogleRpc_Status {
            /** A developer-facing error message, which should be in English. Any */
            /** user-facing error message should be localized and sent in the */
            /** google.rpc.Status.details field, or localized by the client. */
            message?: string;
            /** A list of messages that carry the error details.  There is a common set of */
            /** message types for APIs to use. */
            details?: Array<Record<string, any>>;            
            /** The status code, which should be an enum value of google.rpc.Code. */
            code?: number;
        }
        
        interface GoogleCloudVideointelligenceV1_VideoSegment {
            /** Time-offset, relative to the beginning of the video, */
            /** corresponding to the start of the segment (inclusive). */
            startTime?: string;
            /** Time-offset, relative to the beginning of the video, */
            /** corresponding to the end of the segment (inclusive). */
            endTime?: string;
        }
        
        interface GoogleCloudVideointelligenceV1beta1_AnnotateVideoRequest {
            /** Input video location. Currently, only */
            /** [Google Cloud Storage](https://cloud.google.com/storage/) URIs are */
            /** supported, which must be specified in the following format: */
            /** `gs://bucket-id/object-id` (other URI formats return */
            /** google.rpc.Code.INVALID_ARGUMENT). For more information, see */
            /** [Request URIs](/storage/docs/reference-uris). */
            /** A video URI may include wildcards in `object-id`, and thus identify */
            /** multiple videos. Supported wildcards: '&#42;' to match 0 or more characters; */
            /** '?' to match 1 character. If unset, the input video should be embedded */
            /** in the request as `input_content`. If set, `input_content` should be unset. */
            inputUri?: string;
            /** The video data bytes. Encoding: base64. If unset, the input video(s) */
            /** should be specified via `input_uri`. If set, `input_uri` should be unset. */
            inputContent?: string;
            /** Optional location where the output (in JSON format) should be stored. */
            /** Currently, only [Google Cloud Storage](https://cloud.google.com/storage/) */
            /** URIs are supported, which must be specified in the following format: */
            /** `gs://bucket-id/object-id` (other URI formats return */
            /** google.rpc.Code.INVALID_ARGUMENT). For more information, see */
            /** [Request URIs](/storage/docs/reference-uris). */
            outputUri?: string;
            /** Requested video annotation features. */
            features?: string[];
            /** Additional video context and/or feature-specific parameters. */
            videoContext?: GoogleCloudVideointelligenceV1beta1_VideoContext;
            /** Optional cloud region where annotation should take place. Supported cloud */
            /** regions: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region */
            /** is specified, a region will be determined based on video file location. */
            locationId?: string;
        }
        
        interface GoogleCloudVideointelligenceV1beta1_LabelLocation {
            /** Label level. */
            level?: string;
            /** Confidence that the label is accurate. Range: [0, 1]. */
            confidence?: number;
            /** Video segment. Set to [-1, -1] for video-level labels. */
            /** Set to [timestamp, timestamp] for frame-level labels. */
            /** Otherwise, corresponds to one of `AnnotateSpec.segments` */
            /** (if specified) or to shot boundaries (if requested). */
            segment?: GoogleCloudVideointelligenceV1beta1_VideoSegment;
        }
        
        interface GoogleCloudVideointelligenceV1beta1_VideoSegment {
            /** End offset in microseconds (inclusive). Unset means 0. */
            endTimeOffset?: string;
            /** Start offset in microseconds (inclusive). Unset means 0. */
            startTimeOffset?: string;
        }
        
        interface GoogleCloudVideointelligenceV1_SafeSearchAnnotation {
            /** Time-offset, relative to the beginning of the video, */
            /** corresponding to the video frame for this annotation. */
            time?: string;
            /** Likelihood of adult content. */
            adult?: string;
        }
        
        interface GoogleCloudVideointelligenceV1beta1_SafeSearchAnnotation {
            /** Likelihood of medical content. */
            medical?: string;
            /** Likelihood of adult content. */
            adult?: string;
            /** Likelihood of racy content. */
            racy?: string;
            /** Video time offset in microseconds. */
            timeOffset?: string;
            /** Likelihood of violent content. */
            violent?: string;
            /** Likelihood that an obvious modification was made to the original */
            /** version to make it appear funny or offensive. */
            spoof?: string;
        }
        
        interface GoogleCloudVideointelligenceV1_VideoAnnotationProgress {
            /** Video file location in */
            /** [Google Cloud Storage](https://cloud.google.com/storage/). */
            inputUri?: string;
            /** Approximate percentage processed thus far. */
            /** Guaranteed to be 100 when fully processed. */
            progressPercent?: number;
            /** Time of the most recent update. */
            updateTime?: string;
            /** Time when the request was received. */
            startTime?: string;
        }
        
        interface GoogleCloudVideointelligenceV1beta1_AnnotateVideoProgress {
            /** Progress metadata for all videos specified in `AnnotateVideoRequest`. */
            annotationProgress?: GoogleCloudVideointelligenceV1beta1_VideoAnnotationProgress[];
        }
        
        interface VideosResource {
            /** Performs asynchronous video annotation. Progress and results can be */
            /** retrieved through the `google.longrunning.Operations` interface. */
            /** `Operation.metadata` contains `AnnotateVideoProgress` (progress). */
            /** `Operation.response` contains `AnnotateVideoResponse` (results). */
            annotate(request: {            
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Pretty-print response. */
                pp?: boolean;
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
                /** V1 error format. */
                "$.xgafv"?: string;
                /** JSONP */
                callback?: string;
                /** Data format for response. */
                alt?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth access token. */
                access_token?: string;
            }): Request<GoogleLongrunning_Operation>;            
            
        }
    }
}
