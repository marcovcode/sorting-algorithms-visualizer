const oneStepNaiveSort = (arr: number[]) => {
    let swappedIndexes: number[] = [];
    let swapped = false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                swappedIndexes = [j, i];
                swapped = true;
                break;
            }
        }

        if (swapped) break;
    }

    return { next: arr, swappedIndexes };
};

const oneStepBubbleSort = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                return { next: arr, swappedIndexes: [j, j + 1] };
            }
        }
    }

    return { next: arr, swappedIndexes: [] };
};

const oneStepSelectionSort = (arr: number[]) => {
    const next = [...arr];
    let minIndex: number | null = null;

    for (let i = 0; i < next.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < next.length; j++) {
            if (next[j] < next[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const temp = next[i];
            next[i] = next[minIndex];
            next[minIndex] = temp;
            return { next, swappedIndexes: [minIndex, i] };
        }
    }

    return { next, swappedIndexes: null };
};

const oneStepInsertionSort = (arr: number[]) => {
    const next = [...arr];
    let keyIndex: number | null = null;
    let currentIndex: number | null = null;

    for (let i = 1; i < next.length; i++) {
        keyIndex = i;
        currentIndex = i - 1;
        while (currentIndex >= 0 && next[currentIndex] > next[keyIndex]) {
            const temp = next[currentIndex];
            next[currentIndex] = next[keyIndex];
            next[keyIndex] = temp;
            keyIndex = currentIndex;
            currentIndex--;
        }
        if (keyIndex !== i) {
            return { next, swappedIndexes: [currentIndex + 1, i] };
        }
    }

    return { next, swappedIndexes: null };
};

const oneStepShellSort = (arr: number[]) => {
    const n = arr.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            const temp = arr[i];
            let j: number;

            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                arr[j] = arr[j - gap];

            if (j !== i) {
                arr[j] = temp;
                return { next: arr, swappedIndexes: [i, j] };
            }

            arr[j] = temp;
        }
    }

    return { next: arr, swappedIndexes: [] };
};

export const sortingAlgorithms: SortingAlgorithmsType = {
    oneStepNaiveSort,
    oneStepBubbleSort,
    oneStepSelectionSort,
    oneStepInsertionSort,
    oneStepShellSort,
};
