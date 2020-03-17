courseApp.factory('courseData', function ($http, $log) {
    return {
        getCourse: function (successcb) {
            $http({method: 'GET', url: '/data/course/1'}).
                success(function (data, status, headers, config) {
                 successcb(data);
            }).error(function (data, status, headers, config) {
                $log.warn(data, status, headers, config);
            });
        }
    };
});