/// <reference path="../functional.ts" />

import { expect } from 'chai';
import 'mocha';
import {Boom} from "../functional";

describe('flatmap', () => {

    it('should return a simple flattened array', () => {
        const result = [1, 2, 3, 4, 5, 6, 7];
        const input = [[1, 2], [3, 4], [5, 6, 7]];
        expect(result).to.deep.equal(Boom.flatMap<Array<number>, number>(input, (x) => x));
    });

});