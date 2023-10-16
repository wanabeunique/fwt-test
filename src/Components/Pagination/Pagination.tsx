import useAppDispatch from '../../hooks/useAppDispatch';
import IPages from '../../interfaces/IPages';
import { setCurrentPage } from '../../store/reducers/currentPageSlice';
import Next from '../SVG/Pagination/Next';
import Prev from '../SVG/Pagination/Prev';
import SuperNext from '../SVG/Pagination/SuperNext';
import SuperPrev from '../SVG/Pagination/SuperPrev';
import styles from './Pagination.module.scss';

interface IPagination {
  currentPage: number;
  paintingsPages: IPages | undefined;
}

export default function Pagination({
  currentPage,
  paintingsPages,
}: IPagination) {
  const { next, second } = paintingsPages || { next: false, second: false };
  const dispatch = useAppDispatch();
  function HandleSwitchPage(page: number) {
    dispatch(setCurrentPage(page));
  }
  return (
    <div className={styles.pagination}>
      <div className={`${styles.pagination__container} container`}>
        <button
          type="button"
          disabled={!(currentPage - 2 >= 1)}
          className={styles.pagination__item}
          onClick={() => {
            HandleSwitchPage(currentPage - 2);
          }}
        >
          <SuperPrev disabled={!(currentPage - 2 >= 1)} />
        </button>
        <button
          type="button"
          disabled={!(currentPage - 1 >= 1)}
          className={styles.pagination__item}
          onClick={() => {
            HandleSwitchPage(currentPage - 1);
          }}
        >
          <Prev disabled={!(currentPage - 1 >= 1)} />
        </button>
        {next === false && currentPage !== 1 ? (
          <div className={styles.pagination__items}>
            {currentPage - 2 >= 1 && (
              <button
                type="button"
                className={styles.pagination__item}
                onClick={() => {
                  HandleSwitchPage(currentPage - 2);
                }}
              >
                {currentPage - 2}
              </button>
            )}
            <button
              type="button"
              className={styles.pagination__item}
              onClick={() => {
                HandleSwitchPage(currentPage - 1);
              }}
            >
              {currentPage - 1}
            </button>
            <button
              type="button"
              className={`${styles.pagination__item} ${styles.pagination__item_active}`}
              onClick={() => {
                HandleSwitchPage(currentPage);
              }}
            >
              {currentPage}
            </button>
          </div>
        ) : null}
        {currentPage === 1 ? (
          <div className={styles.pagination__items}>
            <button
              type="button"
              className={`${styles.pagination__item} ${styles.pagination__item_active}`}
              onClick={() => {
                HandleSwitchPage(currentPage);
              }}
            >
              {currentPage}
            </button>
            {next && (
              <button
                type="button"
                className={styles.pagination__item}
                onClick={() => {
                  HandleSwitchPage(currentPage + 1);
                }}
              >
                {currentPage + 1}
              </button>
            )}
            {second && (
              <button
                type="button"
                className={styles.pagination__item}
                onClick={() => {
                  HandleSwitchPage(currentPage + 2);
                }}
              >
                {currentPage + 2}
              </button>
            )}
          </div>
        ) : null}
        {currentPage !== 1 && next === true ? (
          <div className={styles.pagination__items}>
            <button
              type="button"
              className={styles.pagination__item}
              onClick={() => {
                HandleSwitchPage(currentPage - 1);
              }}
            >
              {currentPage - 1}
            </button>
            <button
              type="button"
              className={`${styles.pagination__item} ${styles.pagination__item_active}`}
              onClick={() => {
                HandleSwitchPage(currentPage);
              }}
            >
              {currentPage}
            </button>
            {next && (
              <button
                type="button"
                className={styles.pagination__item}
                onClick={() => {
                  HandleSwitchPage(currentPage + 1);
                }}
              >
                {currentPage + 1}
              </button>
            )}
          </div>
        ) : null}
        <button
          type="button"
          disabled={!next}
          className={styles.pagination__item}
          onClick={() => {
            HandleSwitchPage(currentPage + 1);
          }}
        >
          <Next disabled={!next} />
        </button>
        <button
          type="button"
          disabled={!second}
          className={styles.pagination__item}
          onClick={() => {
            HandleSwitchPage(currentPage + 2);
          }}
        >
          <SuperNext disabled={!second} />
        </button>
      </div>
    </div>
  );
}
