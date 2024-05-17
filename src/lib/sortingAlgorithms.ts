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
    const next = [...arr];
    let swappedIndexes: [number, number] | null = null;

    for (let i = 0; i < next.length - 1; i++) {
        if (next[i] > next[i + 1]) {
            const temp = next[i];
            next[i] = next[i + 1];
            next[i + 1] = temp;
            swappedIndexes = [i, i + 1];
            break;
        }
    }

    return { next, swappedIndexes };
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

export const sortingAlgorithms: SortingAlgorithmsType = {
    oneStepNaiveSort,
    oneStepBubbleSort,
    oneStepSelectionSort,
    oneStepInsertionSort,
};
