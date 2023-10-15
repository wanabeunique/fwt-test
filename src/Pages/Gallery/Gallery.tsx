import AsyncSelect from 'react-select';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import styles from './Gallery.module.scss';
import { setCurrentAuthor } from '../../store/reducers/currentAuthorSlice';
import { ILocation } from '../../interfaces/ILocations';
import getLocations from '../../api/getLocations';
import getPaintings from '../../api/getPaintings';
import IPaintings from '../../interfaces/IPaintings';
import useAppSelector from '../../hooks/useAppSelectop';
import { setCurrentLocation } from '../../store/reducers/currentLocation';
import Card from '../../Components/Card/Card';
import useDebounce from '../../hooks/useDebouce';
import DropdownIndicator from '../../Components/SVG/DropdownIndicator/DropdownIndicator';
import Accordion from '../../Components/Accordion/Accordion';
import Pagination from '../../Components/Pagination/Pagination';
import getCountPaintings from '../../api/getCountPages';
import IPages from '../../interfaces/IPages';
import { IAuthor } from '../../interfaces/IAuthor';
import getAuthors from '../../api/getAuthors';
import { setCurrentPage } from '../../store/reducers/currentPageSlice';

export interface IOption {
  value: number;
  label: string;
}

export default function Gallery() {
  const dispatcth = useAppDispatch();

  const currantDateStart = useAppSelector((store) => store.currentDate.start);
  const currantDateEnd = useAppSelector((store) => store.currentDate.end);
  const currentPage = useAppSelector((store) => store.currentPage.data);
  const currentAuthor = useAppSelector((store) => store.currentAuthor.data);
  const currentLocation = useAppSelector(
    (store) => store.currentLocations.data,
  );

  const [queryName, setQueryName] = useState('');
  const debouncedSearch = useDebounce(queryName);
  const debouncedSearchDateStart = useDebounce(currantDateStart);
  const debouncedSearchDateEnd = useDebounce(currantDateEnd);
  const [paintings, setPaintings] = useState<IPaintings[]>();

  const { data: paintingsData, refetch } = useQuery<IPaintings[]>(
    'paintings',
    () =>
      getPaintings({
        page: currentPage,
        name: queryName,
        authorId: currentAuthor,
        locationId: currentLocation,
        start: currantDateStart,
        end: currantDateEnd,
      }),
    {
      useErrorBoundary: true,
    },
  );

  const { data: paintingsPagesData, refetch: refetchCount } = useQuery<IPages>(
    'paintingsCounts',
    () =>
      getCountPaintings(currentPage, {
        page: currentPage,
        name: queryName,
        authorId: currentAuthor,
        locationId: currentLocation,
        start: currantDateStart,
        end: currantDateEnd,
      }),
    {
      useErrorBoundary: true,
    },
  );

  useEffect(() => {
    refetch();
    refetchCount();
    setPaintings(paintingsData);
  }, [
    currentAuthor,
    currentLocation,
    currentPage,
    paintingsData,
    debouncedSearch,
    debouncedSearchDateStart,
    debouncedSearchDateEnd,
  ]);

  const { data: authorsData } = useQuery<IAuthor[]>('authors', getAuthors, {
    useErrorBoundary: true,
  });

  const { data: locationsData } = useQuery<ILocation[]>(
    'locations',
    getLocations,
    {
      useErrorBoundary: true,
    },
  );

  const authorOptions = authorsData?.map((author) => ({
    value: author.id,
    label: author.name,
  }));

  const locationsOptions = locationsData?.map((location) => ({
    value: location.id,
    label: location.location,
  }));

  function HandleAuthors(option: IOption | null) {
    dispatcth(setCurrentAuthor(option?.value));
    dispatcth(setCurrentPage(1));
  }

  function HandleLocations(option: IOption | null) {
    dispatcth(setCurrentLocation(option?.value));
    dispatcth(setCurrentPage(1));
  }

  return (
    <div className={styles.gallery}>
      <div className={`container ${styles.gallery__container}`}>
        <div className={styles.gallery__top}>
          <input
            placeholder="Name"
            type="text"
            className={`${styles.gallery__input} ${styles.gallery__item}`}
            value={queryName}
            onChange={(event) => {
              dispatcth(setCurrentPage(1));
              setQueryName(event?.target.value);
            }}
          />
          <AsyncSelect
            components={{ DropdownIndicator }}
            classNamePrefix="custom-select"
            className={styles.gallery__item}
            placeholder="Author"
            options={authorOptions}
            isClearable
            onChange={(option) => {
              HandleAuthors(option);
            }}
          />
          <AsyncSelect
            components={{ DropdownIndicator }}
            classNamePrefix="custom-select"
            className={styles.gallery__item}
            placeholder="Location"
            options={locationsOptions}
            isClearable
            onChange={(option) => {
              HandleLocations(option);
            }}
          />
          <Accordion className={styles.gallery__item} />
        </div>
        <div className={styles.gallery__content}>
          {authorsData &&
            paintings &&
            locationsData &&
            paintings.map((paint) => {
              if (
                paint.authorId !== undefined &&
                paint.locationId !== undefined
              ) {
                return (
                  <Card
                    key={paint.id}
                    {...paint}
                    painterNameObject={authorsData[paint.authorId - 1]}
                    locationNameObject={locationsData[paint.locationId - 1]}
                  />
                );
              }
              return null;
            })}
          {paintings?.length === 0 && (
            <p className={styles.gallery__text}>
              По заданным параметрам картин не найдено
            </p>
          )}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        paintingsPages={paintingsPagesData}
      />
    </div>
  );
}
