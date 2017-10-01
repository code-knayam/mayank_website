blogs.directive('menuDirective', function() {
  return {
    restrict : 'A',
    templateUrl : '../partials/blogs/menu.html',
    link : function() {

    }
  };
});

blogs.directive('blogDirective', function() {
  return {
    restrict : 'A',
    templateUrl : '../partials/blogs/blog_page.html',
    controller : function($scope, $location) {
      $scope.changeBlog = function(view) {
          $location.path(view);
          $('html,body').animate({scrollTop: 0 },0);
          location.reload();
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

blogs.run( function($rootScope) {
  $rootScope.$on('$routeChangeStart',function(){
    //start spinner
    $('#blog_spinner').css('display','block');
    console.log("route start");
  });
  $rootScope.$on('$routeChangeSuccess',function(){
    //stop spinner
    $('#blog_spinner').css('display','none');
    console.log("route success");
  });
});

blogs.directive('footerDirective', function(){
  return {
    restrict : 'A',
    templateUrl : '../partials/footer.html',
    link : function( $scope ) {

    }
  };
});

blogs.directive('subscribeDirective', function() {
  return {
    restrict : 'A',
    templateUrl : '../partials/blogs/subscribe.html',
    link : function( $scope ) {
      $scope.checkEmail = function() {
        console.log($scope.form_email);
      };
    }
  };
});
