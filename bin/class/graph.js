import Chart from 'chart.js/auto';
export class graph {
    data = []
    label = []
    chart = null
    constructor() {
    }
    generateData(max) {
        for (let i = 0; i < max; i++) {
            this.data.push(i)
            this.label.push(`${i}`)
        }
        this.data = this.shuffle(this.data)
    };
    shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    createGraph(ctx) {
       this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.label,
                datasets: [{
                    label: 'index',
                    data: this.data,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }]
            },
           options: {
                animation:false
            }
        })
    }
    draw(ctx,max) {
        this.generateData(max)
        this.createGraph(ctx)
    }
    reShuffle(ctx, max) {
        this.data = []
        this.label = []
        this.chart.destroy()
        this.generateData(max)
        this.createGraph(ctx)
    }
    reDraw(ctx, data) {
        this.chart.destroy()
        this.data = data
        this.createGraph(ctx)
    }
}
    

