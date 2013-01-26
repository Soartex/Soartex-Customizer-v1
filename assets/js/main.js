$(document).ready(function () {
	var data = {
		id: 0,
		presets: [],
		creator: 'Nobody',
		dateAdded: new Date(),
		screenshots: [],
		extraData: '{"exportPath":"gui/items.png", "exportX":768, "exportY":256}'
	};

	var texture1 = new TextureOption(data);
	var texture2 = new PlaceHolderOption(data);
	$('.thumbnails').each(function (index, element) {
		$(element).append(texture1.getHtml());
		$(element).append(texture2.getHtml());
	});
});