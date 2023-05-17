function solution(s) {
    const charCounts = {}; // Objeto para contar la frecuencia de cada carácter en la cadena
  
    // Contar la frecuencia de cada carácter
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
  
    let palindrome = ''; // Palíndromo resultante
    let oddChar = ''; // Carácter impar
  
    // Agregar caracteres al palíndromo en orden descendente
    Object.keys(charCounts).sort((a, b) => b.localeCompare(a)).forEach(char => {
      const count = charCounts[char];
      const halfCount = Math.floor(count / 2);
  
      palindrome = char.repeat(halfCount) + palindrome + char.repeat(halfCount);
      
      charCounts[char] -= halfCount * 2;
  
      if (charCounts[char] === 1 && oddChar === '') {
        oddChar = char;
      }
    });
  
    // Agregar el carácter impar al medio del palíndromo (si existe)
    if (oddChar !== '') {
      const midIndex = Math.floor(palindrome.length / 2);
      palindrome = palindrome.substring(0, midIndex) + oddChar + palindrome.substring(midIndex);
    }
  
    return palindrome;
  }
  
  // Ejemplos de uso:
  console.log(solution("aaabb"));     // Salida: "aabbbcdcdcbbbaa"
  console.log(solution("aaabbbcc"));  // Salida: "abbccdefghhhahhhgfedccbba"
  console.log(solution("aaaaaaa"));   // Salida: "aaaaaaa"
  console.log(solution("a"));         // Salida: "a"
  console.log(solution("a"));         // Salida: "a"
  console.log(solution("bcefhiiaiihfecb"));  // Salida: "bcefhiiaiihfecb"
  console.log(solution("aaabbdefggaggfedbbaaa"));  // Salida: "aaabbdefggaggfedbbaaa"
  console.log(solution("lopipol"));  // Salida: "lopipol"
  console.log(solution("ccgagcc"));  // Salida: "ccgagcc"
  
//asadada
  //este no paso todo :(