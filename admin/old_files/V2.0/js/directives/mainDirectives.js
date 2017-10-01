app.directive('menuDirective', function() {
  return {
    restrict : 'A',
    templateUrl : 'partials/menu.html'
  };
});

app.directive('jumbotronDirective', function(){
  return {
    restrict : 'A',
    templateUrl : 'partials/jumbotron.html',
    link : function( $scope ) {
      $scope.name = cv.name;
      $scope.location = cv.location;
    }
  };
});

app.directive('worksDirective', function(){
  return {
    restrict : 'A',
    templateUrl : 'partials/works.html',
    link : function( $scope ) {
      $scope.works = cv.works;
    }
  };
});

app.directive('projectsDirective', function(){
  return {
    restrict : 'A',
    templateUrl : 'partials/projects.html',
    link : function( $scope ) {
      $scope.projects = cv.projects;
    }
  };
});

app.directive('aboutMeDirective', function(){
  return {
    restrict : 'A',
    templateUrl : 'partials/aboutMe.html',
    link : function( $scope ) {
      $scope.aboutMeTitle = "Words from Heart";

      $scope.aboutMeContent = "I'm a 22 yr lad brough up in city of Kanpur, India. Aspiring to become a UI/UX developer.<br /><br />Currently in Pune, India. Woking for Tech Mahindra as an <strong>Angular developer.</strong><br /><br />Apart from working on my laptop , I love to play and watch football ( a big freak for it ). A big FLASH and GOKU fan and love to read about things from around the world.<br /><br /><strong>And a big TEAHOLIC :)</strong>";
    }
  };
});

app.directive('navigationDirective', function(){
  return {
    restrict : 'A',
    templateUrl : 'partials/navigation.html',
    link : function( $scope ) {
      $scope.title = "About me";
      $scope.navigationItems = [
        {
          'icon' : 'fa-github',
          'title' : 'Github',
          'link' : 'https://github.com/code-knayam',
          'id' : 'github',
          'background' : 'images/githubBack.png',
          'target' : '_blank'
        },
        {
          'icon' : 'fa-youtube-play',
          'title' : 'Youtube',
          'link' : 'https://www.youtube.com/channel/UC6bCeJBuANvbR1zhCd-WYJw',
          'id' : 'youtube',
          'background' : 'images/youtubeBack.png',
          'target' : '_blank'
        },
        {
          'icon' : 'fa-file-text',
          'title' : 'Blogs',
          'link' : 'blogs',
          'id' : 'blog',
          'background' : 'images/blogBack.png',
          'target' : ''
        },
        {
          'icon' : 'fa-envelope',
          'title' : 'Mail',
          'link' : 'mailto:mayankjain1394@gmail.com',
          'id' : 'mail',
          'background' : 'images/mailBack.png',
          'target' : '_blank'
        }
      ];
    }
  };
});

app.directive('contactDirective', function(){
  return {
    restrict : 'A',
    templateUrl : 'partials/contact.html',
    link : function( $scope ) {
      $scope.part_1 = {};
      $scope.part_2 = {};
      $scope.part_1.title = "The More We Connect, The More We Learn";
      $scope.part_2.title = "Write to Me";
      $scope.part_2.content = "If you have some query, need some help or just chat";
    }
  };
});

app.directive('contactFormDirective', function(){
  return {
    restrict : 'A',
    templateUrl : 'partials/contact_form.html',
    link : function( $scope ) {

    },
    controller : 'contactFormCtrl'
  };
});

app.directive('footerDirective', function(){
  return {
    restrict : 'A',
    templateUrl : 'partials/footer.html',
    link : function( $scope ) {

    }
  };
});
