export function generateData(max) {
    let data = []
    for (let i = 0; i < max; i++) {
        data.push(i)
    }
   return data
};
export function generateLabel(max) {
    let label = []
    for (let i = 0; i < max; i++) {
        label.push(i)
    }
    return label
};
export function shuffle(data) {
    let currentIndex = data.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [data[currentIndex], data[randomIndex]] = [
            data[randomIndex], data[currentIndex]];
    }
    return data;
}