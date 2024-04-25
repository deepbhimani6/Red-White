#include<stdio.h>

main()
{
	int a;
	
	printf("value of a is : ");
	scanf("%d",&a);
	
	if(a>0){
		printf("a is positive");
	}
	
	else if(a==0){
	    printf("a is zero");
	}
	
	else{
		printf("a is negative");
	}
}
