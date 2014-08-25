function helperTests(){
  ASSERT(__s("{0} is {1}",1,2) == "1 is 2", "Error with string parsing");
}

String.format = function() {
  var s = arguments[0];
  for (var i = 0; i < arguments.length - 1; i++) {       
    var reg = new RegExp("\\{" + i + "\\}", "gm");             
    s = s.replace(reg, arguments[i + 1]);
  }
  return s;
};


function __(){
    console.log(__s.apply(this,arguments));
}


// This formats strings
function __s(){
  return String.format.apply(this,arguments);
}

function getRandomInteger(x_init,x_fin){
    return Math.floor(x_init + Math.random()*(x_fin - x_init));
}

function getStringFromObject(x_obj){
    return JSON.stringify(x_obj, null, 2);
}

function ASSERT(condition, message) {
  console.assert(condition,message);
}
