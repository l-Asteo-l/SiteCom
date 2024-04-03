<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-quiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Главная страница</title>
  </head>
  <body>
    <form action="register.php" method="post">
      <input type="text" placeholder="Логин" name="login">
      <input type="text" placeholder="Пароль" name="pass">
      <input type="text" placeholder="Повторите пароль" name="repeatpass">
      <input type="text" placeholder="email" name="email">
      <button type="submit">Зарегистрироваться</button>
    </form>
      <form action="login.php" method="post">
      <input type="text" placeholder="Логин" name="login">
      <input type="text" placeholder="Пароль" name="pass">
      <button type="submit">Войти</button>
    </form>
  </body>
</html>