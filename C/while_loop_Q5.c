#include<stdio.h>

main()
{
	int n,b=1;
	
	printf("enter num. : ");
	scanf("%d",&n);
	
	while(b<=n){
		printf("%d\n",b);
		b=b+2;
	}
}
