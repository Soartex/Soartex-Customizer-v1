$.fn.slideOut = function(direction, length, duration, easing, callback) {
	// Calculate animation for each animation individually
	if (this.length !== 1) {
		this.each(function(i) {
			$(this).slideOut(direction, length, duration, easing, callback);
		})
		return;
	}

	var $elem = this;

	// Error checking
	var _direction = direction;
	direction = direction.toLowerCase();
	if (direction !== "top" && direction !== "bottom" && direction !== "left" && direction !== "right" ) {
		throw "'"+_direction+"' is not a valid CSS direction (use 'top', 'bottom', 'left' or 'right')"
	}

	var originalStyle = $elem.attr("style");
	var css = copyPosCSS($elem);

	$elem.makeAbsolute(false, true);

	// Div placeholder - takes the place of the transitioning element
	// to make surrounding elements fill in the space smoothly
	var placeholder = $('<div>');
	placeholder.insertAfter($elem);

	var elemWidth = $elem.outerWidth(true);
	var elemHeight = $elem.outerHeight(true);

	var animations = {opacity: 0};

	if 		(direction === "top") 	 animations.top  = "-=" + length;
	else if (direction === "bottom") animations.top  = "+=" + length;
	else if (direction === "left") 	 animations.left = "-=" + length;
	else if (direction === "right")  animations.left = "+=" + length;

	// The div animation does not work if I place it further up in the code,
	// Or even move a few lines of above code down. I have no idea why D:<
	placeholder.css(css);
	placeholder.css({
		visibility: "hidden",
		margin:  0,
		padding: 0,
		width: elemWidth,
		height: elemHeight
	});

	var opt = $.speed(duration, easing, callback);
	opt.always = function(animation, jumpedToEnd) {
		if (originalStyle) $elem.attr("style", originalStyle);
		else $elem.removeAttr("style");

		$elem.hide();

		// Run the user's 'always' parameter
		// (the 'duration' parameter can be used as an 'options' parameter)
		if (duration && duration.always) duration.always(animation, jumpedToEnd);
	};

	this.animate(animations, opt);
	placeholder.animate({width: 0, height: 0}, {
		duration: opt.duration,
		easing: opt.easing,
		specialEasing: opt.specialEasing,
		always: function() {
			placeholder.remove();
		}
	});
}

$.fn.slideIn = function(direction, length, duration, easing, callback) {
	// Calculate animation for each animation individually
	if (this.length !== 1) {
		this.each(function(i) {
			$(this).slideIn(direction, length, duration, easing, callback);
		})
		return;
	}

	var $elem = this;

	// Error checking
	var _direction = direction;
	direction = direction.toLowerCase();
	if (direction !== "top" && direction !== "bottom" && direction !== "left" && direction !== "right" ) {
		throw "'"+_direction+"' is not a valid CSS direction (use 'top', 'bottom', 'left' or 'right')";
	}

	$elem.show();

	var originalStyle = $elem.attr("style");
	var originalOpacity = $elem.css("opacity");
	var originalPos = $elem.position();
	var originalDisplay = $elem.css("display");
	$elem.css("opacity", 0);

	$elem.makeAbsolute(false, true);

	if 		(direction === "top") 	 $elem.css({left: originalPos.left, top: originalPos.top - length});
	else if (direction === "bottom") $elem.css({left: originalPos.left, top: originalPos.top + length});
	else if (direction === "left") 	 $elem.css({left: originalPos.left - length, top: originalPos.top});
	else if (direction === "right")  $elem.css({left: originalPos.left + length, top: originalPos.top});

	var animations = {
		opacity: originalOpacity,
		top: originalPos.top,
		left: originalPos.left
	};

	// Div placeholder - takes the place of the transitioning element
	// to make surrounding elements fill in the space smoothly
	var placeholder = $('<div>');
	placeholder.insertAfter($elem);

	placeholder.css(copyPosCSS($elem));
	placeholder.css({
		visibility: "hidden",
		display: originalDisplay,
		margin:  0,
		padding: 0,
		width:   0,
		height:  0
	});

	var opt = $.speed(duration, easing, callback);
	opt.always = function(animation, jumpedToEnd) {
		$elem.attr("style", originalStyle);
		$elem.show();

		// Run the user's 'always' parameter
		// (the 'duration' parameter can be used as an 'options' parameter)
		if (duration && duration.always) duration.always(animation, jumpedToEnd);
	};

	this.animate(animations, opt);
	placeholder.animate({
		width: $elem.outerWidth(true),
		height: $elem.outerHeight(true)}, {
		duration: opt.duration,
		easing: opt.easing,
		specialEasing: opt.specialEasing,
		always: function() {
			placeholder.remove();
		}
	});
}

function copyPosCSS(source) {
	var attr = ['vertical-align','width','height','display','float','clear'];
	var obj = {};
	$.each(attr, function(i, v) {
		obj[v] = source.css(v);
	});
	return obj;
}