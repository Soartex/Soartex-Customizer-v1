

function mixin(destination, source) {
	for (var k in source) {
		if (source.hasOwnProperty(k)) {
			destination[k] = source[k];
		}
	}
	return destination;
}

function extend(subClass, superClass) {
	var F = function () { };
	F.prototype = superClass.prototype;
	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;

	subClass.superclass = superClass.prototype;
	if (superClass.prototype.constructor == Object.prototype.constructor) {
		superClass.prototype.constructor = superClass;
	}
}

String.prototype.beginsWith = function(str) {
	return this.indexOf(str) == 0;
}

String.prototype.endsWith = function(suffix) {
	return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

$.fn.makeAbsolute = function(rebase, keepSize) {
	return this.each(function() {
		var el = $(this);
		var width, height;
		if (keepSize) {
			width = el.outerWidth();
			height = el.outerHeight();
		}
		var pos = el.position();
		el.css({
			position: "absolute",
			top: pos.top,
			left: pos.left,
			width: width,
			height: height
		});
		if (rebase) {
			el.remove().appendTo("body");
		}
	});
}

function post_to_url(path, params, method) {
	method = method || "post"; // Set method to post by default if not specified.

	// The rest of this code assumes you are not using a library.
	// It can be made less wordy if you use one.
	var form = document.createElement("form");
	form.setAttribute("method", method);
	form.setAttribute("action", path);

	for(var key in params) {
		if(params.hasOwnProperty(key)) {
			var hiddenField = document.createElement("input");
			hiddenField.setAttribute("type", "hidden");
			hiddenField.setAttribute("name", key);
			hiddenField.setAttribute("value", params[key]);

			form.appendChild(hiddenField);
		}
	}

	document.body.appendChild(form);
	form.submit();
}