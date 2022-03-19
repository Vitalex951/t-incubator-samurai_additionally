import React, {useState} from "react";

type RatingPropsType = {
    value: number
}

export function UnControlledRating(props: RatingPropsType) {
    let [value, setValue] = useState(1)
    let valueOnClick = ((v: number) => setValue(v))
    return (
        <div>
            <Star value={1} selected={value > 0} valueOnClick={valueOnClick}/>
            <Star value={2} selected={value > 1} valueOnClick={valueOnClick}/>
            <Star value={3} selected={value > 2} valueOnClick={valueOnClick}/>
            <Star value={4} selected={value > 3} valueOnClick={valueOnClick}/>
            <Star value={5} selected={value > 4} valueOnClick={valueOnClick}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    value: number
    valueOnClick: (v: number) => void
}


function Star(props: StarPropsType) {
    console.log(props.value)
    let callback = (() => props.valueOnClick(props.value))
    // return props.selected ? <span onClick={callback}><b>Star  </b></span> :
    //     <span onClick={callback}>star </span>

    return <span onClick={callback}>  {props.selected && <b>Star  </b>}  {!props.selected && " star"} </span>


};