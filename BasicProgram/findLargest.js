function findLargest(array) {
    let largestNumber = array[0];
    array.forEach((item) => {
      if (item > largestNumber) {
        largestNumber = item;
      }
    });
    return largestNumber;
  }