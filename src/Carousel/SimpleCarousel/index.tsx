import { MouseEvent, useState } from 'react';
import cs from 'classnames';
import styles from './simpleCarousel.module.scss';

function SimpleCarousel() {
  const [carouselCount, setCarouselCount] = useState(0);

  const handleClickBtn = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget.dataset;

    setCarouselCount((prev) => (value === 'left' ? prev + 200 : prev - 200));
  };
  return (
    <div className={styles.simpleCarousel}>
      <h1>Simple Carousel</h1>
      <div className={styles.carousel}>
        <div className={styles.out}>
          <ul style={{ transform: `translateX(${carouselCount}px)` }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <li className={styles.in} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <button
          type='button'
          className={cs(styles.moveBtn, styles.left, { [styles.hide]: carouselCount === 0 })}
          data-value='left'
          onClick={handleClickBtn}
        >
          <div className={cs(styles.arrow, styles.iconLeft)} />
        </button>
        <button
          type='button'
          className={cs(styles.moveBtn, styles.right, { [styles.hide]: carouselCount === -1200 })}
          data-value='right'
          onClick={handleClickBtn}
        >
          <div className={cs(styles.arrow, styles.iconRight)} />
        </button>
      </div>
    </div>
  );
}

export default SimpleCarousel;
