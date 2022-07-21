import styles from './app.module.scss';
import CenterCarousel from './Carousel/CenterCarousel';
import SimpleCarousel from './Carousel/SimpleCarousel';

function App() {
  return (
    <div className={styles.app}>
      <SimpleCarousel />
      <CenterCarousel />
    </div>
  );
}

export default App;
