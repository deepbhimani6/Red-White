#include <stdio.h>
#define ARRAY_SIZE(a)  sizeof(a)/sizeof(a[0])

main()
{
    int arr[] = {15, 12, 13, 10};
    int sum = 0;  // accumulate sum in this variable
    int i = 0;

    int N = ARRAY_SIZE(arr);

    for(i = 0; i < N; i++)
    {
        sum += arr[i];  // add the current element to sum
    }

    printf("\nSum = %d", sum);
}
