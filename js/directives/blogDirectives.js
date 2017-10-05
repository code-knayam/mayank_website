blogs.directive('menuDirective', function() {
  return {
    restrict : 'A',
    templateUrl : '../blogs/menu.html',
    link : function() {

    }
  };
});

blogs.directive('blogMenuDirective', function() {
  return {
    restrict : 'A',
    templateUrl : '../../../blogs/menu.html',
    link : function() {

    }
  };
});

blogs.directive('blogDirective', function() {
  return {
    restrict : 'A',
    controller : function($scope, $window) {
      $scope.redirectTo = function(path) {
          $window.location.href = path;
        //   $("#facebook_plugins").load(location.href + " #facebook_plugins");
        //   window.setTimeout( function(){
        //   $('#facebook_plugins').load(document.URL +  ' #facebook_plugins');
        // }, 3000);

      };
    },
    link : function( $scope ) {
      $scope.year = blogs_details[0].year;
      $scope.months_details = [];
      $scope.blogs = [];
      for( var month in blogs_details[0].month_container ) {
        $scope.months_details.push(blogs_details[0].month_container[month]);
      }

      $scope.bringToTop = function(attr) {
        window.setTimeout( function() {
          var element = '#blog_' + attr;
          var topValue = $(element).offset().top  - $('.section .heading').height() - $('.menu').height();
          $('html,body').animate({scrollTop: topValue },1000);
        }, 500);
      };
    }
  };
});

blogs.directive('footerDirective', function(){
  return {
    restrict : 'A',
    templateUrl : '../blogs/footer.html',
    link : function( $scope ) {
    }
  };
});

blogs.directive('blogFooterDirective', function(){
  return {
    restrict : 'A',
    templateUrl : '../../../blogs/footer.html',
    link : function( $scope ) {
    }
  };
});

blogs.directive('blogSecondaryMenuDirective', function() {
  return {
    restrict : 'A',
    templateUrl : '../../../blogs/secondaryMenu.html',
    controller : function($scope, $window) {
      $scope.redirectTo = function(path) {
          path = '../../' + path;
          $window.location.href = path;
      };
    },
    link : function( $scope ) {
      $scope.blogs = [];      
      for(var month in blogs_details[0].month_container) {        
        for(var blog in blogs_details[0].month_container[month].blog_container) {          
          $scope.blogs.push(blogs_details[0].month_container[month].blog_container[blog]);
        }
      }

    }
  };
});