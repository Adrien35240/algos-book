export  function bubbleSort(chart) {
    for (let i = 0; i < chart.data.length; i++) {
        for (let j = 0; j < chart.data.length; j++) {
           setTimeout(function () {
                if (chart.data[j] > chart.data[j + 1]) {
                    let temp = chart.data[j];
                    chart.data[j] = chart.data[j + 1];
                    chart.data[j + 1] = temp;
                     chart.update();
                }
            }, 1);
        }
    }
}