/**
 * This class holds data for a single texture inside a group, than can be selected (e.g. a specific grass texture)
 */

function TextureOption(parameters) {
	this.id          = parameters.id;          // Type number
	this.info        = parameters.info;        // Type string
	this.group       = parameters.group;       // Type TextureGroup
	this.creator     = parameters.creator;     // Type string
	this.dateAdded   = parameters.dateAdded;   // Type Date
	this.screenshots = parameters.screenshots; // Type list (containing strings)

	this.setDataFromJSON(parameters.exportData);

	this.imagePath = "assets/img/options/";
	this.screnshotPath = "data/screenshots/";

	this.calculateHtmlData();

	this.isSelected = false;
}

TextureOption.prototype.calculateHtmlData = function () {
	var that = this;

	this.elements = elements = {};
	elements.container = $('<button type="button" class="btn">')
		.append($('<img src="' + this.getFullImagePath() + '">'))
		.append($('<p>- '+this.creator+'</p>'))
	elements.remove = $("<i class='icon-remove edit remove remove-option'>")
		.click(function() {that.delete();})
		.prependTo(elements.container)
		.hide();
}

TextureOption.prototype.setCreator = function (val) {
	this.creator = val;
	this.elements.thumbnail.children('p').text('- ' + val);
}

TextureOption.prototype.getHtml = function () {
	return this.elements.container;
}

TextureOption.prototype.getFullImagePath = function () {
	return this.imagePath + this.id + '.png';
}

TextureOption.prototype.getFullScreenshotPath = function () {
	return this.screenshotPath + this.screenshotName + 'png';
}

TextureOption.prototype.setDataFromJSON = function (JsonData) {
	data = $.parseJSON(JsonData);
}

TextureOption.prototype.delete = function() {
	$.post(HTTPS_PATH+"assets/php/delete/option/default.php", {
		"password": password,
		"id":       this.id
	}, function(data) {
		resetCustomizer();
	});
}