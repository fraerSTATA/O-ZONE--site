-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июн 02 2021 г., 21:20
-- Версия сервера: 10.4.14-MariaDB
-- Версия PHP: 7.2.34
 
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
 
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
 
--
-- База данных: `ozongood`
--
 
-- --------------------------------------------------------
 
--
-- Структура таблицы `db`
--
 
CREATE TABLE `db` (
  `id` int(11) NOT NULL,
  `title` varchar(56) DEFAULT NULL,
  `price` varchar(5) DEFAULT NULL,
  `sale` varchar(5) DEFAULT NULL,
  `img` varchar(52) DEFAULT NULL,
  `hoverImg` varchar(52) DEFAULT NULL,
  `category` varchar(17) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 
--
-- Дамп данных таблицы `db`
--
 
INSERT INTO `db` (`id`, `title`, `price`, `sale`, `img`, `hoverImg`, `category`) VALUES
(1, 'Игровая приставка Sony PlayStation 4 Pro', '33990', 'False', 'https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg', 'https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg', 'Игровая приставка'),
(2, 'Игровая приставка Sony PlayStation 3 Super Slim', '16499', 'True', 'https://cdn1.ozone.ru/multimedia/c400/1027495663.jpg', 'https://cdn1.ozone.ru/multimedia/c400/1028469540.jpg', 'Игровая приставка'),
(3, 'Игровая приставка Xbox One X', '39990', 'False', 'https://cdn1.ozone.ru/multimedia/c400/1024358491.jpg', '', 'Игровая приставка'),
(4, 'Игровая приставка Xbox One S', '23411', 'True', 'https://cdn1.ozone.ru/multimedia/c400/1024822131.jpg', 'https://cdn1.ozone.ru/multimedia/c400/1024822128.jpg', 'Игровая приставка'),
(5, 'Игровая приставка Nintendo Switch', '24751', 'False', 'https://cdn1.ozone.ru/multimedia/c400/1021386685.jpg', 'https://cdn1.ozone.ru/multimedia/c400/1026072683.jpg', 'Игровая приставка'),
(6, 'Игровая приставка Sega Retro Genesis HD', '3624', 'True', 'https://cdn1.ozone.ru/multimedia/c400/1024928305.jpg', 'https://cdn1.ozone.ru/multimedia/c400/1024928306.jpg', 'Игровая приставка'),
(7, 'Игровая приставка Dendy Junior', '1551', 'True', 'https://cdn1.ozone.ru/multimedia/c400/1021877092.jpg', 'https://cdn1.ozone.ru/multimedia/c400/1021877092.jpg', 'Игровая приставка'),
(8, 'Игровая приставка Sony PlayStation Classic', '10445', 'False', 'https://cdn1.ozone.ru/multimedia/c400/1025222877.jpg', 'https://cdn1.ozone.ru/multimedia/c400/102538227.jpg', 'Игровая приставка'),
(9, 'Клавиатура Logitech Wireless Keyboard K360', '2390', 'False', 'https://cdn1.ozone.ru/multimedia/c400/1015518726.jpg', 'https://cdn1.ozone.ru/multimedia/c400/102518725.jpg', 'Периферия для ПК'),
(10, 'Клавиатура Defender Element HB-195', '566', 'True', 'https://cdn1.ozone.ru/multimedia/c400/1028488609.jpg', 'https://cdn1.ozone.ru/multimedia/c400/1028488611.jpg', 'Периферия для ПК'),
(11, 'Игровая клавиатура Steelseries Apex M750- RU', '12848', 'True', 'https://cdn1.ozone.ru/multimedia/c400/1027006299.jpg', 'https://cdn1.ozone.ru/multimedia/c400/1027006301.jpg', 'Периферия для ПК'),
(12, 'Мышь + коврик A4Tech Bloody V7M+B-071', '1649', 'False', 'https://cdn1.ozone.ru/multimedia/c400/1026202934.jpg', 'https://cdn1.ozone.ru/multimedia/c400/1026202933.jpg', 'Периферия для ПК'),
(13, 'Мышь Trust Varo', '1097', 'True', 'https://cdn1.ozone.ru/multimedia/c400/1025117257.jpg', 'https://cdn1.ozone.ru/multimedia/c400/1025117012.jpg', 'Периферия для ПК'),
(14, 'Мышь Genius DX-120', '350', 'False', 'https://cdn1.ozone.ru/multimedia/c400/1014472326.jpg', 'https://cdn1.ozone.ru/multimedia/c400/1014472325.jpg', 'Периферия для ПК'),
(15, 'Коврик для мыши Orico MPA9040', '1279', 'True', 'https://cdn1.ozone.ru/multimedia/c400/1026748248.jpg', 'https://cdn1.ozone.ru/multimedia/c400/1026748250.jpg', 'Периферия для ПК'),
(16, 'Коврик для мыши Trust GXT 760 Glide RGB', '4959', 'False', 'https://cdn1.ozone.ru/multimedia/c400/1025053907.jpg', '', 'Периферия для ПК'),
(17, 'Метро: Исход', '1479', 'True', 'https://cdn1.ozone.ru/multimedia/c400/1026951535.jpg', '', 'Игры и софт'),
(18, 'Darksiders III. Коллекционное издание', '3990', 'False', 'https://cdn1.ozone.ru/multimedia/c400/1023840682.jpg', 'https://cdn1.ozone.ru/multimedia/c400/1023849642.jpg', 'Игры и софт'),
(19, 'Mortal Kombat X', '1076', 'False', 'https://cdn1.ozone.ru/multimedia/c400/1011627377.jpg', '', 'Игры и софт'),
(20, 'Microsoft Windows 10 Home (32/64-bit)', '9412', 'False', 'https://cdn1.ozone.ru/multimedia/c400/1013975751.jpg', 'https://cdn1.ozone.ru/multimedia/c400/1013975799.jpg', 'Игры и софт'),
(21, '1С:Предприятие 8.3. Версия для обучения программированию', '560', 'True', 'https://cdn1.ozone.ru/multimedia/c400/1015773076.jpg', '', 'Игры и софт'),
(22, 'ABBYY FotoTranslate', '805', 'False', 'https://cdn1.ozone.ru/multimedia/c400/1001559725.jpg', '', 'Игры и софт'),
(23, 'Destiny (Xbox 360)', '723', 'True', 'https://cdn1.ozone.ru/multimedia/c400/1021419099.jpg', '', 'Игры и софт'),
(24, 'Игра Onrush (PS4 Sony)', '1794', 'True', 'https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg', '', 'Игры и софт');
 
--
-- Индексы сохранённых таблиц
--
 
--
-- Индексы таблицы `db`
--
ALTER TABLE `db`
  ADD PRIMARY KEY (`id`);
 
--
-- AUTO_INCREMENT для сохранённых таблиц
--
 
--
-- AUTO_INCREMENT для таблицы `db`
--
ALTER TABLE `db`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;
 
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
 