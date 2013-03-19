$(document).ready(function() {
	var picGroups = [0, 16, 22, 28, 32, 41, 46, 50];

	var categories = [];

	for (var i = 0; i < 4; i++) {
		// Make the group
		var groups = [];
		for (var z = 0; z < picGroups.length - 1; z++) {
			var group = new TextureGroup({
				id : z + 1,
				groupName : 'Test group ' + (z + 1) + ' (in category '+ (i + 1) +')',
				textures : [],
				exportData : '{"exportPath":"gui/items.png", "exportX":768, "exportY":256}'
			});
			groups.push(group);

			// Loop and get textures
			var textures = [];
			for (var j = picGroups[z]; j < picGroups[z + 1]; j++) {
				var texture = new TextureOption({
					id : j + 1,
					group : groups[z],
					presets : [],
					creator : "Texture " + (j - picGroups[z] + 1),
					dateAdded : new Date(),
					screenshots : [],
					exportData : '{}',
					path : "temp"
				});
				textures.push(texture);
			}
			groups[z].setTextures(textures);
		}

		var tab = new TextureCategory({
			id: i + 1,
			categoryName: 'Test category ' + (i + 1),
			groups: groups
		})

		categories.push(tab)
	}

	vanillaTab = new VanillaTab({
		categories: categories
	})
	vanillaTab.getTabHtml().appendTo("#mod-tab");
	vanillaTab.getContentHtml().appendTo("#mod-tab-content");

}); 