import React, { useEffect, useCallback } from 'react';
import styles from './Modal.module.css';
import basicLightbox from 'basiclightbox';

export default function Modal({ imageUrl, onClose }) {
  const handleEsc = useCallback(
    e => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handleEsc]);

  useEffect(() => {
    if (imageUrl) {
      const lightbox = basicLightbox.create(
        `<img src="${imageUrl}" alt="Modal Content" />`
      );
      lightbox.show();
    }
  }, [imageUrl]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <img src={imageUrl} alt="Modal Content" />
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
