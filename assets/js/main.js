$(document).ready(function() {

	var temp = new Category({
		id : 0,
		categoryName : 'Test category',
		textures : [],
		exportData : '{"exportPath":"gui/items.png", "exportX":768, "exportY":256}'
	});

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
		temp.textures[i] = new TextureOption(data);
	}
	temp.calculateHtmlData();

	$('#stab3').append(temp.getHtml());
});
