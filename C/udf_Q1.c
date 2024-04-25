#include <stdio.h>

double cube(double num);

main()
{
    int num;
    double c;

    printf("Enter any number: ");
    scanf("%d", &num);
    
    c = cube(num);

    printf("Cube of %d is %.2f", num, c); 
    
}

    double cube(double num)
{
    return (num * num * num);
}
