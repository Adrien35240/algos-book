
export function selectionSort(data) {
    let n = data.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (data[j] < data[min]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = data[i];
            data[i] = data[min];
            data[min] = tmp;
        }
    }
    return data;
}