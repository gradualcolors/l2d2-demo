# Ensemble Stars! Live 2D Viewer & Dialogue Simulator

### Compatible browsers: 
Google Chrome, Safari, Internet Explorer

## [Usage](#usage)

### How to Add Models:

First, download the models and extract the folders. Click the character icon on the left first. Choose a character name and select the **model.moc** (or **model.moc.txt**) file into the **Model** uploader. Then select the **.png** texture file into the **Texture** uploader. 

**Do NOT use different textures for different models.** Every moc file has its own texture file and the model will not display correctly if you mix and match. (Meaning if you were changing outfits, **you need to change the model file AND texture file!**)

Click **Add a Character** and your character will be loaded! The second character button will be enabled after the first one.

### How to Add Dialogue:

Click **Add Dialogue** on the bottom. The character dropdown will only have what characters you loaded currently. After selecting their name, the motions dropdown will load. You can also import a JSON file to fill the textboxes. You can create one by copying this Google spreadsheet [here](https://docs.google.com/spreadsheets/d/1FGvia5xyn4OObxyJz6B4W51gwk4Tsj3g4rAIrx7BhcE/edit?usp=sharing "JSON Script Template") and export to JSON. Make sure to copy the JSON code into notepad and save it as a .txt or .json file. 

**Export Dialogue** can export your script as a JSON file for future use. Be sure the JSON script file matches the exact format. If for some reason you are unable to use the spreadsheet, you can copy the format below. Be sure to add a comma after each brace except the end. Motions List can be found [here](https://github.com/gradualcolors/l2d2-demo/blob/master/Motions-List.md).

```javascript
[{
	"linenumber": 1,
	"activespeaker": "Natsume",
	"charposition": "char_a",
	"dialogue": "Hokke-kun~",
	"motion": "naderu_1",
	"motionnum": "95"
},
{
	"linenumber": 2,
	"activespeaker": "Hokuto",
	"charposition": "char_b",
	"dialogue": "Sakasaki.",
	"motion": "amazed_1_2",
	"motionnum": "4"
}]
```

Live2D Models are Happy Elements / Ensemble Stars' property. This also uses some assets from Ensemble Stars Basic.

## [Change Log](#change-log)
1. 07/19/20 - Added Export and Import Script Functions
2.
3.

## [Known Bugs](#known-bugs)

1. Doesn't work in FireFox
2. Screenshot Capture does not work in iOS Safari
3. Will find more as testing becomes public
4. Comic World.

## [To Do List](#to-do-list)
1. Add pause button to auto play
2. Add flag choices for graduation/remininsce height data
3. Collect all the Live2D models from JP enstars
4. Will add more as testing becomes public

## [Frequently Asked Questions](#frequently-asked-questions)
> What's the difference between JP and CN/TW models?
- Exclusives aside, CN/TW models have a 1024 x 1024 texture file, meaning they're lower quality than JP which is 2048 x 2048. However, CN/TW models are easier to extract so that's why they're available while I'm collecting the JP files.

> Why are there some outfits missing?
- TW only has models up to Meteor Impact. I'm still collecting the JP files and will have a tracking sheet up soon. If you're looking for a specific outfit, please contact me and I will add it to the list of what I need to find.

> Will you add collab characters?
- Yes, after I collect data on them.

> Will you add a music uploader?
- No plans to, unfortunately.

> What about voices?
- Debatable but there's way too many sound files for me to extract and unlike models, harder to implement into an uploader.

> Will there be a Live2D viewer/Dialogue Simulator for Ensemble Stars!!?
- Yes! It is currently being planned out while I figure out how to convert the motions since they're in a new format.

> Are you taking helpers or volunteers?
- I'm thinking on it, but the answer might be yes. I do need help with some people who has knowledge in Asset Studio so we can compile all the JP outfits for usage. If you're interested in helping, dm me @sakasakitty or @gradualcolours! As for helping with coding, that's to be decided.
