$(document).ready( function() {

  var showWork = true;
  var showProject = true;
  var showAbout = true;

  $(window).bind('scroll', showElements);
  function showElements() {
    var scrollTop = $(window).scrollTop();
    var jumbotronHeight = $('.jumbotron').height();
    var worksHeight = $('.works').height();
    var projectsHeight = $('.projects').height();
    var supportingHeight = $('.supporting').height();

    if ( scrollTop >= jumbotronHeight && showWork) {
      $('.work_container').first().fadeIn(100).addClass('active_work');
      show_work_items();
      showWork = false;
    }
    if ( scrollTop >= (jumbotronHeight + worksHeight + supportingHeight) && showProject) {
      $('.project_container').first().fadeIn(100).addClass('active_project');
      show_project_items();
      showProject = false;
    }
    if (scrollTop >= (jumbotronHeight + worksHeight + projectsHeight + supportingHeight * 2) && showAbout) {
      show_aboutMe();
      showAbout = false;
    }


  }

});
