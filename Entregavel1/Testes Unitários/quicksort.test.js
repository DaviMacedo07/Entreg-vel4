const quicksort = require('./QuickSort');

test('Ordena array desordenado corretamente', () => {
    expect(quicksort([34, 7, 23, 32, 5, 62])).toEqual([5, 7, 23, 32, 34, 62]);
});

test('Array já ordenado permanece igual', () => {
    expect(quicksort([1, 2, 3])).toEqual([1, 2, 3]);
});

test('Array com números negativos', () => {
    expect(quicksort([3, -1, 0, -5, 8])).toEqual([-5, -1, 0, 3, 8]);
});

test('Array com elementos repetidos', () => {
    expect(quicksort([4, 2, 4, 1, 4])).toEqual([1, 2, 4, 4, 4]);
});

test('Array vazio retorna vazio', () => {
    expect(quicksort([])).toEqual([]);
});

test('Array com um único elemento retorna igual', () => {
    expect(quicksort([42])).toEqual([42]);
});
