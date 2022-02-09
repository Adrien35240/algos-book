import Chart from 'chart.js/auto';
export class graph {
    data = []
    label = []
    constructor(id, ctx, data, label) {
        this.id = id
        this.ctx = ctx,
            this.data = data,
            this.label = label
    }
    init() {
        this.chart = new Chart(this.ctx, {
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
                responsive:true,
                animation: false
            }
        })
    }
    update() {
        this.chart.update()
    }
    shuffle(data,label) {
        this.chart.destroy()
        this.data = data
        this.label = label
        this.init()
    }
}


