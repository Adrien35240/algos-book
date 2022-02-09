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
                    // on stock la valeur de l'index courant dans temp
                    let temp = array[j];
                    // on assigne la valeur suivante à l'index courant
                    array[j] = array[j + 1];
                    // on assigne la valeur temp(index courant) à l'index suivant
                    array[j + 1] = temp;
                }
        }
    }
```

## ressources :
[FreeCodeCamp](https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/)