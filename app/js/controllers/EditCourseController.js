'use strict';

courseApp.controller('EditCourseController',
    function EditCourseController ($scope) {
        $scope.saveCourse = function(course, newCourseForm) {
            if(newCourseForm.$valid) {
                console.log(newCourseForm);
                window.alert('course' + course.name + 'saved');
            }
        };
        $scope.cancelEdit = function () {
            window.location = "coursedetails.html";
        }
    }
);

//
// window.alert('course' + course.name + 'saved');
// console.log('course' + course.name + 'saved');