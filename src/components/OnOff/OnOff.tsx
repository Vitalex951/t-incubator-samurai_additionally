import React, {useState} from 'react';
import  './OnOffstyle.css';

// export type OnOffTypeProps = {
//     condition: boolean
// }

const OnOff = () => {
    let [on, setOn] = useState(true);
    return (
        <div>
            {on && <div>
                <button onClick={() =>setOn(true)} className='mainbuttons green'>ON</button>
                <button onClick={() => setOn(false)} className='mainbuttons'>Off</button>
                <button className='mainbuttons green'></button>
            </div>}

            {!on && <div>
                <button onClick={() => setOn(true)} className='mainbuttons'>ON</button>
                <button onClick={() => setOn(false)} className='mainbuttons green'>Off</button>
                <button className='mainbuttons red'></button>
            </div>}

        </div>
    );
};

export default OnOff;