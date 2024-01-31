1. В стартерпаке Laravel Breeze с Inertia (React), по дефолту используется библиотека для ui под названием HeadlessUI
   https://headlessui.com/react/
2. Устанавливаем vite-plugin-svgr
   [https://www.npmjs.com/package/vite-plugin-svgr?activeTab=readme](vite-plugin-svgr)
3. Устанавливаем clsx и tailwind-merge (необязательно, но лучшая практика при условном добавлении классов на компоненты с TailwindCSS)
   npm install --save clsx
   npm i tailwind-merge

Отправка данных с бэка на фронт (пример)

1. php artisan make:model -mrc News
2. Обновляем модель изменяем fillable и добавляем туда поля которые нам нужны
3. Обновляем модель юзер чтобы юзер мог иметь несколько новостей
4. Изменяем таблицу миграций и добавляем туда новые поля
5. php artisan migrate
6. php artisan tinker

Вписываем данный код в терминал чтобы создать новый news
php artisan tinker
use App\Models\News;

News::create([
'user_id' => 1, // id юзера
'title' => 'Sample News Title',
'description' => 'Sample news description',
'date' => now()->toDateString(),
]);

7. Добавляем рут в api.php если ответ json, добавляем рут в web.php если при запросе нужен рендеринг страницы в ответе

Для удаления ненужных моделей и контроллеров надо удалит модель, контроллер, таблицу миграцию вручную и также стр фронта если есть
и запустить команду "composer dump-autoload"

Роли:

1. Устанавливаем spatie/laravel-permission
2. Делаем Seeder Role и опционально сидер для нового юзера с ролем сразу (админ, модератор и юзер)
   php artisan make:seeder RoleSeeder
   Вставляем в бд
   php artisan db:seed
3. Правим Http/Controller/Auth/RegisteredUserController чтобы создаваемый юзер в таблице по дефолту имел роль юзера
4. Создаем мидлвейр для Ролей для рутов по типу role:admin и тд
   php artisan make:middleware RoleMiddleware
5. Добавлем в Http/Kernel.php alias для ролей в мидлвейр
   'role' => \App\Http\Middleware\RoleMiddleware::class,
6. Форматируем руты в web.php, группируем стр админки и добавляем role:admin для проверки
7. Меняем Welcome.jsx, auth.user?.roles[0]?.name === "admin"
   чтобы линк на админку показывался только если вошедший пользователь это админ

npm install classnames - работа с классами с бем работает на ура
