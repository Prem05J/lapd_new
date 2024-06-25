import Image from 'next/image';
import styles from './cards.module.css';
import sampleImage from '../../../public/topimage1.png';
import sampleImage1 from '../../../public/topimage2.png';



const ImageCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>LOREN IPSUM</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image src={sampleImage} alt="Card Image 1" width={538} height={180} />
          <div className={styles.cardContent}>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. 
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
            </p>
            <button className={styles.button}>SHOW MORE</button>
          </div>
        </div>
        <div className={styles.card}>
          <Image src={sampleImage1} alt="Card Image 2" width={538} height={180} />
          <div className={styles.cardContent}>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. 
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
            </p>
            <button className={styles.button}>SHOW MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
