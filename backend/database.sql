-- MySQL dump 10.13  Distrib 8.0.30, for Linux (x86_64)
--
-- Host: localhost    Database: BM
-- ------------------------------------------------------
-- Server version	8.0.30-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `logo` varchar(256) DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`,`user_id`),
  KEY `fk_category_user1_idx` (`user_id`),
  CONSTRAINT `fk_category_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Logement','../../src/assets/categoriesIcons/housing.png',1),(2,'Courses','../../src/assets/categoriesIcons/shopping.png',1),(3,'Restauration','../../src/assets/categoriesIcons/restoration.png',1),(4,'Carburant','../../src/assets/categoriesIcons/fuel.png',1),(5,'Loisirs','../../src/assets/categoriesIcons/leisure.png',1),(6,'Autres','../../src/assets/categoriesIcons/unknown.png',1),(7,'Soins','../../src/assets/categoriesIcons/care.png',1),(8,'Dons','../../src/assets/categoriesIcons/donation.png',1),(9,'Sport','../../src/assets/categoriesIcons/sport.png',1),(10,'Voyages','../../src/assets/categoriesIcons/travel.png',1),(11,'Abonnements','../../src/assets/categoriesIcons/subscription.png',1),(12,'Énergie','../../src/assets/categoriesIcons/energy.png',1);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `revenueAndExpense`
--

DROP TABLE IF EXISTS `revenueAndExpense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `revenueAndExpense` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `date` date NOT NULL,
  `amount` decimal(5,2) NOT NULL,
  `note` varchar(128) DEFAULT NULL,
  `repeat` tinyint DEFAULT NULL,
  `user_id` int NOT NULL,
  `category_id` int NOT NULL,
  `category_user_id` int NOT NULL,
  PRIMARY KEY (`id`,`user_id`,`category_id`,`category_user_id`),
  KEY `fk_revenue_user1_idx` (`user_id`),
  KEY `fk_revenueAndExpense_category1_idx` (`category_id`,`category_user_id`),
  CONSTRAINT `fk_revenue_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_revenueAndExpense_category1` FOREIGN KEY (`category_id`, `category_user_id`) REFERENCES `category` (`id`, `user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `revenueAndExpense`
--

LOCK TABLES `revenueAndExpense` WRITE;
/*!40000 ALTER TABLE `revenueAndExpense` DISABLE KEYS */;
INSERT INTO `revenueAndExpense` VALUES (1,'Don','2022-06-28',15.00,NULL,NULL,1,6,1),(2,'Courses','2022-06-26',30.00,NULL,NULL,1,2,1),(3,'Carburant','2022-06-22',50.01,NULL,NULL,1,4,1),(4,'Noya Bagel','2022-06-19',6.80,NULL,NULL,1,3,1),(5,'Électricité','2022-06-15',70.08,NULL,NULL,1,1,1),(6,'Bombora','2022-06-15',2.50,NULL,NULL,1,3,1),(7,'Courses','2022-06-10',75.68,NULL,NULL,1,2,1),(8,'Caburant','2022-06-07',55.04,NULL,NULL,1,4,1),(9,'Loyer','2022-06-05',400.00,NULL,NULL,1,1,1),(10,'Cinéma','2022-06-01',21.00,NULL,NULL,1,5,1),(11,'test1','2022-07-01',20.53,NULL,NULL,1,1,1),(12,'test2','2022-07-02',45.00,NULL,NULL,1,5,1),(13,'test3','2022-07-03',33.00,NULL,NULL,1,2,1),(14,'test4','2022-07-04',57.00,NULL,NULL,1,3,1),(15,'test5','2022-07-05',200.00,NULL,NULL,1,1,1),(16,'test6','2022-07-06',12.80,NULL,NULL,1,4,1),(17,'test7','2022-07-07',89.00,NULL,NULL,1,5,1),(18,'test8','2022-07-07',50.00,NULL,NULL,1,3,1),(19,'test9','2022-07-10',45.00,NULL,NULL,1,2,1),(20,'test10','2022-07-11',65.47,NULL,NULL,1,1,1),(21,'test11','2022-07-13',29.99,NULL,NULL,1,6,1),(22,'test12','2022-07-15',45.34,NULL,NULL,1,4,1),(23,'test13','2022-07-19',10.50,NULL,NULL,1,2,1),(24,'test14','2022-07-21',5.20,NULL,NULL,1,5,1);
/*!40000 ALTER TABLE `revenueAndExpense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `period` date DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Amar','alebkiri.dev@gmail.com',NULL,'toto');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-30 23:49:07
