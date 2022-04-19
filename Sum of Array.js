// You are given an array, whose size is stored in a variable of sizen

// The array is stored in a variable with the name,arr

// You have to print the sum of all elements of an array

// For example, the value stored inN = 5, and the array isarr = [1 2 3 4 5]

// Therefore, the required output will be

// 15

function ArraySum(n, arr){
    sum = 0;
    for((i=arr.length-1)-(arr.length-n-1); i>=0; i--){
        
      sum = sum + arr[i];
    }
    console.log(sum);
}
