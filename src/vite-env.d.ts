/// <reference types="vite/client" />
interface SortingResult {
    next: number[];
    swappedIndexes: number[] | null;
}

interface SortingAlgorithmsType {
    oneStepNaiveSort: (arr: number[]) => SortingResult;
    oneStepBubbleSort: (arr: number[]) => SortingResult;
    oneStepSelectionSort: (arr: number[]) => SortingResult;
    oneStepInsertionSort: (arr: number[]) => SortingResult;
}
