app.controller('worksController', function($scope) {

  $scope.works = [
    {
      'title' : 'DAMS',
      'image_path' : 'images/dams.png',
      'type' : 'Website',
      'tags' : 'HTML, CSS, jQuery, PHP, AJAX, MySQL',
      'link' : 'http://www.damskanpur.org/beta',
      'tab' : '_blank'
    },
    {
      'title' : 'Bhavna - NGO',
      'image_path' : 'images/ngo_bhavna.png',
      'type' : 'Website',
      'tags' : 'HTML, CSS, jQuery, PHP, AJAX, MySQL',
      link : "http://www.bhavna.org.in",
      'tab' : '_blank'
    }
  ];

});

app.controller('projectsController', function($scope) {

  $scope.projects = [
    {
      'title' : 'P5.js Projects',
      'image_path' : 'images/p5_logo.png',
      'type' : 'P5 JS',
      'tags' : 'p5.js, HTML',
      'link' : 'https://code-knayam.github.io/p5-js/',
      'tab' : ''
    },
    {
      'title' : 'Facebook Birthday Wish',
      'image_path' : 'images/fb_logo.png',
      'type' : 'Python App',
      'tags' : 'Python, Facebook Graph API',
      'link' : 'https://github.com/code-knayam/birthdayWishApp',
      'tab' : '_blank'
    },
    {
      'title' : 'Gym-A-Log',
      'image_path' : 'images/gymAlog.png',
      'type' : 'Website',
      'tags' : 'HTML, CSS, jQuery, PHP, AJAX, MySQL',
      'link' : 'http://www.mayankjain.me/gymAlog',
      'tab' : '_blank'
    },
    {
      'title' : 'Chatter',
      'image_path' : 'images/chatter.png',
      'type' : 'App',
      'tags' : 'HTML, CSS, jQuery, NodeJS',
      'link' : 'https://github.com/code-knayam/Chatter',
      'tab' : '_blank'
    },
    {
      'title' : 'Weather Emailer',
      'image_path' : 'images/weatherEmailer.png',
      'type' : 'Pyhton App',
      'tags' : 'Python',
      'link' : 'https://github.com/code-knayam/weather_emailer',
      'tab' : '_blank'
    },{
      'title' : 'parallax Gallery',
      'image_path' : 'images/parallaxGallery.png',
      'type' : 'Concept',
      'tags' : 'HTML, CSS, jQuery',
      'link' : 'http://www.mayankjain.me/parallaxgallery',
      'tab' : '_blank'
    },{
      'title' : 'Cubify',
      'image_path' : 'images/cubify.jpeg',
      'type' : 'Android App',
      'tags' : 'OpenGl',
      'link' : 'cubify.apk',
      'tab' : '_blank'
    },
  ];

});

app.controller('aboutMeController', function($scope){
  $scope.latestBlog = {
    'title' : 'Adding Extra Space on Dock in Mac',
    'image_path' : 'images/blog_1_1.png',
    'type' : 'Blog',
    'link' : 'http://www.mayankjain.me/blogs/may/blog_1.html'
  };
});
