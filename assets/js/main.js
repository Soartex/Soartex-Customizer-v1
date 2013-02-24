var wizard;

$(document).ready(function() {
	picGroups = [0,16,22,28,32,41,46,50];
	groupArray = [];
	for (var z = 0; z < picGroups.length-1; z++){
		groupArray[z] = new TextureGroup({
			id : z+1,
			groupName : 'Test category ' +(z+1),
			textures : [],
			exportData : '{"exportPath":"gui/items.png", "exportX":768, "exportY":256}'
		});
		//loop and get textures
		tempArray = [];
		for (var i = picGroups[z]; i < picGroups[z+1]; i++) {
			var data = {
				id : i+1,
				group : groupArray[z],
				presets : [],
				creator : "Texture " + (i-picGroups[z]+1),
				dateAdded : new Date(),
				screenshots : [],
				exportData : '{}',
				path : "temp"
			};
			tempArray.push(new TextureOption(data));
		}
		groupArray[z].setTextures(tempArray);
	}

	for(var j=0; j<groupArray.length; j++){
		$('#stab1').append(groupArray[j].getHtml());
	}

	/*
	// Adds a new texture to the database
	$.post('assets/php/insert/texture.php', {
		name: 	 "Test",
		creator: "Nobody",
		info:	 "",
		preset:	 1,
		group:	 1,
		export_data: "{}"
	}, function(result) {
		$('body').append(result);
	})
	*/
	
	var options = {};
    wizard = $("#texture-upload-wizard").wizard(options);

});

function showWizard () {
    
    wizard.show();
    
}