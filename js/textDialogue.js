/*MODAL*/

// Get the modal
var text_modal = document.getElementById("textModal");

// Get the button that opens the modal
var open_btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
open_btn.onclick = function() {
    text_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    text_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == text_modal) {
        text_modal.style.display = "none";
    }
}

// Get the modal
var dl_modal = document.getElementById("downloadModal");

// Get the button that opens the modal
var dl_btn = document.getElementById("dlModels");

var span2 = document.getElementsByClassName("close")[1];
span2.onclick = function() {
    dl_modal.style.display = "none";
}

// When the user clicks the button, open the modal 
dl_btn.onclick = function() {
    dl_modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == dl_modal) {
        dl_modal.style.display = "none";
    }
}

/*DIALOGUE SCRIPT*/

$("select.charLine_select").change(function() {
    var input = this;
    var id = $(input).attr('id').match(/(\d+)/)[1];
    var activeChar1 = $(input).val();
    var motionSelect = "select#char_motion" + id;

    $(motionSelect).empty();
    if (activeChar1 == "char_a") {
        $("#function > #g1 > select.motion option").clone().appendTo(motionSelect);
    } else {
        $("#function2 > #g2 > select.motion option").clone().appendTo(motionSelect);
    }
});


$("select#num_lines").change(function() {
    var numberLines = parseInt($(this).val());

    $("p.inputText").not(":first").removeClass("active").hide();


    $("p.inputText").each(function(index, element) {

        if (index > numberLines - 1) {
            return false;
        }
        $(this).addClass("active").show();

    });


});



/*GLOBAL VARIABLES*/
var activeSpeaker = [];
var activeChar = [];
var activeDialogue = [];
var activeMotion = [];
var counter = 0;
var numlines = 0;

$("#submitText").click(function() {

    $("#textbox").empty();
    numlines = parseInt($("select#num_lines").val());

    //empty arrays
    if (checkFields() == false) {
        return;
    }
    activeSpeaker = [];
    activeChar = [];
    activeDialogue = [];
    activeMotion = [];
    counter = 0;

    $("button#toggleTextbox").attr("disabled", false);
    $("button#resetText").attr("disabled", false);

    //fill arrays
    $("p.inputText.active > select.charLine_select").each(function() {
        activeChar.push($("option:selected", this).val());
        activeSpeaker.push($("option:selected", this).html());
    })

    $("p.inputText.active > input.c_text").each(function() {
        activeDialogue.push($(this).val());
    })

    $("p.inputText.active > select.charMotion_select").each(function() {
        activeMotion.push($(this).val());
    })

    text_modal.style.display = "none";
    if (numlines > 1) {
        $("#arrowbox").addClass("arrowtips");
        $("#navi").show();
        $(".back").hide();
        $(".forward").show();
    } else {
        $("#arrowbox").removeClass("arrowtips");
        $("#navi").hide();
    }

    $("#toggle_text").show();

    if (($("input#textwriter").is(":checked")) &&
        ($("input#auto_text").is(":checked")) &&
        parseInt($("select#num_lines").val()) > 1) {
        autoTextPlayer();
    } else {
        $("#speaker").html(activeSpeaker[0]);
        var firstText = activeDialogue[0];
        if (activeChar[0] == "char_a") {
            stage.children[0].model.startMotion("motion", activeMotion[0])
        } else if (activeChar[0] == "char_b") {
            stage.children[1].model.startMotion("motion", activeMotion[0])
        }


        if ($("input#textwriter").is(":checked")) {
            $(".arrows").css("pointer-events", "none");
            typeWriter(firstText);

        } else {
            $("#textbox").html(firstText);
        }



        $("#log").append("<li>Input: " + activeSpeaker[0] + ", \"" + activeDialogue[0] + "\", " + activeMotion[0] + "</li>");

    }
    $("button#downloadJsonScript").attr("disabled", false);
});

$(".forward").click(function() {

    if (counter < (parseInt($("select#num_lines").val()) - 1)) {
        counter++;


        $("#speaker").html(activeSpeaker[counter]);
        var currentText = activeDialogue[counter];
        $("#textbox").empty();

        if (activeChar[counter] == "char_a") {
            stage.children[0].model.startMotion("motion", activeMotion[counter])
        } else if (activeChar[counter] == "char_b") {
            stage.children[1].model.startMotion("motion", activeMotion[counter])
        }

        if ($("input#textwriter").is(":checked")) {
            $(".arrows").css("pointer-events", "none");
            typeWriter(currentText);
        } else {
			$(".arrows").css("pointer-events", "none");
            $("#textbox").html(currentText);	
			setTimeout(function(){
			$(".arrows").css("pointer-events", "auto");}, 5000);
        }
		
		$("#log").append("<li>Forward - Input: " + activeSpeaker[counter] + ", \"" + activeDialogue[counter] + "\", " + activeMotion[counter] + "</li>");

        

        if (counter == (parseInt($("select#num_lines").val()) - 1)) {
            $(".back").show();
            $(".forward").hide();
        } else {
            $(".forward").show();
            $(".back").show();
        }


    } else {
        $("#log").append("<li>Reached end of input dialogue</li>");
        return;
    }

});

$("#resetText").click(function() {

    counter = 0;
    $("#speaker").empty();
    $("#textbox").empty();
    $("#speaker").html(activeSpeaker[0]);
    $("#textbox").html(activeDialogue[0]);

    if (activeChar[0] == "char_a") {
        stage.children[0].model.startMotion("motion", activeMotion[0])
    } else if (activeChar[0] == "char_b") {
        stage.children[1].model.startMotion("motion", activeMotion[0])
    }

    $(".forward").show();
    $(".back").hide();
    $("#log").append("<li>Reset to beginning of text.</li>");

});

$(".back").click(function() {

    if (counter > 0) {
        counter--;

        if (counter == 0) {
            $(".forward").show();
            $(".back").hide();
        } else {
            $(".back").show();
            $(".forward").show();
        }

        $("#textbox").empty();
        $("#speaker").html(activeSpeaker[counter]);
        var currentText = activeDialogue[counter];

        if (activeChar[counter] == "char_a") {
            stage.children[0].model.startMotion("motion", activeMotion[counter])
        } else if (activeChar[counter] == "char_b") {
            stage.children[1].model.startMotion("motion", activeMotion[counter])
        }

        if ($("input#textwriter").is(":checked")) {
            $(".arrows").css("pointer-events", "none");
            typeWriter(currentText);
        } else {
			$(".arrows").css("pointer-events", "none");
            $("#textbox").html(currentText);
			setTimeout(function(){
			$(".arrows").css("pointer-events", "auto");}, 5000);
        }
        $("#log").append("<li>Back - Input: " + activeSpeaker[counter] + ", \"" + activeDialogue[counter] + "\", " + activeMotion[counter] + "</li>");




    } else {

        $("#log").append("<li>Reached beginning of input dialogue</li>");
        return;
    }

});

function checkFields() {
    var charError = 0;
    var textError = 0;
    var motionError = 0;

    $("p.inputText.active > select.charLine_select").each(function() {
        if ($(this).val() == "" || $(this).val() == null) {
            charError++;
        }
    });
    if (charError > 0) {
        $("#modal_error").html("You are missing character names!");
        return false;
    }

    $("p.inputText.active > input.c_text").each(function() {
        if ($(this).val() == "" || $(this).val() == null) {
            textError++;
        }
    });

    if (textError > 0) {
        $("#modal_error").html("You are missing character dialogue!");
        return false;
    }

    $("p.inputText.active > select.charMotion_select").each(function() {
        if ($(this).val() == "" || $(this).val() == null) {
            motionError++;
        }
    });
    if (textError > 0) {
        $("#modal_error").html("You are missing character motions!");
        return false;
    }


    $("#modal_error").empty();
}

function exportText() {
    var charNameA = $("#active_charA").text() + "_";
    var charNameB = "";
    if ($("#active_charB").text() != "") {
        charNameB = $("#active_charB").text() + "_";
    }
    var fileName = "Script_" + charNameA + charNameB;
    var activeChar1;
    var motionName;
    var exportJson = [];


    for (var i = 0; i < numlines; i++) {

        if (activeChar1 == "char_a") {
            motionName = $('#function > #g1 > select.motion option').eq(activeMotion[i]).text();

        } else {
            motionName = $("#function2 > #g2 > select.motion option").eq(activeMotion[i]).text();
        }

        exportJson.push({
            linenumber: parseInt(i + 1),
            activespeaker: activeSpeaker[i],
            charposition: activeChar[i],
            dialogue: activeDialogue[i],
            motion: motionName,
            motionnum: activeMotion[i]
        });
    }
    var ts = Math.round(+new Date() / 1000);

    fileName += ts;

    downloadObjectAsJson(exportJson, fileName);
}

function downloadObjectAsJson(exportObj, exportName) {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, undefined, 4));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    downloadAnchorNode.target = '_blank';
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    $("#log").append("<li style=\"color:green;\">Downloaded " + exportName + ".json</li>");
}

$('#importJson').click(function() {
    document.getElementById('json-input').click();

});

function readJson(input) {
    var results;
    let file = input.files[0];
    if (file.length <= 0) {
        return false;
    }
    var fr = new FileReader();
    fr.onload = function(e) {
        var checkJson = IsValidJSONString(e.target.result);
        if (checkJson == false) {
            return false;
        } else {
            results = JSON.parse(e.target.result);

            $("p.inputText > input").empty();
			$("select.charLine_select").val("");
            $("select.charMotion_select").empty();

            $("select#num_lines").val(results.length);
            $("p.inputText").not(":first").removeClass("active").hide();


            $("p.inputText").each(function(index, element) {

                if (index > results.length - 1) {
                    return false;
                }
                $(this).addClass("active").show();

            });


            for (var i = 0; i < results.length; i++) {
                var obj = results[i];
                var id = parseInt(i + 1);
                if (!(obj.hasOwnProperty("charposition")) ||
                    !(obj.hasOwnProperty("dialogue")) ||
                    !(obj.hasOwnProperty("motionnum"))) {
                    $("#log").append("<li style=\"color:red;\">Incorrect JSON format.</li>");
                } else {
                    $("select#charName_text" + id).val(obj.charposition);
                    var d_text = obj.dialogue.replace(/&quot;/g, '\"');
						d_text = d_text.replace(/\/\//g, "/");

                    $("#c_dialogue" + id).val(d_text);

                    var motionSelect = "select#char_motion" + id;
                    if (obj.charposition == "char_a") {
                        $("#function > #g1 > select.motion option").clone().appendTo(motionSelect);
                    } else if (obj.charposition == "char_b") {
                        $("#function2 > #g2 > select.motion option").clone().appendTo(motionSelect);
                    } else {
                        $("#log").append("<li style=\"color:red;\">charPosition invalid.</li>");
                    }

                    $(motionSelect).val(obj.motionnum);
                }
            }
        }
    }
    fr.readAsText(file);

    $("span#json_name").html(file.name);
}

function IsValidJSONString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}



//TYPEWRITER
function typeWriter(str) {

    var convBox = document.getElementById("textbox");
    var speed = parseInt($("#text_speed").val());
	var spd;
	if((speed + 1 + str.length * 20) < 5000)
	{
		spd = 5000;
	}
	else
	{
		spd = speed + 1 + str.length * 20;
	}

    setTimeout(function() {
        $(".arrows").css("pointer-events", "auto");
    }, spd);

    for (let i = 0; i <= str.length; i++) {
        setTimeout(function() {
            convBox.innerHTML = str.substr(0, i);
        }, speed + i * 20);
    }

}

async function autoTextPlayer() {


    var lines = parseInt($("select#num_lines").val());
    var convBox = document.getElementById("textbox");
    var speed = parseInt($("#text_speed").val());
    $(".arrows").css("pointer-events", "none");
    $(".arrows").css("filter", "brightness(50%)");
    $(".charBox").css("pointer-events", "none");
    $("#fun_stuff").css("pointer-events", "none");


    $("#textbox").empty();

    //for (counter = 0; counter < lines; counter++) {
    for (counter; counter < lines; counter++) {

        if (counter != 0) {
            $(".back").show();
        }

        var str = activeDialogue[counter];

        $("#speaker").html(activeSpeaker[counter]);

        if (activeChar[counter] == "char_a") {
            stage.children[0].model.startMotion("motion", activeMotion[counter])
        } else if (activeChar[counter] == "char_b") {
            stage.children[1].model.startMotion("motion", activeMotion[counter])
        }


        //for (let i = 0; i <= str.length; i++) {

        /*setTimeout(function() {convBox.innerHTML = str.substr(0, i);     
        		}, speed + i * 20); */

        //typeWriter(str);

        for (let i = 0; i <= str.length; i++) {
            setTimeout(function() {
                convBox.innerHTML = str.substr(0, i);
            }, speed + i * 20);
        }

        await new Promise(r => setTimeout(r, speed + str.length * 20 + 4000));
        $("#log").append("<li style=\"color:red;\">Autoplaying Dialogue Line " + (counter + 1) + "...</li>");

    }

    $("#log").append("<li>Autoplay finished.</li>");


    $(".forward").hide();
    $(".arrows").css("pointer-events", "auto");
    $(".arrows").css("filter", "brightness(1)");
    $("#fun_stuff").css("pointer-events", "auto");
    $(".charBox").css("pointer-events", "auto");
    counter = counter - 1;
}



$("#toggleTextbox").click(function() {

    $("#toggle_text").toggle();

});