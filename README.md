![Logo](https://github.com/Creator11/webpack-starter/raw/main/src/assets/img/logo.jpg)

# webpack TS bundle

cборка вебпак + тс + ci/cd

## Основные фишки

- source map
- typeScript
- bundle analyzer
- lazy loading / bundle optimization
- github ci/cd
- dev/production bundle
- Autoprefixer

## скрипты

Start the server to dev mode

```bash
  npm run start
```

build development or production mode (defoult build run prod mode)

```bash
  npm run build:dev
```

```bash
  npm run build:prod
```

if you have ssh access to the server
use this command to deploy (MAKE SURE YOU SUBSTITUTE ALL KEYS IN package.json)

```bash
  npm run deploy
```

run bundle analyze (defoult run production mode)

```bash
  npm run analyze
```

run typeScript type check

```bash
  npm run typecheck
```

for special cases, launch in desktop or mobile mode is provided
(be careful, other content will be cut from the bundle)

```bash
  npm run build:desktop
```

```bash
  npm run build:mobile
```

## Дополнительные фишки/информация

- весь неиспользуемый код удаляется из бандла (Tree shaking)
- иконки импоритруются компонентом и так же видоизменяются (ниже прим.)

```javascript
import Logo from "@/assets/img/logo-white.svg";

<Logo width={126} height={32} fill={"#0000"} />;
```

- для особых случаев предусмотрен запуск бандла в режиме desktop || mobile
- добавлен в dev сборку progress плагин для сборщика (помогает анализировать скорость сборки бандла)
- все основные названия файлов в бандле хэшируются для удобства
- при запуске dev server отсутсвует перезагрузка при изменении кода
- source map полностью хэшируются при production бандле
- для локальной разработки подключены хэш роуты!!! (заменить createHashRouter на BrowserRouter в проде)

```javascript
const router = createHashRouter;
```

- установлены относительные пути @/... ( все пути забиты в webpack.config.ts в BuildPaths)
- в dev режиме не ужимает scss что позволяет лучше дебажить бандл
- typeScript выдает ошибку типизации только в консоли и в бандле в дев режиме можно спокойно работать с ошибкой
- Source map позволяет дебажить в исходниках
- WebpackBar визуализирует прогресс бар при сборке

## настройка CI/CD

на сервере обязательно должен быть ~/.ssh/authorized_keys !!

настройка для github action

.github > workflows > deploy.yml

правим строчку

```javascript
- run: rsync -avz -e "sshpass -p 'ВАШ ПАРОЛЬ от SSH' ssh -o StrictHostKeyChecking=no" build/ admin@netangels.ru:/home/admin/mysite.ru/app
```
 
 
## Автор

- [@troshin](https://github.com/dTroshin11)
