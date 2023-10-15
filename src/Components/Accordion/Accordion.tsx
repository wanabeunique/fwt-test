import { useDetectClickOutside } from 'react-detect-click-outside';
import { useState } from 'react';
import Arrow from '../SVG/Arrow/Arrow';
import styles from './Accordion.module.scss';
import useAppDispatch from '../../hooks/useAppDispatch';
import {
  setEndDate,
  setStartDate,
} from '../../store/reducers/currendDateSlice';

interface IPropsAccordion {
  className: string;
}

export default function Accordion({ className }: IPropsAccordion) {
  const dispatch = useAppDispatch();

  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [accordionActive, setAccordionActive] = useState(false);
  const closeDropdown = () => {
    setAccordionActive(false);
  };

  function HandleEndDate(event: React.ChangeEvent<HTMLInputElement>) {
    setDateEnd(event.target.value);
    dispatch(setEndDate(event.target.value));
  }
  function HandleStartDate(event: React.ChangeEvent<HTMLInputElement>) {
    setDateStart(event.target.value);
    dispatch(setStartDate(event.target.value));
  }

  const ref = useDetectClickOutside({ onTriggered: closeDropdown });
  return (
    <div
      ref={ref}
      className={`${className} ${styles.accordion} ${
        accordionActive ? styles.accordion_active : ''
      }`}
    >
      <div
        className={`${styles.accordion__top}`}
        onClick={() => {
          setAccordionActive(!accordionActive);
        }}
      >
        <p>Created</p>
        <Arrow />
      </div>
      {accordionActive && (
        <div className={styles.accordion__content}>
          <div className={styles.accordion__wrapper}>
            <input
              className={styles.accordion__input}
              type="number"
              name=""
              id=""
              placeholder="from"
              value={dateStart}
              onChange={(event) => {
                HandleStartDate(event);
              }}
            />
            <div className={styles.accordion__line}>{null}</div>
            <input
              className={styles.accordion__input}
              type="number"
              name=""
              id=""
              placeholder="before"
              value={dateEnd}
              onChange={(event) => {
                HandleEndDate(event);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
