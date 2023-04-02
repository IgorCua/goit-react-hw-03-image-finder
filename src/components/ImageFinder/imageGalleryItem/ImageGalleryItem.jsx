import style from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = ({requestedImgArr}) => {
    return requestedImgArr.map(elem => {
      return <li key={elem.id} className={style.imageGalleryItem}>
        <img className={style.imageGalleryItemImage} src={`${elem.webformatURL}`} alt={`${elem.tags}`}/>
      </li>
    })
}