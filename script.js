  function firstNonRepeatedChar(str) {
    const charCount = {};
    for (const char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of str) {
      if (charCount[char] === 1) return char;
    }
    return null;
  }

  const input = document.getElementById('inputString');
  const button = document.getElementById('checkBtn');
  const resultDiv = document.getElementById('result');

  button.addEventListener('click', () => {
    const value = input.value.trim();
    if (!value) {
      resultDiv.textContent = 'Please enter a string.';
      return;
    }
    if (!/^[a-z]+$/.test(value)) {
      resultDiv.textContent = 'Only lowercase English letters allowed.';
      return;
    }
    const res = firstNonRepeatedChar(value);
    resultDiv.textContent = res === null ? 'No non-repeated character found.' : `First non-repeated character: '${res}'`;
  });

  // Allow Enter key to trigger the button
  input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      button.click();
    }
  });
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
