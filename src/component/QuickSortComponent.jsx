import React, { useEffect, useState } from 'react';

function QuickSortComponent() {
  const [numbers, setNumbers] = useState([]);
  const numberOfArrayExponents = 100;

  useEffect(() => {
    setNumbers([...Array(numberOfArrayExponents).keys()].map(() => Math.floor(Math.random() * numberOfArrayExponents)));
  }, []);

  const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
  };

  const handleSort = () => {
    console.time('QuickSort Time');
    const sortedNumbers = quickSort([...numbers]);
    console.timeEnd('QuickSort Time');
    setNumbers(sortedNumbers);
  };

  return (
    <div>
      <button onClick={handleSort}>Sort Numbers</button>
      <div>{numbers.join(', ')}</div>
    </div>
  );
}

export default QuickSortComponent;
