import React, {useMemo, useState} from 'react';

type SelectMemoPropsType = {
    select: Array<citys>
}

export type citys = {
    city: string
    population: number
}

export const SelectMemo = () => {
    const [citys, set] = useState([
        {city: 'Minsk'},
        {city: 'Moskva'},
        {city: 'Kiev'},
        {city: 'London'}
    ])
    let [populations, setPopulations] = useState<Array<citys>>([
        {city: 'Minsk', population: 2},
        {city: 'Moskva', population: 20},
        {city: 'Kiev', population: 10},
        {city: 'London', population: 25}
    ])

    const cityMemo = useMemo(() => {
      let city =  citys.map(el => {
            console.log('city')
            return <option>{el.city} </option>
        }
        )
        return city
    }
    , [citys])

    const population = populations.map(el => {
        console.log('population')
        return <option>{el.city}: {el.population}</option>
    })
    const add = () => {
        let nwecopy  = populations.push({city: 'BALI', population: 2})
        setPopulations([...populations])

    }

    return (
        <>
            <select name="City" id="1">
                {cityMemo}
            </select>

            <select name="City" id="1">
                {population}
            </select>
            <button onClick={add}> ++++ </button>
        </>
    );
};