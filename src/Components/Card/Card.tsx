import { ICard } from '../../interfaces/ICard';
import styles from './Card.module.scss';

export default function Card({
  painterNameObject,
  locationNameObject,
  name,
  created,
  imageUrl,
}: Partial<ICard>) {
  return (
    <div className={styles.card}>
      <img
        className={styles.card__img}
        src={`https://test-front.framework.team/${imageUrl}`}
        alt=""
      />
      <div className={styles.card__modal}>
        <p className={`${styles.card__text} ${styles.card__title}`}>{name}</p>
        <p className={styles.card__text}>
          <span className={styles.card__bold}>Author:</span>{' '}
          {painterNameObject ? painterNameObject.name : 'Нет автора'}
        </p>
        <p className={styles.card__text}>
          <span className={styles.card__bold}>Created:</span> {created}
        </p>
        <p className={styles.card__text}>
          <span className={styles.card__bold}>Location:</span>{' '}
          {locationNameObject?.location}
        </p>
      </div>
    </div>
  );
}
