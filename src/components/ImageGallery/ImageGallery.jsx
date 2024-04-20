import ImageCard from '../ImageCard/ImageCard';
import css from '../ImageGallery/ImageGallery.module.css';

export default function ImageGallery({ items, onImageClick }) {
  return (
    <section className={css.galleryBox}>
      <ul className={css.gallery}>
        {items.map(item => (
          <li className={css.image} key={item.id}>
            <ImageCard image={item} onImageClick={onImageClick} />
          </li>
        ))}
      </ul>
    </section>
  );
}