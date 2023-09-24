import React, { useState } from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, onImageClick }) {
  const [setSelectedImage] = useState(null);

  const handleImageClick = imageId => {
    setSelectedImage(imageId);
    onImageClick(imageId);
  };

  return (
    <div>
      <ul className={styles.gallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            imageUrl={image.webformatURL}
            onClick={() => handleImageClick(image.largeimageUrl)}
          />
        ))}
      </ul>
    </div>
  );
}
