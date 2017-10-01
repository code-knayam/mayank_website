/* In this file adding new exercise and sets
each ROW addded by addExerciseRow() has an ID = "ex-1,2,3"  ( this 1 responds to exercise number)
Inside this row , there is a heading col , and set info col. followed by addNewSetBtn and removeSetBtn
In second column --------  class="set-block" and each set row has ID="exercise-1"  ( this 1 responds to exercise number)
this  "exercise-1 "  further contains various rows to represent differrent sets.
latest set row added has a class = "latestSet-1" ( this 1 responds to exercise number). This class helps in deleting the latest added set row by using removeSetBtn.

Here each row inserted has 3 columns - set number, set-weight , set_rep
set - weight has name="set_weight-1-1" id="set_weight-1-1"  and a error span - id = "weightErr-1-1"

set - rep has name="set_rep-1-1" id="set_rep-1-1"  and a error span - id = "repErr-1-1"

**-1-1 ----> first number corresponds to exercise number and second number coresponds to separate set number inside those exercises.
*/

/*
contains function to fix the date column when scrolled fixMuscleColumn()
contains AJAX calls to PHP file to store data into SQL

*/

$(document).ready( function() {

  var muscleSet = [];   //CONTAINS THE NUMBER OF SET FOR EACH EXERCISE
  var allData = [];    //CONTAINS ALL DATA ENTERED IN OBJECT FORM
  addExerciseRow();    //DISPLAYING INITIAL 1 EXERCISE WITH 1 SET

  $(document).on("click" ,'.newSetBtn' ,function() {
    var id = $(this).attr('id');
    id = id.substring(id.indexOf('-')+1,id.length);

    addSetRow(id);
  });

  $(document).on("click" ,'.removeSetBtn' ,function() {
    var id = $(this).attr('id');
    id = id.substring(id.indexOf('-')+1,id.length);

    removeSetRow(id);
  });

  $('.newExerciseBtn').click( function () {
    addExerciseRow();
  });


  function addSetRow( exerciseNumber ) {

    var element = $('.latestSet-'+exerciseNumber);
    element.removeClass('latestSet-'+exerciseNumber);
    muscleSet[exerciseNumber-1] ++;

    var setNumber = "\<div class=\"col-md-4 inputBlock\" style=\"text-align: center;\"\><strong> Set " + muscleSet[exerciseNumber-1] + "</strong>\</div\>";

    var setWeight = "\<div class=\"col-md-4 inputBlock\"\>\<input type=\"text\" class=\"form-control\" name=\"set_weight-" + exerciseNumber + "-" + muscleSet[exerciseNumber-1] + "\" id=\"set_weight-" + exerciseNumber + "-" +  muscleSet[exerciseNumber-1] + "\" onChange = \" check_weight(this,this.id) \" autocomplete=\"off\"  required \>\<label for=\"set_weight-" + exerciseNumber + "-" +  muscleSet[exerciseNumber-1] + "\"\>Set Weight (Kgs / Lbs)\</label\> <span class=\"error\" id=\"weightErr-" + exerciseNumber + "-" + muscleSet[exerciseNumber-1] + "\"></span>\</div\>";

    var setRep = "\<div class=\"col-md-4 inputBlock\"\>\<input type=\"text\" class=\"form-control\" name=\"set_rep-" + exerciseNumber + "-" +  muscleSet[exerciseNumber-1] + "\" id=\"set_rep-" +  exerciseNumber + "-" + muscleSet[exerciseNumber-1] + "\"  onChange = \" check_set(this,this.id)\;\" autocomplete=\"off\"  required \>\<label for=\"set_rep-" + exerciseNumber + "-" +  muscleSet[exerciseNumber-1] + "\"\>Set Rep\</label\> <span class=\"error\" id=\"setErr-" + exerciseNumber + "-" + muscleSet[exerciseNumber-1] + "\"></span>\</div\>";

    var addNewSetBtn = "";
    var removeSetBtn = "";
    if ( muscleSet[ exerciseNumber-1] == 1 ) {
      addNewSetBtn = "<div class=\"add_btn newSetBtn\"  id=\"setBtn-" + exerciseNumber + "\"><i class=\"fa fa-plus\"></i></div>";
      removeSetBtn = "";
    }
    if ( muscleSet[ exerciseNumber-1] == 2) {
      removeSetBtn = "<div class=\"add_btn removeSetBtn\"  id=\"removeSetBtn-" + exerciseNumber + "\"><i class=\"fa fa-minus\"></i></div>";
    }

    var id = "#exercise-" + exerciseNumber;
    $(id).append( "\<div class=\"row latestSet-" + exerciseNumber + "\"\> " + setNumber + setWeight + setRep + "\</div\>" );

    $('#ex-' + exerciseNumber).append( addNewSetBtn );
    $('#ex-' + exerciseNumber).append( removeSetBtn );
  }

  function removeSetRow( exerciseNumber ){
    muscleSet[exerciseNumber-1] --;
    var element = $('.latestSet-'+exerciseNumber);
    var previousElement = element.prev();
    previousElement.addClass('latestSet-'+exerciseNumber);
    element.remove();
    if( muscleSet[exerciseNumber-1] == 1) {
      $('#removeSetBtn-'+exerciseNumber).remove();
    }
  }

  function addExerciseRow() {

    muscleSet.push(0);

    var exercise = "<div class=\"col-md-4 inputBlock\"><input type=\"text\" class=\"form-control\" name=\"exercise" + muscleSet.length + "\" id=\"exercise" + muscleSet.length + "\" onChange=\"check_string(this , this.id)\" autocomplete=\"off\"  required><label for=\"exercise" + muscleSet.length + "\">Exercise " + muscleSet.length + " </label><span class=\"error\" id=\"exercise" + muscleSet.length + "Err\"></span></div>";

    var set = "<div class=\"col-md-8\"><div class=\"set-block\" id=\"exercise-" + muscleSet.length + "\"> <!--calling the function to add a first set automatically on script load --> </div></div>";

    $(".exercise-block").append( "\<div class=\"row\" id=\"ex-" + muscleSet.length + "\"\> " + exercise + set + "\</div\>" );

    addSetRow( muscleSet.length );
  }

  //Fixing the muscle input row upon reaching the top of screen

  var $window = $(window);
  $window.bind('scroll', fixMuscleColumn);

  function fixMuscleColumn() {
    var top = $(document).scrollTop();
    var topFixDistance = $('.slider-menu').height() + $('.menu-bar').height() ;
    if( top > topFixDistance ) {
      $('.muscle-block').css({
        'position': 'fixed',
        'z-index': '999',
        'width': '100%',
        'top': topFixDistance,
        'left': '0',
        'padding-left': '50px',
        'background': '#fff'
      });
      $('#dummy_area').fadeIn(100).css('height',$('.muscle-block').css('height'));
    } else {
      $('.muscle-block').css({
        'position': 'static',
        'padding-left': '0px',
        'background': '#fff'
      });
      $('#dummy_area').fadeOut(100).css('height','0');
    }
  }


  //--------------------------------------------
  // AJAX CALLS TO PHP FILE
  //--------------------------------------------

  $('#submit-btn').click( function(e) {
    e.preventDefault();
    var check1 = hasNoError();
    var check2 = notEmpty();

    //Checking if it is a rest day so avoiding the need to fill completely
    if( $('#muscle').val().trim().toUpperCase() == "REST" && $('#date').val().trim() != "" && $('#day').val().trim() != "") {
      check2 = true;
    }

    if( check1 && check2 ) {
      objectify_data();
      startAjax();
      allData = [];
    } else {
      vibrate();
    }

  });

  function objectify_data() {

    for( var i=1; i<=muscleSet.length ; i++) {
      var tempId = "#exercise" + i;
      allData.push( { name: $(tempId).val(), set_weight : getWeight(i), set_rep : getRep(i)  } ) ;
    }
  }

  function getWeight(id) {
    var weight = [];
    for ( var i=1 ; i<=muscleSet[id-1] ; i++ ) {
      var weightId = "#set_weight-" + id + "-" + i;
      weight.push( $(weightId).val() );
    }
    return weight;
  }
  function getRep(id) {
    var rep = [];
    for ( var i=1 ; i<=muscleSet[id-1] ; i++ ) {
      var repId = "#set_rep-" + id + "-" + i;
      rep.push( $(repId).val() );
    }
    return rep;
  }

  function startAjax() {
    $.ajax({
      type: 'POST',
      url: 'php/add_workout_data.php',
      data: {
        date: $('#date').val(),
        day: $('#day').val(),
        muscle: $('#muscle').val(),
        muscleSet: muscleSet,
        allData: JSON.stringify(allData)
      },
      success: function(response) {

        //displaying the response from PHP file
        if( response == "" ) {
          $('#submit-btn').fadeOut();
          response = "Workout Added."+"\n Continue the good work and keep getting healthy & fit.";
        }
        showError("Congrats !!!" , response , "Ok" , "error_close");
        $('.submit-block #add_more_workout_btn').fadeIn(500);
      }
    });
  }

  //FUNCTION TO RELOAD PAGE AND ADD ANOTHERR WORKOUT
  $('#add_more_workout_btn').click( function() {
    window.location.reload();
  });

  //Function to check if any error present
  function hasNoError() {
    var valid = true;

    $('.error').each( function() {
      var element = $(this);
      if( element.html() != ""){
        valid = false;
      }
    });
    return valid;
  }

  //Function to check if all elements are entered and none are null
  function notEmpty() {
    var valid = true;
    $('.form-control').each( function() {
      var element = $(this);
      if( element.val().trim() == ""){
        valid = false;
        console.log($(this).attr('id'));
      }
    });
    return valid;
  }

  //function to vibrate the form
  function vibrate() {
    $('.form-group').effect("shake",{times:3},500);
  }
  

});
