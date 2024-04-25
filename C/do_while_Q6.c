#include<stdio.h>

main()
{
	int a=0,n;
	
	printf("enter no. : ");
	scanf("%d",&n);
	
	do{
		printf("%d\n",a);
		a=a+2;
	}
	while(a<=n);
}
