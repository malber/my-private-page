function runTests(){
//	helperTests();	
	dummyTest();
}

function dummyTest(){

	QUnit.test( "hello test", function( assert ) {
  		assert.ok( 1 == "1", "Passed!" );
	});
}
