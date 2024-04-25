#include<stdio.h>

main()
{
	int i,j,k;
	
		for(i=1;i<=5;i++){
		for(j=i;j>=1;j--){
			printf("%d",j);
		}
		printf("\n");
	}
	
	for(i=4;i>=1;i--){
		for(j=i;j>=1;j--){
			printf("%d",j);
		}
		printf("\n");
	}
	
	
	
	for(i=1;i<=4;i++){
		for(k=4;k>=i;k--){
			printf(" ");
		}
		for(j=1;j<=i;j++){
			printf("%d",j);
		}
		printf("\n");
	}
	
		for(i=1;i<=5;i++){
		for(k=2;k<=i;k++){
			printf(" ");
	}
	
		for(j=i;j<=5;j++)
		{
			printf("%d",j);
		}
		printf("\n");
	
    }
	
	
}
