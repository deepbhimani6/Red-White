#include<stdio.h>

main()
{
	 int n, a=1;
 
    printf("Enter a Number : ");
    scanf("%d",&n);
  
	for(a=1;a<=10;a++)
	{
		printf("%d * %d = %d\n", n, a, n*a);
	}
}
