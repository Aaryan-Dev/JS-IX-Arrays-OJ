// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to find the minimum number in the array

// For example, consider the array asarr = [1 2 3 4 5], and the value stored in n = 5

// Then, the required output will be1, as it is the smallest number in the array

function minimumInArray(N,arr){
    
    let initial = arr[0];
        
    for(i=0; i< arr.length-(arr.length-N); i++){
    if(initial>=arr[i]){
    initial = arr[i];
    }
    }
    console.log(initial);   
    }


