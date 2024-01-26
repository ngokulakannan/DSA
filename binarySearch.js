
function BinarySearch(items, search) {
  let start = 0

  let end = items.length

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (items[mid] == search) {
      return mid
    }
    else if (items[mid] < search) {
      start = mid + 1
    }
    else {
      end = mid - 1
    }

  }
  return -1
}

function BinarySearchRecursive(items, start, end, search) {

  if (start >= end) {
    return -1
  }

  let mid = Math.floor((start + end) / 2)
  if (items[mid] == search) {
    return mid
  }
  else if (items[mid] < search) {
    return BinarySearchRecursive(items, mid + 1, end, search)
  }
  else {
    return BinarySearchRecursive(items, start, mid - 1, search)
  }

}


let items = [2, 5, 6, 7, 13, 16, 19, 22, 25, 27, 28, 30, 31, 33, 34]
// items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let toSearch = 5
console.log(BinarySearch(items, toSearch))
console.log(BinarySearchRecursive(items, 0, items.length, toSearch))