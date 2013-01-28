$(document).ready(function() {

	var temp = new TextureGroup({
		id : 0,
		groupName : 'Test group',
		textures : [],
		exportData : '{"exportPath":"gui/items.png", "exportX":768, "exportY":256}'
	});

	tempArray = [];
	for (var i = 0; i < 50; i++) {
		var data = {
			id : i+1,
			group : temp,
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

	$.post("assets/php/insertTexture.php", {
		name : "test",
		creator : "testy2",
		info : "",
		preset : 1,
		group : 1,
		export_data: "{}"
	}, function(result) {
		$('body').append(result);
	});
});
