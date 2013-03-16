$(document).ready(function() {
	picGroups = [0, 16, 22, 28, 32, 41, 46, 50];

	for (var i = 0; i < 4; i++) {
		// Make the group
		groupArray = [];
		for (var z = 0; z < picGroups.length - 1; z++) {
			groupArray[z] = new TextureGroup({
				id : z + 1,
				groupName : 'Test group ' + (z + 1) + ' (in category '+ (i + 1) +')',
				textures : [],
				exportData : '{"exportPath":"gui/items.png", "exportX":768, "exportY":256}'
			});
			// Loop and get textures
			tempArray = [];
			for (var j = picGroups[z]; j < picGroups[z + 1]; j++) {
				var data = {
					id : j + 1,
					group : groupArray[z],
					presets : [],
					creator : "Texture " + (j - picGroups[z] + 1),
					dateAdded : new Date(),
					screenshots : [],
					exportData : '{}',
					path : "temp"
				};
				tempArray.push(new TextureOption(data));
			}
			groupArray[z].setTextures(tempArray);
		}

		var tab = new TextureCategory({
			id: i + 1,
			categoryName: 'Test category ' + (i + 1),
			groups: groupArray
		})

		$('#texture-tab').append(tab.getTabHtml());
		$('#texture-content').append(tab.getContentHtml());
	}
	$('a[href="#category-1"]').tab('show');
}); 