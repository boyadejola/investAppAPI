CREATE SCHEMA `veninvest_db` ;

--
CREATE TABLE `veninvest_db`.`users` (
  `userid` INT NOT NULL AUTO_INCREMENT,
  `roleid` INT NOT NULL,
  `firstname` VARCHAR(105) NOT NULL,
  `lastname` VARCHAR(105) NULL,
  `email` VARCHAR(105) NULL,
  `password` VARCHAR(105) NULL,
  `btcid` VARCHAR(145) NULL,
  `usdtid` VARCHAR(145) NULL,
  `ethid` VARCHAR(145) NULL,
  `address` VARCHAR(145) NULL,
  `state` VARCHAR(145) NULL,
  `city` VARCHAR(145) NULL,
  `zipcode` VARCHAR(145) NULL,
  `depositwallet` DECIMAL(10,4) NULL,
  `activewallet` DECIMAL(10,4) NULL,
  `isactive` TINYINT NULL,
  PRIMARY KEY (`userid`));

--
ALTER TABLE `veninvest_db`.`users` 
ADD COLUMN `createdon` DATETIME NULL AFTER `activewallet`,
ADD COLUMN `updatedon` DATETIME NULL AFTER `createdon`;

--

  CREATE TABLE `veninvest_db`.`plans` (
  `planid` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `isactive` TINYINT NULL,
  PRIMARY KEY (`planid`));

--
CREATE TABLE `veninvest_db`.`referrals` (
  `referralid` INT NOT NULL AUTO_INCREMENT,
  `commissionvia` VARCHAR(105) NULL,
  `description` VARCHAR(250) NULL,
  `levelcommission` VARCHAR(105) NULL,
  `amount` DECIMAL(10,4) NULL,
  `afterbalance` DECIMAL(10,4) NULL,
  `createdon` DATETIME NULL,
  PRIMARY KEY (`referralid`));


--
CREATE TABLE `veninvest_db`.`deposit` (
  `depositid` INT NOT NULL AUTO_INCREMENT,
  `gateway` VARCHAR(105) NOT NULL,
  `amount` DECIMAL(10,4) NULL,
  `status` VARCHAR(105) NULL,
  `createdon` DATETIME NULL,
  PRIMARY KEY (`depositid`));


--
CREATE TABLE `veninvest_db`.`withdraw` (
  `withdrawid` INT NOT NULL AUTO_INCREMENT,
  `gateway` VARCHAR(105) NOT NULL,
  `amount` DECIMAL(10,4) NULL,
  `charge` DECIMAL(10,4) NULL,
  `aftercharge` DECIMAL(10,4) NULL,
  `rate` DECIMAL(10,4) NULL,
  `receivable` DECIMAL(10,4) NULL,
  `status` VARCHAR(105) NULL,
  `createdon` DATETIME NULL,
  PRIMARY KEY (`withdrawid`));


--
CREATE TABLE `veninvest_db`.`transaction` (
  `transactionid` INT NOT NULL AUTO_INCREMENT,
  `amount` DECIMAL(10,4) NULL,
  `remaining` DECIMAL(10,4) NULL,
  `detail` VARCHAR(200) NULL,
  `createdon` DATETIME NULL,
  PRIMARY KEY (`transactionid`));


--
CREATE TABLE `veninvest_db`.`returninterest` (
  `returninterestid` INT NOT NULL AUTO_INCREMENT,
  `payinterest` DECIMAL(10,4) NULL,
  `period` VARCHAR(105) NULL,
  `capitalback` DECIMAL(10,4) NULL,
  `invest` DECIMAL(10,4) NULL,
  `status` VARCHAR(105) NULL,
  `nextpay` DECIMAL(10,4) NULL,
  PRIMARY KEY (`returninterestid`));


--

 ALTER TABLE `veninvest_db`.`transaction` 
 ADD COLUMN `isActive` TINYINT NULL AFTER `createdon`;

 ALTER TABLE `veninvest_db`.`withdraw` 
 ADD COLUMN `isActive` TINYINT NULL AFTER `createdon`;


 ALTER TABLE `veninvest_db`.`referrals` 
 ADD COLUMN `isActive` TINYINT NULL AFTER `createdon`;

 ALTER TABLE `veninvest_db`.`returninterest` 
 ADD COLUMN `isActive` TINYINT NULL AFTER `nextpay`;
 
 --
 
 
