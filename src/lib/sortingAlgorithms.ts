const naiveSort = (arr: number[], steps: number) => {
    let swapCount = 0;
    let swappedIndexes: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                swappedIndexes = [i, j];
                swapCount++;

                if (swapCount === steps) {
                    return { arr, swappedIndexes };
                }
            }
        }
    }

    return { arr, swappedIndexes: [] };
};

const bubbleSort = (arr: number[], steps: number) => {
    let swapCount = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapCount++;

                if (swapCount === steps) {
                    return { arr, swappedIndexes: [j, j + 1] };
                }
            }
        }
    }

    return { arr, swappedIndexes: [] };
};

const selectionSort = (arr: number[], steps: number) => {
    let swapCount = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            swapCount++;
            if (swapCount === steps) {
                return { arr, swappedIndexes: [minIndex, i] };
            }
        }
    }

    return { arr, swappedIndexes: [] };
};

const insertionSort = (arr: number[], steps: number) => {
    let swapCount = 0;

    for (let i = 1; i < arr.length; i++) {
        let keyIndex = i;
        let currentIndex = i - 1;
        while (currentIndex >= 0 && arr[currentIndex] > arr[keyIndex]) {
            [arr[currentIndex], arr[keyIndex]] = [
                arr[keyIndex],
                arr[currentIndex],
            ];
            swapCount++;
            if (swapCount === steps) {
                return { arr, swappedIndexes: [currentIndex, keyIndex] };
            }
            keyIndex = currentIndex;
            currentIndex--;
        }
    }

    return { arr, swappedIndexes: [] };
};

const shellSort = (arr: number[], steps: number) => {
    const n = arr.length;
    let swapCount = 0;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            const temp = arr[i];
            let j = i;

            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
                swapCount++;
                if (swapCount === steps) {
                    arr[j] = temp;
                    return { arr, swappedIndexes: [i, j] };
                }
            }

            if (j !== i) {
                arr[j] = temp;
                swapCount++;
                if (swapCount === steps) {
                    return { arr, swappedIndexes: [i, j] };
                }
            } else {
                arr[j] = temp;
            }
        }
    }

    return { arr, swappedIndexes: [] };
};

export const sortingAlgorithms: SortingAlgorithmsType = {
    naiveSort,
    bubbleSort,
    selectionSort,
    insertionSort,
    shellSort,
};
