import Chart from 'chart.js/auto';
export class graph {
    data = []
    label = []
    color = ['#1abc9c50', '#16a085', '#2ecc7150', '#27ae60', '#3498db50', '#2980b9', '#9b59b650', '#8e44ad', '#34495e50', '#2c3e50', '#f1c40f50', '#f39c12', '#e67e2250', '#d35400', '#e74c3c50', '#c0392b', '#ecf0f150', '#bdc3c7', '#95a5a650', '#7f8c8d']
    colorLabel = [0,2,4,6,8,10,12,14,16,18]
    constructor(id, ctx, data, label) {
        let indexRandom = Math.floor(Math.random() * ((this.color.length)/2)) + 0;
        console.log(indexRandom)
        let rdmColor = this.colorLabel[indexRandom]
        this.id = id
        this.ctx = ctx,
        this.data = data,
        this.label = label,
        this.color1 = this.color[rdmColor],
        this.color2 = this.color[rdmColor + 1]

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
                        this.color1,
                    ],
                    borderColor: [
                      this.color2,
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


