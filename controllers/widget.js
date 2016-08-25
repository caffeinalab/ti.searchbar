var args = arguments[0] || {};

_.defaults(args, {

	/**
	 * Global animations duration in ms
	 * @type {Number}
	 */
	animationsDuration: 400,

	/**
	 * TItle for the label
	 * @type {String}
	 */
	title: Ti.App.name

});

var identityMatrix = Ti.UI.create2DMatrix();

$.setTitleMode = function() {
	$.cfn_searchBarTitleLabel.animate({
		duration: args.animationsDuration,
		transform: identityMatrix
	});
	$.cfn_searchBarSearch.animate({
		duration: args.animationsDuration,
		transform: identityMatrix,
		opacity: 0
	});
	$.cfn_searchBarTitleIcon.animate({
		duration: args.animationsDuration,
		transform: identityMatrix
	});
	$.cfn_searchBarText.blur();
	$.cfn_searchBarText.value = '';
};

$.setSearchMode = function() {
	$.cfn_searchBarTitleLabel.animate({
		duration: args.animationsDuration,
		transform: Ti.UI.create2DMatrix().translate(0, -200)
	});
	$.cfn_searchBarSearch.animate({
		duration: args.animationsDuration,
		opacity: 1
	});
	$.cfn_searchBarTitleIcon.animate({
		duration: args.animationsDuration,
		transform: Ti.UI.create2DMatrix().translate(-56, 0).scale(0.8)
	});
	$.cfn_searchBarText.focus();
};

///////////////
// Listeners //
///////////////

$.cfn_searchBarTitleIcon.addEventListener('click', function(e) {
	$.setSearchMode();
});

$.cfn_searchBarCancel.addEventListener('click', function() {
	$.setTitleMode();
});

// Events to forward

_.each(['keypressed', 'return', 'blur', 'change'], function(evtName) {
	$.cfn_searchBarText.addEventListener(evtName, function(e) {
		$.trigger(evtName, e);
	});
});


//////////
// Init //
//////////

$.cfn_searchBarSearch.opacity = 0;
$.cfn_searchBarTitleLabel.text = args.title;
