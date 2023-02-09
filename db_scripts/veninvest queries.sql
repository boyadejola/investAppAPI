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
 ALTER TABLE `veninvest_db`.`deposit` 
ADD COLUMN `userid` INT NOT NULL AFTER `depositid`,
ADD COLUMN `isactive` TINYINT NOT NULL AFTER `createdon`,
ADD COLUMN `isapproved` TINYINT NOT NULL AFTER `isactive`;


--
ALTER TABLE `veninvest_db`.`withdraw` 
ADD COLUMN `userid` INT NULL AFTER `withdrawid`,
ADD COLUMN `isapproved` TINYINT NOT NULL AFTER `createdon`;

--
ALTER TABLE `veninvest_db`.`referrals` 
ADD COLUMN `userid` INT NULL AFTER `createdon`,
ADD COLUMN `referralto` INT NULL AFTER `userid`;


--
CREATE TABLE `veninvest_db`.`userplans` (
  `userplanid` INT NOT NULL AUTO_INCREMENT,
  `userid` INT NULL,
  `planid` INT NULL,
  `isactive` TINYINT NULL,
  PRIMARY KEY (`userplanid`));


--
ALTER TABLE `veninvest_db`.`transaction` 
ADD COLUMN `userid` INT NULL AFTER `transactionid`;

--
ALTER TABLE `veninvest_db`.`returninterest` 
ADD COLUMN `userid` INT NULL AFTER `returninterestid`;

--
CREATE TABLE `veninvest_db`.`gateways` (
  `gatewayid` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(145) NOT NULL,
  `isactive` TINYINT NULL,
  PRIMARY KEY (`gatewayid`));


--
INSERT INTO `veninvest_db`.`gateways` (`gatewayid`, `name`, `isactive`) VALUES ('1', 'BTC', '1');
INSERT INTO `veninvest_db`.`gateways` (`gatewayid`, `name`, `isactive`) VALUES ('2', 'USDT', '1');

--
ALTER TABLE `veninvest_db`.`deposit` 
CHANGE COLUMN `gateway` `gateway` INT NOT NULL ;


--
ALTER TABLE `veninvest_db`.`deposit` 
ADD COLUMN `details` VARCHAR(245) NULL AFTER `userid`;


--
ALTER TABLE `veninvest_db`.`users` 
ADD COLUMN `interestwallet` DECIMAL(10,4) NULL AFTER `activewallet`;


--
ALTER TABLE `veninvest_db`.`plans` 
ADD COLUMN `ratio` DECIMAL(10,2) NOT NULL AFTER `name`,
ADD COLUMN `days` INT NOT NULL AFTER `ratio`,
ADD COLUMN `refcommission` DECIMAL(10,2) NOT NULL AFTER `days`,
ADD COLUMN `min` DECIMAL(10,2) NULL AFTER `refcommission`,
ADD COLUMN `max` DECIMAL(10,2) NULL AFTER `min`,
CHANGE COLUMN `isactive` `isactive` TINYINT(4) NOT NULL ;

--
INSERT INTO `veninvest_db`.`plans` (`planid`, `name`, `ratio`, `days`, `refcommission`, `min`, `max`, `isactive`) 
VALUES ('1', 'Starter Plan', '1.8', '7', '10', '100', '25000', true);

INSERT INTO `veninvest_db`.`plans` (`planid`, `name`, `ratio`, `days`, `refcommission`, `min`, `max`, `isactive`) 
VALUES ('2', 'Evolution Plan', '2', '14', '10', '25000', '50000', true);

INSERT INTO `veninvest_db`.`plans` (`planid`, `name`, `ratio`, `days`, `refcommission`, `min`, `max`, `isactive`) 
VALUES ('3', 'Standard Plan', '2.5', '30', '10', '50000', '100000', true);

INSERT INTO `veninvest_db`.`plans` (`planid`, `name`, `ratio`, `days`, `refcommission`, `min`, `isactive`) 
VALUES ('4', 'Pro Plan', '3', '60', '10', '100000', true);




--
ALTER TABLE `veninvest_db`.`userplans` 
ADD COLUMN `createdon` DATETIME NULL AFTER `isactive`,
ADD COLUMN `walletid` INT NULL AFTER `planid`;


--
ALTER TABLE `veninvest_db`.`userplans` 
ADD COLUMN `amount` DECIMAL(10,2) NULL AFTER `walletid`;


--
CREATE TABLE `veninvest_db`.`wallets` (
  `walletid` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `isactive` TINYINT NULL,
  PRIMARY KEY (`walletid`));


--
ALTER TABLE `veninvest_db`.`transaction` 
ADD COLUMN `walletid` int NULL AFTER `isActive`;


--
INSERT INTO `veninvest_db`.`wallets` (`walletid`, `name`, `isactive`) VALUES (1, 'Deposit Wallet', true);
INSERT INTO `veninvest_db`.`wallets` (`walletid`, `name`, `isactive`) VALUES (2, 'Interest Wallet', true);
INSERT INTO `veninvest_db`.`wallets` (`walletid`, `name`, `isactive`) VALUES (3, 'Active Wallet', true);


--
ALTER TABLE `veninvest_db`.`returninterest` 
CHANGE COLUMN `nextpay` `nextpay` DATETIME NULL DEFAULT NULL ;


--
ALTER TABLE `veninvest_db`.`returninterest` 
CHANGE COLUMN `payinterest` `payinterest` DECIMAL(10,2) NULL DEFAULT NULL ,
CHANGE COLUMN `capitalback` `capitalback` DECIMAL(10,2) NULL DEFAULT NULL ,
CHANGE COLUMN `invest` `invest` DECIMAL(10,2) NULL DEFAULT NULL ;

--
ALTER TABLE `veninvest_db`.`users` 
CHANGE COLUMN `depositwallet` `depositwallet` DECIMAL(10,2) NULL DEFAULT NULL ,
CHANGE COLUMN `activewallet` `activewallet` DECIMAL(10,2) NULL DEFAULT NULL ,
CHANGE COLUMN `interestwallet` `interestwallet` DECIMAL(10,2) NULL DEFAULT NULL ;


--
ALTER TABLE `veninvest_db`.`returninterest` 
ADD COLUMN `planname` VARCHAR(145) NULL AFTER `userid`;


--
ALTER TABLE `veninvest_db`.`returninterest` 
ADD COLUMN `createdon` DATETIME NULL AFTER `isActive`;


--




 
