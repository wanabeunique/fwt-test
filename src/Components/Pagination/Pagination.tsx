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
  if (currentPage && paintingsPages) {
    return (
      <div className={styles.pagination}>
        <div className={`${styles.pagination__container} container`}>
          <button
            disabled={!(currentPage - 2 >= 1)}
            className={styles.pagination__item}
            onClick={() => {
              HandleSwitchPage(currentPage - 2);
            }}
          >
            <SuperPrev disabled={!(currentPage - 2 >= 1)} />
          </button>
          <button
            disabled={!(currentPage - 1 >= 1)}
            className={styles.pagination__item}
            onClick={() => {
              HandleSwitchPage(currentPage - 1);
            }}
          >
            <Prev disabled={!(currentPage - 1 >= 1)} />
          </button>
          {next == false && currentPage !== 1 ? (
            <div className={styles.pagination__items}>
              {currentPage - 2 >= 1 && (
                <div
                  className={styles.pagination__item}
                  onClick={() => {
                    HandleSwitchPage(currentPage - 2);
                  }}
                >
                  {currentPage - 2}
                </div>
              )}
              <div
                className={styles.pagination__item}
                onClick={() => {
                  HandleSwitchPage(currentPage - 1);
                }}
              >
                {currentPage - 1}
              </div>
              <div
                className={`${styles.pagination__item} ${styles.pagination__item_active}`}
                onClick={() => {
                  HandleSwitchPage(currentPage);
                }}
              >
                {currentPage}
              </div>
            </div>
          ) : null}
          {currentPage === 1 ? (
            <div className={styles.pagination__items}>
              <div
                className={`${styles.pagination__item} ${styles.pagination__item_active}`}
                onClick={() => {
                  HandleSwitchPage(currentPage);
                }}
              >
                {currentPage}
              </div>
              {next && (
                <div
                  className={styles.pagination__item}
                  onClick={() => {
                    HandleSwitchPage(currentPage + 1);
                  }}
                >
                  {currentPage + 1}
                </div>
              )}
              {second && (
                <div
                  className={styles.pagination__item}
                  onClick={() => {
                    HandleSwitchPage(currentPage + 2);
                  }}
                >
                  {currentPage + 2}
                </div>
              )}
            </div>
          ) : null}
          {currentPage !== 1 && next === true ? (
            <div className={styles.pagination__items}>
              <div
                className={styles.pagination__item}
                onClick={() => {
                  HandleSwitchPage(currentPage - 1);
                }}
              >
                {currentPage - 1}
              </div>
              <div
                className={`${styles.pagination__item} ${styles.pagination__item_active}`}
                onClick={() => {
                  HandleSwitchPage(currentPage);
                }}
              >
                {currentPage}
              </div>
              {next && (
                <div
                  className={styles.pagination__item}
                  onClick={() => {
                    HandleSwitchPage(currentPage + 1);
                  }}
                >
                  {currentPage + 1}
                </div>
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
}
