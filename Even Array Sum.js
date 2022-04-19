// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to traverse the array, and print sum of even elements

// Print each number on a new line

// For example, consider the array asarr = [1 2 3 4 5], and the value stored inn = 5

// The sum of even elements are : 2 + 4 = 6

// Then, the required output will be

// 6

function evenArraySum(n, arr){
    
    sum = 0;
    for(i=0;  i< arr.length-(arr.length-n); i++){
        if(arr[i]%2===0){
            sum = sum + arr[i];
        }
    }
    console.log(sum);
}