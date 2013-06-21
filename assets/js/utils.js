

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
