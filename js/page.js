window.URL = window.URL || window.webkitURL;
let page = 0;
let models = null;
let voices = null;
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
function triggerF() { follow = !follow; sl.change(); }

const downloadBlob = function(index) {
    return function(blob) {
        const a = document.createElement("a");
        a.download = index;
        a.href = window.URL.createObjectURL(blob);
        a.click();
        window.URL.revokeObjectURL(a.href);
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

$(document).ready(function() {
    //init(parseInt($("#width").val()), parseInt($("#height").val()));
	init(1200, 676);


        let sm = $("#function > #g1 > select.motion");
		let sm2 = $("#function2 > #g2 > select.motion");
		
		$("button#modela").click( function() {
        //sl.change(function() {
		charName1 = $("select#char1").val();
				
		$("span#active_charA").html(charName1);
		
		//$("select#charName_text").children("option[value='char_a']").text(charName1);
		$("select.charLine_select").children("option[value='char_a']").text(charName1);
		
		
		if(charName1 == "")
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
					$("#log").append("<li>Changed Character A to " + charName1 + "</li>");
				}
				else
				{
					$("button#modela").html("Change Character A");
					$("#log").append("<li>Added " + charName1 + ".</li>");
					$("button#openModal").attr("disabled", false);

				}
			{while (firstChild = stage.children.shift()) { firstChild.destroy(); }}			
			$("button#modelb").attr("disabled", false);
			
			}
			else
			{
				var mocRef = stage.children[0].modelDefine.model;
				var texRef = stage.children[0].modelDefine.textures;
				window.URL.revokeObjectURL(mocRef);
				window.URL.revokeObjectURL(texRef);				
				firstChild = stage.children[0]; firstChild.destroy(); 
		
					$("#log").append("<li>Changed Character A to " + charName1 + "</li>");
			}
			
			charJson1 = modelJsonCreate(charName1, modelElem, texElem);
			//show("/assets/natsume" + "/", "config.model.json", function(model) {	
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
		if(charName2 == "")
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
				
			charJson2 = modelJsonCreate(charName2, modelElem2, texElem2);
			
			//show2("/assets/tsumugi" + "/", "config.model.json", function(model2) {                               
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
					$("#log").append("<li>Changed Character B to " + charName2 + "</li>");
			});
				//$("select#charName_text").children('option[value="char_b"]').text(charName2);
				$("select.charLine_select").children('option[value="char_b"]').text(charName2);
			}
			else{
			//$("select#charName_text").append($("<option></option>").text(charName2).val("char_b"));
			$("select.charLine_select").append($("<option></option>").text(charName2).val("char_b"));
			
			//$("select.charLine_select").append($("<option></option>").text("Both of them").val("char_ab"));

			
			charJson2 = modelJsonCreate(charName2, modelElem2, texElem2);
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
				$("#log").append("<li>Removed Character B.</li>");
				//$("select#charName_text option[value='char_b']").remove();
				$("select.charLine_select option[value='char_b']").remove();
				
				//$("select.charLine_select option[value='char_ab']").remove();


});
		
        sm.change(function() { stage.children[0].model.startMotion("motion", this.value) });
		sm2.change(function() { stage.children[1].model.startMotion("motion", this.value) });
        $("#function > #g1 > button.motion").click(function(){ sm.change() });
		$("#function2 > #g2 > button.motion").click(function(){ sm2.change() });

    $('#background').click(function(){
        $('.background').toggle();
    });
});
