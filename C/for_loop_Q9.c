#include<stdio.h>

main()
{
	  int n,a=1,b=1;
    
	printf("Enter a Number to Find Factorial : ");
    scanf("%d",&n);
    
	for(a=1;a<=n;a++){
		b*=a;
	}
	printf("The Factorial of %d is : %d\n",n,b);
}
