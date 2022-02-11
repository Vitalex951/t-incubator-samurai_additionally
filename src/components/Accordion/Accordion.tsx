import React from "react";

type AccordionPropType = {
    titleValue : string,
    collapsed : boolean
}

function Accordion(props: AccordionPropType) {
   if(props.collapsed) {
       return (
           <div>
               <AccordionTitle title={props.titleValue}/>
               < AccordionBody/>
           </div>)
   } else {
       return (
           <div>
               <AccordionTitle title={props.titleValue}/>
           </div>)
   }
}

type AccordionTitlePropType = {
    title : string
}

function AccordionTitle(props: AccordionTitlePropType) {
    return (

        <h3>{props.title}</h3>
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