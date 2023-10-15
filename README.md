Тестовое задание для компании Framework Team

Стэк технологий: React 18, Redux toolkit, TanStack React Query, Typescript 5, SCSS, Axios
Дополнительно: Eslint с конфигом Airbnb + Prettier, react-select

Пагинация: Так как при запросе к апи я не могу получить конечное число страниц, самое оптимизированное решение которое пришло мне в голову - при смене отображаемых страниц отправлять запрос на страницы с индексами i+1, i+2, где i - текущая страница и возвращать объект типа 
```json {next: false, second: false}```, что позволит корректно отображать список страниц

Поиск по имени и дате написания картины реализован с использованием кастомного хука useDebounce, что позволяет избежать слишком большого количества запросов на сервер

