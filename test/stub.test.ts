import * as sinon from 'sinon';
import { ABC, sinonTest1, sinonTest2, sinonTest3 } from '../foobar';
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
        st.returns(53)
        st.withArgs(7,8).returns(77)
        sinonTest1()
    })
    it('sinonTest2 - func that calls a imported standalone async func', async function(){
        const st = sandbox.stub(util,'addAsync'); // .callsFake((a:number,b:number)=>{ return new Promise()})
        // st.callsFake(
        //     ()=>{ return new Promise((resolve)=>resolve(80)
        //         )});        
        st.returns(new Promise((resolve)=>resolve(9487)));
        sinonTest2()
    })
    it('sinonTest3 - stub prototype', async function(){
        const st = sandbox.stub(ABC.prototype,'getAppName'); // .callsFake((a:number,b:number)=>{ return new Promise()})
        st.returns("QQ");
        sinonTest3();
    })
})
