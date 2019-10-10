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
    var yes = document.getElementById("yes_rdaio");
    var no = document.getElementById("no_rdaio");

    yes.onclick = function(){
        $("#survey_2").show();  
    }
    
    no.onclick = function(){
        alert("OOPS!! You have take one on one basic course");
    }
      
    var High_level = document.getElementById("high");
    var Low_level = document.getElementById("low");
    High_level.onclick = function(){
        $("#survey_3").show();  
    }
    
    Low_level.onclick = function(){
        alert("You have many options:Java, C++,C courses will start in a couple of weeks:");
    }
 
    var Web_Development = document.getElementById("web");
    var Artificial_Intelligence = document.getElementById("AI");

    Artificial_Intelligence.onclick = function(){
        $("#survey_4").show();  
    }
    
    Web_Development.onclick = function(){
        prompt("Do you want to get email about this:");
    }
    var Design = document.getElementById("design");
    var Back_end = document.getElementById("backend");

    Design.onclick = function(){
        confirm("You can pursue after completing backend");
    }
    Back_end.onclick = function(){
        $("#survey_5").show();  
    }

$("#ui").click(function(){   
    alert('Hey... We think RUBY,PYTHON & HTML would be opt for you. Thanks....');
});

  });

  