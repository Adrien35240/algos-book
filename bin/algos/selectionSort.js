
export function selectionSort(chart) {
    let n = chart.data.length;

    for (let i = 0; i < n; i++) {
        let min = i;
setTimeout(function () {
            for (let j = i + 1; j < n; j++) {
            if (chart.data[j] < chart.data[min]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = chart.data[i];
            chart.data[i] = chart.data[min];
            chart.data[min] = tmp;
            chart.update()
        } 
   }, 1); }

}