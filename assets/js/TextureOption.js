function TextureOption(parameters) {
	this.id = parameters.id; // Type number
	this.category = parameters.category; // Type Category
	this.presets = parameters.presets; // Type list (containing strings)
	this.creator = parameters.creator; // Type string
	this.dateAdded = parameters.dateAdded; // Type Date
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
	elements.container = $('<li class="">');
	elements.thumbnail = $('<div class="thumbnail texture">')
		.mousedown(function () {
			that.select();
		})
		.hover(function () {
			$(this).addClass("texture-hovered");
		}, function () {
			$(this).removeClass("texture-hovered");
		})
		.append($('<img src="' + this.getFullImagePath() + '">'))
		.appendTo(elements.container);
	elements.caption = $('<div>')
		.addClass("caption")
		.appendTo(elements.thumbnail);
	elements.paragraph = $('<p>')
		.text('- ' + this.creator)
		.appendTo(elements.caption);
}

TextureOption.prototype.select = function () {
	this.category.select(this);
}

TextureOption.prototype.setSelected = function () {
	$(this.elements.thumbnail).addClass("texture-selected");
	this.isSelected = true;
}

TextureOption.prototype.setDeselected = function () {
	$(this.elements.thumbnail).removeClass("texture-selected");
	this.isSelected = false;
}

TextureOption.prototype.setCreator = function (val) {
	this.creator = val;
	$(this.elements.creatorParagraph).text('- ' + val);
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