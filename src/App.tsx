import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import {Select} from "./components/select/select";
import UncontolledAccordion from "./components/UncontrolledAccordion/UncontolledAccordion";


function App() {

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [switchOn, setSwitch] = useState<boolean>(true)


    return (
        <div>
            {/*<PageTitle title={'App title'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            <Accordion titleValue={'Menu'}
                      />
            {/*<Select value={'Minsk'} onChange={() => {*/}
            {/*}} items={[*/}
            {/*    {value: '1', title: 'Minsk'},*/}
            {/*    {value: '2', title: 'Kiev'},*/}
            {/*    {value: '3', title: 'Moskow'},*/}
            {/*]}/>*/}
            {/*<UncontolledAccordion titleValue={'Menu'} fff={true}/>*/}
            {/*<UncontolledAccordion titleValue={'Users'} fff={false}/>*/}
            {/*<UnControlledRating value={2}/>*/}
            {/*Article 2*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<OnOff on={switchOn} onChange={setSwitch}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>

}


export default App;
