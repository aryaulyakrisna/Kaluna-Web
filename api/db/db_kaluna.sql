-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2024 at 04:07 AM
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
-- Table structure for table `t_otp`
--

CREATE TABLE `t_otp` (
  `id` int(11) DEFAULT NULL,
  `email` varchar(60) NOT NULL,
  `otp` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `t_otp`
--

INSERT INTO `t_otp` (`id`, `email`, `otp`) VALUES
(3, 'aryaulyakrisna@gmail.com', '3766');

-- --------------------------------------------------------

--
-- Table structure for table `t_user`
--

CREATE TABLE `t_user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `t_user`
--

INSERT INTO `t_user` (`id`, `first_name`, `last_name`, `email`, `phone_number`, `password`) VALUES
(3, 'Arya', 'Ulya Krisna', 'aryaulyakrisna@gmail.com', '08871846027', '$2b$10$QaBm8rZLrHznjQklzC9oseI9JH.63z5fMsheMD5BUcAkse8kP4.V6'),
(4, 'Arya', 'Ulya Krisna', 'aryaulyakrisna2004@gmail.com', '08871846027', '$2b$10$1Lym5gsGzyhb.56gheSJT.IMC0raBdGVnD3OD2YQ1.pRkqOVADaRW'),
(5, 'Muhammad', 'Faiz Rashid', 'mfaizrash@gmail.com', '08871846027', '$2b$10$gj9XOcOH8f6BNf9TxfudouyLQEs.yDuWbWrcOMCCI9dZioNH22jRq'),
(6, 'Susanto', 'Pramono', 'susantopramono@gmail.com', '08871846027', '$2b$10$OyxT5KuzsXD/5J1p9kpkr./BLWC8GRiHvB3dNRsRbB32YwS3H8oZS'),
(7, 'Susanto', 'Pramono', 'susantopramono1@gmail.com', '08871846027', '$2b$10$gxjao9IuHm8ySvt0TUlXcOrnMP7x3G4TInPmFRFDBFZCbkyRV0SgC'),
(8, 'Susanto', 'Faiz Rashid', 'aryaulyakrisna203@gmail.com', '08871846027', '$2b$10$9AMcrXAHfQiY1nDi/lPDcuEARHNyFaHZjoPr/ADaVVhBlgWQtfRUe'),
(9, 'Muhammad', 'Faiz Rashid', 'mfaizrashwtrt@gmail.com', '08871846027', '$2b$10$euMsqd0uPZYqSDzV0GzWy.g7FJYIUIW/7TiAZZQGPbsFKKED1uOam'),
(12, 'Muhammad', 'Faiz Rashid', 'mfaizrashwtrt2@gmail.com', '08871846027', '$2b$10$8utRm3YuxrDGtCxjE6CmXO7fZPMo2p7vazf7OxT0N.mlP3iwyK5Ee'),
(13, 'Muhammad', 'Faiz Rashid', 'aryaulyakrisna1@gmail.com', '08871846027', '$2b$10$yb9TvKSpddi.AYXf9VBk/ulAL0EAWHQQUSP0aGvK.DaGvlvPkVbzG'),
(14, 'Muhammad', 'Faiz Rashid', 'aryaulyakrisna2003@gmail.com', '08871846027', '$2b$10$tEy3xn9tSPI5Yn9H489q8.eHaWYO6WCOZ8JjTFO1RjRwzeu5Yqr8e'),
(15, 'Muhammad', 'Faiz Rashid', 'mmmm@gmail.com', '08871846027', '$2b$10$TVNMrUXFuaqVpgDbPwkIrOyntGYaGFk9YGJlGN8Y21.GXaM.c.eFm'),
(16, 'Elisa', 'Wulansari', 'elkael011@gmail.com', '081293007626', '$2b$10$EGzqUYmaWR8TYKbSZMkNmO.8GkMhI22.5lDyDeVCZKS/nr6JsBZ92'),
(17, 'Elisa', 'Wulansari', 'dimaaassaafeb@gmail.com', '081293007626', '$2b$10$NfAhHafrK/FmBtKLp97Iv.9Tux9bSJmWDy/9i6MOusjGTb8Jj.qdS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_otp`
--
ALTER TABLE `t_otp`
  ADD UNIQUE KEY `otp` (`otp`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
