#include "febo.h"
#include <stdlib.h>

 
 int main()
{
   int *array;
   int numberOfTerms, i = 0, increment;
 
   scanf("%d\n",&numberOfTerms);
   array = (int *)malloc(sizeof(int)*numberOfTerms);

   printf("febo series\n");
   for ( increment = 1 ; increment <= numberOfTerms ; increment++ )
   {
      printf("%d\n", febo(i,array));
      i++; 
   }
 
   return 0;
}
 

