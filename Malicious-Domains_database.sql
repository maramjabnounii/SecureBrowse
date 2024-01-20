-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: blacklist
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `list`
--

DROP TABLE IF EXISTS `list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `list` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  `date` datetime NOT NULL,
  `threat_category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list`
--

LOCK TABLES `list` WRITE;
/*!40000 ALTER TABLE `list` DISABLE KEYS */;
INSERT INTO `list` VALUES (1,'http://tg.telegarm-if.top/','2023-10-23 10:15:58','phishing'),(2,'https://myexchange.com/','2023-10-23 10:16:02','phishing'),(3,'https://fixedfloat-swap.com/','2023-10-23 10:16:05','phishing'),(4,'https://www.00043138.com:9900/web/#/first','2023-10-23 10:16:09','phishing'),(5,'https://foundatin.app/','2023-10-23 10:16:11','phishing'),(6,'http://coinsrelief.com/','2023-10-23 10:16:14','phishing'),(7,'https://wwxhajudjgwjklckvzgs7.web.app/','2023-10-23 10:16:16','phishing'),(8,'https://t.ly/ce-ZE','2023-10-23 10:16:19','phishing'),(9,'http://virment.fr/','2023-10-23 10:16:22','phishing'),(10,'https://www.paypal.com/lc/webapps/mpp/security/suspicious-activity ','2023-10-23 10:16:24','spam'),(11,'https://geeksadvice.com/remove-search-yahoo-com-redirect/','2023-10-23 10:16:26','spam'),(13,'https://poloniex.com/login','2023-10-23 10:16:28','spam'),(14,'http://pepe2.top/','2023-10-23 10:16:29','spam'),(15,'http://ww1.diagkey.com/','2023-10-23 10:16:31','spam'),(16,'https://aicoinex-amm.com/#/','2023-10-23 10:16:32','spam'),(17,'https://orb.ac/','2023-10-23 10:16:33','spam'),(18,'https://lensalert.me/','2023-10-23 10:16:34','spam'),(19,'https://spark.fi/','2023-10-23 10:16:36','spam'),(20,'https://mkr.market/','2023-10-23 10:16:37','spam'),(21,'https://consensys.io/','2023-10-23 10:16:38','spam'),(22,'https://blog.avast.com/fake-avast-email-scam-avast','2023-10-23 10:16:40','malware'),(23,'https://www.makeuseof.com/mcafee-virus-pop-up-scam/','2023-10-23 10:16:41','malware'),(24,'https://blog.sucuri.net/2017/09/hacked-websites-mine-crypocurrencies.html','2023-10-23 10:16:43','cryptocurrencies'),(25,'https://www.quora.com/Is-MinerGate-com-a-legit-Bitcoin-mining-site-If-not-do-you-have-any-suggestions','2023-10-23 10:16:45','cryptocurrencies'),(26,'http://61.53.241.88:56140/i','2023-10-23 10:16:46','Botnet'),(27,'http://185.196.10.146/dnjupddater.exe','2023-10-23 10:16:47','Botnet'),(28,'http://115.52.7.224:42493/i','2023-10-23 10:16:47','malware'),(29,'http://115.52.7.224:42493/bin.sh','2023-10-23 10:16:47','malware'),(30,'http://185.172.128.19/latestrocki.exe','2023-10-23 10:16:48','malware'),(31,'http://109.107.182.3/some/next.exe','2023-10-23 10:16:49','malware'),(32,'http://200.59.72.192:40109/Mozi.m','2023-10-23 10:16:50','malware'),(33,'http://185.215.113.68/mine/liva.exe','2023-10-23 10:16:52','malware'),(34,'http://172.245.208.28/guj/beautifulhjcreversehissettingsentireprocessgoodforlaunchtoeverythingfine.doC','2023-10-23 10:16:54','malware'),(35,'http://172.245.208.28/1313/conhost.exe','2023-10-23 10:16:55','malware'),(36,'https://drive.google.com/uc?export=download&id=105SHbt58-cSXJhujiqMygDNcVs-_WGAc','2023-10-23 10:16:56','malware'),(37,'https://vk.com/doc164097589_672773524?hash=WHFML4M0B8ZHwOPj7reluCrKil17xogHIIXsw6ir5vT&dl=RMEu6ftmSWWVk6vol7mvwgzAO6sVbmjS9XpdaFyWUsP&api=1&no_preview=1#xin','2023-10-23 10:16:57','malware'),(38,'http://200.59.77.135:56282/i','2023-10-23 10:16:59','malware'),(39,'http://172.245.208.28/hjk/msworldwidenamespreadingaroundtheowrldtoorigantixationtodevelopnewproductforfutureprupeorps.Doc','2023-10-23 10:17:00','malware'),(40,'http://149.255.35.132/a0201c65c6fe449d/softokn3.dll','2023-10-23 10:17:01','malware');
/*!40000 ALTER TABLE `list` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-16 22:21:27
