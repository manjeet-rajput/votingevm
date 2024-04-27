import React, { useState } from 'react';
import audio from '../component/sound/beep-09.mp3'

function Eventfun() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const [count6, setCount6] = useState(0);
    const [color, setColor] = useState('darkred');
    const [shadow, setShadow] = useState('none');
    const [color2, setColor2] = useState('darkred');
    const [shadow2, setShadow2] = useState('none');
    const [color3, setColor3] = useState('darkred');
    const [shadow3, setShadow3] = useState('none');
    const [color4, setColor4] = useState('darkred');
    const [shadow4, setShadow4] = useState('none');
    const [color5, setColor5] = useState('darkred');
    const [shadow5, setShadow5] = useState('none');
    const [color6, setColor6] = useState('darkred');
    const [shadow6, setShadow6] = useState('none');
    const [disble, setdisable]=useState(false);
   

    const votbjp = () => {
        setCount(count + 1);
        setColor('red')
        setShadow('0px 0px 6px 1px red')
        setTimeout(()=>{
            setColor('darkred')
            setShadow('none')
        },2000)
        setdisable(true)
        setTimeout(() => {
            setdisable(false)
        }, 6000);
        new Audio(audio).play();
    };
    const votcong = () => {
        setCount2(count2 + 1);
        setColor2('red')
        setShadow2('0px 0px 6px 1px red')
        setTimeout(()=>{
            setColor2('darkred')
            setShadow2('none')
        },2000)

        setdisable(true)
        setTimeout(() => {
            setdisable(false)
        }, 6000);
        new Audio(audio).play();
    };
 
    const votaap = () => {
        setCount3(count3 + 1);
        setColor3('red')
        setShadow3('0px 0px 6px 1px red')
        setTimeout(()=>{
            setColor3('darkred')
            setShadow3('none')
        },2000)
        setdisable(true)
        setTimeout(() => {
            setdisable(false)
        }, 6000);
        new Audio(audio).play();
    };
    const votbsp = () => {
        setCount4(count4 + 1);
        setColor4('red')
        setShadow4('0px 0px 6px 1px red')
        setTimeout(()=>{
            setColor4('darkred')
            setShadow4('none')
        },2000)
        setdisable(true)
        setTimeout(() => {
            setdisable(false)
        }, 6000);
        new Audio(audio).play();
    };
    const votcpi = () => {
        setCount5(count5 + 1);
        setColor5('red')
        setShadow5('0px 0px 6px 1px red')
        setTimeout(()=>{
            setColor5('darkred')
            setShadow5('none')
        },2000)
        
        setdisable(true)
        setTimeout(() => {
            setdisable(false)
        }, 6000);
        new Audio(audio).play();
    };
    const votnpp = () => {
        setCount6(count6 + 1);
        setColor6('red')
        setShadow6('0px 0px 6px 1px red')
        setTimeout(()=>{
            setColor6('darkred')
            setShadow6('none')
        },2000)
        setdisable(true)
        setTimeout(() => {
            setdisable(false)
        }, 6000);
        new Audio(audio).play();
    };
    

    return (
        <div>
            <div className='evm'>
            <div className='evmlogobx'></div>
           <div className='numnmlogo'>
                <span className='srnomb'>1</span>
                <span className='partynam'>BJP</span>
                <span className='partylogo'><img src={require('../component/imgs/bjp.svg.png')} alt=''/></span>
           </div>
           <div className='lightbtn'>
            <div id='bjplightblink' className='lightblink' style={{backgroundColor:color,boxShadow:shadow}}></div>
            <button onClick={votbjp} disabled={disble}></button>
           </div>
           <div className='numnmlogo'>
                <span className='srnomb'>2</span>
                <span className='partynam'>INC</span>
                <span className='partylogo'><img src={require('../component/imgs/cong.svg.png')} alt=''/></span>
           </div>
           <div className='lightbtn'>
            <div className='lightblink' style={{backgroundColor:color2,boxShadow:shadow2}}></div>
            <button onClick={votcong} disabled={disble}></button>
           </div>

           <div className='numnmlogo'>
                <span className='srnomb'>3</span>
                <span className='partynam'>AAP</span>
                <span className='partylogo'><img src={require('../component/imgs/aap.png')} alt=''/></span>
           </div>
           <div className='lightbtn'>
            <div className='lightblink' style={{backgroundColor:color3,boxShadow:shadow3}}></div>
            <button  onClick={votaap} disabled={disble}></button>
           </div>
           <div className='numnmlogo'>
                <span className='srnomb'>4</span>
                <span className='partynam'>CPI</span>
                <span className='partylogo'><img src={require('../component/imgs/cpi.png')} alt=''/></span>
           </div>
           <div className='lightbtn'>
            <div className='lightblink' style={{backgroundColor:color5,boxShadow:shadow5}}></div>
            <button  onClick={votcpi} disabled={disble}></button>
           </div>
           <div className='numnmlogo'>
                <span className='srnomb'>5</span>
                <span className='partynam'>BSP</span>
                <span className='partylogo'><img src={require('../component/imgs/bsp.png')} alt=''/></span>
           </div>
           <div className='lightbtn'>
            <div className='lightblink' style={{backgroundColor:color4,boxShadow:shadow4}}></div>
            <button  onClick={votbsp} disabled={disble}></button>
           </div>
           <div className='numnmlogo'>
                <span className='srnomb'>6</span>
                <span className='partynam'>NPP</span>
                <span className='partylogo'><img src={require('../component/imgs/npp.svg.png')} alt=''/></span>
           </div>
           <div className='lightbtn'>
            <div className='lightblink' style={{backgroundColor:color6,boxShadow:shadow6}}></div>
            <button onClick={votnpp}  disabled={disble}></button>
           </div>
           <div className='numnmlogo'>
           <span className='srnomb'>7</span>
           </div>
           <div className='lightbtn'>
            <div className='lightblink'></div>
            <button></button>
           </div>
           <div className='numnmlogo'>
           <span className='srnomb'>8</span>
           </div>
           <div className='lightbtn'>
            <div className='lightblink'></div>
            <button></button>
           </div>
           <div className='numnmlogo'>
           <span className='srnomb'>9</span>
           </div>
           <div className='lightbtn'>
            <div className='lightblink'></div>
            <button></button>
           </div>
           <div className='numnmlogo'>
           <span className='srnomb'>10</span>
           </div>
           <div className='lightbtn'>
            <div className='lightblink'></div>
            <button></button>
           </div>
           <div className='numnmlogo'>
           <span className='srnomb'>11</span>
           </div>
           <div className='lightbtn'>
            <div className='lightblink'></div>
            <button></button>
           </div>
           <div className='numnmlogo'>
           <span className='srnomb'>12</span>
           </div>
           <div className='lightbtn'>
            <div className='lightblink'></div>
            <button></button>
           </div>
           <div className='numnmlogo'>
           <span className='srnomb'>13</span>
           </div>
           <div className='lightbtn'>
            <div className='lightblink'></div>
            <button></button>
           </div>
           
        </div>

            <div className='votingcount'>
                <div className='votingcount1'>
                    <h2>COUNTING</h2>
                </div>
                <div className='votingcount2'>
                    <h1>BJP : {count}</h1>
                    <h1>INC : {count2}</h1>
                    <h1>AAP : {count3}</h1>
                    <h1>BSP : {count4}</h1>
                    <h1>CPI : {count5}</h1>
                    <h1>NPP : {count6}</h1>
                </div>
            </div>
        </div>
        
    );
}

export default Eventfun;
