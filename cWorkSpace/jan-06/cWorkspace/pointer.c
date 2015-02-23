#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void heloo(){
	printf("helooo\n");
};

int sum(int a ,int b){
	return a+b;
}

int sub(int a,int b){
	return a-b;
}

int main(int argc, char const *argv[])
									{
	void (*pointer_to_function) (void) ;
	int (*point_to_sum) (int,int) ;
	int (*point_to_sub) (int,int) ;
	point_to_sub = &sub;
	(*point_to_sub)(15,10);
	point_to_sum = &sum;
	(*point_to_sum)(5,10);
	pointer_to_function = &heloo;
	(*pointer_to_function)();
	printf("%d\n",(*point_to_sub)(15,10));
	printf("%d\n", (*point_to_sum)(5,10));
	return 0;
};








// int sum(int *a){
// 	printf("==%d\n",*a );
// 	return *a =13;
// 	printf("==%d\n",*a );

// }

//  int main(int argc, char const *argv[])
// {






	// int a = 65;
	// int *a_ptr;
	// int b = 192;
	// int *b_ptr;

	// 	int *a =20;
	// 	int **aa;
	// 	**aa = &a;
	//  **aa = malloc(sizeof(int *)*2);
	// // printf("%u\n",sizeof(char) );
	// printf("%d\n",*a );
	// // printf("%u\n",&a[2] );
	// printf("%d\n",**aa );



	// char *c = &a;
	// b_ptr = &b;
	// // *a_ptr = &a_ptr;
	// printf("%u\n",a_ptr[0]);
	// // printf("%d\n",*(&a_ptr));
	// // printf("%d\n",*b_ptr);
	// // printf("%d\n",b_ptr);
	// // printf("%d\n",*(&b_ptr));
	// printf("%u\n",c[0] );


// 	return 0;
// };


// int a=12;
	// printf("%d\n",sum(&a));
	// printf("%d\n",&a);


// int *fun();
// int main(){
// 	int *p;
// 	p=fun();
// 	printf("%d\n", p);
// 	printf("%d\n",*p );
// 	return 0;
// };

// int *fun(){
// 	int i=30;
// 	printf("%d\n", &i);
// 	return (&i);
// }






















































// int main(){
// 	int a=23;
// 	int *a_ptr;

// 	int b=192;
// 	int *b_ptr;
// 	// int **aa_ptr;
// 	// int ***aaa_ptr;


// 	a_ptr = &a;
// 	b_ptr = &b;
// 	// aa_ptr = &a_ptr;
// 	// aaa_ptr = &aa_ptr;

// 	// printf("address of first pointer%d\n",&a);
// 	// printf("value of first pointer%d\n",a_ptr);
// 	// printf("address of first pointer%d\n",&a_ptr);
// 	printf("value of first pointer%d\n",*a_ptr);
// 	printf("value of first pointer%d\n",*(&a_ptr));
// 	printf("value of first pointer%d\n",&a);


	// printf("value of first pointer%d\n",aa_ptr);
	// printf("value of first pointer%d\n",&aa_ptr);
	// printf("value of first pointer%d\n",*aa_ptr);
	// printf("value of first pointer%d\n",**aa_ptr);
	// printf("value of first pointer%d\n",***aaa_ptr);
	// printf("value of first pointer%d\n",*aaa_ptr);
	// printf("value of first pointer%d\n",**aaa_ptr);











































































// int Fibonacci(int);
 
// main()
// {
//    int n, i = 0, c;
 
//    scanf("%d",&n);
 
//    printf("Fibonacci series\n");
 
//    for ( c = 1 ; c <= n ; c++ )
//    {
//       printf("%d\n", Fibonacci(i));
//       i++; 
//    }
 
//    return 0;
// }
 
// int Fibonacci(int n)
// {
//    if ( n == 0 )
//       return 0;
//    else if ( n == 1 )
//       return 1;
//    else
//       return ( Fibonacci(n-1) + Fibonacci(n-2) );
// } 

// 	int main()
// 	{
// 		int *ptr_one;

// 		ptr_one = (int *)malloc(sizeof(int));
// 		printf("===============%d\n",ptr_one );

// 		if (ptr_one == 0)
// 		{
// 			printf("ERROR: Out of memory\n");
// 			return 1;
// 		}

// 		*ptr_one = 25;
// 		printf("%d\n", *ptr_one);
// 		*ptr_one = 78;
// 		printf("%d\n", *ptr_one);


// 		free(ptr_one);
// 		printf("%d\n", *ptr_one);


// 		return 0;
// 	}

// #include <stdio.h>
// #include <stdlib.h>

// int main()
// {
//    char *str;

//    /* Initial memory allocation */
//    str = (char *) malloc(15);
//    strcpy(str, "tutorialspoint");
//    printf("String = %s,  Address = %u\n", str, str);

//    /* Reallocating memory */
//    str = (char *) realloc(str, 25);
//    strcat(str, ".com");
//    printf("String = %s,  Address = %u\n", str, str);

//    free(str);
   
//    return(0);
// }

// #include <stdio.h>
// #include <stdlib.h>

// int main(){
// 	int *int_array;
// 	char *string;
// 	 int_array = (int *)malloc(sizeof(int)*3);
//    // int_array = 65;
// 	string = int_array;

// 	 string[0] =65;
	
// 	printf("value of array:-%d\n",int_array);
// 	printf("value of array:-%d\n",int_array+1);
// 	printf("value of array[0]: %d\n",int_array[0]);
	
// 	printf("value of array:-%d\n",string);
// 	printf("value of array:-%d\n",string+1);
// 	printf("|%c|\n",string[0] );

// 	return 0;
// };




// #include <stdio.h>
// #include <stdlib.h>
// 
// call by value
// void swap(int,int);
// int main(){
// 	int a=10;
// 	int b=20;
// 	swap(a,b);
// 	printf("A=%d\n",a);
// 	printf("B=%d\n",b );
// 	return 0;
// }

// void swap(int x,int y){
// 	int t;
// 	t=x;
// 	x=y;
// 	y=t;
// 	printf("x=%d\n",x);
// 	printf("y=%d\n",y);
// }

// #include <stdio.h>

// int main ()
// {
//    int  var1;
//    char var2[10];

//    printf("Address of var1 variable: %d\n", &var1  );
//    printf("Address of var2 variable: %d\n", &var2  );

//    return 0;
// }
// #include <stdlib.h>
// //call by refrence
// void swap(int *,int *);
// int main(){
// 	int a=10;
// 	int b=20;
// 	swap(&a,&b);
// 	printf("A=%d\n",a);
// 	printf("B=%d\n",b );
// 	return 0;
// }

// void swap(int *x,int *y){
// 	int t;
// 	t=*x;
// 	*x=*y;
// 	*y=t;
// 	printf("x=%d\n",*x);
// 	printf("y=%d\n",*y);
// }

// int main(){
// 	int i=54;
// 	float a=3.14;
// 	int  *ii;
// 	float *aa;
	
// 	ii=&i;
// 	aa=&a;
// 	printf("Adress of ii=%u\n",ii);
// 	printf("Adress of ii=%u\n",&i);
// 	printf("Adress of aa=%u\n",aa);
// 	printf("Adress of aa=%u\n",&a);
// 	printf("Adress of aa=%f\n",*aa);
// 	printf("Adress of ii=%d\n",*ii);


// 	// printf("Adress of i%u\n",j);
// 	// printf("Adress of j%u\n",&j);
// 	// printf("Value of i%d\n",i);
// 	// printf("Value of j%d\n",j);
// 	// // printf("Value of i%d\n",*(&i);
// 	// printf("value of i%d\n",*j);
// 	return 0;

// }

// int *memory_created() {

// int *a;

// a=(int *)malloc(sizeof(int));
// return a;
// }

// int main(void) {
// int *a;
// int *b;
// int *c;

// a=memory_created();
// printf("Value of A is: %p\n", a );
// *a=10;
// printf("*A has been assigned the value %d\n",*a);
// b=memory_created();
// *b=20;

// printf("*B contains the value %d\n",*b);
// c=memory_created();
// *c=30;
// printf("*C contains the value %d\n",*c);
// printf("*B contains the value %d\n",*b);
// printf("*A contains the value %d\n",*a);

// free(a);
// free(b);

// printf("Value of A is: %p\n", a );
// printf("*A after freeing memory is %d\n",*a);
// return 0;
// }
