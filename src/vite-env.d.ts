/// <reference types="vite/client" />
interface Highlights {
    indexes: number[];
    swapped: boolean;
}

interface SortingResult {
    arr: number[];
    highlights: Highlights;
}

interface SortingAlgorithmsType {
    naiveSort: (arr: number[], steps: number) => SortingResult;
    bubbleSort: (arr: number[], steps: number) => SortingResult;
    selectionSort: (arr: number[], steps: number) => SortingResult;
    insertionSort: (arr: number[], steps: number) => SortingResult;
    shellSort: (arr: number[], steps: number) => SortingResult;
}
