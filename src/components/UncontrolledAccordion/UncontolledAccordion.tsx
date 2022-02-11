import React, {useState} from "react";

type AccordionPropType = {
    titleValue: string,
    fff: boolean
}

function UncontolledAccordion(props: AccordionPropType) {
    let [collapsed, setCollapsed] = useState(props.fff);
    function ExpandAccordion(on: boolean) {
        collapsed = on;
        setCollapsed(collapsed);
        console.log(collapsed)
    }

    if (collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} ExpandAccordion={ExpandAccordion} fff={true} />
                <AccordionBody/>
            </div>)
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue} ExpandAccordion={ExpandAccordion} fff={false}/>
            </div>)
    }
}

type AccordionTitlePropType = {
    title: string,
    ExpandAccordion: (on: boolean) => void
    fff: boolean

}

function AccordionTitle(props: AccordionTitlePropType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <button onClick={() => {
                if (props.fff) {
                    props.ExpandAccordion(false)
                } else props.ExpandAccordion(true)
            }}>TOGGLE
            </button>
        </div>
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