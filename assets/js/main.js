$(document).ready(function() {
	//var texture2 = new PlaceHolderOption(data);
	var temp = new Array();
	
	for (var i = 0; i < 50; i++) {
		var data = {
			id : i+1,
			presets : [],
			creator : 'Nobody',
			dateAdded : new Date(),
			screenshots : [],
			extraData : '{"exportPath":"gui/items.png", "exportX":768, "exportY":256}',
			path : "temp"
		};
		temp[i] = new TextureOption(data);
	}
	
	$('.thumbnails').each(function(index, element) {
		//add the textures
		for (var i = 0; i < temp.length; i++) {
			$(element).append(temp[i].getHtml());
		}
	});
});
