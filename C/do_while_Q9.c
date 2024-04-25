#include <stdio.h>

main()
{
    int n,a=1,b=1;
    
	printf("Enter a Number to Find Factorial : ");
    scanf("%d",&n);
    
	do{
		b*=a;
        a++;
    }
    while(a<=n);
    printf("The Factorial of %d is : %d\n",n,b);
}
