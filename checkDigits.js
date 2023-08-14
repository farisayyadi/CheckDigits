//How many 3-digit numbers can made using only 2 different digits taken from 1 tp 9?
//(Repetition of digit are allowed)

function CheckDigit() {
  let count = 0;

  for (let i = 111; i < 999; i++) {
    let num = i;
    const digits = new Set();

    while (num > 0) {
      const digit = num % 10;
      num = Math.floor(num / 10);
      digits.add(digit);
    }

    if (digits.size === 2 && !digits.has(0)) {
      count += 1;
    }
  }

  console.log("Count:", count);
}

CheckDigit();
