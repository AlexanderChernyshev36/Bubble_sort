function Sort(arr: number[]): number[] {
    const a = arr.length;
    let swapped: boolean;

    // проход элементов
    for (let i = 0; i < a - 1; i++) {
        swapped = false;

        // Последние i элементов уже отсортированы
        for (let j = 0; j < a - 1 - i; j++) {
            // Сравнениме соседних элементов
            if (arr[j] > arr[j + 1]) {
                // меняем местами
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // если замен не было, то массив отсортирован
        if (!swapped) break;
    }

    return arr;
}

const array = [11, 22, 74, 1, 23, 9, 7530];
const sortArray = Sort(array);
console.log(sortArray); // Вывод: [1,  9, 11, 22, 23, 74,7530]