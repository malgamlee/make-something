import styles from './app.module.scss';
import CenterCarousel from './Carousel/CenterCarousel';
import RidiCarousel from './Carousel/RidiCarousel';
import SimpleCarousel from './Carousel/SimpleCarousel';
import ClickOutside from './ClickOutside';

function App() {
  return (
    <div className={styles.app}>
      <SimpleCarousel />
      <CenterCarousel />
      <RidiCarousel />
      <ClickOutside />
    </div>
  );
}

export default App;
