function solution(a, b, k) {
    let count = 0;
    const n = a.length;
  
    for (let i = 0; i < n; i++) {
      let x = a[i].toString();
      let y = b[n - 1 - i].toString();
      let concat = parseInt(x + y);
      if (concat < k) {
        count++;
      }
    }
  
    return count;
  }
  const a = [1, 2, 3];
  const b = [1, 2, 3];
  const k = 31;
  const result = solution(a, b, k);
  console.log(result);  // 2
    //asdas