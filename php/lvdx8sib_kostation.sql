-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2016 at 06:50 AM
-- Server version: 5.7.11
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lvdx8sib_kostation`
--

-- --------------------------------------------------------

--
-- Table structure for table `carousal`
--

CREATE TABLE `carousal` (
  `id` int(11) NOT NULL,
  `path` text NOT NULL,
  `isDeleted` tinyint(1) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `priority` int(11) NOT NULL DEFAULT '100'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `carousal`
--

INSERT INTO `carousal` (`id`, `path`, `isDeleted`, `isActive`, `priority`) VALUES
(1, 'asdasdasd', 1, 1, 0),
(2, 'aasd', 1, 0, 0),
(3, 'asdasdasd', 1, 1, 0),
(4, 'aasd', 1, 0, 0),
(5, 'asdasdasd', 0, 0, 2),
(6, 'aasd', 1, 0, 0),
(7, 'abc', 0, 0, 1),
(8, 'abc', 0, 0, 100),
(9, 'abc.png', 1, 0, 100),
(10, 'img-1479699689762.jpg', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_auth`
--

CREATE TABLE `user_auth` (
  `uid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `address` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `token` varchar(50) DEFAULT NULL,
  `token_expire` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_auth`
--

INSERT INTO `user_auth` (`uid`, `name`, `email`, `phone`, `password`, `address`, `city`, `created`, `token`, `token_expire`) VALUES
(192, 'q', 'q@q.com', '8600394521', '$2a$10$fb7d10f405a783f3e2c24uf5wMv.QPXxp2ReCznI46ksoL4ill9bW', '11', '', '2016-08-27 18:17:56', NULL, NULL),
(194, 'admin', 'admin@admin.com', '9898989898', '$2a$10$839789c0e8dc4b80c7e1aeW8i6eSedggHKwOJcnYmzOTqAqIHtaVe', 'abc', '', '2016-08-31 00:12:02', NULL, NULL),
(200, 'abc', 'abc@abc.com', '1231231231', '$2a$10$dab3e17b1c27c70fa070ee.VBsSHFhEs22X0aUMbzFx.4MBcm65BK', 'abc', '', '2016-11-12 10:56:45', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carousal`
--
ALTER TABLE `carousal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_auth`
--
ALTER TABLE `user_auth`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carousal`
--
ALTER TABLE `carousal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `user_auth`
--
ALTER TABLE `user_auth`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
