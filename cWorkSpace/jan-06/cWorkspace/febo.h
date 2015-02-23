int febo(int numberOfTerms , int *array);
int concat(int *array1, int len_of_array1, int *array2, int len_of_array2, int *result_array);
int reverse(int *array, int length, int *result_array);
int filter(int *array, int length, int threshold, int **result_array);
int slice(int *array,int len_of_array,int start_index,int end_index,int **result_array);
int primeNumber(int startRange,int endRange,int **result_array);
int cmp_str(char *firstString,char *secondString);
int forEach(int *array,int length,void *function (int));

