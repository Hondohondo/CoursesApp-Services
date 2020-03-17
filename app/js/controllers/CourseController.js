'use strict';

// controllers are responsible for creating scope
//the scope populate the content that's going to be needed by the view
courseApp.controller('CourseController',
    function CourseController($scope, courseData) {

        $scope.sortorder = 'name';

        // $scope.course = courseData.course;
        $scope.course = courseData.getCourse(function (course) {
            $scope.course = course;
        });

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }

);