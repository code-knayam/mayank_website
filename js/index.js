$(document).ready(function () {

  // Calling function to setup the menu format
  fixMenuSection();

  // Calling function on scroll event
  $(window).bind('scroll', fixMenuSection);

  function fixMenuSection() {
    var scroll = $(window).scrollTop();
    var jumboHeight = parseInt($('.jumbotron').css('height'));
    var menuHeight = parseInt($('.menu').css('height'));

    // CSS changes for Menu
    if (scroll > (jumboHeight - menuHeight)) {
      $('.menu').css({
        'background': '#fff',
        'box-shadow': '0px 0px 10px #333'
      });
      $('.menu .navbar-brand').fadeIn(200);
      $('.menu .navbar-brand, .menu li a, .menu-toggle-btn i').css({
        'color': 'rgba(1, 1, 1, 0.9)'
      });  
      $('.mobile-menu').css({
        'background' : '#eee'
      });    
    } else {
      $('.menu').css({
        'background': 'transparent',
        'box-shadow': 'none'
      });
      $('.menu .navbar-brand').fadeOut(200);
      $('.menu .navbar-brand, .menu li a, .menu-toggle-btn i').css({
        'color': 'rgba(226, 224, 226, 1)'
      });
      $('.mobile-menu').css({
        'background' : 'rgba(1, 1, 1, 0.9)'
      });

    }

    var projectsHeight = parseInt($('.projects .main-panel').css('height'));
    $('.projects .side-panel').css('height', projectsHeight);
    var projectsWidth = parseInt($('.projects .side-panel').css('width'));

    // CSS change for projects
    if (scroll < (jumboHeight - menuHeight)) {
      $('.projects .side-panel .content').css({
        'position': 'static',
        'padding': '0',
        'width': 'auto',
        'right': '0',
        'top': '0'
      });
    } else if (scroll > (jumboHeight - menuHeight) && scroll < (jumboHeight + projectsHeight / 1.5 - menuHeight)) {
      $('.projects .side-panel .content').css({
        'position': 'fixed',
        'width': projectsWidth,
        'padding': '40px 50px',
        'right': '0',
        'top': menuHeight,
        'z-index': '1'
      });
    } else if (scroll > (jumboHeight + projectsHeight / 1.5 - menuHeight)) {
      var top = menuHeight - scroll + (jumboHeight + projectsHeight / 1.5 - menuHeight);
      $('.projects .side-panel .content').css({
        'position': 'fixed',
        'width': projectsWidth,
        'padding': '40px 50px',
        'right': '0',
        'top': top + 'px',
        'z-index': '0'
      });
    }

    var worksHeight = parseInt($('.labs .main-panel').css('height'));
    var skillsHeight = parseInt($('.skills').css('height'));
    var labsWidth = parseInt($('.labs .side-panel').css('width'));
    $('.labs .side-panel').css('height', worksHeight);

    // CSS change for projects
    if (scroll < (jumboHeight + projectsHeight + skillsHeight - menuHeight)) {
      $('.labs .side-panel .content').css({
        'position': 'static',
        'padding': '0',
        'width': 'auto',
        'left': '0',
        'top': '0'
      });
    } else if (scroll > (jumboHeight + projectsHeight + skillsHeight - menuHeight) && scroll < (jumboHeight + projectsHeight + worksHeight / 1.12 - menuHeight)) {
      $('.labs .side-panel .content').css({
        'position': 'fixed',
        'width': labsWidth,
        'padding': '40px 50px',
        'left': '0',
        'top': menuHeight,
        'z-index': '1'
      });
    } else if (scroll > (jumboHeight + projectsHeight + skillsHeight + worksHeight / 1.12 - menuHeight)) {
      var top = menuHeight - scroll + (jumboHeight + projectsHeight + skillsHeight + worksHeight / 1.12 - menuHeight);
      $('.labs .side-panel .content').css({
        'position': 'fixed',
        'width': labsWidth,
        'padding': '40px 50px',
        'left': '0',
        'top': top + 'px',
        'z-index': '0'
      });
    }

  }

  var menuHeight = parseInt($('.menu').css('height'));

  // Menu Click Listeners
  $('.menu .nav li').click( function() {
    var id = $(this).attr('id');
    var sectionID = id.substring(0, id.indexOf('-'));
    scrollPage('#' + sectionID);
    $('.mobile-menu').fadeOut(500);
    $('.menu-toggle-btn i').removeClass('fa-times').addClass('fa-bars');
  });

  $('.menu-toggle-btn').click( function(){
    var element = $('.menu-toggle-btn i');
    if ( element.hasClass('fa-bars') ) {
      $('.mobile-menu').fadeIn(500);
      element.removeClass('fa-bars').addClass('fa-times');
    } else {
      $('.mobile-menu').fadeOut(500);
      element.removeClass('fa-times').addClass('fa-bars');
    }
  });

  // Jumbotron Click Listeners
  $('#know-more-btn').click( function() {
    scrollPage('.projects');
  });

  function scrollPage(element) {    
    var top = $(element).offset().top - menuHeight + 1;
    window.setTimeout( function(){
      $('html, body').animate({scrollTop: top}, 1000);
    } , 500 );
  }

  var keywords = ['Vanilla Script', 'Angular JS', 'Angular 2 & 4', 'HTML, CSS, Bootstrap', 'J-Query', 'PHP', 'Java', ''];
  var index = 0, htmlIndex = 0;
  var nextWord = "", html = "";
  var completed = false;

  animateSkills();

  function animateSkills() {
    if (html.length == 0) {
      htmlIndex = 1;
      completed = false;
      if (index == keywords.length) {
        index = 0;
      }
      nextWord = keywords[index];
      html = nextWord.substring(0, 1);
      index++;
      htmlIndex++;
    } else if (html.length != nextWord.length && !completed) {
      html = nextWord.substring(0, htmlIndex);
      htmlIndex++;
    } else if (html.length == nextWord.length && !completed) {
      completed = true;
      html = html.substring(0, html.length - 1);
      sleep(200);
    } else if (html.length != nextWord.length && completed) {
      html = html.substring(0, html.length - 1);
    }    
    $('#input').text(html);     
    
    window.setTimeout(animateSkills, 100);
  }

  function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
  }  

  $('.blogs .slides .slide').first().addClass('active-slide');
  $('.blogs .slides .slide').click(function(){    
    $('.active-slide').removeClass('active-slide');
    $(this).addClass('active-slide');
  });

});