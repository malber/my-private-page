// Main app entry point
$(document).ready(function() {
	// First of all, run tests
	onAppLaunch();

	__("Started {0} without errors", "myApp");
});

var g_model = {};
var g_view = {};

function onAppLaunch(){
	// Async loading models
	g_model = new Model();
}

function onLoadedModels(){

//	g_controller = new Controller(g_model);
	g_view = new View({model: g_model});
	return;
}


function addListeners(){
	window.addEventListener('resize', resizeCanvas, false);
}

function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        drawStuff(); 
}









