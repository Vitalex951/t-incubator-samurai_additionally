import React, {useCallback, useMemo, useState} from 'react';

export type typeUseMemo = {
    title: 'UseMemo'
}

export const UseMemo = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1
    resultA = useMemo(() => {
        let tempA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            // while (fake < 10000000) {
            //     fake ++;
            //     const fakevalue = Math.random()
            // }
            tempA = tempA * i
        }
        return tempA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </div>
    );
};

export const LikeUseCallback = () => {
    console.log('like')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState<Array<string>>(['React', 'JS', 'CSS', 'HTML'])

    const newArray = useMemo(() => {
        const newArray = books.filter(el => el.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [books])


    const addBook = () => {
        const newUsers = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUsers)
    }
    const call = useCallback(addBook, [books])
    const mem = useMemo(() => addBook, [books])
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>

            {counter}
            <Book books={books} addBook={call}/>
        </div>
    );
};

const BooksSecret = (props: { books: Array<string>, addBook: () => void }) => {
    console.log('books')
    return <div>
        <button onClick={props.addBook}>add Books</button>
        {
            props.books.map((book, i) => <div key={i}> {book}</div>)
        }</div>
}

const Book = React.memo(BooksSecret)