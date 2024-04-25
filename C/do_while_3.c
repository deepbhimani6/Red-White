#include<stdio.h>

main()
{
  long long n;
  int count = 0;
  
  printf("Enter an integer: ");
  scanf("%lld", &n);
 
  do
  {
    n /= 10;
    ++count;
  } 
  
  while (n != 0);
  
  printf("Number of digits: %d", count);

}
