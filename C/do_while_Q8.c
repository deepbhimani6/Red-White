#include<stdio.h>

main()
{
	int a,n,sum=0;
	
	printf("enter no. : ");
	scanf("%d",&n);
	
	 do{
	 	printf("Sum = %d\n", sum);
        sum+=a;
        a++;
    }
	while (a<=n);
}

