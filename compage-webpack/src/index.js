var _Carousel = require("./carousel.js")
var _GoTop = require("./GoTop.js")
var _waterfallNew = require("./new-ajax.js")


_Carousel.init($(".carousel"))
_GoTop.init($(".goTopSet"))

$(document).ready(function() { 
	_waterfallNew.init($("#portfolio"))
	}); 
