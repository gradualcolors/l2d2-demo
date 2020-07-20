window.URL = window.URL || window.webkitURL;
let page = 0;
let mainDiv = document.getElementById('capture');
let sl = $("#custom");
let charName1 = null;
let charName2 = null;
let modelElem = $("input#modelElem");
let texElem = $("input#texElem");
let modelElem2 = $("input#modelElem2");
let texElem2 = $("input#texElem2");
let charJson1 = {}
let charJson2 = {}
let webDir = window.location.protocol + window.location.hostname + "/" ;
let screenshotName = null;
var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var timeStamp;
let currentBlobBG = null;

const downloadBlob = function(index) {
    return function(blob) {
        const a = document.createElement("a");
		screenshotName = charName1;
		if(charName2 != null)
		{screenshotName += "_" + charName2;}
		a.download = screenshotName + "_" + index;
        a.href = window.URL.createObjectURL(blob);
		a.target='_blank';
        a.click();
		setTimeout(function(){
        window.URL.revokeObjectURL(a.href);}, 1000);
		$("#log").append("<li style=\"color:green;\">Render screenshot captured.</li>");
    }
}
function save(index) { renderer.view.toBlob(downloadBlob(index)); }
function capture() { save(page++); }

function get(url, callback) {
    $.getJSON({
        url: url,
        success: function(data) {callback(data)},
        error: function(xhr) {alert(xhr.responseJSON)}
    })
}

function getImage() {
$("button#capture_div").attr("disabled", true);
$("#log").append("<li>Processing window screenshot...</li>");
  domtoimage.toBlob(mainDiv)
    .then(function(blob) 
	{timeStamp = Math.round(+new Date()/1000);
      window.saveAs(blob, 'Screenshot_' + timeStamp + '.png');
	  $("#log").append("<li style=\"color:green;\">Window screenshot captured.</li>");
	  $("button#capture_div").attr("disabled", false);
    },'image/png');
	
	setTimeOut(function(){
        window.URL.revokeObjectURL(blob);}, 1000);
}


$(document).ready(function() {
	
var tooltips = document.querySelectorAll('.tooltip span');

window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};	
	
	$( ".cd-start" ).click(function() {
		  $( "#credits_box" ).toggleClass("credits_m_hide");
		}); 
		    
	$( ".credit_back" ).click(function() {
		  $( "#credits_box" ).toggleClass("credits_m_hide");
		});   
	
	$( ".icon" ).click(function() {
		$(".icon").removeClass("activeI").addClass("passiveI");
		$( ".blurb" ).hide();
		if($(this).hasClass( "inst" ))
		{
			$(".inst" ).addClass("activeI").removeClass("passiveI");
			$( "#instructions" ).show();
		}
		else if($(this).hasClass( "program" ))
		{
			$(".program" ).addClass("activeI").removeClass("passiveI");
			$( "#programmer" ).show();
		}
		else{
			$(".other" ).addClass("activeI").removeClass("passiveI");
			$( "#other_info" ).show();
		}
		  		 
		});  
		
	$("select.char_select").change(function() {
    var input = this;
	var $div = $(input).closest(".charBox");
	
	var chara = $(input).val();

	if (chara == "Keito")
	{
		$div.find("span.flag.keichan").show();
	}
	else
	{
		$div.find("input.keitocomicworld").prop('checked', false);
		$div.find("span.flag.keichan").hide();
	}
});	
		
	
	
	if (window.innerWidth > 1200)
	{
	init(1200, 676);
	} 
	else if (window.innerWidth > 817)
		
	{
		init(900, 507);
	}
	
	else 
		
	{
		init(768, 432);
	}

        let sm = $("#function > #g1 > select.motion");
		let sm2 = $("#function2 > #g2 > select.motion");
		
		$("button#modela").click( function() {

		charName1 = $("select#char1").val();					
				
		$("span#active_charA").html(charName1);
		
		$("select.charLine_select").children("option[value='char_a']").text(charName1);
		
		
		if(charName1 == "" || charName1 == null)
		{
			$("#log").append("<li style=\"color:red;\">You must select Character A's name!</li>");
			return;
		}
		else if(modelElem[0].files.length == "0" || texElem[0].files.length == "0")
		{
			$("#log").append("<li style=\"color:red;\">You are missing files!</li>");
			return;
		}
		
            let firstChild = null;
			if(stage.children.length <= 1)
				
			{	
				if(stage.children.length == 1){		
					var mocRef = stage.children[0].modelDefine.model;
					var texRef = stage.children[0].modelDefine.textures;
					window.URL.revokeObjectURL(mocRef);
					window.URL.revokeObjectURL(texRef);
					$("#show_charBox1 > .float_bubble").css("background-image", "url('assets/icons/"+charName1+".png')");
					$("#log").append("<li>Changed Character A to " + charName1 + "</li>");
				}
				else
				{
					$("button#modela").html("Change Character A");
					$("#show_charBox1 > .float_bubble").css("background-image", "url('assets/icons/"+charName1+".png')");
					$("#show_charBox1 > .float_bubble >img.symbol").attr("src","assets/swap.png");
					$("#log").append("<li>Added " + charName1 + ".</li>");
					$("button#openModal").attr("disabled", false);
					$("button.captureB").attr("disabled", false);

				}
			{while (firstChild = stage.children.shift()) { firstChild.destroy(); }}			
			$("button#modelb").attr("disabled", false);
			$("#show_charBox2").css("pointer-events", "auto");
			$("#show_charBox2").css("filter", "none");
			}
			else
			{
				var mocRef = stage.children[0].modelDefine.model;
				var texRef = stage.children[0].modelDefine.textures;
				window.URL.revokeObjectURL(mocRef);
				window.URL.revokeObjectURL(texRef);				
				firstChild = stage.children[0]; firstChild.destroy(); 
					$("#show_charBox1 > .float_bubble").css("background-image", "url('assets/icons/"+charName1+".png')");
					$("#log").append("<li>Changed Character A to " + charName1 + "</li>");
			}
			
			var $flag = $("#charSpace1 > p > span.flag");
			charJson1 = modelJsonCreate(charName1, modelElem, texElem, $flag);
			_show(charJson1, function(model) {	
                sm.empty();
                for (let c in model.motions.motion) {
                    exp = model.motions.motion[c];
                    sm.append($("<option></option>").text(exp.name).val(c));
                }
				if(stage.children.length > 1)
				{
					let temp = stage.children[0];
					stage.children[0] = stage.children[1];
					stage.children[1] = temp;
					stage.children[0].adjustTranslate(-0.5, 0);
				}
                sm.val("");	
            });
			
			        });
			
		$("button#modelb").click( function() {
			
		charName2 = $("select#char2").val();
		$("span#active_charB").html(charName2);
		if(charName2 == ""  || charName2 == null)
		{
			$("#log").append("<li style=\"color:red;\">You must select Character B's name!</li>");
			return;
		}
		else if(modelElem2[0].files.length == "0" || texElem2[0].files.length == "0")
		{
			$("#log").append("<li style=\"color:red;\">You are missing files!</li>");
			return;
		}		
		
			if(stage.children.length > 1)
			{
				var mocRef2 = stage.children[1].modelDefine.model;
				var texRef2 = stage.children[1].modelDefine.textures;
				window.URL.revokeObjectURL(mocRef2);
				window.URL.revokeObjectURL(texRef2);				
				let secondChild = null;
				secondChild = stage.children[1]; secondChild.destroy();	
			
			var $flag2 = $("#charSpace2 > p > span.flag");	
			charJson2 = modelJsonCreate(charName2, modelElem2, texElem2, $flag2);
			
			_show(charJson2, function(model2) {                                  
                sm2.empty();
                for (let c2 in model2.motions.motion) {
                    exp2 = model2.motions.motion[c2];
                    sm2.append($("<option></option>").text(exp2.name).val(c2));
                }
                sm2.val("");
				stage.children[1].adjustTranslate(0.5, 0);
				$("button#modelb").html("Change Character B");
				$("button#removeb").show();
				$("#show_charBox2 > .float_bubble").css("background-image", "url('assets/icons/"+charName2+".png')");
					$("#log").append("<li>Changed Character B to " + charName2 + "</li>");
			});
				//$("select#charName_text").children('option[value="char_b"]').text(charName2);
				$("select.charLine_select").children('option[value="char_b"]').text(charName2);
				$("select#num_lines").val("1");
				$("#speaker").empty();
				$("#textbox").empty();
				$("#toggle_text").hide();
			}
			else{
			//$("select#charName_text").append($("<option></option>").text(charName2).val("char_b"));
			$("select.charLine_select").append($("<option></option>").text(charName2).val("char_b"));
			
			//$("select.charLine_select").append($("<option></option>").text("Both of them").val("char_ab"));

			var $flag2 = $("#charSpace2 > p > span.flag");	
			charJson2 = modelJsonCreate(charName2, modelElem2, texElem2, $flag2);
			_show(charJson2, function(model2) {  
                sm2.empty();
                for (let c2 in model2.motions.motion) {
                    exp2 = model2.motions.motion[c2];
                    sm2.append($("<option></option>").text(exp2.name).val(c2));
                }
                sm2.val("");
				stage.children[0].adjustTranslate(-0.5, 0);
				stage.children[1].adjustTranslate(0.5, 0);
				$("button#modelb").html("Change Character B");
				$("button#removeb").show();
				$("#show_charBox2 > .float_bubble").css("background-image", "url('assets/icons/"+charName2+".png')");
				$("#show_charBox2 > .float_bubble >img.symbol").attr("src","assets/swap.png");
					$("#log").append("<li>Added " + charName2 + ".</li>");
			});
			}
				
			});


		
			
		$("button#removeb").click( function() {
		
			let lastChild = null;
			lastChild = stage.children[1]; lastChild.destroy();
			stage.children[0].adjustTranslate(0.5, 0);                     
                sm2.empty();
                sm2.val("");
				$("button#removeb").hide();
				$("button#modelb").html("Add Character B");
				$("#show_charBox2 > .float_bubble").css("background-image", "url('assets/icons/Hokuto.png')");
				$("#show_charBox2 > .float_bubble >img.symbol").attr("src","assets/add.png");
				$("#log").append("<li>Removed Character B.</li>");
				//$("select#charName_text option[value='char_b']").remove();
				$("select.charLine_select option[value='char_b']").remove();
				$("select#num_lines").val("1");
				$("#speaker").empty();
				$("#textbox").empty();
				$("#toggle_text").hide();
				//$("select.charLine_select option[value='char_ab']").remove();


});
		
        sm.change(function() { stage.children[0].model.startMotion("motion", this.value) });
		sm2.change(function() { stage.children[1].model.startMotion("motion", this.value) });
        $("#function > #g1 > button.motion").click(function(){ sm.change() });
		$("#function2 > #g2 > button.motion").click(function(){ sm2.change() });

    $('#background').click(function(){
        $('.background').toggle();
    });
	
	    $('#close_charBox1').click(function(){
    	var hidden = $('#charSpace1');
        hidden.fadeOut(150);		
		$('#show_charBox1').show();
		$('.cd-start').css("margin-top", "");
		$('.cd-start').css("margin-left", "");
		
    });
    
    $('#show_charBox1').click(function(){
    	var hidden = $('#charSpace1');
		$('#show_charBox1').hide();
		hidden.delay(150).fadeIn(150);	
		//$('.cd-start').css("margin-top", "265px");
		$('.cd-start').css("margin-left", "250px");
		$('.cd-start').css("margin-top", "0px");
    });

	    $('#close_charBox2').click(function(){
    	var hidden = $('#charSpace2');
        hidden.fadeOut(150);		
		$('#show_charBox2').show();
			$('.bg-swap').css("margin-top", "");
			$('.bg-swap').css("margin-right", "");
		
    });
    
    $('#show_charBox2').click(function(){
    	var hidden = $('#charSpace2');
		$('#show_charBox2').hide();
		hidden.delay(150).fadeIn(150);		
	//$('.bg-swap').css("margin-top", "290px");
	$('.bg-swap').css("margin-top", "0px");
	$('.bg-swap').css("margin-right", "250px");
    });

/* CREATE DIV BOX */
let idols = document.getElementById("idols");
let charDataLength = Object.keys(EnstCharData.characters).length;
var enstaChar = []; 
enstaChar = EnstCharData.characters;
for(var i = 0; i < charDataLength; i++) {
	var char_name = Object.keys(enstaChar)[i] ;
	var icon_path = "assets/icons/" + enstaChar[char_name][0].icon;
	var zip_url = enstaChar[char_name][0].drive_url;
	var divGroup = document.getElementById(enstaChar[char_name][0].group);
	
	var imgLink = document.createElement("a");
    var elem = document.createElement("img");
	
	if (zip_url == "")
    {imgLink.className = "linkbox unavailable";}
	else{
	imgLink.className = "linkbox";
    imgLink.setAttribute("href", zip_url);
	imgLink.setAttribute("target", "_blank");
	}
	elem.setAttribute("src", icon_path);
	imgLink.setAttribute("title", char_name);
	
	  imgLink.appendChild(elem); 
      divGroup.appendChild(imgLink);
	}
	  
	  

	$("input#textwriter").change(function() {
	
	$("#text_options").toggle();

});

    $('#hide_ui').click(function(){
		$('#ui').toggle();			
    });
	
	
});



function readURL(input) {
		let file = input.files[0];
		window.URL.revokeObjectURL(currentBlobBG);
		if (file != null) {
			currentBlobBG = window.URL.createObjectURL(file);
			
		$('#main').attr('style', 'background-image:url(' + currentBlobBG + ')');
		$("#log").append("<li style=\"color:green;\">Changed background to " + file.name +"</li>");
		}
		else
		{window.URL.revokeObjectURL(currentBlobBG);
		$('#main').attr('style', 'background-image:url("assets/image/bg_20_2.png")');
			$("#log").append("<li style=\"color:green;\">Reverted to default background.</li>");		
	}
}



