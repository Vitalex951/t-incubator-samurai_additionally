import React from 'react';
import  './OnOffstyle.css';

export type OnOffTypeProps = {
    condition: boolean
    changeofevents: (condition: boolean) => void
}

const OnOff = (props: OnOffTypeProps) => {
    return (
        <div>
            {props.condition && <div>
                <button onClick={() => props.changeofevents(true)} className='mainbuttons green'>ON</button>
                <button onClick={() => props.changeofevents(false)} className='mainbuttons red'>Off</button>
                <button className='mainbuttons green'></button>
            </div>}

            {!props.condition && <div>
                <button onClick={() => props.changeofevents(true)} className='mainbuttons red'>ON</button>
                <button onClick={() => props.changeofevents(false)} className='mainbuttons green'>Off</button>
                <button className='mainbuttons red'></button>
            </div>}

        </div>
    );
};

export default OnOff;