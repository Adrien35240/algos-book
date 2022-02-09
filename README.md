# Algos Book

## Une page pour rassembler et comparer les algorithmes de tri sur les array en javascript
## [DEMO ALGOS BOOK](https://algos-book.vercel.app/)

## Algos disponibles
- ### Bubble sort
    Bubble Sort est l'algorithme de tri simple qui fonctionne en échangeant les éléments adjacents s'ils sont dans le mauvais ordre.
    
```javascript
    // definie le nombre d'iterations en fonction du nombre de data dans array
    for (let i = 0; i < array.length; i++) {
        //itere sur array
        for (let j = 0; j < array.length; j++) {
            // si index > index + 1
                if (array[j] > array[j + 1]) {
                    // on stock la valeur de l'index courant dans une variable temporaire
                    let temp = array[j];
                    // on assigne la valeur suivante à l'index courant
                    array[j] = array[j + 1];
                    // on assigne la valeur temp(index courant) à l'index suivant
                    array[j + 1] = temp;
                }
        }
    }
```
- ### Selection sort
    L'algorithme de tri par sélection, trie un tableau en trouvant à plusieurs
reprises l'élément minimum (en tenant compte de l'ordre croissant)
à partir de la partie non triée et en le plaçant au début.
L'algorithme maintient deux sous-tableaux dans un tableau donné.
    
```javascript
    // definie le nombre d'iterations en fonction du nombre de data dans array
    for (let i = 0; i < array.length; i++) {
        let min = i;
        //itere sur l'array avec un offset de i + 1 
            for (let j = i + 1; j < array.length; j++) {
                // si index + 1 < index
            if array[j] < array[min]) {
                // on assigne la valeur min à l'index j
                min = j;
            }
        }
        // si min n'est plus egale à i mais j
        if (min != i) {
            // on stock la valeur de l'index i dans une variable temporaire
            let temp = array[i];
             // on assigne array[min] a l'array[i] cad le premier emplacement non modifier de l'array
            array[i] = array[min];
            // on reassigne la valeur temp à l'emplacement laisser libre précédemment
            array[min] = temp;
        } 
    }
```
## ressources :
[FreeCodeCamp](https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/)