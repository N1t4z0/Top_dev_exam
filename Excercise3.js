function solution(s1, s2) {
    const count1 = countOccurrences(s1);
    const count2 = countOccurrences(s2);
    
    let result = '';
    let i = 0;
    let j = 0;
    
    while (i < s1.length && j < s2.length) {
      const char1 = s1[i];
      const char2 = s2[j];
      
      if (count1[char1] < count2[char2]) {
        result += char1;
        i++;
      } else if (count1[char1] > count2[char2]) {
        result += char2;
        j++;
      } else {
        if (char1 <= char2) { // Cambio en la comparación
          result += char1;
          i++;
        } else {
          result += char2;
          j++;
        }
      }
    }
    
    while (i < s1.length) {
      result += s1[i];
      i++;
    }
    
    while (j < s2.length) {
      result += s2[j];
      j++;
    }
    
    return result;
  }
  
  function countOccurrences(s) {
    const count = {};
    
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (count[char] === undefined) {
        count[char] = 1;
      } else {
        count[char]++;
      }
    }
    
    return count;
  }
  const s1 = "dce";
  const s2 = "cccbd";
  const result = solution(s1, s2);
  console.log(result);  // "owvieaqugtaleegvrabhugzyxgaegbxg"
    //asda