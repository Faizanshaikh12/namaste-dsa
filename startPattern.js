// Pattern 1: Right-angled triangle of asterisks
for (let i = 0; i < 5; i++) {
    let pattern = '';
    for (let j = 0; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern.trim());
}

// Pattern 2: Right-angled triangle of numbers
for (let i = 0; i < 5; i++) {
    let pattern = '';
    for (let j = 0; j <= i; j++) {
        pattern += i + 1;
    }
    console.log(pattern.trim());
}

// Pattern 3: Inverted right-angled triangle of numbers
let n = 5;
for (let i = 0; i < n; i++) {
    let pattern = '';
    for (let j = 0; j <= n - i; j++) {
        pattern += j + 1;
    }
    console.log(pattern.trim());
}