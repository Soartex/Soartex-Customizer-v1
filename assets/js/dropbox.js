var Dropbox = function(element, options) {
	this.$element = $(element);
	this.options = $.extend({}, $.fn.button.defaults, options);
	this.options.type = this.options.type.toLowerCase();

	this.file = null;

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
		if (!file.type.beginsWith(that.options.type)) {
			return false;
		}
		this.file = file;

		reader.onload = function(e) {

			if (file.type.beginsWith("image")) {
				that.dropDataAsImg(e.target.result);
			}
		};

		reader.readAsDataURL(file);

		return true;
	}

	// Required for the 'drop' handler to work
	$(element).get(0).addEventListener("dragenter", dragOut, false)
	$(element).get(0).addEventListener("dragexit", dragOut, false)
	$(element).get(0).addEventListener("dragover", dragOver, false)

	$(element).get(0).addEventListener("drop", onDrop, false);
}

Dropbox.prototype.dropDataAsImg = function(data) {
	var that = this;

	// A new image is made to get the image dimensions
	var imgTemp = new Image();

	$(imgTemp).load(function() {
		that.setImage(this, data);
	});
	imgTemp.src = data;
}

Dropbox.prototype.setImage = function(img, data) {
	var $box = this.$element;

	// The width and height of the dropbox has to be specified in pixels
	var boxWidth = $box.innerWidth() - Number($box.css("padding-left").slice(0, -2)) - Number($box.css("padding-right").slice(0, -2));
	var boxHeight = $box.innerHeight() - Number($box.css("padding-top").slice(0, -2)) - Number($box.css("padding-bottom").slice(0, -2));

	$box.css({
		"background-image": "url('"+ data +"')",
		"background-repeat": "no-repeat",
		"background-position": "center",
		"background-size": Math.min((boxHeight/img.height) * img.width, boxWidth, img.width) + "px " +
			Math.min((boxWidth/img.width) * img.height, boxHeight, img.height) + "px"
	});
}

$.fn.dropbox = function(option) {
	return this.each(function () {
		var $this = $(this)
		  , data = $this.data('dropbox')
		  , options = $.extend({}, $.fn.dropbox.defaults, $this.data(), typeof option == 'object' && option);
		if (!data) $this.data('dropbox', (data = new Dropbox(this, options)));
		if (typeof option == 'string') data[option]();
	})
}

$.fn.dropbox.defaults = {
	type: "" // can be as specific as you want, e.g. "image" or "image/png"
};