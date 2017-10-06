export const reduceBombs = (arr, word) => arr.filter( x => x.word !== word);

export const createBomb = (word) => ({
    r: 0,
    c: 0,
    word,
});