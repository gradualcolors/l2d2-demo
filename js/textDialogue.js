// Get the modal
var modal = document.getElementById("textModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  $("#textbox").empty();
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


$("select#charName_text").change(function() {
	
	var activeChar = $("select#charName_text").val(); 
	
	$("select#char_motion").empty();
	if (activeChar == "char_a")
	{
		$("#function > #g1 > select.motion option").clone().appendTo("select#char_motion");
	}
	
	else
	{$("#function2 > #g2 > select.motion option").clone().appendTo("select#char_motion");
	}
});


$("#submitText").click(function() {
var dialogue = $("#c_dialogue").val();
var activeChar = $("select#charName_text").val(); 

if (activeChar == "")
{
	$("#modal_error").html("You must input values!");
	return;	
}
	
modal.style.display = "none";

$("#toggle_text").show();

$("#speaker").html($("select#charName_text option:selected").html());


//typeWriter(dialogue);

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
});

function typeWriter(dialogue){

var i = 0; 
var speed = 60;
for (var i= 0; i < dialogue.length; i++)
{
document.getElementById("textbox").innerHTML += dialogue.charAt(i);
}
$("#toggleTextbox").attr("disabled", false);
}

$("#toggleTextbox").click(function() {

$("#toggle_text").toggle();

});