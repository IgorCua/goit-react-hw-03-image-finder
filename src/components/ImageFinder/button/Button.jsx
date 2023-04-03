import style from "./Button.module.css";

export const Button = ({loadMore, reqImgArrLength, total}) => {
    console.log('total ', total)
    console.log('arrLength ', reqImgArrLength)
    return <>
        {reqImgArrLength !== total && <button className={style.button} onClick={loadMore}>Load more</button>}    
    </>
}