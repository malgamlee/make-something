import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import styles from './clickOutside.module.scss';

function ClickOutside() {
  // count number
  const [number, setNumber] = useState(0);

  // 버튼 클릭 이벤트
  const handleClickBtn = () => {
    setNumber((prev) => prev + 1);
  };

  // 바깥쪽 클릭 이벤트
  const handleOutsideClick = () => {
    setNumber(0);
  };

  // custom hook
  const useOutsideClick = (callback: () => void) => {
    // button에 ref를 걸었음
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      const handleClick = (event: BaseSyntheticEvent | MouseEvent) => {
        // ref가 존재하고, ref 안에 클릭한 부분이 없을 때만 동작한다.
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [callback, ref]);

    return ref;
  };

  const ref = useOutsideClick(handleOutsideClick);

  return (
    <div className={styles.clickOutside}>
      Outside Click
      <div className={styles.out}>
        out
        <button type='button' className={styles.in} onClick={handleClickBtn} ref={ref}>
          number is {number}
        </button>
      </div>
    </div>
  );
}

export default ClickOutside;
