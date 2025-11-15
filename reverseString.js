/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let len = s.length;
    let halfLen = Math.floor(len / 2);

    for (let i=0; i<halfLen; i++) {
        let temp = s[i];
        s[i] = s[len-1-i];
        s[len-1-i] = temp;
    }
};

const s = ['h', 'e', 'l', 'l', 'o'];
reverseString(s);
console.log(s);

/*
Dry Run Table:
| i | s[i] | len | halfLen | temp | s (after swap)        | Action                      |
|---|------|-----|---------|------|-----------------------|-----------------------------|
| 0 |  'h' |  5  |    2    | 'h'  | ['o', 'e', 'l', 'l', 'h'] | Swap s[0] and s[4]         |
| 1 |  'e' |  5  |    2    | 'e'  | ['o', 'l', 'l', 'e', 'h'] | Swap s[1] and s[3]         |
Final Result: ['o', 'l', 'l', 'e', 'h']
*/