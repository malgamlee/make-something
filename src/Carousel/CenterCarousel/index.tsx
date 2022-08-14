import { MouseEvent, useState } from 'react';
import cs from 'classnames';
import styles from './centerCarousel.module.scss';

function CenterCarousel() {
  const [carouselCount, setCarouselCount] = useState(240);

  const handleClickBtn = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget.dataset;
    setCarouselCount((prev) => (value === 'left' ? prev + 240 : prev - 240));
  };

  return (
    <div className={styles.centerCarousel}>
      <h1>Center Carousel</h1>
      <div className={styles.carousel}>
        <div className={styles.out}>
          <ul className={styles.cardWrapper} style={{ transform: `translateX(${carouselCount}px)` }}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <li className={cs(styles.card, { [styles.center]: 240 * (1 - item) === carouselCount })} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <button
          type='button'
          className={cs(styles.moveBtn, styles.left, { [styles.hide]: carouselCount === 240 })}
          data-value='left'
          onClick={handleClickBtn}
        >
          <div className={cs(styles.arrow, styles.iconLeft)} />
        </button>
        <button
          type='button'
          className={cs(styles.moveBtn, styles.right, { [styles.hide]: carouselCount === -1920 })}
          data-value='right'
          onClick={handleClickBtn}
        >
          <div className={cs(styles.arrow, styles.iconRight)} />
        </button>
      </div>
    </div>
  );
}

export default CenterCarousel;
