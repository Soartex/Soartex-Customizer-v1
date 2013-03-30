var Dropbox = function(element, options) {
	this.$element = $(element);
	this.options = $.extend({}, $.fn.button.defaults, options);
	if (typeof(this.options.type) !== "function") {
		this.options.type = this.options.type.toLowerCase();
	}

	this.setData("");

	var that = this;

	function dragOver(e) {
		e.stopPropagation();
		e.preventDefault();
	}
	function dragOut(e) {
		e.stopPropagation();
		e.preventDefault();
	}

	function onDrop(e) {
		var reader = new FileReader();
		var file = e.dataTransfer.files[0];

		e.preventDefault();

		// If the file type does not begin with the required type, return
		if (!that.isValidType(file)) {
			return false;
		}

		reader.onload = function(e) {

			if (typeof(file.type) === "string" && file.type.beginsWith("image")) {
				that.setDataAsImg(e.target.result);
			} else {
				that.setDataAsText(e.target.result);
			}
		};

		if (file.type.beginsWith("image")) {
			reader.readAsDataURL(file);
		} else {
			reader.readAsText(file);
		}

		return true;
	}

	// Required for the 'drop' handler to work
	$(element).get(0).addEventListener("dragenter", dragOut, false);
	$(element).get(0).addEventListener("dragexit", dragOut, false);
	$(element).get(0).addEventListener("dragover", dragOver, false);

	$(element).get(0).addEventListener("drop", onDrop, false);
};

Dropbox.prototype.isValidType = function(file) {
	return (typeof(this.options.type) === "function") ? this.options.type(file) : file.type.beginsWith(this.options.type);
};

Dropbox.prototype.setDataAsText = function(data) {
	this.$element.css("background-image", "none");

	this.$element.text(data);
	this.$element.resetImage();
	this.setData(data);

};

Dropbox.prototype.setDataAsImg = function(data) {
	var that = this;

	// A new image is made to get the image dimensions
	var imgTemp = new Image();

	$(imgTemp).load(function() {
		that.setImage(this, data);
	});
	imgTemp.src = data;
	this.setData(data);
};

Dropbox.prototype.setImage = function(img, data) {
	var $box = this.$element;

	// The width and height of the dropbox has to be specified in pixels
	var boxWidth = $box.innerWidth() - Number($box.css("padding-left").slice(0, -2)) - Number($box.css("padding-right").slice(0, -2));
	var boxHeight = $box.innerHeight() - Number($box.css("padding-top").slice(0, -2)) - Number($box.css("padding-bottom").slice(0, -2));

	$box.css({
		"background-image": "url('"+ data +"')",
		"background-repeat": "no-repeat",
		"background-position": "center",
		"background-size":
			Math.min((boxHeight/img.height) * img.width, boxWidth, img.width) + "px " +
			Math.min((boxWidth/img.width) * img.height, boxHeight, img.height) + "px"
	});
	this.resetText();
};

Dropbox.prototype.reset = function() {
	this.$element.attr("data", "");

	this.resetImage();
	this.resetText();

};

// To prevent flickering when adding text
Dropbox.prototype.resetImage = function() {
	this.$element.css({
		"background-image": "",
		"background-repeat": "",
		"background-position": "",
		"background-size": ""
	});
};

// To prevent flickering when adding images
Dropbox.prototype.resetText = function() {
	this.$element.empty();
};

Dropbox.prototype.setData = function(data) {
	this.$element.attr("data", data);
};

$.fn.dropbox = function(option) {
	return this.each(function () {
		var $this = $(this),
			data = $this.data('dropbox'),
			options = $.extend({}, $.fn.dropbox.defaults, $this.data(), typeof option === 'object' && option);
		if (!data) {
			$this.data('dropbox', (data = new Dropbox(this, options)));
		}
		if (typeof option === 'string') {
			data[option]();
		}
	});
};

$.fn.dropbox.defaults = {
	// Can be as specific as you want, e.g. "image" or "image/png".
	// It also supports a function as input. It should take the file as a parameter, and return a boolean.
	type: ""
};