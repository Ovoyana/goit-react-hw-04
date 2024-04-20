import css from '../ImageCard/ImageCard.module.css';

export default function ImageCard({ onImageClick, image }) {
    const handleClick = () => {
        onImageClick(image.urls.regular);
    };
    return (
        <div className={css.imageBox}>
          <img
            className={css.galleryImage}
            src={image.urls.small}
            alt={image.alt_description}
            width="360"
            onClick={handleClick}
          />
        <div className={css.textWrapper}>
          <p className={css.about}>
            <em>Downloads: </em>
            {image.downloads}
          </p>
          <p className={css.about}>
            <em>Likes: </em>
            {image.likes}
          </p>
          <p className={css.about}>
            <em>Views: </em>
            {image.views}
          </p>
        </div>
      </div>
    );
  }