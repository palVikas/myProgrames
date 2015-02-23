#include <stdio.h>
typedef void TestFn(void);
typedef struct{
	char* name; 
	TestFn* fn;
} Test;

//code to be updated starts
TestFn setup,tearDown,fixtureSetup,fixtureTearDown,test_febo_of_1_term_should_give_be,test_febo_of_2_term_should_give_be,test_concate_of_and_should_give_an_array,test_concate_of_two_array_and_should_give_an_concate_array,test_reverse_return_the_reverse_of_the_array,test_reverse_array_return_the_reverse_of_the_array,test_filter_of_the_given_array_to_filter_more_than_85,test_filter_of_an_array_to_filter_greater_than_50,test_slice_of_an_given_array,test_slice_the_value_between_index_5_to_9_of_an_given_array,test_getAllPrimeNumber_of_given_range,test_string_compare,test_string_with_param,test_function_should_be_behave_like_forEach;
Test test[] = {"test_febo_of_1_term_should_give_be",test_febo_of_1_term_should_give_be,"test_febo_of_2_term_should_give_be",test_febo_of_2_term_should_give_be,"test_concate_of_and_should_give_an_array",test_concate_of_and_should_give_an_array,"test_concate_of_two_array_and_should_give_an_concate_array",test_concate_of_two_array_and_should_give_an_concate_array,"test_reverse_return_the_reverse_of_the_array",test_reverse_return_the_reverse_of_the_array,"test_reverse_array_return_the_reverse_of_the_array",test_reverse_array_return_the_reverse_of_the_array,"test_filter_of_the_given_array_to_filter_more_than_85",test_filter_of_the_given_array_to_filter_more_than_85,"test_filter_of_an_array_to_filter_greater_than_50",test_filter_of_an_array_to_filter_greater_than_50,"test_slice_of_an_given_array",test_slice_of_an_given_array,"test_slice_the_value_between_index_5_to_9_of_an_given_array",test_slice_the_value_between_index_5_to_9_of_an_given_array,"test_getAllPrimeNumber_of_given_range",test_getAllPrimeNumber_of_given_range,"test_string_compare",test_string_compare,"test_string_with_param",test_string_with_param,"test_function_should_be_behave_like_forEach",test_function_should_be_behave_like_forEach};
char testFileName[] = {"feboTest.c"};
void _setup(){/*CALL_SETUP*/}
void _tearDown(){/*CALL_TEARDOWN*/}
void fixtureSetup(){}
void fixtureTearDown(){}
//code to be updated ends

int testCount;
int passCount;
int currentTestFailed;

int assert_expr(int expr, const char* fileName, int lineNumber, const char* expression){
	if(expr) return 0;
	currentTestFailed = 1;
	printf("\t\t %s : failed at %s:%d\n",expression, fileName,lineNumber);
	return 1;
}
int assert_equal(int val1, int val2, const char* fileName, int lineNumber,const char* expr1,const char* expr2){
	if(val1 == val2) return 0;
	currentTestFailed = 1;
	printf("\t\t %d == %d: failed in assertEqual(%s,%s) at %s:%d\n",val1,val2,expr1,expr2, fileName,lineNumber);
	return 1;
}

void runTest(char* name, TestFn test){
	testCount++,currentTestFailed=0;
	printf("\t%s\n",name);
	_setup();
		test();
	_tearDown();
	if(!currentTestFailed) passCount++;	
}

int main(){
	int i,total = sizeof(test)/sizeof(Test);
	fixtureSetup();
	testCount=0,passCount=0;
	printf("********* Starting tests of %s\n\n",testFileName);
	for (i = 0; i < total; ++i)
		runTest(test[i].name,test[i].fn);
	printf("\n********* Ran %d tests passed %d failed %d\n",testCount,passCount,testCount-passCount);
	fixtureTearDown();
	return 0;
}