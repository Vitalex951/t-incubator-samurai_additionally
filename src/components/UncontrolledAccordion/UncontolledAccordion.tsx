import React, {useReducer, useState} from "react";
import {log} from "util";

type AccordionPropType = {
    titleValue: string
    fff: boolean

}




function UncontolledAccordion(props: AccordionPropType) {
    // let [collapsed, setCollapsed] = useState(props.fff);
    // let [collapsed, dispatch] = useReducer(reducer, false)
    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}

            {/*<AccordionTitle title={props.titleValue} onClick={() => dispatch({type: 'TOGGLE-COLAPSED'})}/>*/}
            {/*{!collapsed && <AccordionBody/>}*/}
        </div>)

}


type AccordionTitlePropType = {
    title: string,
    onClick: () => void

}

function AccordionTitle(props: AccordionTitlePropType) {
    return (
        <h3 onClick={() => props.onClick()}>{props.title}</h3>

    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    );

}

export default UncontolledAccordion;