function TextureOption(parameters) {
	this.id = parameters.id; // Type number
	this.presets = parameters.presets; // Type list (containing strings)
	this.creator = parameters.creator; // Type string
	this.dateAdded = parameters.dateAdded; // Type Date
	this.screenshots = parameters.screenshots; // Type list (containing strings)

	this.setDataFromJSON(parameters.extraData);

	//this.imagePath = "assets/img";
	this.imagePath = parameters.path;
	this.screnshotPath = "data/screenshots";

}
TextureOption.prototype.getHtml = function () {
	var container = $('<li class="">')
	var thumbnail = $('<div class="thumbnail texture">')
		.mousedown(function () {
			$(this).toggleClass("texture-selected");
		})
		.hover(function () {
			$(this).addClass("texture-hovered");
		}, function () {
			$(this).removeClass("texture-hovered");
		})
		.append($('<img src="' + this.getFullImagePath() + '">'))
		.appendTo(container);
	var caption = $('<div>')
		.addClass("caption")
		.appendTo(thumbnail);
	$('<p>')
		.text('- ' + this.creator)
		.appendTo(caption);
	return container;
}
TextureOption.prototype.getFullImagePath = function () {
	return this.imagePath + '/' + this.id + '.png';
}

TextureOption.prototype.getFullScreenshotPath = function () {
	return this.screenshotPath + this.this.screenshotName + 'png';
}


TextureOption.prototype.setDataFromJSON = function (JsonData) {
	data = $.parseJSON(JsonData);
	this.exportPath = data.exportPath; // The image that the texture goes to, eg. 'gui/items.png'
	this.exportX = data.exportX; // The x position of the texture in the texture sheet
	this.exportY = data.exportY; // The y position of the texture in the texture sheet
}


function PlaceHolderOption(parameters) { // A test
	TextureOption.call(this, parameters);
	this.imageUrl = 'http://placehold.it/64x64';
}

extend(PlaceHolderOption, TextureOption);

PlaceHolderOption.prototype.getFullImagePath = function () {
	return this.imageUrl;
}

PlaceHolderOption.prototype.setDataFromJSON = function (JsonData) {

}
