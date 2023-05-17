function solution(arr) {
    const result = [];
    for (let i = 0; i < arr.length - 2; i++) {
      if (arr[i] + arr[i + 1] > arr[i + 2] && arr[i] + arr[i + 2] > arr[i + 1] && arr[i + 1] + arr[i + 2] > arr[i]) {
        result.push(1);
      } else {
        result.push(0);
      }
    }
    return result;
  }
  const arr = [1, 2, 2, 4];
  const result = solution(arr);
  console.log(result);  // [1, 0]
    //asdas