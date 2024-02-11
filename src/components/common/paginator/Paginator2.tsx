import React, { useState } from 'react'
import s from './paginator.module.css'

type PropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

const Pagination2: React.FC<PropsType> = ({ totalCount, pageSize, currentPage, onPageChanged, portionSize = 10 }: any) => {
    // const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
    const pagesCount = Math.ceil(totalCount / pageSize)
    const pages: any = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [currentPortion, setCurrentPortion] = useState(1)
    const currentLeftBorder = (currentPortion - 1) * portionSize + 1
    const currentRightBorder = currentPortion * portionSize

    return (
        <div className={s.pagination}>
            {currentPortion > 1 && (
                <span>
                    <button onClick={() => {
                        onPageChanged(pages[0])
                        setCurrentPortion(1)
                    }}>toFirst</button>
                    <button onClick={() => {
                        currentPortion !== 1 && setCurrentPortion(currentPortion - 1)
                    }}> PREV </button>
                </span>
            )}

            {pagesCount === 0 ? null : (
                pages
                    .filter((p: number) => currentLeftBorder <= p && p <= currentRightBorder)
                    .map((p: number) => (
                        <span
                            key={p}
                            onClick={() => {
                                onPageChanged(p)
                            }}
                            className={currentPage === p ? s.selectedPage : s.pageLink}> {p}
                        </span>
                    ))
            )}

            {currentPortion < portionCount && (
                <span>
                    <button onClick={() => {
                        currentPortion !== pagesCount && setCurrentPortion(currentPortion + 1)
                    }}> NEXT </button>
                    <button onClick={() => {
                        onPageChanged(pages[pages.length - 1])
                        setCurrentPortion(portionCount)
                    }}>toLast</button>
                </span>
            )}
        </div>
    )
}

export default Pagination2