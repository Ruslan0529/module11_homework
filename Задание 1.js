countArrayElements([1, 2, 3, 4, 0, 'a', 'b', 5, 6, 7, 8, 9, 10]);

function countArrayElements(arr) {
    let evenCount = 0; // Количество четных чисел
    let oddCount = 0; // Количество нечетных чисел
    let zeroCount = 0; // Количество нулей

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zeroCount++;
            } else if (arr[i] % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    }

    console.log(`Четных чисел: ${evenCount}`);
    console.log(`Нечетных чисел: ${oddCount}`);
    console.log(`Нулей: ${zeroCount}`);
}