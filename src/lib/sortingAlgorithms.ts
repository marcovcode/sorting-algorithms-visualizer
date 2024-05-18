const naiveSort = (arr: number[], steps: number) => {
    let cycles = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            cycles++;

            if (arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];

                if (cycles === steps) {
                    return {
                        arr,
                        highlights: {
                            indexes: [i, j],
                            swapped: true,
                        },
                    };
                }
            }

            if (cycles === steps) {
                return {
                    arr,
                    highlights: {
                        indexes: [i, j],
                        swapped: false,
                    },
                };
            }
        }
    }

    return {
        arr,
        highlights: {
            indexes: [],
            swapped: false,
        },
    };
};

const bubbleSort = (arr: number[], steps: number) => {
    let cycles = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            cycles++;

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                if (cycles === steps) {
                    return {
                        arr,
                        highlights: {
                            indexes: [j, j + 1],
                            swapped: true,
                        },
                    };
                }
            }

            if (cycles === steps) {
                return {
                    arr,
                    highlights: {
                        indexes: [j, j + 1],
                        swapped: false,
                    },
                };
            }
        }
    }

    return {
        arr,
        highlights: {
            indexes: [],
            swapped: false,
        },
    };
};

const selectionSort = (arr: number[], steps: number) => {
    let cycles = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            cycles++;

            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }

            if (cycles === steps) {
                return {
                    arr,
                    highlights: {
                        indexes: [i, j],
                        swapped: false,
                    },
                };
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

            cycles++;

            if (cycles === steps) {
                return {
                    arr,
                    highlights: {
                        indexes: [i, minIndex],
                        swapped: true,
                    },
                };
            }
        }

        if (cycles === steps) {
            return {
                arr,
                highlights: {
                    indexes: [i, minIndex],
                    swapped: false,
                },
            };
        }
    }

    return {
        arr,
        highlights: {
            indexes: [],
            swapped: false,
        },
    };
};

const insertionSort = (arr: number[], steps: number) => {
    let cycles = 0;

    for (let i = 1; i < arr.length; i++) {
        let keyIndex = i;
        let currentIndex = i - 1;

        while (currentIndex >= 0 && arr[currentIndex] > arr[keyIndex]) {
            cycles++;

            [arr[currentIndex], arr[keyIndex]] = [
                arr[keyIndex],
                arr[currentIndex],
            ];

            if (cycles === steps) {
                return {
                    arr,
                    highlights: {
                        indexes: [currentIndex, keyIndex],
                        swapped: true,
                    },
                };
            }

            keyIndex = currentIndex;
            currentIndex--;
        }

        cycles++;
        if (cycles === steps) {
            return {
                arr,
                highlights: {
                    indexes: [currentIndex, keyIndex],
                    swapped: false,
                },
            };
        }
    }

    return {
        arr,
        highlights: {
            indexes: [],
            swapped: false,
        },
    };
};

const shellSort = (arr: number[], steps: number) => {
    const n = arr.length;
    let cycles = 0;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            const temp = arr[i];
            let j = i;

            while (j >= gap && arr[j - gap] > temp) {
                cycles++;
                arr[j] = arr[j - gap];
                j -= gap;

                if (cycles === steps) {
                    return {
                        arr,
                        highlights: {
                            indexes: [j + gap, j],
                            swapped: true,
                        },
                    };
                }
            }

            if (j !== i) {
                arr[j] = temp;
                cycles++;

                if (cycles === steps) {
                    return {
                        arr,
                        highlights: {
                            indexes: [i, j],
                            swapped: true,
                        },
                    };
                }
            } else {
                arr[j] = temp;
                cycles++;

                if (cycles === steps) {
                    return {
                        arr,
                        highlights: {
                            indexes: [i, j],
                            swapped: false,
                        },
                    };
                }
            }
        }
    }

    return {
        arr,
        highlights: {
            indexes: [],
            swapped: false,
        },
    };
};

export const sortingAlgorithms: SortingAlgorithmsType = {
    naiveSort,
    bubbleSort,
    selectionSort,
    insertionSort,
    shellSort,
};
