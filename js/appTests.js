function runTests(){
//	helperTests();	
	dummyTest();
}

function dummyTest(){

	QUnit.test( "Basic test", function( assert ) {
  		assert.ok( 1 == "1", "Passed!" );
	});
	QUnit.test( "String test", function( assert ) {
  		assert.ok( __("{0}", "a") == "a", "Passed!" );
	});
}

runTests();
