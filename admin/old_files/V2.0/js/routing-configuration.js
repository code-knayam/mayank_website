blogs.config( function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: "../partials/blogs/main.html"
  })
  .when("/addExtraSpaceOnDock", {
    templateUrl: "../partials/blogs/blog_list/may/blog_1.html"
  })
  .when("/parallaxGallery", {
    templateUrl: "../partials/blogs/blog_list/april/blog_23.html"
  })
  .when("/pageNotFound", {
    templateUrl: "../partials/blogs/error.html"
  })
  .otherwise({
    redirectTo: "/pageNotFound"
  });
});
