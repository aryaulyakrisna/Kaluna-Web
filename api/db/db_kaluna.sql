-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2024 at 02:36 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_kaluna`
--

-- --------------------------------------------------------

--
-- Table structure for table `t_user`
--

CREATE TABLE `t_user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(30) DEFAULT NULL,
  `email` varchar(60) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `t_user`
--

INSERT INTO `t_user` (`id`, `first_name`, `last_name`, `date_of_birth`, `gender`, `email`, `phone_number`, `password`) VALUES
(3, 'Arya', 'Ulya Krisna', NULL, NULL, 'aryaulyakrisna@gmail.com', '08871846027', '$2b$10$NpOZgA1ewYiKGvJE6/aRv.HU.CHXNc1vnXvx2NVGxlMw6irhw4ZbC'),
(4, 'Arya', 'Ulya Krisna', NULL, NULL, 'aryaulyakrisna2004@gmail.com', '08871846027', '$2b$10$1Lym5gsGzyhb.56gheSJT.IMC0raBdGVnD3OD2YQ1.pRkqOVADaRW'),
(5, 'Muhammad', 'Faiz Rashid', NULL, NULL, 'mfaizrash@gmail.com', '08871846027', '$2b$10$gj9XOcOH8f6BNf9TxfudouyLQEs.yDuWbWrcOMCCI9dZioNH22jRq'),
(6, 'Susanto', 'Pramono', NULL, NULL, 'susantopramono@gmail.com', '08871846027', '$2b$10$OyxT5KuzsXD/5J1p9kpkr./BLWC8GRiHvB3dNRsRbB32YwS3H8oZS'),
(7, 'Susanto', 'Pramono', NULL, NULL, 'susantopramono1@gmail.com', '08871846027', '$2b$10$gxjao9IuHm8ySvt0TUlXcOrnMP7x3G4TInPmFRFDBFZCbkyRV0SgC'),
(8, 'Susanto', 'Faiz Rashid', NULL, NULL, 'aryaulyakrisna203@gmail.com', '08871846027', '$2b$10$9AMcrXAHfQiY1nDi/lPDcuEARHNyFaHZjoPr/ADaVVhBlgWQtfRUe'),
(9, 'Muhammad', 'Faiz Rashid', NULL, NULL, 'mfaizrashwtrt@gmail.com', '08871846027', '$2b$10$euMsqd0uPZYqSDzV0GzWy.g7FJYIUIW/7TiAZZQGPbsFKKED1uOam'),
(12, 'Muhammad', 'Faiz Rashid', NULL, NULL, 'mfaizrashwtrt2@gmail.com', '08871846027', '$2b$10$8utRm3YuxrDGtCxjE6CmXO7fZPMo2p7vazf7OxT0N.mlP3iwyK5Ee'),
(13, 'Muhammad', 'Faiz Rashid', NULL, NULL, 'aryaulyakrisna1@gmail.com', '08871846027', '$2b$10$yb9TvKSpddi.AYXf9VBk/ulAL0EAWHQQUSP0aGvK.DaGvlvPkVbzG'),
(14, 'Muhammad', 'Faiz Rashid', NULL, NULL, 'aryaulyakrisna2003@gmail.com', '08871846027', '$2b$10$tEy3xn9tSPI5Yn9H489q8.eHaWYO6WCOZ8JjTFO1RjRwzeu5Yqr8e'),
(15, 'Muhammad', 'Faiz Rashid', NULL, NULL, 'mmmm@gmail.com', '08871846027', '$2b$10$TVNMrUXFuaqVpgDbPwkIrOyntGYaGFk9YGJlGN8Y21.GXaM.c.eFm'),
(16, 'Elisa', 'Wulansari', NULL, NULL, 'elkael011@gmail.com', '081293007626', '$2b$10$EGzqUYmaWR8TYKbSZMkNmO.8GkMhI22.5lDyDeVCZKS/nr6JsBZ92'),
(17, 'Elisa', 'Wulansari', NULL, NULL, 'dimaaassaafeb@gmail.com', '081293007626', '$2b$10$NfAhHafrK/FmBtKLp97Iv.9Tux9bSJmWDy/9i6MOusjGTb8Jj.qdS'),
(18, 'Arya', 'Ulya Krisna', NULL, NULL, 'aryaulyakrisna45@gmail.com', '08871846027', '$2b$10$sBJdxRpNvEXp9Pi.XhkXq.06j8fwT85rIN9wwRT8Rr79bdS54YpB6'),
(19, 'Raka Satria', 'Efendi', NULL, NULL, 'rakaefendi1683@gmail.com', '087876131519', '$2b$10$VXCanO0/UQlMWBD7w7To4.TQ1Mc1lAe4zLSrnEryVa2D2XyNOnYhS'),
(20, 'Kaluna', 'kaluna', NULL, NULL, 'kalunamailsender@gmail.com', '08871846027', '$2b$10$z/wUolKKq8wgif9EDJOkZeeB9jrzJIOd3cDo/X4hc6Ap8BiFiQOBy'),
(21, 'putri', 'nayla', NULL, NULL, 'putrinayla48@gmail.com', '08871846027', '$2b$10$BHpDMUaryM.uIeCGcxiG/.OEJB1kk76DtGNYvYcilZLqyytQEof/S'),
(22, 'Arya', 'Ulya Krisna', NULL, NULL, 'ootgroupy@gmail.com', '08871846027', '$2b$10$pwFsntZHXYkFAnOlahVDe.UbRtmaE5xQkV6Yc9yDh5pU6Mv9e8goG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_user`
--
ALTER TABLE `t_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `t_user`
--
ALTER TABLE `t_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
