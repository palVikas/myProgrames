#include <stdio.h>
#include <string.h>
int main(){
	char ch[20];
	int len;
	printf("Enter the text\n");
	gets(ch);
	len = strlen(ch);
	printf("length of the text = %d" , len);
	return 0;
}

// #include "stdio.h"
 
// int main()
// {
//    int a, b, c;
//    printf("Enter two numbers to add\n");
//    scanf("%d%d",&a,&b);
//    c = a + b;
//    printf("Sum of entered numbers = %d\n",c);
//    return 0;
// }

// #include <stdio.h>
 
//  int main()
// {
//    int a, b, c;
//    char ch;
 
//    while(1)
//    {
//       printf("Enter values of a and b\n");
//       scanf("%d%d",&a,&b);
 
//       c = a + b;
 
//       printf("a + b = %d\n", c);
 
//       printf("Do you wish to add more numbers(y/n)\n");
//       scanf(" %c",&ch);
 
//       if ( ch == 'y' || ch == 'Y' )
//          continue;
//       else
//    	 break;
//    }
 
//    return 0;
// }

// #include<stdio.h>
// int check_vowel(char);
// int main(){
// 	char ch ,result;
//    printf("enter any charecter\n");
//    scanf("%c", &ch);
//    result = check_vowel(ch);
//  return 0;
// }
 
// long addition(long, long);
 
// int main()
// {
//    long first, second, sum;
 
//    scanf("%ld%ld", &first, &second);
 
//    sum = addition(first, second);
 
//    printf("sum of the two number:-%ld\n", sum);
 
//    return 0;
// }
 
// long addition(long a, long b)
// {
//    long result;
 
//    result = a + b;
 
//    return result;
// }

// int check_vowel(char a)
// {
//     if (a >= 'A' && a <= 'Z')
//        a = a + 'a' - 'A';   /* Converting to lower case or use a = a + 32 */
 
//     if (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u')
//    		return printf("charecter is vowel:-%c\n", a);
//  	else
//    		return printf("charecter is consonent:-%c\n", a);
//     // return 0;
// }

// #include <stdio.h>
 
// int add_digits(int);
 
// int main() 
// {
//   int n, result;
 
//   scanf("%d", &n);
 
//   result = add_digits(n);
 
//   printf("%d\n", result);
 
//   return 0;
// }
 
// int add_digits(int n) {
//   static int sum = 0;
 
//   if (n == 0) {
//     return 0;
//   }
 
//   sum = n%10 + add_digits(n/10);
 
//   return sum;
// }

// #include <stdio.h>
 
// int main()
// {
//   int n, c, k;
 
//   printf("Enter an integer in decimal number system\n");
//   scanf("%d", &n);
 
//   printf("%d in binary number system is:\n", n);
 
//   for (c = 31; c >= 0; c--)
//   {
//     k = n >> c ;
//  	printf("========>%d%d\n" , n , c);
//     if (k & 1)
//       printf("1");
//     else
//       printf("0");
//   }
 
//   printf("\n");
 
//   return 0;
// }