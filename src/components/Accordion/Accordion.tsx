import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionPropType = {
    titleValue: string
}

function Accordion(props: AccordionPropType) {
    let [collapsed, dispatch] = useReducer(reducer, {collapsed: true})
    console.log(collapsed)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: 'TOGGLE-COLLAPSED'})}/>
            {!collapsed.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropType = {
    title: string
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

export default Accordion;