"npm run deploy" - для запису змін з гілки "main" до гілки "gh-pages". 

Practice: Fetch data from server and output it in markup

Завдання 1.
Використовуючи TheMovieDB API(https://www.themoviedb.org/) реалізувати сторінку - перелік фільмів. Сторінка повинна мати мати заголовок “Favourite Movies”. Далі розміщується список фільмів у колонку. Кожен елемент зі списку повинен відображати заголовок (title) фільму, картинку (poster) та опис (overview). Користуємось виключно класовими React-компонентами, дані для відображення завантажуємо при початковому рендері сторінки, використовуючи методи життєвого циклу. Також застилити сторінку для кращого вигляду.

Завдання 2.
Реалізувати компонент RateSwitch. Даний компонент відображає текст “Show Rate”. При кліку на нього, даний текст змінюється, показуючи рейтинг фільму (popularity) та додатковий текст справа “Hide Rate”. Відповідно при повторному кліку на текст зліва від рейту компонент приховує рейтинг і показує попередній текст “Show Rate”. Імпортувати даний компонент на основну сторінку із фільмами і добавити для кожного посту із фільмом - адаптувати відповідно логіку, що передавати рейтинг із даних, отриманих по API. Компонент також повинен бути класовий, мінімально застилений.

Завдання 3.
Реалізувати пагінацію для даної сторінки (можна написати власну або підключити існуючу бібліотеку і використати її компонент). По складності пагінація має бути простою - 2 кнопки - previous page та next page. Відповідно при кліку на кнопки завантажуватимемо попередню або наступну сторінку. Також користуємось лише класовими компонентами, мінімально застилюємо. Якщо ми знаходимось на першій сторінці - кнопка previous pagе задісейблена - якщо на останній - дісейблимо кнопку next page. Компонент повинен приймати пропсами номер поточної сторінки, загальну к-сть сторінок та хендлер, який її змінює - відповідно буде універсальним, щоб можна було використати в будь-якому потрібному місці. Добавити на основну сторінку із фільмами та адаптувати логіку для переходу на потрібну сторінку.

Завдання 4.
На рівні заголовку сторінки потрібно добавити кнопку ThemeButton для зміни теми сторінки. По замовчуванню дана кнопка відображає svg іконку сонця, що свідчить про світлу тему. При кліку на дану кнопку svg іконка змінюється відображаючи місяць. Відповідно при наступному кліку отримаємо попередню svg іконку. Компонент повинен бути класовим, застиленим для кращого вигляду. Знизу додаю посилання де взяти іконки та корисну статтю по роботі із svg y React.

Завдання 5.
Реалізувати контекст для зміни теми для усього додатку. Даний контекст повинен огортати увесь додаток та використовуватись наступним чином:

-   при кліку кнопки ThemeButton глобально змінюємо значення теми - light or dark;
-   змінюємо колір заднього фону для всієї сторінки - світлий або темний в залежності від значення теми;
-   колір тексту в описі та заголовку поста фільму, також заголовку сторінки змінюється відповідно - світлий або темний в залежності від значення теми;
-   такі ж зміни з кольором тексту та кнопок пагінації;

Завдання 6.
Реалізувати компонент PopUp. Даний компонент повинен відображати дату релізу фільму у вспливаючому вікні при кліку на зображення постера фільму. Також повинен містити кнопку закриття вспливаючого вікна - при кліку відповідно вікно закриватиметься. Даний компонент повинен бути класовим із відповідними стилями для нього. Після реалізації добавити на основну сторінку з фільмами для кожного поста із фільмом - відповідно адаптувавши логіку із отриманням та відображенням вірної дати релізу кожного фільму (release_date). Також при кліку на постер фільму і при відкриті вікна із датою релізу - попередньо відкрите вікно для іншого поста повинно закриватись - вспливаюче вікно завжди буде одне!
