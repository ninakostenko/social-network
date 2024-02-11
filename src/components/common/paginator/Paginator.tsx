import React, { useState } from 'react';
import cl from './paginator.module.css';

const Paginator = ({totalCount, pageSize, currentPage, onPageChange, portionsSize = 10}: any) => {
    const pagesCount = Math.ceil(totalCount / pageSize)
    let pageCount = Math.ceil(totalCount / pageSize);
    let [currentPortion, setCurrentPortion] = useState(1);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pageCount / portionsSize);

    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionsSize + 1;

    let rightPortionPageNumber = portionNumber * portionsSize;

    return (
        <div className={cl.listPages}>
            {portionNumber > 1 && (
                <button onClick={() => {setPortionNumber(portionNumber - 1)}}>
                    Prev
                </button>
            )}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p: number) => {
                    return (
                        <span
                            className={currentPage === p ? cl.selectedPage : ''}
                            key={p}
                            onClick={(e: any) => {
                                onPageChange(p);
                            }}
                        >
              {p}
            </span>
                    );
                })}

            {portionCount > portionNumber && (
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>
                    Next
                </button>
            )}
        </div>
    );
};

export default Paginator;