import "./style.css";
import { graph } from "./bin/class/graph";
import { bubbleSort } from "./bin/algos/bubbleSort";
import { generateData, generateLabel, shuffle } from "./bin/functions/data";
const app = {
  selectMax: null,
  max: 50,
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
    app.canvasContainer = document.getElementById("canvas__container");
    //select nbr data
    app.selectMax = document.getElementById("maxBtn");
    app.selectMax.addEventListener("change", () => {
      app.max = app.selectMax.value;
      app.arrayChart.forEach(chart => {
        app.randomizeData(app.max)
        chart.shuffle(app.data,app.label)
      })
    });
    //btn 'run algo'
    app.runBtn = document.getElementById('run__btn')
    app.runBtn.addEventListener('click', () => {
      app.arrayChart.forEach(chart => {
      bubbleSort(chart)
      })
    })
    //btn shuffle data
    app.shuffleBtn = document.getElementById('shuffle__btn')
    app.shuffleBtn.addEventListener('click', () => {
      app.arrayChart.forEach(chart => {
        app.randomizeData(app.max)
        chart.shuffle(app.data,app.label)
      })
    })
    // add btn
    app.addBtn = document.getElementById('add__btn')
    app.addBtn.addEventListener('click', () => {
      app.canvasId++
      app.createTemplate(app.canvasId)
      app.arrayChart.forEach(chart => {
        app.randomizeData(app.max)
        chart.shuffle(app.data, app.label)
      })
    })
  },
  randomizeData(max) {
    app.data = generateData(max)
    app.label = generateLabel(max)
    app.data = shuffle(app.data,app.label)
    return app.data
  },
  createTemplate(id) {
    app.randomizeData(app.max)
    // -------template--------
    app.template = document.getElementById("canvas__template");
    let clone = document.importNode(app.template.content, true)
    const canvas = clone.querySelectorAll('canvas')
    canvas[0].setAttribute("id", `canvas${id}`)
    const description = clone.getElementById('description')
    description.innerHTML = `Bubble Sort est l'algorithme de tri simple qui fonctionne en échangeant les éléments adjacents s'ils sont dans le mauvais ordre.`
    app.canvasContainer.appendChild(clone)
    // -------template--------
    app.ctx = document.getElementById(`canvas${id}`).getContext('2d')
    app.chart = new graph(app.canvasId, app.ctx, app.data, app.label)
    // tableau de graphs
    app.arrayChart.push(app.chart)
    app.chart.init()
  },
  setDescription() {
    
  }
};

window.addEventListener("DOMContentLoaded", () => {
  app.init();
});
