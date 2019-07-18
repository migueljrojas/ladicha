-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2019 at 12:04 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ladicha`
--

-- --------------------------------------------------------

--
-- Table structure for table `mesas`
--

CREATE TABLE `mesas` (
  `id` int(11) NOT NULL,
  `fecha` varchar(255) NOT NULL DEFAULT '10',
  `h1230` varchar(255) NOT NULL DEFAULT '10',
  `h1300` varchar(255) NOT NULL DEFAULT '10',
  `h1330` varchar(255) NOT NULL DEFAULT '10',
  `h1400` varchar(255) NOT NULL DEFAULT '10',
  `h1430` varchar(255) NOT NULL DEFAULT '10',
  `h1500` varchar(255) NOT NULL DEFAULT '10',
  `h1900` varchar(255) NOT NULL DEFAULT '10',
  `h1930` varchar(255) NOT NULL DEFAULT '10',
  `h2000` varchar(255) NOT NULL DEFAULT '10',
  `h2030` varchar(255) NOT NULL DEFAULT '10',
  `h2100` varchar(255) NOT NULL DEFAULT '10',
  `h2130` varchar(255) NOT NULL DEFAULT '10',
  `h2200` varchar(255) NOT NULL DEFAULT '10',
  `h2230` varchar(255) NOT NULL DEFAULT '10',
  `h2300` varchar(255) NOT NULL DEFAULT '10',
  `h2330` varchar(255) NOT NULL DEFAULT '10',
  `h2400` varchar(255) NOT NULL DEFAULT '10'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mesas`
--

INSERT INTO `mesas` (`id`, `fecha`, `h1230`, `h1300`, `h1330`, `h1400`, `h1430`, `h1500`, `h1900`, `h1930`, `h2000`, `h2030`, `h2100`, `h2130`, `h2200`, `h2230`, `h2300`, `h2330`, `h2400`) VALUES
(1, '20190717', '10', '10', '10', '10', '10', '10', '1', '2', '10', '10', '10', '10', '10', '10', '10', '10', '10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mesas`
--
ALTER TABLE `mesas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mesas`
--
ALTER TABLE `mesas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
