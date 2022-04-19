// You are given an array, stored in a variable with the namearr

// The size of the array is stored in a variable with the namesize

// You have to print the reverse traversal of the array

// For example, consider the value stored insize = 4, and the array isarr = [1 2 3 4]. Then, the required output will be

// 4 3 2 1


function reverseArrayTraversal(n, arr){
    bag = 0;
    for((i=arr.length-1)-(arr.length-n-1); i>=0; i--){
        
        bag = bag + arr[i]+ " ";
    }
    console.log(bag);
}