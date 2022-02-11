import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontolledAccordion from "./components/UncontrolledAccordion/UncontolledAccordion";
import {UnControlledRating} from "./components/UnConrilledRating/UnControlledRating";


function App() {




    return (
        <div>
            {/*<PageTitle title={'App title'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'User'} collapsed={true}/>*/}
            <UncontolledAccordion titleValue={'Menu'} fff={true}/>
            <UncontolledAccordion titleValue={'Users'} fff={false}/>
            <UnControlledRating value={2}/>
            Article 2
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff />
            <OnOff />
            <OnOff />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('App title');
    return <h1>{props.title}</h1>

}


export default App;
