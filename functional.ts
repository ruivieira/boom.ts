
export module Boom {

    export function flatMap<T, U>(array: T[], callbackfn: (value: T, index: number, array: T[]) => U[]): U[] {
        return [].concat(...array.map(callbackfn));
    }

    export function shuffle<T>(array: Array<T>) {
        let i = 0, j = 0, temp = null;

        for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp
        }
        return array;
    }
}