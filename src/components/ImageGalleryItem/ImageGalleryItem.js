import React from 'react';
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ imageUrl, onClick }) {
  return (
    <li className={styles.gallery_item}>
      <img className={styles.image} src={imageUrl} alt="" onClick={onClick} />
    </li>
  );
}
