/**
 * This class holds data for a single texture inside a group, than can be selected (e.g. a specific grass texture)
 */

function TextureOption(parameters) {
	this.id          = parameters.id;          // Type number
	this.group       = parameters.group;       // Type TextureGroup
	this.presets     = parameters.presets;     // Type list (containing strings)
	this.creator     = parameters.creator;     // Type string
	this.dateAdded   = parameters.dateAdded;   // Type Date
	this.screenshots = parameters.screenshots; // Type list (containing strings)

	this.setDataFromJSON(parameters.exportData);

	//this.imagePath = "assets/img";
	this.imagePath = parameters.path;
	this.screnshotPath = "data/screenshots";

	this.calculateHtmlData();

	this.isSelected = false;
}

TextureOption.prototype.calculateHtmlData = function () {
	var that = this;

	this.elements = elements = {};
	elements.container = $('<button type="button" class="btn">')
		.append($('<img src="' + this.getFullImagePath() + '">'))
		.append($('<p>- '+this.creator+'</p>'))
}

TextureOption.prototype.setCreator = function (val) {
	this.creator = val;
	this.elements.thumbnail.children('p').text('- ' + val);
}

TextureOption.prototype.getHtml = function () {
	return this.elements.container;
}

TextureOption.prototype.getFullImagePath = function () {
	return this.imagePath + '/' + this.id + '.png';
}

TextureOption.prototype.getFullScreenshotPath = function () {
	return this.screenshotPath + this.this.screenshotName + 'png';
}

TextureOption.prototype.setDataFromJSON = function (JsonData) {
	data = $.parseJSON(JsonData);
}