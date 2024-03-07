import React, { useRef } from 'react';
import useFetchhook from '../customHooks/FetchHook';

const Scrolltop = () => {
    const listRef = useRef();

    const { loading, data, Error } = useFetchhook('https://dummyjson.com/products?limit=100', {});

    function handleTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    function handleDown() {
        const listHeight = listRef.current.scrollHeight;
        window.scrollTo({
            top: listHeight,
            left: 0,
            behavior: 'smooth'
        });
        // listRef.current.scrollIntoView({

        //     behavior: 'smooth'
        // });
    }

    return (
        <div>
            <h1>UseScrolltop</h1>
            <button onClick={handleDown}>ScrollDown</button>
            <div ref={listRef} style={{ listStyle: 'none' }}>
                {loading && <p>loading please wait!!...</p>}
                {Error && <p> reference: {Error}</p>}
                {data && data.length > 0 ? data.map((item) => <li key={item.id}>{item.title}</li>) : null}
            </div>
            <button onClick={handleTop}>ScrollTop</button>
            <h1>UseScrollDown</h1>
        </div>
    );
};

export default Scrolltop;
