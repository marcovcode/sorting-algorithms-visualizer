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

export const sortingAlgorithms: SortingAlgorithmsType = {
    oneStepBubbleSort,
    oneStepSelectionSort,
};
