// Get the modal
var modal = document.getElementById("textModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/*$("select#charName_text").change(function() {
	
	var activeChar = $("select#charName_text").val(); 
	
	$("select#char_motion").empty();
	if (activeChar == "char_a")
	{
		$("#function > #g1 > select.motion option").clone().appendTo("select#char_motion");
	}
	
	else
	{
		$("#function2 > #g2 > select.motion option").clone().appendTo("select#char_motion");
	}
});*/

$("select#charName_text1").change(function() {
	
	var activeChar1 = $(this).val(); 
	
	$("select#char_motion1").empty();
	if (activeChar1 == "char_a")
	{
		$("#function > #g1 > select.motion option").clone().appendTo("select#char_motion1");
	}
	
	else
	{
		$("#function2 > #g2 > select.motion option").clone().appendTo("select#char_motion1");
	}
});


$("select#charName_text2").change(function() {
	
	var activeChar2 = $(this).val(); 
	
	$("select#char_motion2").empty();
	if (activeChar2 == "char_a")
	{
		$("#function > #g1 > select.motion option").clone().appendTo("select#char_motion2");
	}
	
	else
	{
		$("#function2 > #g2 > select.motion option").clone().appendTo("select#char_motion2");
	}
});

$("select#charName_text3").change(function() {
	
	var activeChar3 = $(this).val(); 
	
	$("select#char_motion3").empty();
	if (activeChar3 == "char_a")
	{
		$("#function > #g1 > select.motion option").clone().appendTo("select#char_motion3");
	}
	
	else
	{
		$("#function2 > #g2 > select.motion option").clone().appendTo("select#char_motion3");
	}
});


$("select#charName_text4").change(function() {
	
	var activeChar4 = $(this).val(); 
	
	$("select#char_motion4").empty();
	if (activeChar == "char_a")
	{
		$("#function > #g1 > select.motion option").clone().appendTo("select#char_motion4");
	}
	
	else
	{
		$("#function2 > #g2 > select.motion option").clone().appendTo("select#char_motion4");
	}
});


$("select#num_lines").change(function() {
	
	var numberLines = $(this).val(); 
	
	switch(numberLines)
	{
		case '1':
		$("p.inputText").not(":first").removeClass("active").hide();
		break;
		case '2':
		$("p.inputText").not(":first").removeClass("active").hide();
		$("p.inputText:eq(1)").addClass("active").show();
		break;
		case '3':
		$("p.inputText").not(":eq(3)").addClass("active").show();
		$("p.inputText:eq(3)").removeClass("active").hide();
		break;
		case '4':
		$("p.inputText").addClass("active").show();
		break;
	}
});


/*$("#submitText").click(function() {
var dialogue = $("#c_dialogue").val();
var activeChar = $("select#charName_text").val(); 

if (activeChar == "" || dialogue == "")
{
	$("#modal_error").html("You must input values!");
	return;	
}
	
modal.style.display = "none";

$("#toggle_text").show();

$("#speaker").html($("select#charName_text option:selected").html());


var i = 0;
var timer = setInterval(function(){
    document.getElementById("textbox").innerHTML+=dialogue[i];i++;if(i>dialogue.length-1){clearInterval(timer)}
},50)


$("button#toggleTextbox").attr("disabled", false);

	if (activeChar == "char_a")
	{
		stage.children[0].model.startMotion("motion", $("select#char_motion").val())
	}
	
	else if (activeChar == "char_b")
	{
		stage.children[1].model.startMotion("motion", $("select#char_motion").val())
	}

	$("#log").append("<li>Input dialogue for " + $("select#charName_text option:selected").html() + "</li>");
});*/

var activeSpeaker = [];	
var activeChar = [];
var activeDialogue = [];
var activeMotion = [];
var counter = 0;

$("#submitText").click(function() {

$("#textbox").empty();
var numlines = parseInt($("select#num_lines").val());

//empty arrays
checkFields();
activeSpeaker = [];	
activeChar = [];
activeDialogue = [];
activeMotion = [];
counter = 0;

$("button#toggleTextbox").attr("disabled", false);

	//fill arrays
	$("p.inputText.active > select.charLine_select").each(function(){
		activeChar.push($("option:selected", this).val());
		activeSpeaker.push($("option:selected", this).html());
	})
	
	$("p.inputText.active > input.c_text").each(function(){
		activeDialogue.push($(this).val());
	})

	$("p.inputText.active > select.charMotion_select").each(function(){
		activeMotion.push($(this).val());
	})
	
modal.style.display = "none";
			if (numlines > 1)
			{
				$("#arrowbox").addClass("arrowtips");
				$("#navi").show();
			}
			else
			{
				$("#arrowbox").removeClass("arrowtips");
				$("#navi").hide();
			}

$("#toggle_text").show();

		//initialize first dialogue
		$("#speaker").html(activeSpeaker[0]);
		//$("#textbox").html(activeDialogue[0]);
		var firstText = activeDialogue[0];
		if (activeChar[0] == "char_a")
			{
				stage.children[0].model.startMotion("motion", activeMotion[0])
			}
			
		else if (activeChar[0] == "char_b")
			{
				stage.children[1].model.startMotion("motion", activeMotion[0])
			}
			
			
			if($("input#textwriter").is(":checked"))
					{		
							var i = 0;
							var timer = setInterval(function(){
								$(".forward").css("pointer-events", "none");
								document.getElementById("textbox").innerHTML+=firstText[i];i++;
								
								if(i > firstText.length-1)
								{
									$(".forward").css("pointer-events", "auto");
									clearInterval(timer)
								}
							},50)
							}
					else{
						$("#textbox").html(firstText);
					}			
		


	$("#log").append("<li>Input: " + activeSpeaker[0] + ", \"" + activeDialogue[0] + "\", " + activeMotion[0] +"</li>");
	counter++;
});

$(".forward").click(function() {

if (counter <= (parseInt($("select#num_lines").val())-1))
{
	
		$("#speaker").html(activeSpeaker[counter]);
		var currentText = activeDialogue[counter];
		$("#textbox").empty();
		
		if (activeChar[counter] == "char_a")
			{
				stage.children[0].model.startMotion("motion", activeMotion[counter])
			}
			
		else if (activeChar[counter] == "char_b")
			{
				stage.children[1].model.startMotion("motion", activeMotion[counter])
			}	
	
		if($("input#textwriter").is(":checked"))
		{
				var i = 0;
				var timer = setInterval(function(){
					$(".forward").css("pointer-events", "none");
					$(".back").css("pointer-events", "none");
					document.getElementById("textbox").innerHTML+=currentText[i];i++;
					
					if(i > currentText.length-1)
					{
						$(".forward").css("pointer-events", "auto");
						$(".back").css("pointer-events", "auto");
						clearInterval(timer)
					}
				},50)
		}
		else{
			$("#textbox").html(currentText);
		}
		
$("#log").append("<li>Input: " + activeSpeaker[counter] + ", \"" + activeDialogue[counter] + "\", " + activeMotion[counter] +"</li>");
		
		if(counter == (parseInt($("select#num_lines").val())-1))
		{
			$(".back").show();
			$(".forward").hide();
			counter--;
		}
		
		else{
			$(".forward").show();
			$(".back").show();
			counter++;
		}


}
else
{	
$("#log").append("<li>Reached end of input dialogue</li>");
return;}

});

$("#resetText").click(function() {
	
	if($("select#num_lines").val() != "1"){
	
	counter = 0;
	$("#speaker").empty();
	$("#textbox").empty();
	$("#speaker").html(activeSpeaker[0]);
	$("#textbox").html(activeDialogue[0]);
	
			if (activeChar[0] == "char_a")
			{
				stage.children[0].model.startMotion("motion", activeMotion[0])
			}
			
		else if (activeChar[0] == "char_b")
			{
				stage.children[1].model.startMotion("motion", activeMotion[0])
			}
			
	$(".forward").show();
	$(".back").hide();
	$("#log").append("<li>Reset to beginning of text.</li>");
	}
	else
		return;
});

$(".back").click(function() {

if (counter >= 0)
{	

		$("#textbox").empty();
		$("#speaker").html(activeSpeaker[counter]);
		var currentText = activeDialogue[counter];
		
		if (activeChar[counter] == "char_a")
			{
				stage.children[0].model.startMotion("motion", activeMotion[counter])
			}
			
		else if (activeChar[counter] == "char_b")
			{
				stage.children[1].model.startMotion("motion", activeMotion[counter])
			}	
			
	if($("input#textwriter").is(":checked"))
		{
			var i = 0;
			var timer = setInterval(function(){
				$(".forward").css("pointer-events", "none");
				$(".back").css("pointer-events", "none");
				document.getElementById("textbox").innerHTML+=currentText[i];i++;
				
				if(i > currentText.length-1)
				{
					$(".forward").css("pointer-events", "auto");
					$(".back").css("pointer-events", "auto");
					clearInterval(timer)
				}
			},50)
			
			}
		else{
			$("#textbox").html(currentText);
		}
$("#log").append("<li>Input: " + activeSpeaker[counter] + ", \"" + activeDialogue[counter] + "\", " + activeMotion[counter] +"</li>");					

	
					if (counter == 0)
					{
						$(".forward").show();
						$(".back").hide();
						counter++;
					}
					else{
						$(".back").show();
						$(".forward").show();
						counter--;
					}
			}
else
{	
$("#log").append("<li>Reached beginning of input dialogue</li>");
return;}

});

function checkFields(){
	
	$("p.inputText.active > select.charLine_select").each(function(){
		if(this.value == "")
		{
			$("#modal_error").html("You are missing character names!");
			return;	
		}
	})
	
	$("p.inputText.active > input.c_text").each(function(){
		if(this.value == "")
		{
			$("#modal_error").html("You are missing character dialogue!");
			return;	
		}
	})
	
	$("p.inputText.active > select.charMotion_select").each(function(){
		if(this.value == "")
		{
			$("#modal_error").html("You are missing character motions!");
			return;	
		}
	})
}



$("#toggleTextbox").click(function() {

$("#toggle_text").toggle();

});