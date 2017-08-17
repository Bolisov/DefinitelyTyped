// Type definitions for Google Genomics API v1alpha2 1.0
// Project: https://cloud.google.com/genomics
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// IMPORTANT. 
// This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
// Generated from: https://genomics.googleapis.com/$discovery/rest?version=v1alpha2

/// <reference types="gapi.client" />

declare namespace gapi.client.genomics {
    
    interface Status {
        // A developer-facing error message, which should be in English. Any
        // user-facing error message should be localized and sent in the
        // google.rpc.Status.details field, or localized by the client.
        message?: string;
        // A list of messages that carry the error details.  There is a common set of
        // message types for APIs to use.
        details?: Array<Record<string, any>>;        
        // The status code, which should be an enum value of google.rpc.Code.
        code?: number;
    }
    
    interface ServiceAccount {
        // List of scopes to be enabled for this service account on the VM.
        // The following scopes are automatically included:
        // 
        // * https://www.googleapis.com/auth/compute
        // * https://www.googleapis.com/auth/devstorage.full_control
        // * https://www.googleapis.com/auth/genomics
        // * https://www.googleapis.com/auth/logging.write
        // * https://www.googleapis.com/auth/monitoring.write
        scopes?: string[];
        // Email address of the service account. Defaults to `default`,
        // which uses the compute service account associated with the project.
        email?: string;
    }
    
    interface PipelineResources {
        // List of Google Compute Engine availability zones to which resource
        // creation will restricted. If empty, any zone may be chosen.
        zones?: string[];
        // The minimum number of cores to use. Defaults to 1.
        minimumCpuCores?: number;
        // Whether to assign an external IP to the instance. This is an experimental
        // feature that may go away. Defaults to false.
        // Corresponds to `--no_address` flag for [gcloud compute instances create]
        // (https://cloud.google.com/sdk/gcloud/reference/compute/instances/create).
        // In order to use this, must be true for both create time and run time.
        // Cannot be true at run time if false at create time. If you need to ssh into
        // a private IP VM for debugging, you can ssh to a public VM and then ssh into
        // the private VM's Internal IP.  If noAddress is set, this pipeline run may
        // only load docker images from Google Container Registry and not Docker Hub.
        // Before using this, you must
        // [configure access to Google services from internal IPs](https://cloud.google.com/compute/docs/configure-private-google-access#configuring_access_to_google_services_from_internal_ips).
        noAddress?: boolean;
        // Disks to attach.
        disks?: Disk[];
        // The size of the boot disk. Defaults to 10 (GB).
        bootDiskSizeGb?: number;
        // The minimum amount of RAM to use. Defaults to 3.75 (GB)
        minimumRamGb?: number;
        // Whether to use preemptible VMs. Defaults to `false`. In order to use this,
        // must be true for both create time and run time. Cannot be true at run time
        // if false at create time.
        preemptible?: boolean;
    }
    
    interface Pipeline {
        // Input parameters of the pipeline.
        inputParameters?: PipelineParameter[];
        // Required. Specifies resource requirements for the pipeline run.
        // Required fields:
        // 
        // *
        // minimumCpuCores
        // 
        // *
        // minimumRamGb
        resources?: PipelineResources;
        // Required. A user specified pipeline name that does not have to be unique.
        // This name can be used for filtering Pipelines in ListPipelines.
        name?: string;
        // Unique pipeline id that is generated by the service when CreatePipeline
        // is called. Cannot be specified in the Pipeline used in the
        // CreatePipelineRequest, and will be populated in the response to
        // CreatePipeline and all subsequent Get and List calls. Indicates that the
        // service has registered this pipeline.
        pipelineId?: string;
        // Required. The project in which to create the pipeline. The caller must have
        // WRITE access.
        projectId?: string;
        // Output parameters of the pipeline.
        outputParameters?: PipelineParameter[];
        // Specifies the docker run information.
        docker?: DockerExecutor;
        // User-specified description.
        description?: string;
    }
    
    interface ControllerConfig {
        // 
        machineType?: string;
        // 
        cmd?: string;
        // 
        vars?: Record<string, string>;        
        // 
        image?: string;
        // 
        gcsLogPath?: string;
        // 
        gcsSources?: Record<string, RepeatedString>;        
        // 
        gcsSinks?: Record<string, RepeatedString>;        
        // 
        disks?: Record<string, string>;        
    }
    
    interface OperationEvent {
        // Optional time of when event started.
        startTime?: string;
        // Required description of event.
        description?: string;
        // Optional time of when event finished. An event can have a start time and no
        // finish time. If an event has a finish time, there must be a start time.
        endTime?: string;
    }
    
    interface RepeatedString {
        // 
        values?: string[];
    }
    
    interface ListOperationsResponse {
        // The standard List next-page token.
        nextPageToken?: string;
        // A list of operations that matches the specified filter in the request.
        operations?: Operation[];
    }
    
    interface OperationMetadata {
        // The Google Cloud Project in which the job is scoped.
        projectId?: string;
        // This field is deprecated. Use `labels` instead. Optionally provided by the
        // caller when submitting the request that creates the operation.
        clientId?: string;
        // Optional event messages that were generated during the job's execution.
        // This also contains any warnings that were generated during import
        // or export.
        events?: OperationEvent[];
        // The time at which the job stopped running.
        endTime?: string;
        // The time at which the job began to run.
        startTime?: string;
        // The original request that started the operation. Note that this will be in
        // current version of the API. If the operation was started with v1beta2 API
        // and a GetOperation is performed on v1 API, a v1 request will be returned.
        request?: Record<string, any>;        
        // Runtime metadata on this Operation.
        runtimeMetadata?: Record<string, any>;        
        // Optionally provided by the caller when submitting the request that creates
        // the operation.
        labels?: Record<string, string>;        
        // The time at which the job was submitted to the Genomics service.
        createTime?: string;
    }
    
    interface RunPipelineArgs {
        // This field is deprecated. Use `labels` instead. Client-specified pipeline
        // operation identifier.
        clientId?: string;
        // Pipeline input arguments; keys are defined in the pipeline documentation.
        // All input parameters that do not have default values  must be specified.
        // If parameters with defaults are specified here, the defaults will be
        // overridden.
        inputs?: Record<string, string>;        
        // The Google Cloud Service Account that will be used to access data and
        // services. By default, the compute service account associated with
        // `projectId` is used.
        serviceAccount?: ServiceAccount;
        // Required. Logging options. Used by the service to communicate results
        // to the user.
        logging?: LoggingOptions;
        // Labels to apply to this pipeline run. Labels will also be applied to
        // compute resources (VM, disks) created by this pipeline run. When listing
        // operations, operations can filtered by labels.
        // Label keys may not be empty; label values may be empty. Non-empty labels
        // must be 1-63 characters long, and comply with [RFC1035]
        // (https://www.ietf.org/rfc/rfc1035.txt).
        // Specifically, the name must be 1-63 characters long and match the regular
        // expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first
        // character must be a lowercase letter, and all following characters must be
        // a dash, lowercase letter, or digit, except the last character, which cannot
        // be a dash.
        labels?: Record<string, string>;        
        // How long to keep the VM up after a failure (for example docker command
        // failed, copying input or output files failed, etc). While the VM is up, one
        // can ssh into the VM to debug. Default is 0; maximum allowed value is 1 day.
        keepVmAliveOnFailureDuration?: string;
        // Specifies resource requirements/overrides for the pipeline run.
        resources?: PipelineResources;
        // Pipeline output arguments; keys are defined in the pipeline
        // documentation.  All output parameters of without default values
        // must be specified.  If parameters with defaults are specified
        // here, the defaults will be overridden.
        outputs?: Record<string, string>;        
        // Required. The project in which to run the pipeline. The caller must have
        // WRITER access to all Google Cloud services and resources (e.g. Google
        // Compute Engine) will be used.
        projectId?: string;
    }
    
    interface ListPipelinesResponse {
        // The token to use to get the next page of results.
        nextPageToken?: string;
        // The matched pipelines.
        pipelines?: Pipeline[];
    }
    
    interface SetOperationStatusRequest {
        // 
        errorCode?: string;
        // 
        timestampEvents?: TimestampEvent[];
        // 
        operationId?: string;
        // 
        validationToken?: string;
        // 
        errorMessage?: string;
    }
    
    interface ComputeEngine {
        // The names of the disks that were created for this pipeline.
        diskNames?: string[];
        // The machine type of the instance.
        machineType?: string;
        // The instance on which the operation is running.
        instanceName?: string;
        // The availability zone in which the instance resides.
        zone?: string;
    }
    
    interface ImportVariantsResponse {
        // IDs of the call sets created during the import.
        callSetIds?: string[];
    }
    
    interface TimestampEvent {
        // The time this event occured.
        timestamp?: string;
        // String indicating the type of event
        description?: string;
    }
    
    interface LocalCopy {
        // Required. The name of the disk where this parameter is
        // located. Can be the name of one of the disks specified in the
        // Resources field, or "boot", which represents the Docker
        // instance's boot disk and has a mount point of `/`.
        disk?: string;
        // Required. The path within the user's docker container where
        // this input should be localized to and from, relative to the specified
        // disk's mount point. For example: file.txt,
        path?: string;
    }
    
    interface DockerExecutor {
        // Required. The command or newline delimited script to run. The command
        // string will be executed within a bash shell.
        // 
        // If the command exits with a non-zero exit code, output parameter
        // de-localization will be skipped and the pipeline operation's
        // `error` field will be populated.
        // 
        // Maximum command string length is 16384.
        cmd?: string;
        // Required. Image name from either Docker Hub or Google Container Registry.
        // Users that run pipelines must have READ access to the image.
        imageName?: string;
    }
    
    interface Disk {
        // Required. The name of the disk that can be used in the pipeline
        // parameters. Must be 1 - 63 characters.
        // The name "boot" is reserved for system use.
        name?: string;
        // Required. The type of the disk to create.
        type?: string;
        // Deprecated. Disks created by the Pipelines API will be deleted at the end
        // of the pipeline run, regardless of what this field is set to.
        autoDelete?: boolean;
        // The size of the disk. Defaults to 500 (GB).
        // This field is not applicable for local SSD.
        sizeGb?: number;
        // Required at create time and cannot be overridden at run time.
        // Specifies the path in the docker container where files on
        // this disk should be located. For example, if `mountPoint`
        // is `/mnt/disk`, and the parameter has `localPath`
        // `inputs/file.txt`, the docker container can access the data at
        // `/mnt/disk/inputs/file.txt`.
        mountPoint?: string;
        // Specifies how a sourced-base persistent disk will be mounted. See
        // https://cloud.google.com/compute/docs/disks/persistent-disks#use_multi_instances
        // for more details.
        // Can only be set at create time.
        readOnly?: boolean;
        // The full or partial URL of the persistent disk to attach. See
        // https://cloud.google.com/compute/docs/reference/latest/instances#resource
        // and
        // https://cloud.google.com/compute/docs/disks/persistent-disks#snapshots
        // for more details.
        source?: string;
    }
    
    interface PipelineParameter {
        // The default value for this parameter. Can be overridden at runtime.
        // If `localCopy` is present, then this must be a Google Cloud Storage path
        // beginning with `gs://`.
        defaultValue?: string;
        // Required. Name of the parameter - the pipeline runner uses this string
        // as the key to the input and output maps in RunPipeline.
        name?: string;
        // Human-readable description.
        description?: string;
        // If present, this parameter is marked for copying to and from the VM.
        // `LocalCopy` indicates where on the VM the file should be. The value
        // given to this parameter (either at runtime or using `defaultValue`)
        // must be the remote path where the file should be.
        localCopy?: LocalCopy;
    }
    
    interface LoggingOptions {
        // The location in Google Cloud Storage to which the pipeline logs
        // will be copied. Can be specified as a fully qualified directory
        // path, in which case logs will be output with a unique identifier
        // as the filename in that directory, or as a fully specified path,
        // which must end in `.log`, in which case that path will be
        // used, and the user must ensure that logs are not
        // overwritten. Stdout and stderr logs from the run are also
        // generated and output as `-stdout.log` and `-stderr.log`.
        gcsPath?: string;
    }
    
    interface RunPipelineRequest {
        // The arguments to use when running this pipeline.
        pipelineArgs?: RunPipelineArgs;
        // The already created pipeline to run.
        pipelineId?: string;
        // A new pipeline object to run once and then delete.
        ephemeralPipeline?: Pipeline;
    }
    
    interface Operation {
        // If importing ReadGroupSets, an ImportReadGroupSetsResponse is returned. If importing Variants, an ImportVariantsResponse is returned. For pipelines and exports, an empty response is returned.
        response?: Record<string, any>;        
        // The server-assigned name, which is only unique within the same service that originally returns it. For example&#58; `operations/CJHU7Oi_ChDrveSpBRjfuL-qzoWAgEw`
        name?: string;
        // The error result of the operation in case of failure or cancellation.
        error?: Status;
        // An OperationMetadata object. This will always be returned with the Operation.
        metadata?: Record<string, any>;        
        // If the value is `false`, it means the operation is still in progress.
        // If true, the operation is completed, and either `error` or `response` is
        // available.
        done?: boolean;
    }
    
    interface RuntimeMetadata {
        // Execution information specific to Google Compute Engine.
        computeEngine?: ComputeEngine;
    }
    
    interface ImportReadGroupSetsResponse {
        // IDs of the read group sets that were created.
        readGroupSetIds?: string[];
    }
    
    interface PipelinesResource {
        // Sets status of a given operation. Any new timestamps (as determined by
        // description) are appended to TimestampEvents. Should only be called by VMs
        // created by the Pipelines Service and not by end users.
        setOperationStatus(request: {        
            // Data format for response.
            alt?: string;
            // OAuth access token.
            access_token?: string;
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string;
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string;
            // Pretty-print response.
            pp?: boolean;
            // OAuth 2.0 token for the current user.
            oauth_token?: string;
            // OAuth bearer token.
            bearer_token?: string;
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string;
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean;
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string;
            // Selector specifying which fields to include in a partial response.
            fields?: string;
            // JSONP
            callback?: string;
            // V1 error format.
            "$.xgafv"?: string;
        }): gapi.client.Request<{}>;        
        
        // Gets controller configuration information. Should only be called
        // by VMs created by the Pipelines Service and not by end users.
        getControllerConfig(request: {        
            // Data format for response.
            alt?: string;
            // OAuth access token.
            access_token?: string;
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string;
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string;
            // Pretty-print response.
            pp?: boolean;
            // OAuth 2.0 token for the current user.
            oauth_token?: string;
            // OAuth bearer token.
            bearer_token?: string;
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string;
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean;
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string;
            // Selector specifying which fields to include in a partial response.
            fields?: string;
            // JSONP
            callback?: string;
            // V1 error format.
            "$.xgafv"?: string;
            // The operation to retrieve controller configuration for.
            operationId?: string;
            // 
            validationToken?: string;
        }): gapi.client.Request<ControllerConfig>;        
        
        // Deletes a pipeline based on ID.
        // 
        // Caller must have WRITE permission to the project.
        delete(request: {        
            // Data format for response.
            alt?: string;
            // OAuth access token.
            access_token?: string;
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string;
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string;
            // Pretty-print response.
            pp?: boolean;
            // OAuth 2.0 token for the current user.
            oauth_token?: string;
            // OAuth bearer token.
            bearer_token?: string;
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string;
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean;
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string;
            // Selector specifying which fields to include in a partial response.
            fields?: string;
            // JSONP
            callback?: string;
            // V1 error format.
            "$.xgafv"?: string;
            // Caller must have WRITE access to the project in which this pipeline
            // is defined.
            pipelineId: string;
        }): gapi.client.Request<{}>;        
        
        // Lists pipelines.
        // 
        // Caller must have READ permission to the project.
        list(request: {        
            // Data format for response.
            alt?: string;
            // OAuth access token.
            access_token?: string;
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string;
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string;
            // Pretty-print response.
            pp?: boolean;
            // OAuth 2.0 token for the current user.
            oauth_token?: string;
            // OAuth bearer token.
            bearer_token?: string;
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string;
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean;
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string;
            // Selector specifying which fields to include in a partial response.
            fields?: string;
            // JSONP
            callback?: string;
            // V1 error format.
            "$.xgafv"?: string;
            // Pipelines with names that match this prefix should be
            // returned.  If unspecified, all pipelines in the project, up to
            // `pageSize`, will be returned.
            namePrefix?: string;
            // Token to use to indicate where to start getting results.
            // If unspecified, returns the first page of results.
            pageToken?: string;
            // Number of pipelines to return at once. Defaults to 256, and max
            // is 2048.
            pageSize?: number;
            // Required. The name of the project to search for pipelines. Caller
            // must have READ access to this project.
            projectId?: string;
        }): gapi.client.Request<ListPipelinesResponse>;        
        
        // Creates a pipeline that can be run later. Create takes a Pipeline that
        // has all fields other than `pipelineId` populated, and then returns
        // the same pipeline with `pipelineId` populated. This id can be used
        // to run the pipeline.
        // 
        // Caller must have WRITE permission to the project.
        create(request: {        
            // Data format for response.
            alt?: string;
            // OAuth access token.
            access_token?: string;
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string;
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string;
            // Pretty-print response.
            pp?: boolean;
            // OAuth 2.0 token for the current user.
            oauth_token?: string;
            // OAuth bearer token.
            bearer_token?: string;
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string;
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean;
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string;
            // Selector specifying which fields to include in a partial response.
            fields?: string;
            // JSONP
            callback?: string;
            // V1 error format.
            "$.xgafv"?: string;
        }): gapi.client.Request<Pipeline>;        
        
        // Runs a pipeline. If `pipelineId` is specified in the request, then
        // run a saved pipeline. If `ephemeralPipeline` is specified, then run
        // that pipeline once without saving a copy.
        // 
        // The caller must have READ permission to the project where the pipeline
        // is stored and WRITE permission to the project where the pipeline will be
        // run, as VMs will be created and storage will be used.
        // 
        // If a pipeline operation is still running after 6 days, it will be canceled.
        run(request: {        
            // Data format for response.
            alt?: string;
            // OAuth access token.
            access_token?: string;
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string;
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string;
            // Pretty-print response.
            pp?: boolean;
            // OAuth 2.0 token for the current user.
            oauth_token?: string;
            // OAuth bearer token.
            bearer_token?: string;
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string;
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean;
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string;
            // Selector specifying which fields to include in a partial response.
            fields?: string;
            // JSONP
            callback?: string;
            // V1 error format.
            "$.xgafv"?: string;
        }): gapi.client.Request<Operation>;        
        
        // Retrieves a pipeline based on ID.
        // 
        // Caller must have READ permission to the project.
        get(request: {        
            // Data format for response.
            alt?: string;
            // OAuth access token.
            access_token?: string;
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string;
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string;
            // Pretty-print response.
            pp?: boolean;
            // OAuth 2.0 token for the current user.
            oauth_token?: string;
            // OAuth bearer token.
            bearer_token?: string;
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string;
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean;
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string;
            // Selector specifying which fields to include in a partial response.
            fields?: string;
            // JSONP
            callback?: string;
            // V1 error format.
            "$.xgafv"?: string;
            // Caller must have READ access to the project in which this pipeline
            // is defined.
            pipelineId: string;
        }): gapi.client.Request<Pipeline>;        
        
    }
    
    interface OperationsResource {
        // Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation.
        cancel(request: {        
            // Data format for response.
            alt?: string;
            // OAuth access token.
            access_token?: string;
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string;
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string;
            // Pretty-print response.
            pp?: boolean;
            // OAuth 2.0 token for the current user.
            oauth_token?: string;
            // OAuth bearer token.
            bearer_token?: string;
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string;
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean;
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string;
            // Selector specifying which fields to include in a partial response.
            fields?: string;
            // JSONP
            callback?: string;
            // V1 error format.
            "$.xgafv"?: string;
            // The name of the operation resource to be cancelled.
            name: string;
        }): gapi.client.Request<{}>;        
        
        // Gets the latest state of a long-running operation.  Clients can use this
        // method to poll the operation result at intervals as recommended by the API
        // service.
        get(request: {        
            // Data format for response.
            alt?: string;
            // OAuth access token.
            access_token?: string;
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string;
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string;
            // Pretty-print response.
            pp?: boolean;
            // OAuth 2.0 token for the current user.
            oauth_token?: string;
            // OAuth bearer token.
            bearer_token?: string;
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string;
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean;
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string;
            // Selector specifying which fields to include in a partial response.
            fields?: string;
            // JSONP
            callback?: string;
            // V1 error format.
            "$.xgafv"?: string;
            // The name of the operation resource.
            name: string;
        }): gapi.client.Request<Operation>;        
        
        // Lists operations that match the specified filter in the request.
        list(request: {        
            // Data format for response.
            alt?: string;
            // OAuth access token.
            access_token?: string;
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string;
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string;
            // Pretty-print response.
            pp?: boolean;
            // OAuth 2.0 token for the current user.
            oauth_token?: string;
            // OAuth bearer token.
            bearer_token?: string;
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string;
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean;
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string;
            // Selector specifying which fields to include in a partial response.
            fields?: string;
            // JSONP
            callback?: string;
            // V1 error format.
            "$.xgafv"?: string;
            // A string for filtering Operations.
            // The following filter fields are supported&#58;
            // 
            // * projectId&#58; Required. Corresponds to
            //   OperationMetadata.projectId.
            // * createTime&#58; The time this job was created, in seconds from the
            //   [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `<=`
            //   operators.
            // * status&#58; Can be `RUNNING`, `SUCCESS`, `FAILURE`, or `CANCELED`. Only
            //   one status may be specified.
            // * labels.key where key is a label key.
            // 
            // Examples&#58;
            // 
            // * `projectId = my-project AND createTime >= 1432140000`
            // * `projectId = my-project AND createTime >= 1432140000 AND createTime <= 1432150000 AND status = RUNNING`
            // * `projectId = my-project AND labels.color = *`
            // * `projectId = my-project AND labels.color = red`
            filter?: string;
            // The standard list page token.
            pageToken?: string;
            // The name of the operation's parent resource.
            name: string;
            // The maximum number of results to return. If unspecified, defaults to
            // 256. The maximum value is 2048.
            pageSize?: number;
        }): gapi.client.Request<ListOperationsResponse>;        
        
    }
}

declare namespace gapi.client {
    // Load Genomics API v1alpha2
    function load(name: "genomics", version: "v1alpha2"): PromiseLike<void>;    
    function load(name: "genomics", version: "v1alpha2", callback: () => any): void;    
    
    const pipelines: gapi.client.genomics.PipelinesResource; 
    
    const operations: gapi.client.genomics.OperationsResource; 
    
}
