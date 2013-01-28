$(document).ready(function() {
	picGroups = [0,16,22,28,32,41,46,50];
	groupArray = [];
	for (var z = 0; z < picGroups.length-1; z++){
		groupArray[z] = new TextureGroup({
			id : z+1,
			groupName : 'Test Texture Group ' +(z+1),
			textures : [],
			exportData : '{"exportPath":"gui/items.png", "exportX":768, "exportY":256}'
		});
		//loop and get textures
		tempArray = [];
		for (var i = picGroups[z]; i < picGroups[z+1]; i++) {
			var data = {
				id : i+1,
				category : groupArray[z],
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

	var temp = new TextureOption({
		id : 0,
		categoryName : 'Test category',
		textures : [],
		exportData : '{"exportPath":"gui/items.png", "exportX":768, "exportY":256}'
	});

	tempArray = []
	for (var i = 0; i < 50; i++) {
		var data = {
			id : i+1,
			category : temp,
			presets : [],
			creator : "Texture " + i,
			dateAdded : new Date(),
			screenshots : [],
			exportData : '{}',
			path : "temp"
		};
		tempArray[i] = new TextureOption(data);
	}
	temp.setTextures(tempArray);

	$('#stab3').append(temp.getHtml());
});
