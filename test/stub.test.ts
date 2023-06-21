import * as sinon from 'sinon';
import { foobar } from '../foobar';

describe('Test1', function(){
    it('hi', async function(){
        console.log('Hello')
        foobar();
    })
    it('hi2', async function(){
        console.log('Hello2')
    })
})