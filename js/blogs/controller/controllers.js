blogs.controller('jumbotronController', function ($rootScope, $scope, $interval) {

    var index = 0;
    $rootScope.slide = blogs_details[0];
    $scope.thumbnail_1 = blogs_details[1];
    $scope.thumbnail_2 = blogs_details[2];

    $interval(function () {
        var temp;
        temp = $rootScope.slide;
        $rootScope.slide = $scope.thumbnail_1;
        $scope.thumbnail_1 = $scope.thumbnail_2;
        $scope.thumbnail_2 = temp;
    }, 5000);

});

blogs.controller('blogArchiveController', function ($scope) {

    $scope.blogs = blogs_details;

});

