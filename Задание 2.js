function isPrime(n) {
    if (n <= 1 || n > 1000) {
        return "Данные неверны";
    } else if (n <= 3) {
        return "Простое число";
    } else if (n % 2 === 0 || n % 3 === 0) {
        return "Не простое число";
    }
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return "Не простое число";
        }
        i += 6;
    }
    return "Простое число";
}