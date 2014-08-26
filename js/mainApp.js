// Main app entry point
$(document).ready(function() {
	// First of all, run tests
	onAppLaunch();

	__("Started {0} without errors", "myApp");
});

var g_model = {};
var g_controller = {};
var g_view = {};

function onAppLaunch(){
	// Async loading models
	g_model = new Model(onLoadedModels);
}

function onLoadedModels(){

	initCharts();

	g_controller = new Controller(g_model);
	g_view = new View(g_model, g_controller);

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


function initCharts(){
	var ctx = document.getElementById("timelineChart").getContext("2d");

	var data = {
	    labels: ["January", "February", "March", "April", "May", "June", "July"],
	    datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: [65, 59, 80, 81, 56, 55, 40]
	        },
	        {
	            label: "My Second dataset",
	            fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [28, 48, 40, 19, 86, 27, 90]
	        }
	    ]
	};


	var myLineChart = new Chart(ctx).Line(data, {scaleShowGridLines : true});

}











