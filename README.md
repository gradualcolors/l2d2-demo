# Ensemble Stars! Live 2D Viewer & Dialogue Simulator

### Compatible browsers: 
Google Chrome, Safari, Opera, Internet Explorer. **\* Best viewed in desktop mode. \***

### Special Thanks:
To many people who helped tested this and put up with my ramblings.

## [Usage](#usage)

### How to Download Models:
Click the **Download Models** button on the bottom of the simulator.

### How to Add Models:

First, download the models and extract the folders. Click the character icon on the left first. Choose a character name and select the **model.moc** (or **model.moc.txt**) file into the **Model** uploader. Then select the **.png** texture file into the **Texture** uploader. 

**Do NOT use different textures for different models.** Every moc file has its own texture file and the model will not display correctly if you mix and match. (Meaning if you were changing outfits, **you need to change the model file AND texture file!**) You are free to edit the texture file though for interesting results. 

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
1. 07/20/20 - Release of Version 1.0
2. 07/19/20 - Added Export and Import Script Functions
3.

## [Known Bugs](#known-bugs)

1. Doesn't work in FireFox
2. Screenshot Capture does not work in iOS Safari
3. Comic World.
4. Overflow div issues with iOS devices.
5. Default Live2D eye blinking reverts some motions/expressions after finishing.
6. Adjusting or minimizing window size will make the model pop out. 
7. Will find more as testing becomes public

## [To Do List](#to-do-list)
1. Add pause button to auto play
2. Add flag choices for graduation/remininsce height data
3. Collect all the Live2D models from JP enstars
4. Load default character outfits from local
5. Add collaboration characters
6. Custom Character support (yes, your OCs heehhee)
7. Add no motion option for dialogue.
8. Increase dialogue lines to especially support Eichi Tenshouin's eight-hour monologues
9. Will add more as testing becomes public

## [Frequently Asked Questions](#frequently-asked-questions)

> Why do we have to upload models? Why can't we directly load them like other Live2D viewers?
- Unfortunately, it's too costly and too much for me to host the files on a CDN like other Live2D viewers. There are over 2,000 model files in Ensemble Stars! alone, each with a texture, making it over 4000 files. TW files compressed all together are 1 GB+, while JP files are likely 2-4GB because they're higher in quality. I considered taking donations to host the files, but this is a pet project of mine and I do not want it to be finanically bound. That's why the files are zipped and hosted on Google Drive for easy access.
**This is also the reason why only two characters can converse at a time and you cannot switch characters mid-dialogue.**

> What's the difference between JP and CN/TW models?
- Exclusives aside, CN/TW models have a 1024 x 1024 texture file, meaning they're lower quality than JP which is 2048 x 2048. However, CN/TW models are easier to extract so that's why they're available while I'm collecting the JP files.

> Why are there some outfits missing?
- TW only has models up to Meteor Impact. I'm still collecting the JP files and will have a tracking sheet up soon. If you're looking for a specific outfit, please contact me and I will add it to the list of what I need to find.

> Why are some of the models blurry?
- I tried to adjust the Live2D model based on Enstars configuration data. However, Enstars is a mobile unity game while this Live2D viewer is for browser so the scaling may be a bit off. Also keep in mind, the texture files for the TW packs are lower quality than JP.

> How do I add Mademoiselle?
- For any Shu model that includes her, you can copy his texture file and erase just Shu from it. Then you upload the copy. [Example Image](https://raw.githubusercontent.com/gradualcolors/l2d2-demo/master/assets/mado_tex.png)

> Why are some of the motions weird?
- It's the kitty, miu, and naderu motions that act weirdly. They are supposed to be selected after certain motions run but more testing is needed to find out which ones.

> Will you add collab characters?
- Yes, after I collect data on them.

> Will you add a music uploader?
- No plans to, unfortunately.

> What about voices?
- Currently no plans. There's way too many sound files for me to extract and unlike models, harder to implement into an uploader.

> Will there be a Live2D viewer/Dialogue Simulator for Ensemble Stars!!?
- Yes! It is currently being planned out while I figure out how to convert the motions since they're in a new format.

> Are you taking helpers or volunteers?
- I'm thinking on it, but the answer might be yes. I do need help with some people who has knowledge in Asset Studio so we can compile all the JP outfits for usage. If you're interested in helping, dm me @sakasakitty or @gradualcolours! As for helping with coding, that's to be decided.
