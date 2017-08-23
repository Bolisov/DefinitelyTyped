/* This is stub file for gapi.client.classroom definition tests */
/* IMPORTANT. 
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator    
 **/

gapi.load('client', () => { 
    // now we can use gapi.client
    
    gapi.client.load('classroom', 'v1', () => {
        // now we can use gapi.client.classroom
   
        // don't forget to authenticate your client before sending any request to resources:     
        // declare client_id registered in Google Developers Console
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [     
                // View and manage guardians for students in your Google Classroom classes
                'https://www.googleapis.com/auth/classroom.guardianlinks.students',
            
                // View your course work and grades in Google Classroom
                'https://www.googleapis.com/auth/classroom.student-submissions.me.readonly',
            
                // View your Google Classroom guardians
                'https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly',
            
                // Manage course work and grades for students in the Google Classroom classes you teach and view the course work and grades for classes you administer
                'https://www.googleapis.com/auth/classroom.coursework.students',
            
                // View course work and grades for students in the Google Classroom classes you teach or administer
                'https://www.googleapis.com/auth/classroom.coursework.students.readonly',
            
                // View your course work and grades in Google Classroom
                'https://www.googleapis.com/auth/classroom.coursework.me.readonly',
            
                // View the email addresses of people in your classes
                'https://www.googleapis.com/auth/classroom.profile.emails',
            
                // Manage your course work and view your grades in Google Classroom
                'https://www.googleapis.com/auth/classroom.coursework.me',
            
                // Manage your Google Classroom class rosters
                'https://www.googleapis.com/auth/classroom.rosters',
            
                // View course work and grades for students in the Google Classroom classes you teach or administer
                'https://www.googleapis.com/auth/classroom.student-submissions.students.readonly',
            
                // View guardians for students in your Google Classroom classes
                'https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly',
            
                // Manage your Google Classroom classes
                'https://www.googleapis.com/auth/classroom.courses',
            
                // View your Google Classroom classes
                'https://www.googleapis.com/auth/classroom.courses.readonly',
            
                // View the profile photos of people in your classes
                'https://www.googleapis.com/auth/classroom.profile.photos',
            
                // View your Google Classroom class rosters
                'https://www.googleapis.com/auth/classroom.rosters.readonly',
            ];
        const immediate = true;

        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /* handle succesfull authorization */
                run();
            } else {
                /* handle authorization error */
            }
        }); 
    });

    async function run() {  
        
        // Returns a user profile.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to access
        // this user profile, if no profile exists with the requested ID, or for
        // access errors.
        await gapi.client.userProfiles.get({ userId: "userId",  }); 
        
        // Returns a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to access the
        // requested course or for access errors.
        // * `NOT_FOUND` if no course exists with the requested ID.
        await gapi.client.courses.get({ id: "id",  }); 
        
        // Updates one or more fields in a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to modify the
        // requested course or for access errors.
        // * `NOT_FOUND` if no course exists with the requested ID.
        // * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or
        // if no update mask is supplied.
        // * `FAILED_PRECONDITION` for the following request errors:
        //     * CourseNotModifiable
        await gapi.client.courses.patch({ id: "id",  }); 
        
        // Updates a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to modify the
        // requested course or for access errors.
        // * `NOT_FOUND` if no course exists with the requested ID.
        // * `FAILED_PRECONDITION` for the following request errors:
        //     * CourseNotModifiable
        await gapi.client.courses.update({ id: "id",  }); 
        
        // Deletes a course.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to delete the
        // requested course or for access errors.
        // * `NOT_FOUND` if no course exists with the requested ID.
        await gapi.client.courses.delete({ id: "id",  }); 
        
        // Returns a list of courses that the requesting user is permitted to view,
        // restricted to those that match the request. Returned courses are ordered by
        // creation time, with the most recently created coming first.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` for access errors.
        // * `INVALID_ARGUMENT` if the query argument is malformed.
        // * `NOT_FOUND` if any users specified in the query arguments do not exist.
        await gapi.client.courses.list({  }); 
        
        // Creates a course.
        // 
        // The user specified in `ownerId` is the owner of the created course
        // and added as a teacher.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to create
        // courses or for access errors.
        // * `NOT_FOUND` if the primary teacher is not a valid user.
        // * `FAILED_PRECONDITION` if the course owner's account is disabled or for
        // the following request errors:
        //     * UserGroupsMembershipLimitReached
        // * `ALREADY_EXISTS` if an alias was specified in the `id` and
        // already exists.
        await gapi.client.courses.create({  }); 
        
        // Accepts an invitation, removing it and adding the invited user to the
        // teachers or students (as appropriate) of the specified course. Only the
        // invited user may accept an invitation.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to accept the
        // requested invitation or for access errors.
        // * `FAILED_PRECONDITION` for the following request errors:
        //     * CourseMemberLimitReached
        //     * CourseNotModifiable
        //     * CourseTeacherLimitReached
        //     * UserGroupsMembershipLimitReached
        // * `NOT_FOUND` if no invitation exists with the requested ID.
        await gapi.client.invitations.accept({ id: "id",  }); 
        
        // Deletes an invitation.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to delete the
        // requested invitation or for access errors.
        // * `NOT_FOUND` if no invitation exists with the requested ID.
        await gapi.client.invitations.delete({ id: "id",  }); 
        
        // Returns a list of invitations that the requesting user is permitted to
        // view, restricted to those that match the list request.
        // 
        // *Note:* At least one of `user_id` or `course_id` must be supplied. Both
        // fields can be supplied.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` for access errors.
        await gapi.client.invitations.list({  }); 
        
        // Returns an invitation.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to view the
        // requested invitation or for access errors.
        // * `NOT_FOUND` if no invitation exists with the requested ID.
        await gapi.client.invitations.get({ id: "id",  }); 
        
        // Creates an invitation. Only one invitation for a user and course may exist
        // at a time. Delete and re-create an invitation to make changes.
        // 
        // This method returns the following error codes:
        // 
        // * `PERMISSION_DENIED` if the requesting user is not permitted to create
        // invitations for this course or for access errors.
        // * `NOT_FOUND` if the course or the user does not exist.
        // * `FAILED_PRECONDITION` if the requested user's account is disabled or if
        // the user already has this role or a role with greater permissions.
        // * `ALREADY_EXISTS` if an invitation for the specified user and course
        // already exists.
        await gapi.client.invitations.create({  });
    }
});
