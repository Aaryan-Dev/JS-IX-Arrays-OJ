// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to traverse the array, and print only the even elements in the array.

// Print each number on a new line

// For example, consider the array asarr = [1 2 3 4 5], and the value stored inn = 5

// Then, the required output will bess
// 4

function evenArray(n, arr){
        
    for(i=0; i< arr.length-(arr.length-n); i++){
     if(arr[i]%2===0){   
    console.log(arr[i]);
    }
    }
}