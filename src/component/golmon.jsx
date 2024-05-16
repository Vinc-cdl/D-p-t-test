for (let i = 0; i < n; i++) { // on commence à i = 0, on continue tant que on a pas dépassé le nombre de nombres dans le tableau, i augmente de 1 à chaque tour de boucle
    for (let j = 0; j < n - i - 1; j++) { // on commence à j = 0, on continue tant que 
        if (arr[j] > arr[j + 1]) { // si tab[j] plus grand que tab[j+1], on échange leurs places
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}