$(document).ready(function() {
    $("#survey_1").hide();
    $("#survey_2").hide();
    $("#survey_3").hide();
    $("#survey_4").hide();
    $("#survey_5").hide();
    $("#congrats").hide();
   
  $(".clickable").click(function(){
      $("#survey_1").show(); 
    });

    $('input[name=knowledge]').click(function() {
        var selectedKnowledge=$('input[name=knowledge]:checked').val();    
        if(selectedKnowledge==='yes'){
            $("#survey_2").show(); 
        }
        else{
            $("#survey_2").hide(); 
            alert("OOPS!! You have take one on one basic course");
        }
    });  

    $('input[name=language]').click(function() {
        var selectedKnowledge=$('input[name=language]:checked').val();    
        if(selectedKnowledge==='High_level'){
            $("#survey_3").show(); 
        }
        else{
            $("#survey_3").hide(); 
            alert("You have many options:Java, C++,C courses will start in a couple of weeks:");
        }
    });  

    $('input[name=area]').click(function() {
        var selectedKnowledge=$('input[name=area]:checked').val();    
        if(selectedKnowledge==='Web_Development'){
            $("#survey_4").show(); 
        }
        else{
            $("#survey_4").hide(); 
            prompt("Do you want to receive an email about this?");
        }
    });  
   
    $('input[name=interest]').click(function() {
        var selectedKnowledge=$('input[name=interest]:checked').val();    
        if(selectedKnowledge==='Design'){
            $("#survey_5").hide(); 
            confirm("You can pursue after completing backend");
        }
        else{            
            $("#survey_5").show();  
        }
    });  

    $('input[name=design]').click(function() {
        var selectedKnowledge=$('input[name=design]:checked').val();    
        if(selectedKnowledge==='UI'){
            alert('Hey '+$('input[name=namefield]').val()+'... We think RUBY,PYTHON & HTML would be opt for you. Thanks....');
        }
        else{            
            alert('Hey '+$('input[name=namefield]').val()+'... Lets try one more time...');
        }
    });  

  });

  
