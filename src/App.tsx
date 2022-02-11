import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";


function App() {
    let falsetrue = true;
     let [objectState, setobjectState] = useState(falsetrue);


    function changeofevents(condition: boolean) {
        if (condition) {
            objectState = true
        } else {
            objectState = false
        }
        console.log(objectState)
         setobjectState(objectState)
    }


    return (
        <div>
            {/*<PageTitle title={'App title'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'User'} collapsed={true}/>
            Article 2
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff condition={objectState} changeofevents={changeofevents}/>
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
