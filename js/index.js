console.log("this worked");

$( ".navInteraction" ).hover(function() {
      $( this ).toggleClass( "active" );
    }
  );

  $(document).on("click",".navInteraction",function(){
    console.log("It made it to the function")
    answer = $(this);

    if($("a").hasClass("clicked")){
        $(document).find("a").removeClass("clicked");
        answer.addClass("clicked");
        console.log("I am in the if loop")
    }else{
        answer.addClass("clicked");
        console.log("I am in the else loop");
    }
});