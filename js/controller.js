app.controller('worksController', function($scope) {

  $scope.works = [
    {
      'title' : 'Bhavna - NGO',
      'image_path' : 'images/ngo_bhavna.png',
      'type' : 'Website',
      'tags' : 'HTML, CSS, jQuery, PHP, AJAX, MySQL',
      'link' : "http://www.bhavna.org.in",
      'tab' : '_blank',
      'info' : "Bhavna is a NGO started by few individuals in my hometown, Kanpur. I developed the website for them to contribute and help them in making out society a little better. The website is built on HTML5, CSS3, j-query. With the backedn as PHP and the database managed on MySQL."
    },
    {
      'title' : 'DAMS',
      'image_path' : 'images/dams.png',
      'type' : 'Website',
      'tags' : 'HTML, CSS, jQuery, PHP, AJAX, MySQL',
      'link' : 'http://www.damskanpur.org/beta',
      'tab' : '_blank',
      'info' : "DAMS is the college from which I graduated. I developed the college's website as a part of my final year project. The website is built on HTML5, CSS3, j-query. With the backedn as PHP and the database managed on MySQL. "
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
      'tab' : '_blank',
      'info' : "P5-js is the new Javascript library that I am learning. P5 is a great and powerful tool to create awesome graphics and animations very easily. Below is the link to my github repository containing all the sample problems done by me on p5 JS."
    },
    {
      'title' : 'Facebook Birthday Wish',
      'image_path' : 'images/fb_logo.png',
      'type' : 'Python App',
      'tags' : 'Python, Facebook Graph API',
      'link' : 'https://github.com/code-knayam/birthdayWishApp',
      'tab' : '_blank',
      'info' : "Writing replies to all those birthday wishes on facebook can be tiring task. And if you are like me, always looking to do things differently you can surely try this Python App. It uses Facebook Graph API to fetch all posts and then you can choose what to reply to all those posts at once or individually. "
    },
    {
      'title' : 'Gym-A-Log',
      'image_path' : 'images/gymAlog.png',
      'type' : 'Web App',
      'tags' : 'HTML, CSS, jQuery, PHP, AJAX, MySQL',
      'link' : 'http://www.mayankjain.me/gymAlog',
      'tab' : '_blank',
      'info' : "Gym-A-Log came out as my passion for fitness. It is an online tool where you can keep a track of your fitness. You can store what exercises you are performing for what sets and reps. It's basically a logging tool, say goodbye to the old method of maintaining a diary to log your fitness goals."
    },
    {
      'title' : 'Chatter',
      'image_path' : 'images/chatter.png',
      'type' : 'Node JS App',
      'tags' : 'HTML, CSS, jQuery, NodeJS',
      'link' : 'https://github.com/code-knayam/Chatter',
      'tab' : '_blank',
      'info' : "Chatter is a Node JS app. It was the first app that I praticed on Node JS, a very powerful server side language. You can chat one-to-one or even start a group chat within the various browser windows."
    },
    {
      'title' : 'Weather Emailer',
      'image_path' : 'images/weatherEmailer.png',
      'type' : 'Pyhton App',
      'tags' : 'Python',
      'link' : 'https://github.com/code-knayam/weather_emailer',
      'tab' : '_blank',
      'info' : "Weather Emailer is again a python app. This one uses the free Open Weather API to fetch the weather details of a place to list of email address, saved in a text file from your email account."
    },{
      'title' : 'Parallax Gallery',
      'image_path' : 'images/parallaxGallery.png',
      'type' : 'J-Query Effect',
      'tags' : 'HTML, CSS, jQuery',
      'link' : 'http://www.mayankjain.me/parallaxGallery',
      'tab' : '_blank',
      'info' : "Parallax Effect is the one feature of J-query that I love the most. It helps in making the webpages much more attractive. This one here uses the same to display a group of pictures, which is animated when the user moves the cursor."
    },{
      'title' : 'Cubify',
      'image_path' : 'images/cubify.jpeg',
      'type' : 'Android App',
      'tags' : 'OpenGl',
      'link' : 'cubify.apk',
      'tab' : '_blank',
      'info' : "Cubify is the first android app that I worked upon. In cubify, you can select an image from your gallery and then it creates a 3D spinning cube of that image with a background song."
    },
  ];

});

app.controller('blogsController', function($scope){  
    $scope.blog_1 = blogs_details[0];    
    $scope.blog_2 = blogs_details[1];
    $scope.blog_3 = blogs_details[2];    
});
