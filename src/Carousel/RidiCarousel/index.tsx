import { MouseEvent, useState } from 'react';
import cs from 'classnames';
import {
  bookPicture0,
  bookPicture1,
  bookPicture2,
  bookPicture3,
  bookPicture4,
  bookPicture5,
} from '../../assets/images';
import styles from './ridiCarousel.module.scss';

function RidiCarousel() {
  const [carouselCount, setCarouselCount] = useState(0);

  const handleClickBtn = (e: MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget.dataset;
    setCarouselCount((prev) => (value === 'left' ? prev + 720 : prev - 720));
  };

  return (
    <div className={styles.centerCarousel}>
      <h1>RidiBooks Carousel</h1>
      <div className={styles.carousel}>
        <div className={styles.out}>
          <ul className={styles.cardWrapper}>
            {[0, 1, 2, 3, 4, 5].map((item) => {
              const picture = {
                0: bookPicture0,
                1: bookPicture1,
                2: bookPicture2,
                3: bookPicture3,
                4: bookPicture4,
                5: bookPicture5,
              }[item];
              return (
                <li className={cs(styles.card, { [styles.center]: -carouselCount === 720 * item })} key={item}>
                  <img className={styles.image} src={picture} alt='carousel pic' />
                </li>
              );
            })}
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
          className={cs(styles.moveBtn, styles.right, { [styles.hide]: carouselCount === -3600 })}
          data-value='right'
          onClick={handleClickBtn}
        >
          <div className={cs(styles.arrow, styles.iconRight)} />
        </button>
      </div>
    </div>
  );
}

export default RidiCarousel;
