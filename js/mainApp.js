// Main app entry point
$(document).ready(function() {
	// First of all, run tests
	onAppLaunch();

});

var g_model = {};
var g_view = {};

function setDefaults(){
	$.fn.carousel.defaults = {
    interval: false
  , pause: 'hover'
  }
}
function onAppLaunch(){
	// Async loading models
	setDefaults();
	g_model = new Model();
	g_view = new View({model: g_model});
}

function onLoadedSyncModels(){

	g_view.createSyncViews();
	return;
}

function onLoadedAsyncModels(){

	g_view.createAsyncViews();
	return;
}


function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        drawStuff(); 
}









