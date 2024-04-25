#include <stdio.h>

main()
{
    int n,a=1,b=1;
    
	printf("Enter a Number to Find Factorial : ");
    scanf("%d",&n);
    
	while(a<=n){
        b*=a;
        a++;
    }
    printf("The Factorial of %d is : %d",n,b);
}
