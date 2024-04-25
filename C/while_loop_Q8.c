#include<stdio.h>

main()
{
	int a,n,sum=0;
	
	printf("enter no. : ");
	scanf("%d",&n);
	
	 while (a<=n){
        sum+=a;
        a++;
    }
	
	printf("Sum = %d", sum);
	
}

