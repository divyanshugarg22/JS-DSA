function frequency(array) {
    const output = {};
    array.forEach((ele) =>
      Object.keys(output).includes(ele)
        ? parseInt(output) + 1
        : (output[ele] = 1)
    );
    return output;
  }

  console.log(frequency([1, 1, 2, 3, 3, 4]));