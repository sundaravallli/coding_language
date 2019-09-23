$(document).ready(function() {
   document.getElementById("myFrame").onload = function() {
       $("#survey_1").hide();
       $("#survey_2").hide();
       $("#survey_3").hide();
       $("#survey_4").hide();
       $("#survey_5").hide();
       $("#congrats").hide();
       };
  $(".clickable").click(function(){   
      $("#survey_1").show();
  });
  $("#yes_rdaio").click(function(){   
    $("#survey_2").show();
});
$("#high").click(function(){   
    $("#survey_3").show();
});
$("#web").click(function(){   
    $("#survey_4").show();
});
$("#design").click(function(){   
    $("#survey_5").show();
});
$("#ui").click(function(){   
    alert('Hey... We think RUBY,PYTHON & HTML would be opt for you. Thanks....');
});

  });

  