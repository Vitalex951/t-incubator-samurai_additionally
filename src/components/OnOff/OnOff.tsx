import React, {useState} from 'react';
import './OnOffstyle.css';

// export type OnOffTypeProps = {
//     condition: boolean
// }

type onOffTypeProps = {
    on: boolean
    onChange: (on: boolean) => void
}
const OnOff = (props: onOffTypeProps) => {

    return (
        // <div>
        //     {on && <div>
        //         <button onClick={() =>setOn(true)} className='mainbuttons green'>ON</button>
        //         <button onClick={() => setOn(false)} className='mainbuttons'>Off</button>
        //         <button className='mainbuttons green'></button>
        //     </div>}
        //        //     {!on && <div>
        //         <button onClick={() => setOn(true)} className='mainbuttons'>ON</button>
        //         <button onClick={() => setOn(false)} className='mainbuttons green'>Off</button>
        //         <button className='mainbuttons red'></button>
        //     </div>}
        <div>
            <button onClick={() => props.onChange(true)} className={`${(props.on ? "green" : 'red')}  mainbuttons`}>ON
            </button>
            <button onClick={() => props.onChange(false)}
                    className={(props.on ? "red " : 'green') + ' ' + 'mainbuttons'}>Off
            </button>
            <button className={(props.on ? "green" : 'red') + ' ' + 'mainbuttons'}></button>
        </div>
    );
};

export default OnOff;