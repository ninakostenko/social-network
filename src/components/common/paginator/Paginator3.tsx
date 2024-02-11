import React from 'react';

const Paginator3 = ({count, size, page, getNewPage}: any) => {
    const pagesCount = Math.ceil(count / size);
    const pages = Array.from({length: pagesCount}, (_, i) => i + 1);

    const sliced = [];
    const num = page;
    if (num - 3 < 0) {
        sliced.push(...pages.slice(0, 5));
    } else {
        sliced.push(...pages.slice(num - 3, num + 2));
    }

    const buttons = sliced.map((el) => (
        <div
            onClick={() => getNewPage(el)}
            // className={page === el ? `${p.selected} ${p.btn}` : `${p.btn}`}
            key={el}
        >
            {el}
        </div>
    ));
    return <div>{buttons}</div>;
};

export default Paginator3;