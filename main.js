import './style.css'
import { graph } from './bin/class/graph'
import { sortJs } from './bin/algos/sortJs'
import { selectionSort } from './bin/algos/selectionSort'
import { bubbleSort } from './bin/algos/bubbleSort'
const init = {
    ctx : document.getElementById('canvas').getContext('2d'),
  max: 100,
  algoSelected: 'array.sort()',
  sortedData : null,
  graph: new graph(),
    drawGraph:() => {
      init.graph.draw(init.ctx, init.max)
  },
  shuffleBtn: document.getElementById('shuffle__btn').addEventListener('click', () => {
    init.graph.reShuffle(init.ctx,init.max)
  }),
  runBtn: document.getElementById('run__btn').addEventListener('click', () => {
    let timeStart = Date.now()
    if (init.algoSelected === 'array.sort()') {
      init.sortedData = sortJs(init.graph.data)
    }
    if (init.algoSelected === 'Selection sort') {
      init.sortedData = selectionSort(init.graph.data)
    }
    if (init.algoSelected === 'Bubble sort') {
      init.sortedData = bubbleSort(init.graph.data)
    }
    init.graph.reDraw(init.ctx,init.sortedData)
    let timeEnd = Date.now()
    let elaspedTime = ((timeEnd - timeStart) / 1000).toFixed(2)
    document.getElementById('result').innerHTML = `Tableau de <span class="result__text">${init.max}</span>, trier en <span class="result__text">${elaspedTime}</span> s</br> avec l'algo: <span class="result__text">${init.algoSelected}</span>.`
  }),
  maxBtn: document.getElementById('maxBtn').addEventListener('change', () => {
    init.max = document.getElementById('maxBtn').value
    init.graph.reShuffle(init.ctx, init.max)
  }),
  algoBtn: document.getElementById('algo__btn').addEventListener('change', () => {
    init.algoSelected = document.getElementById('algo__btn').value
  })
}
window.addEventListener('DOMContentLoaded', () => {
  init.drawGraph()
})