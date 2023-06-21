import * as sinon from 'sinon';
import { sinonTest1, sinonTest2 } from '../foobar';
import * as util from '../util';

describe('Sinon lab', function(){
    let sandbox = sinon.createSandbox();
    before(()=>{

    });
    beforeEach(()=>{

    });
    afterEach(()=>{
        sandbox.reset();
        sandbox.restore();
    })
    after(()=>{

    })
    it('sinonTest1 - func that calls a imported standalone func', async function(){
        const st = sandbox.stub(util,'add')
        st.returns(52)
        sinonTest1()
    })
    it('sinonTest2 - func that calls a imported standalone async func', async function(){
        const add = sandbox.stub(util,'addAsync'); // .callsFake((a:number,b:number)=>{ return new Promise()})
        // add.callsFake(
        //     ()=>{ return new Promise((resolve)=>resolve(80)
        //         )});        
        add.returns(new Promise((resolve)=>resolve(9487)));
        sinonTest2()
    })
})