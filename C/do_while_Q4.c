#include<stdio.h>

main()
{
	int n,b=1;
	
	printf("enter num. : ");
	scanf("%d",&n);
	
	do{
		printf("%d\n",n);
		n--;
	}
	while(n>=b);	
}
