#include<stdio.h>

main()
{
	int a,b,c,d,e;
	
	printf("enter value : ");
	scanf("%d%d%d%d%d",&a,&b,&c,&d,&e);
	
	if(a<b){
		if(a<c){
			if(a<d){
				if(a<e){
					printf("a is small");
				}
				else{
					printf("e is small");
				}
			}
			else{
				if(d<e){
					printf("d is small");
				}
				else{
					printf("e is small");
				}
			}
		}
		else{
			if(c<d){
				if(d<e){
					printf("d is small");
				}
				else{
					printf("e is small");
				}
			}
		}
	}
}
