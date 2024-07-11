import css from "./ImageCard.module.css";

export default function ImageCard({
  imageThumbSrc,
  imageFullSrc,
  altText,
  onImageClick,
  author,
  likes,
}) {
  return (
    <li>
      <div className={css.imageCard}>
        <img
          className={css.imageCard__image}
          src={imageThumbSrc}
          alt={altText}
          onClick={() => onImageClick({ imageFullSrc, altText, author, likes })}
        />
        <div className={css.imageCard__info}>
          <p className={css.imageCard__author}>{author}</p>
          <p className={css.imageCard__likes}>{likes} 👍</p>
        </div>
      </div>
    </li>
  );
}
