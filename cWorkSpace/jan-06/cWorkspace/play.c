#include <stdio.h>

int main(){
	int height=3;
	// char text ='v';
	// int scores[5]={2,3,5,6,7};
	// int width=5;
	// int score =50;
	int *addressofHeight;
	addressofHeight = &height;
	printf("%d\n", &height);
	printf("%d\n", addressofHeight);
	printf("%d\n", &addressofHeight);
	printf("%d\n", *addressofHeight);

	 *addressofHeight =8;
	printf("%d\n", *addressofHeight);


	

	// printf("text %c\n",text);
	// printf("adress of text %d\n",&text);

	// printf("height %d\n",height);
	// printf("adress of height %d\n",&height);

	// printf("Scores %d\n",scores[0]);
	// printf("adress of Scores %d\n",&scores[0]);
	// printf("width %d\n",width);
	// printf("adress of width %d\n",&width);

	// printf("score %d\n",score);
	// printf("adress of score %d\n",&score);

	return 0;
	}


// int main(){
// 	char text = 'v';
// 	int number = 7;
// 	long num = 123;
// 	printf("%c\n",text );
// 	printf("%d\n",sizeof(text));

// 	printf("%d\n",number );
// 	printf("%d\n",sizeof(number));

// 	printf("%ld\n",num );
// 	printf("%d\n",sizeof(num));
// 	return 0;
// }
