#include "expr_assert.h"
#include <stdlib.h>
#include "febo.h"


void test_febo_of_1_term_should_give_be(){
	int *array;

  	array = (int *)malloc(sizeof(int)*1);
	assertEqual(febo(1,array),1);
	assertEqual(febo(-21,array),0);
	assertEqual(febo(1,array),1);


	assertEqual(array[0],0);
};
void test_febo_of_2_term_should_give_be(){
	int *array;
   	array = (int *)malloc(sizeof(int)*2);
	assertEqual(febo(2,array),1);
	assertEqual(array[0],0);
	assertEqual(array[1],1);


};

// // int concat(int *array1, int len_of_array1, int *array2, int len_of_array2, int *result_array)

void test_concate_of_and_should_give_an_array(){
	int *array1 ;
	int *array2;
	int *result_array;
	int len_of_array1 = 2;
	int len_of_array2 = 2;
	array1 = (int *)malloc(sizeof(int)*2);
    array2 = (int *)malloc(sizeof(int)*2);
	result_array = (int *)malloc(sizeof(int)*4);
	array1[0]=1;
	array1[1]=2;
	array2[0]=3;
	array2[1]=4;

	assertEqual(concat(array1, len_of_array1, array2, len_of_array2,result_array),1);
	assertEqual(result_array[0], 1);
	assertEqual(result_array[1], 2);
	assertEqual(result_array[2], 3);
	assertEqual(result_array[3], 4);

};

void test_concate_of_two_array_and_should_give_an_concate_array(){
	int *array1 ;
	int *array2;
	int *result_array;
	int len_of_array1 = 3;
	int len_of_array2 = 3;
	array1 = (int *)malloc(sizeof(int)*3);
    array2 = (int *)malloc(sizeof(int)*3);
	result_array = (int *)malloc(sizeof(int)*6);
	array1[0]=3;
	array1[1]=4;
	array1[2]=5;
	array2[0]=3;
	array2[1]=3;
	array2[2]=4;

	assertEqual(concat(array1, len_of_array1, array2, len_of_array2,result_array),1);
	assertEqual(result_array[0], 3);
	assertEqual(result_array[1], 4);
	assertEqual(result_array[2], 5);
	assertEqual(result_array[3], 3);
	assertEqual(result_array[4], 3);


};

// int reverse(int *array, int length, int *result_array);
void test_reverse_return_the_reverse_of_the_array(){
	int *array1;
	int *result_array;
	int length = 5;
	array1 = (int *)malloc(sizeof(int)*5);
	result_array = (int *)malloc(sizeof(int)*5);
	array1[0] = 1;
	array1[1] = 2;
	array1[2] = 3;
	array1[3] = 4;
	array1[4] = 5;
	assertEqual(reverse( array1,  length, result_array),1);
	assertEqual(result_array[0], 5);
	assertEqual(result_array[1], 4);
	assertEqual(result_array[2], 3);
	assertEqual(result_array[3], 2);
	assertEqual(result_array[4], 1);

};

void test_reverse_array_return_the_reverse_of_the_array(){
	int array[] = {5,3,6,7};
	int length=4;
	int result_array[4];
    assertEqual(reverse(array, length,result_array),1);
 	assertEqual(result_array[0], 7);
	assertEqual(result_array[1], 6);
	assertEqual(result_array[2], 3);
	assertEqual(result_array[3], 5);
};



// int filter(int *array, int length, int threshold, int *result_array);

void test_filter_of_the_given_array_to_filter_more_than_85(){
	int *result_array;
	int scores[]={100,90,80};
	int length = 3;
	int threshold = 85;
	assertEqual(filter(scores,length,threshold,&result_array),1);
	assertEqual(result_array[0], 100);
	assertEqual(result_array[1], 90);
};

 void test_filter_of_an_array_to_filter_greater_than_50(){
	int *result_array;
	int scores[]={30,60,45,80,12,79,80,3};
	int length = 8;
	int threshold = 50;
	// result_array = (int *)malloc(sizeof(int)*length);
	assertEqual(filter(scores,length,threshold,&result_array),1);
	assertEqual(result_array[0], 60);
	assertEqual(result_array[1], 80);
	assertEqual(result_array[2], 79);
	assertEqual(result_array[3], 80);
};


// int slice(int array,int len_of_array,int start_index,int end_index,int result);
void test_slice_of_an_given_array(){
	int *result_array;
	int array[]={1,2,3,4,5,6,7};
	int len_of_array=5;
	int start_index = 2;
	int end_index = 5;
	assertEqual(slice(array,len_of_array,start_index,end_index,&result_array),1);
	assertEqual(result_array[0], 3);
	assertEqual(result_array[1], 4);
	assertEqual(result_array[2], 5);
};



void test_slice_the_value_between_index_5_to_9_of_an_given_array(){
	int *result_array;
	int array[]={1,2,3,4,5,6,7,45,34,89,23};
	int len_of_array=11;
	int start_index = 5;
	int end_index = 9;
	assertEqual(slice(array,len_of_array,start_index,end_index,&result_array),1);
	assertEqual(result_array[0], 6);
	assertEqual(result_array[1], 7);
	assertEqual(result_array[2], 45);
	assertEqual(result_array[3], 34);
};

// int primeNumber(int startRange,int endRange,int *result_array);

void test_getAllPrimeNumber_of_given_range(){
	int *result_array;
	int startRange = 10;
	int endRange = 100;
	assertEqual(primeNumber( startRange, endRange,&result_array),1);

};

void test_string_compare(){
	char *firstString = "heloo";
	char *secondString = "heloo";
	assertEqual(cmp_str(firstString,secondString), 1);
};

void test_string_with_param(){
	char *firstString = "param";
	char *secondString = "pasam";
	assertEqual(cmp_str(firstString,secondString), -1);
};

int forEach(int *array,int length,void *function (int));

void forEach_function(int a){
	 printf("%d\n",a);
};

void test_function_should_be_behave_like_forEach(){
	void (*function) (int) ;
	int *array[] ={1,3,6,8,45,23};
	int length = 6;
	function = &forEach_function;
	assertEqual(forEach(array,length,function), 1);
};






























// int main(void) {

//  	int scores[]={100,90,80};
//  	int *filtered;
//  	int size_of_filtered;

//  	size_of_filtered=filter(scores,3,85,filtered);
//  	return 0;
// }


// };


// void test_febo_of_3_term_should_give_be(){
// 	int *array;
//    array = (int *)malloc(sizeof(int)*3);
// 	assertEqual(febo(3,array),1);
// 	assertEqual(array[0],0);
// 	assertEqual(array[1],1);
// 	assertEqual(array[2],1);

// };
// void test_febo_of_4_term_should_give_be(){
// 	int *array;
//    	array = (int *)malloc(sizeof(int)*4);
// 	assertEqual(febo(4,array),1);
// 	assertEqual(array[0],0);
// 	assertEqual(array[1],1);
// 	assertEqual(array[2],1);
// 	// assertEqual(array[3],2);
// };
// void test_febo_of_5_term_should_give_be(){
// 	int *array;
//    array = (int *)malloc(sizeof(int)*5);
// 	assertEqual(febo(5,array),1);
// 	assertEqual(array[0],0);
// 	assertEqual(array[1],1);
// 	assertEqual(array[2],1);
// 	assertEqual(array[3],2);
// 	assertEqual(array[4],3);
//  };























