#include <stdio.h>
#include <stdlib.h>
#include "febo.h"
int febo(int numberOfTerms,int *array){
	int first_num=0,second_num=1,i;
	array[0]=first_num;
	array[1]=second_num;
	if(numberOfTerms<=0)
		return 0;
	else if(numberOfTerms==1)
		return 1;
	else{
		for(i=2;i<=numberOfTerms;i++){
			array[i]=first_num+second_num;
			first_num=second_num;
			second_num=array[i];
		}
		return 1;
	}
}

int concat(int *array1, int len_of_array1, int *array2, int len_of_array2, int *result_array){
	int i,j;
	for(i=0;i<=len_of_array1;i++){
		result_array[i]=array1[i];
	};
	for(j=0;j<=len_of_array2;j++){
		result_array[len_of_array1+j]=array2[j];
	}
	return 1;
};

int reverse(int *array, int length, int *result_array){
	int i=0,j;
	for(j=length-1;j>=0;j--){
		result_array[i] = array[j];
		i++;
	}
	return 1;

};

int filter(int *array, int length, int threshold, int **result_array){
	int i,j,count=0 ,temp[length];
	for(i=0;i<=length-1;i++){
		if(array[i] >= threshold){
			temp[count] = array[i];
			count++;
		}
	}
	*result_array = (int *)malloc(sizeof(int)*count);
	for(j=0;j<count;j++){
		(*result_array)[j] = temp[j];
	}
	return 1;
};


int slice(int *array,int len_of_array,int start_index,int end_index,int **result_array){
	int i,j,count=0 ,temp[len_of_array];
	for(i=0;i<=len_of_array-1;i++){
		if(i>=start_index && i<end_index){
			temp[count] = array[i];
			count++;
		}
	}
	*result_array = (int *)malloc(sizeof(int)*count);
	for(j=0;j<count;j++){
		(*result_array)[j] = temp[j];
	}
	return 1;
};

int countPrime(int start,int end){
	int i, j, notPrime,prime=0,store=0;
			for(i=start; i<end;i++){
					if(prime == store+1){
							store = prime;
						}
					notPrime=0;
					for(j=2; j<=i/2;j++){
							if(i%j==0){
							notPrime=1;
						}
					}
			if(notPrime==0){
					prime++;
			}
		}
	return prime;
};

int primeNumber(int startRange,int endRange,int **result_array){
	int i, j, notPrime,prime=0,store=0;
		*result_array = (int *)malloc(sizeof(int)*countPrime(startRange,endRange));
		for(i=startRange; i<endRange;i++){
			if(prime == store+1){
				store = prime;
			}
			notPrime=0;
			for(j=2; j<=i/2;j++){
					if(i%j==0){
						notPrime=1;
					}
			}
			if(notPrime==0){
				(*result_array)[prime]=i;
					prime++;
				}
		}
		return 1;
}


int cmp_str(char *firstString,char *secondString){
	int c=0;
   while(firstString[c] == secondString[c])
   {
      if ( firstString[c] == '\0' || secondString[c] == '\0' )
         break;
     	 c++;
    	
   }
   if( firstString[c] == '\0' && secondString[c] == '\0' )
      return 1;
   else
   		printf("cmp_str:=%d\n",(secondString[c]-firstString[c]));
      return -1;
};


int forEach(int *array, int length, void *function (int)){
	int i;
	for(i=0;i<length;i++){
		 (*function)(array[i]);
	}
	return 1;
};




// Write a for_each function that accepts an array, the array's length and a function pointer. The for each will behave like javascript's forEach function. It will iterate over each element and call the specified function for each of the elements.

// The for_each function can return success or failure as its return value. 

// I will not provide the function signature.

// int for_each(int *array, int length, )









	


// int findPrime(int start,int end,int **result_array){



// main()
// {
//    int n, c = 2;
 
//    printf("Enter a number to check if it is prime\n");
//    scanf("%d",&n);
 
//    for ( c = 2 ; c <= n - 1 ; c++ )
//    {
//       if ( n%c == 0 )
//       {
//          printf("%d is not prime.\n", n);
// 	 break;
//       }
//    }
//    if ( c == n )
//       printf("%d is prime.\n", n);
 
//    return 0;
// }




// 	int main()
// {
//    int n, i = 3, count, c;
 
//    printf("Enter the number of prime numbers required\n");
//    scanf("%d",&n);
 
//    if ( n >= 1 )
//    {
//       printf("First %d prime numbers are :\n",n);
//       printf("2\n");
//    }
 
//    for ( count = 2 ; count <= n ;  )
//    {
//       for ( c = 2 ; c <= i - 1 ; c++ )
//       {
//          if ( i%c == 0 )
//             break;
//       }
//       if ( c == i )
//       {
//          printf("%d\n",i);
//          count++;
//       }
//       i++;
//    }
 
//    return 0;
// }









// 	int i;
// 	if ( numberOfTerms == 0 ){
// 		array[0]=0;
// 		return *array;
//   }
//    else if ( numberOfTerms == 1 ){
//       array[1] = 1;
//       return *array;
//   }
//    else{ 
//     for(i=2;i<=numberOfTerms;i++)
//  		array[i] = febo(numberOfTerms-1,array)+ febo(numberOfTerms-2,array);
//  	return *array;
//  	}
 
// };
 




// 		int i;
// 	if(numberOfTerms>=0){
// 		for(i=0;i==numberOfTerms;i++){
// 			array[i] = febo(numberOfTerms+1,array)+ febo(numberOfTerms+2,array);
// 		};
// 			return 1;
// 	};
// 	return 0;
// };
	





	
	

// /;
