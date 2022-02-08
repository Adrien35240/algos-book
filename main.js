import "./style.css";
import { graph } from "./bin/class/graph";
import { sortJs } from "./bin/algos/sortJs";
import { selectionSort } from "./bin/algos/selectionSort";
import { bubbleSort } from "./bin/algos/bubbleSort";
import { generateData, generateLabel, shuffle } from "./bin/functions/data";
const app = {
  selectMax: null,
  max: 10,
  template: null,
  canvasContainer: null,
  canvasId: 0,
  ctx: null,
  data: null,
  label: null,
  chart: null,
  runBtn: null,
  shuffleBtn:null,
  arrayChart: [],
  addBtn:null,
  init() {
    //select nbr data
    app.selectMax = document.getElementById("maxBtn");
    app.selectMax.addEventListener("change", () => {
      app.max = app.selectMax.value;
      console.log(app.max)
      app.arrayChart.forEach(chart => {
        console.log('change')
        app.randomizeData(app.max)
        chart.shuffle(app.data,app.label)
      })
    });
    //btn 'run algo'
    app.runBtn = document.getElementById('run__btn')
    app.runBtn.addEventListener('click', () => {
      for (let i = 0; i < app.arrayChart.length; i++){
         console.log(app.arrayChart)
         bubbleSort(app.arrayChart[i])  
       }
  
    })
    //btn shuffle data
    app.shuffleBtn = document.getElementById('shuffle__btn')
    app.shuffleBtn.addEventListener('click', () => {
      app.randomizeData(app.max)
      app.arrayChart.forEach(chart => {
        chart.shuffle(app.data,app.label)
      })
    })
    // add btn
    app.addBtn = document.getElementById('add__btn')
    app.addBtn.addEventListener('click', () => {
      app.canvasId++
      app.createTemplate(app.canvasId)
    })
  },
  randomizeData(max) {
    app.data = generateData(max)
    app.label = generateLabel(max)
    app.data = shuffle(app.data,app.label)
    return app.data
  },
  createTemplate(id) {
    app.canvasContainer = document.getElementById("canvas__container");
    app.randomizeData(app.max)
    // -------template--------
    app.template = document.getElementById("canvas__template");
    let clone = document.importNode(app.template.content, true)
    const canvas = clone.querySelectorAll('canvas')
    canvas[0].setAttribute("id", `canvas${id}`)
    app.canvasContainer.appendChild(clone)
    // -------template--------
    app.ctx = document.getElementById(`canvas${id}`).getContext('2d')
    app.chart = new graph(app.canvasId, app.ctx, app.data, app.label)
    // tableau de graphs
    app.arrayChart.push(app.chart)
    app.chart.init()
  },
  updateChart() {

  },
};

window.addEventListener("DOMContentLoaded", () => {
  app.init();
  app.createTemplate(app.canvasId)
});
