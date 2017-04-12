$( document ).ready(function() {
  $(".fa-chevron-up").on('click', function() {
    $(this).toggleClass('fa-chevron-down');
    $("input[type='text']").fadeToggle();
  });

  //Check off specific to-dos by clicking
  $("ul").on("click", 'li', function(){
    $(this).toggleClass("completed");
  });

  //Click on X to delete to-do
  $("ul").on("click", '.del', function(event){
    //retrieve li the span is enclosed in and fade that out, then remove it
    $(this).parent().fadeOut(500,function(){
      $(this).remove();
    });
    //stop the event from calling other events like the li click event for marking complete
    event.stopPropagation();
  });

//Enter to create new todo
  $("input[type='text']").keypress(function(event){
    //if Enter (13) is pushed
    if(event.which === 13){
      //grab new todo text from input
      var todoText = $(this).val();
      $(this).val("");
      //create new li and add to ul
      $("ul").append('<li><span class=\"del\"><i class="fa fa-trash"></i></span>' + " " + todoText + '</li>');
    }
  });


});
