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

export const sortingAlgorithms: SortingAlgorithmsType = {
    oneStepBubbleSort,
};
