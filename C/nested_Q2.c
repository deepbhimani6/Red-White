#include<stdio.h>

main()
{
	int a,b,c;
	
	printf("enter your no. : ");
	scanf("%d%d%d",&a,&b,&c);
	
	if(a<b)
	{
		if(a<c)
		{
			printf("a is small");
		}
		else
		{
			printf("c is small");
		}
	}
	else
	{
		if(b<c)
		{
			printf("b is small");
		}
		else
		{
			printf("c is small");
		}
	}
}
