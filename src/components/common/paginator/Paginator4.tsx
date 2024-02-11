import React, {useState} from "react";


let Paginator4 = (props: any) => {

    let [pageCounter, setPageCounter] = useState(props.pageCounterRedux) //pageCounterRedux - поле в стэйте
    let [cicleI, setcicleI] = useState(props.CicleCounterRedux) // тоже что и пункт выше, чтоб стэйт помнил значение

    const SetNewPageCounter = () => {
        setPageCounter(pageCounter + 1)
        setcicleI(cicleI + 10)
        props.PlusPagesFunc(pageCounter + 1) // dispatch action creator-а
        props.CiclePagesFunc(cicleI + 10) // dispatch action creator-а
    }      // функция которая вставляется в кнопку "next"

    const SetNewPageCounter2 = () => {

        setPageCounter(pageCounter - 1)
        setcicleI(cicleI - 10)
        props.PlusPagesFunc(pageCounter - 1)
        props.CiclePagesFunc(cicleI - 10)
    } // функция которая вставляется в кнопку "prev"

    let [CurrentPage, setCurrentPage] = useState(props.currentPage)
    let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize));

    /*  useEffect(() => {
          setCurrentPage(props.currentPage)
      }, [props.currentPage])*/

    pagesCount = 10 * pageCounter

    let pages = [];
    for (let i = cicleI; i <= pagesCount; i++) {
        pages.push(i);
    }

    let PrevButton = () => {
        if (pageCounter === 1) {

        } else {
            return <button onClick={SetNewPageCounter2}>Prev</button>
        }
    }  //показывать или нет "prev"

    return <div>
        {/*<PrevButton/> // сам ''prev*/}
        <span>
            {pages
                .map(p => {
                    return <span key={p}><button
                                                 onClick={() => {
                                                     props.OnPagesButton(p)
                                                     setCurrentPage(CurrentPage = p);
                                                 }}> {p} </button></span>

                })}
            <button onClick={SetNewPageCounter}>Next</button> // next
        </span>
    </div>

}
export default Paginator4;


//
// редьюсеры
// export const PlusPagesFunc = (page) =>({type:PlusPageCounter, page})
// export const CiclePagesFunc = (cicle) =>({type:CiclePageCounter, cicle})
//
// их кэйсы
// case PlusPageCounter: {
//     return {...state, pageCounterRedux: action.page}
// }
// case CiclePageCounter: {
//     return {...state, CicleCounterRedux: action.cicle}
// }

