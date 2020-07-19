
function modelJsonCreate(char_name, mocSelect, texSelect, $flag) {
	
	// console.log("--> LAppLive2DManager()");
var modelBlob;
var textureBlob;
var modelJson = {};
var textureAry = [];

modelBlob = handleModel(mocSelect[0].files);
textureBlob = handleTexture(texSelect[0].files);

var checkFlag = $flag.find("input.keitocomicworld").is(':checked');

if(checkFlag == true)
{textureAry.push("assets/image/keitoroses.png");
textureAry.push(textureBlob);
}
else{textureAry.push(textureBlob);}

if (char_name == "Mademoiselle")
{
	modelJson = createJSON("Mademoiselle", modelBlob, textureAry, checkFlag);
}
else
{modelJson = createJSON(char_name, modelBlob, textureAry, checkFlag);
}
return modelJson;
}

	/*   $("#file-input").on('change', function(){
		window.URL.revokeObjectURL(currentBlobBG);
        readURL(this);
    });
    
    $(".float_square.bg-swap").on('click', function() {
       $("#file-input").click();
    });
	
	 var readURL = function(input) {
        if (input.length > 0) {
		currentBlobBG = window.URL.createObjectURL(input.files[0]);
		$("#main").css("background-image", currentBlobBG);
        }
    }*/
	

function handleTexture(files) {

		for (var i = 0; i < files.length; i++) {
			var textureURL = window.URL.createObjectURL(files[i]);
		}

	return textureURL;
}

function handleModel(files) {
	
		for (var i = 0; i < files.length; i++) {
			var modelURL = window.URL.createObjectURL(files[i]);
		}

	return modelURL;
}

function createJSON(char_name, modelBlob, textureBlob, checkFlag) {

	modelJson = {
		"version": "Sample 1.0.0",
		"model": modelBlob,
		"textures": textureBlob,
		"expressions": [
			{ "name": "", "file": "" }
		],
		"motions": {
			"motion": [
				{ "name": "akubi_1", "file": "assets/motions/akubi_1.mtn" },
				{ "name": "akubi_1a", "file": "assets/motions/akubi_1a.mtn" },
				{ "name": "amazed_1", "file": "assets/motions/amazed_1.mtn" },
				{ "name": "amazed_1_1", "file": "assets/motions/amazed_1_1.mtn" },
				{ "name": "amazed_1_2", "file": "assets/motions/amazed_1_2.mtn" },
				{ "name": "amazed_1a", "file": "assets/motions/amazed_1a.mtn" },
				{ "name": "amazed_2", "file": "assets/motions/amazed_2.mtn" },
				{ "name": "amazed_2_1", "file": "assets/motions/amazed_2_1.mtn" },
				{ "name": "amazed_2_2", "file": "assets/motions/amazed_2_2.mtn" },
				{ "name": "amazed_2_1a", "file": "assets/motions/amazed_2_1a.mtn" },
				{ "name": "amazed_2a", "file": "assets/motions/amazed_2a.mtn" },
				{ "name": "amazed_3", "file": "assets/motions/amazed_3.mtn" },
				{ "name": "amazed_4", "file": "assets/motions/amazed_4.mtn" },
				{ "name": "angry_1", "file": "assets/motions/angry_1.mtn" },
				{ "name": "angry_2", "file": "assets/motions/angry_2.mtn" },
				{ "name": "angry_3", "file": "assets/motions/angry_3.mtn" },
				{ "name": "angry_3_1", "file": "assets/motions/angry_3_1.mtn" },
				{ "name": "angry_4", "file": "assets/motions/angry_4.mtn" },
				{ "name": "angry_5", "file": "assets/motions/angry_5.mtn" },
				{ "name": "angry_6", "file": "assets/motions/angry_6.mtn" },
				{ "name": "angry_7", "file": "assets/motions/angry_7.mtn" },
				{ "name": "cry_1", "file": "assets/motions/cry_1.mtn" },
				{ "name": "cry_2", "file": "assets/motions/cry_2.mtn" },
				{ "name": "cry_2_1", "file": "assets/motions/cry_2_1.mtn" },
				{ "name": "cry_3", "file": "assets/motions/cry_3.mtn" },
				{ "name": "cry_4", "file": "assets/motions/cry_4.mtn" },
				{ "name": "ehen_1", "file": "assets/motions/ehen_1.mtn" },
				{ "name": "ehen_2", "file": "assets/motions/ehen_2.mtn" },
				{ "name": "embarrassed_1", "file": "assets/motions/embarrassed_1.mtn" },
				{ "name": "embarrassed_1_1", "file": "assets/motions/embarrassed_1_1.mtn" },
				{ "name": "embarrassed_1_1a", "file": "assets/motions/embarrassed_1_1a.mtn" },
				{ "name": "embarrassed_1a", "file": "assets/motions/embarrassed_1a.mtn" },
				{ "name": "embarrassed_2", "file": "assets/motions/embarrassed_2.mtn" },
				{ "name": "embarrassed_2a", "file": "assets/motions/embarrassed_2a.mtn" },
				{ "name": "embarrassed_3", "file": "assets/motions/embarrassed_3.mtn" },
				{ "name": "embarrassed_4", "file": "assets/motions/embarrassed_4.mtn" },
				{ "name": "embarrassed_s1", "file": "assets/motions/embarrassed_s1.mtn" },
				{ "name": "embarrassed_s1_1", "file": "assets/motions/embarrassed_s1_1.mtn" },
				{ "name": "embarrassed_s2", "file": "assets/motions/embarrassed_s2.mtn" },
				{ "name": "embarrassed_s2_1", "file": "assets/motions/embarrassed_s2_1.mtn" },
				{ "name": "embarrassed_s3", "file": "assets/motions/embarrassed_s3.mtn" },
				{ "name": "embarrassed_s4", "file": "assets/motions/embarrassed_s4.mtn" },
				{ "name": "expression_1", "file": "assets/motions/expression_1.mtn" },
				{ "name": "expression_2", "file": "assets/motions/expression_2.mtn" },
				{ "name": "gimon_1", "file": "assets/motions/gimon_1.mtn" },
				{ "name": "guts_1", "file": "assets/motions/guts_1.mtn" },
				{ "name": "guts_2", "file": "assets/motions/guts_2.mtn" },
				{ "name": "hirameki_1", "file": "assets/motions/hirameki_1.mtn" },
				{ "name": "idling_1", "file": "assets/motions/idling_1.mtn" },
				{ "name": "idling_1_2", "file": "assets/motions/idling_1_2.mtn" },
				{ "name": "idling_2", "file": "assets/motions/idling_2.mtn" },
				{ "name": "idling_3", "file": "assets/motions/idling_3.mtn" },
				{ "name": "idling_3_1", "file": "assets/motions/idling_3_1.mtn" },
				{ "name": "idling_4", "file": "assets/motions/idling_4.mtn" },
				{ "name": "idling_l1", "file": "assets/motions/idling_l1.mtn" },
				{ "name": "idling_l2", "file": "assets/motions/idling_l2.mtn" },
				{ "name": "idling_l3", "file": "assets/motions/idling_l3.mtn" },
				{ "name": "idling_l4", "file": "assets/motions/idling_l4.mtn" },
				{ "name": "idling_l5", "file": "assets/motions/idling_l5.mtn" },
				{ "name": "idling_l6", "file": "assets/motions/idling_l6.mtn" },
				{ "name": "idling_l7", "file": "assets/motions/idling_l7.mtn" },
				{ "name": "idling_r1", "file": "assets/motions/idling_r1.mtn" },
				{ "name": "idling_r2", "file": "assets/motions/idling_r2.mtn" },
				{ "name": "idling_r3", "file": "assets/motions/idling_r3.mtn" },
				{ "name": "idling_r4", "file": "assets/motions/idling_r4.mtn" },
				{ "name": "idling_r5", "file": "assets/motions/idling_r5.mtn" },
				{ "name": "idling_r6", "file": "assets/motions/idling_r6.mtn" },
				{ "name": "idling_r7", "file": "assets/motions/idling_r7.mtn" },
				{ "name": "iyaiya_2", "file": "assets/motions/iyaiya_2.mtn" },
				{ "name": "joyful_1", "file": "assets/motions/joyful_1.mtn" },
				{ "name": "joyful_1_1", "file": "assets/motions/joyful_1_1.mtn" },
				{ "name": "joyful_2", "file": "assets/motions/joyful_2.mtn" },
				{ "name": "joyful_2_1", "file": "assets/motions/joyful_2_1.mtn" },
				{ "name": "joyful_2_1a", "file": "assets/motions/joyful_2_1a.mtn" },
				{ "name": "joyful_2_2", "file": "assets/motions/joyful_2_2.mtn" },
				{ "name": "joyful_2_3", "file": "assets/motions/joyful_2_3.mtn" },
				{ "name": "joyful_2_4", "file": "assets/motions/joyful_2_4.mtn" },
				{ "name": "joyful_3", "file": "assets/motions/joyful_3.mtn" },
				{ "name": "joyful_3_1", "file": "assets/motions/joyful_3_1.mtn" },
				{ "name": "joyful_3_2", "file": "assets/motions/joyful_3_2.mtn" },
				{ "name": "joyful_3_2a", "file": "assets/motions/joyful_3_2a.mtn" },
				{ "name": "joyful_4", "file": "assets/motions/joyful_4.mtn" },
				{ "name": "joyful_5", "file": "assets/motions/joyful_5.mtn" },
				{ "name": "joyful_6", "file": "assets/motions/joyful_6.mtn" },
				{ "name": "joyful_6_1", "file": "assets/motions/joyful_6_1.mtn" },
				{ "name": "katate_huru_1", "file": "assets/motions/katate_huru_1.mtn" },
				{ "name": "katate_huru_2", "file": "assets/motions/katate_huru_2.mtn" },
				{ "name": "kitty_embarrassed", "file": "assets/motions/kitty_embarrassed.mtn" },
				{ "name": "kitty_joyful", "file": "assets/motions/kitty_joyful.mtn" },
				{ "name": "kitty_sad", "file": "assets/motions/kitty_sad.mtn" },
				{ "name": "kitty_surprise", "file": "assets/motions/kitty_surprise.mtn" },
				{ "name": "miu_ehen", "file": "assets/motions/miu_ehen.mtn" },
				{ "name": "miu_idling", "file": "assets/motions/miu_idling.mtn" },
				{ "name": "miu_joyful", "file": "assets/motions/miu_joyful.mtn" },
				{ "name": "miu_normal", "file": "assets/motions/miu_normal.mtn" },
				{ "name": "naderu_1", "file": "assets/motions/naderu_1.mtn" },
				{ "name": "naderu_2", "file": "assets/motions/naderu_2.mtn" },
				{ "name": "naderu_3", "file": "assets/motions/naderu_3.mtn" },
				{ "name": "niyari_1", "file": "assets/motions/niyari_1.mtn" },
				{ "name": "niyari_1a", "file": "assets/motions/niyari_1a.mtn" },
				{ "name": "niyari_2", "file": "assets/motions/niyari_2.mtn" },
				{ "name": "niyari_2a", "file": "assets/motions/niyari_2a.mtn" },
				{ "name": "no_1", "file": "assets/motions/no_1.mtn" },
				{ "name": "no_2", "file": "assets/motions/no_2.mtn" },
				{ "name": "no_3", "file": "assets/motions/no_3.mtn" },
				{ "name": "no_4", "file": "assets/motions/no_4.mtn" },
				{ "name": "normal_1", "file": "assets/motions/normal_1.mtn" },
				{ "name": "normal_2", "file": "assets/motions/normal_2.mtn" },
				{ "name": "normal_2_1", "file": "assets/motions/normal_2_1.mtn" },
				{ "name": "normal_2_2", "file": "assets/motions/normal_2_2.mtn" },
				{ "name": "pukapuka_1", "file": "assets/motions/pukapuka_1.mtn" },
				{ "name": "sad_1", "file": "assets/motions/sad_1.mtn" },
				{ "name": "sad_1_1", "file": "assets/motions/sad_1_1.mtn" },
				{ "name": "sad_2", "file": "assets/motions/sad_2.mtn" },
				{ "name": "sad_3", "file": "assets/motions/sad_3.mtn" },
				{ "name": "sad_4", "file": "assets/motions/sad_4.mtn" },
				{ "name": "sad_5", "file": "assets/motions/sad_5.mtn" },
				{ "name": "sad_5a", "file": "assets/motions/sad_5a.mtn" },
				{ "name": "sad_s2", "file": "assets/motions/sad_s2.mtn" },
				{ "name": "sleepy_1", "file": "assets/motions/sleepy_1.mtn" },
				{ "name": "sleepy_2", "file": "assets/motions/sleepy_2.mtn" },
				{ "name": "speech_1", "file": "assets/motions/speech_1.mtn" },
				{ "name": "surprise_1", "file": "assets/motions/surprise_1.mtn" },
				{ "name": "surprise_1_1", "file": "assets/motions/surprise_1_1.mtn" },
				{ "name": "surprise_2", "file": "assets/motions/surprise_2.mtn" },
				{ "name": "surprise_2_1", "file": "assets/motions/surprise_2_1.mtn" },
				{ "name": "surprise_2_1a", "file": "assets/motions/surprise_2_1a.mtn" },
				{ "name": "surprise_3", "file": "assets/motions/surprise_3.mtn" },
				{ "name": "surprise_3a", "file": "assets/motions/surprise_3a.mtn" },
				{ "name": "surprise_4", "file": "assets/motions/surprise_4.mtn" },
				{ "name": "wink_1", "file": "assets/motions/wink_1.mtn" },
				{ "name": "yareyare_1", "file": "assets/motions/yareyare_1.mtn" },
				{ "name": "yes_1", "file": "assets/motions/yes_1.mtn" },
				{ "name": "yes_2", "file": "assets/motions/yes_2.mtn" },
				{ "name": "yes_3", "file": "assets/motions/yes_3.mtn" }

			]
		},
		"physics": "",
		"pose": "",
		"hitarea": "",
		"name": char_name
	}
	if (char_name != "Shu" &&
		char_name != "Mika" &&
		char_name != "Natsume" &&
		char_name != "Leo" &&
		char_name != "Tsumugi" &&
		char_name != "Sora" &&
		char_name != "Madara" &&
		char_name != "Ibara" &&
		char_name != "Nagisa" &&
		char_name != "Hiyori" &&
		char_name != "Jun" &&
		char_name != "Jin" &&
		char_name != "Akiomi" &&
		char_name != "Seiya" &&
		char_name != "Mademoiselle") {
		modelJson.motions["motion"].push({
			"name": char_name.toLowerCase() + "_amai",
			"file": "assets/motions/" + char_name.toLowerCase() + "_amai.mtn"
		});
		
			if (char_name == "Keito" && checkFlag == true)
				{
					modelJson.motions["motion"].push({
						"name": "effect",
						"file": "assets/motions/effect.mtn"
					});
				}
	}
	


	else if (char_name == "Ibara") {
		modelJson.motions["motion"].push({
			"name": "salute_1",
			"file": "assets/motions/salute_1.mtn"
		});
		modelJson.motions["motion"].push({
			"name": "salute_2",
			"file": "assets/motions/salute_2.mtn"
		});
		modelJson.motions["motion"].push({
			"name": "salute_3",
			"file": "assets/motions/salute_3.mtn"
		});
	}

	else if (char_name == "Shu" || char_name == "Mademoiselle") {
		modelJson.motions["motion"].push({
			"name": "doll_1",
			"file": "assets/motions/doll_1.mtn"
		});
		modelJson.motions["motion"].push({
			"name": "doll_2",
			"file": "assets/motions/doll_2.mtn"
		});
		modelJson.motions["motion"].push({
			"name": "doll_3",
			"file": "assets/motions/doll_3.mtn"
		});
	}
	
	console.log(char_name);
	console.log(modelJson.model);
	console.log(modelJson.textures);
	//console.log(modelJson);
	//jsonPrint.innerHTML = JSON.stringify(modelJson, undefined, 4);

	return modelJson;
}