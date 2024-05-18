/// <reference types="vite/client" />
interface SortingResult {
    arr: number[];
    swappedIndexes: number[];
}

interface SortingAlgorithmsType {
    naiveSort: (arr: number[], steps: number) => SortingResult;
    bubbleSort: (arr: number[], steps: number) => SortingResult;
    selectionSort: (arr: number[], steps: number) => SortingResult;
    insertionSort: (arr: number[], steps: number) => SortingResult;
    shellSort: (arr: number[], steps: number) => SortingResult;
}
