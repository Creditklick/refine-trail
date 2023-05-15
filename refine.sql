-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2023 at 08:06 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `refine`
--

-- --------------------------------------------------------

--
-- Table structure for table `leads`
--

CREATE TABLE `leads` (
  `Id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(60) NOT NULL,
  `email` varchar(120) NOT NULL,
  `pan` varchar(10) NOT NULL,
  `pincode` int(11) NOT NULL,
  `query` varchar(200) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `remarks` varchar(200) NOT NULL,
  `CreditScore` int(11) NOT NULL,
  `ActiveAccount` int(50) NOT NULL,
  `LoanAmount` bigint(200) NOT NULL,
  `Payment` varchar(70) NOT NULL,
  `SuitFileCount` int(20) NOT NULL,
  `SuitFileName` varchar(500) NOT NULL,
  `BankAccountCout` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `leads`
--

INSERT INTO `leads` (`Id`, `name`, `email`, `pan`, `pincode`, `query`, `phone`, `remarks`, `CreditScore`, `ActiveAccount`, `LoanAmount`, `Payment`, `SuitFileCount`, `SuitFileName`, `BankAccountCout`) VALUES
(1, '', '', '', 0, 'Bike', '0', '', 0, 0, 0, '', 0, '', 0),
(2, '', '', '', 0, 'Boat', '0', '', 0, 0, 0, '', 0, '', 0),
(3, '', '', '', 0, '', '0', '', 0, 0, 0, '', 0, '', 0),
(4, '', '', '', 0, 'Car', '0', '', 0, 0, 0, '', 0, '', 0),
(5, 'Kuwar Pratap Singh', 'kuwar0560@gmail.com', 'ASDFGHJ', 246727, 'Bike', '0', '', 0, 0, 0, '', 0, '', 0),
(6, 'Kuwar Pratap Singh', 'kuwar0560@gmail.com', 'ASDFGHJ', 246727, 'Boat', '0', '', 0, 0, 0, '', 0, '', 0),
(7, '', '', '', 0, 'Boat', '0', '', 0, 0, 0, '', 0, '', 0),
(8, '', '', '', 0, 'Bike', '0', '', 0, 0, 0, '', 0, '', 0),
(9, '', '', '', 0, 'Bike', '0', '', 0, 0, 0, '', 0, '', 0),
(10, '', '', '', 0, 'Boat', '0', '', 0, 0, 0, '', 0, '', 0),
(11, 'Kuwar Pratap Singh', 'kuwar0560@gmail.com', 'ASDFGHJ', 246727, 'Bike', '0', '', 0, 0, 0, '', 0, '', 0),
(12, '', '', '', 0, '', '0', '', 0, 0, 0, '', 0, '', 0),
(13, '', '', '', 0, 'others', '0', '', 0, 0, 0, '', 0, '', 0),
(14, '', '', '', 0, 'on', '0', '', 0, 0, 0, '', 0, '', 0),
(15, '', '', '', 0, 'Need fresh loan/CC to clear outstandings?', '0', '', 0, 0, 0, '', 0, '', 0),
(16, '', '', '', 0, 'Need fresh loan/CC to clear outstandings?', '0', '', 0, 0, 0, '', 0, '', 0),
(17, 'Kuwar Pratap Singh', 'kuwar0560@gmail.com', 'ASDFGHJ', 246727, 'Pay partial payment of existing account and pay in EMIs', '0', '', 0, 0, 0, '', 0, '', 0),
(18, 'Pratap', 'kuwar0560@gmail.com', 'asdfg', 246701, 'Close existing account', '0', '', 0, 0, 0, '', 0, '', 0),
(19, 'ashu', 'ashu@emaple.com', 'ASDFJHK', 123456, '0', '0', '', 0, 0, 0, '', 0, '', 0),
(20, 'jaadu', 'a@gmail.com', 'q', 1, '1', '0', '', 0, 0, 0, '', 0, '', 0),
(21, 'ashu', 'a@gmail.com', '1', 1, '1', '0', '', 0, 0, 0, '', 0, '', 0),
(22, 'Kuwar Pratap Singh', 'kuwar0560@gmail.com', 'ASDFGHJ', 246727, 'Need fresh loan/CC to clear outstandings?', '2147483647', '', 0, 0, 0, '', 0, '', 0),
(23, 'Gaurav', 'gaurav.yadav@imspl.com', 'alkpt3124E', 221002, 'Pay partial payment of existing account and pay in EMIs', '2147483647', '', 0, 0, 0, '', 0, '', 0),
(24, '', '', '', 246727, '', '2147483647', '', 0, 0, 0, '', 0, '', 0),
(25, 'Kuwar Pratap Singh', 'kuwar0560@gmail.com', '', 246727, '', '2147483647', '', 0, 0, 0, '', 0, '', 0),
(26, 'Aditya', 'kuwar0560@gmail.com', '', 246727, 'Need fresh loan/CC to clear outstandings?', '07500073704', '', 0, 0, 0, '', 0, '', 0),
(27, 'Kuwar Pratap Singh', 'kuwar0560@gmail.com', 'ASDFGHJ', 246727, 'Need fresh loan/CC to clear outstandings?', '07500073704', '', 0, 0, 0, '', 0, '', 0),
(28, 'asgy', 'k@gmail.com', 'ASDFJHK', 123456, 'Settle the existing loan', '56448585', '', 0, 0, 0, '', 0, '', 0),
(29, 'puruShottamyadav', 'p@gmail.com', 'ASDFJHK', 123456, 'Get rid off the recurring phone calls of recovery', '564456778', '', 0, 0, 0, '', 0, '', 0),
(30, '', '', '', 0, '', '', '', 0, 0, 0, '', 0, '', 0),
(31, 'Kuwar Pratap Singh', 'kuwar0560@gmail.com', 'JHGFDRTYK', 246727, 'Just want to improve the credit score', '07500073704', '', 0, 0, 0, '', 0, '', 0),
(32, 'Kuwar Pratap Singh', 'kuwar0560@gmail.com', 'alkpt3124E', 246727, 'others', '07500073704', '', 0, 0, 0, '', 0, '', 0),
(33, 'Pratap', '', 'asdfg', 246701, 'Need fresh loan/CC to clear outstandings?', '07500073704', '', 0, 0, 0, '', 0, '', 0),
(34, 'Kuwar Pratap Singh', 'kuwar0560@gmail.com', 'alkpt3124E', 246727, 'Settle the existing loan', '07500073704', '', 0, 0, 0, '', 0, '', 0),
(35, 'Gaurav', 'g@exm.com', 'KAMJP20349', 123456, 'Pay partial payment of existing account and pay in EMIs', '07500073704', '', 0, 0, 0, '', 0, '', 0),
(36, 'Purushottam yadav', 'purubalwan1991@gmail.com', 'JHGFDRTYK', 122016, 'Get rid off the recurring phone calls of recovery', '07500073704', '', 0, 0, 0, '', 0, '', 0),
(37, 'Kuwar Pratap Singh', 'kuwar0560@gmail.com', 'alkpt3124E', 246727, 'Settle the existing loan', '07500073704', '', 0, 0, 0, '', 0, '', 0),
(38, 'Kuwar Pratap Singh', 'kuwar0560@gmail.com', 'QWERTY123', 246727, 'others', '07500073704', 'setone', 780, 2, 3, '', 4, 'SBI', 2),
(39, 'Tushar', 't@gmail.com', 'alkpt3124E', 123456, 'Need fresh loan/CC to clear outstandings?', '07500073704', '', 0, 0, 0, '', 0, '', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `leads`
--
ALTER TABLE `leads`
  ADD UNIQUE KEY `Id` (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `leads`
--
ALTER TABLE `leads`
  MODIFY `Id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
