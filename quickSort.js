function quickSort(arr) {
  let length = arr.length
  if (length == 0)
    return []
  if (length == 1)
    return arr
  let pivot = Math.floor(length / 2)
  let left = []
  let right = []
  let same = []
  for (let i = 0; i < length; i++) {
    if (arr[pivot] == arr[i]) {
      same.push(arr[i])
    }
    else if (arr[pivot] > arr[i]) {
      left.push(arr[i])
    }
    else {
      right.push(arr[i])
    }

  }

  return [...quickSort(left), ...same, ...quickSort(right)]
}

let unsorted = [5, 66, 3, 45, 7, 2, 9, 45, 24, 88, 66]
console.log(quickSort(unsorted))




/* 

Quick sort without using extra arrays. Inplace sorting

*/


function random(min,max){
  return Math.floor(Math.random() * (max-min+1 )) + min
}

function swap(arr, item1, item2){
  let temp = arr[item1]
  arr[item1] = arr[item2]
  arr[item2] = temp
}


function pivotPartition(arr,start,end){
  let pivotIndex = random(start,end)
  let pivot = arr[pivotIndex]
  swap(arr,pivotIndex,end)
  let calculatedPivotIndex = start -1
  
  for(let j = start;j<end;j++){
   
    if(arr[j]<=pivot){
       calculatedPivotIndex++
        swap(arr,calculatedPivotIndex,j)
    }
   
  }
  swap(arr,calculatedPivotIndex+1,end)
  
  return calculatedPivotIndex+1;
}

function quickSort2(arr,start,end){
  
  if(start<end){
    let newPivot = pivotPartition(arr,start,end)
    quickSort2(arr,start,newPivot-1)
    quickSort2(arr,newPivot+1,end)
  }
  
}


unsorted = [5,66,3,45,7,2,9,45,24,88,66]
console.log(quickSort(unsorted))

