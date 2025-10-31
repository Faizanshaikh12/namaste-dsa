for(i=5; i>0; i--) {
    for(j=0; j<i; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

/* Dry Run
| Outer Loop i | Inner Loop j Values |
|--------------|---------------------|
|      5       |    0, 1, 2, 3, 4    |
|      4       |      0, 1, 2, 3     |
|      3       |       0, 1, 2       |
|      2       |        0, 1         |
|      1       |         0          |
*/