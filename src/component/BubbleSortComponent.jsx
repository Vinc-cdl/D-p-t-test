import React, { useEffect, useState } from 'react';

function BubbleSortComponent() {
    const [numbers, setNumbers] = useState([]);
    const numberOfArrayExponents = 1000;
    useEffect(() => {
        setNumbers([...Array(numberOfArrayExponents).keys()].map(() => Math.floor(Math.random() * numberOfArrayExponents)));
    }, []);
    const bubbleSort = (arr) => {
        console.time('BubbleSort Time');
        let n = arr.length;
        for (let i = 0; i < n; i++) { // on commence à i = 0, on continue tant que on a pas dépassé le nombre de nombres dans le tableau, i augmente de 1 à chaque tour de boucle
            for (let j = 0; j < n - i - 1; j++) { // on commence à j = 0, on continue tant que 
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        console.timeEnd('BubbleSort Time');
        return arr;
    };
    return (
        <div>
            <button onClick={() => setNumbers(bubbleSort([...numbers]))}>Sort Numbers</button>
            <div>{numbers.join(', ')}</div>
        </div>
    );
}

export default BubbleSortComponent;