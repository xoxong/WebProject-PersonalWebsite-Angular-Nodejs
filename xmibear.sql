/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : xmibear

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-11-11 16:55:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for formtable
-- ----------------------------
DROP TABLE IF EXISTS `formtable`;
CREATE TABLE `formtable` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of formtable
-- ----------------------------
INSERT INTO `formtable` VALUES ('1', '劉王婆', '55555');
INSERT INTO `formtable` VALUES ('2', '王五', '1212');
INSERT INTO `formtable` VALUES ('89', '小六', '666666');
INSERT INTO `formtable` VALUES ('90', '雄起', '77777');
INSERT INTO `formtable` VALUES ('91', '小熊一乐', 'xxxxxx');
INSERT INTO `formtable` VALUES ('92', 'ceshi', '2323');
INSERT INTO `formtable` VALUES ('93', 'ceshi', '2323');

-- ----------------------------
-- Table structure for water_img
-- ----------------------------
DROP TABLE IF EXISTS `water_img`;
CREATE TABLE `water_img` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu1` varchar(255) NOT NULL COMMENT '全部',
  `menu2` varchar(255) NOT NULL,
  `menu3` varchar(255) DEFAULT NULL,
  `img_rul` varchar(255) NOT NULL,
  `a_url` varchar(255) NOT NULL,
  `mstitle` varchar(255) NOT NULL,
  `mstitle2` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of water_img
-- ----------------------------
INSERT INTO `water_img` VALUES ('1', '全部', '系列', '', 'img/mibear_bt2/1024_1.jpg', 'http://www.1024books.com/', '1024小书柜', '我们为Kinlde打造的网上书籍社区,致力于Kindle电子书经典推荐阅读');
INSERT INTO `water_img` VALUES ('2', '全部', '系列', '', 'img/mibear_bt2/1024_2.jpg', 'http://www.1024books.com/', '1024小书柜阅读', '在这个自媒体的时代，我们需要时刻知道这个世界发生了什么');
INSERT INTO `water_img` VALUES ('3', '全部', '系列', '商城', 'img/mibear_bt2/sMall_1.jpg', 'www/Shopping_Mall_1.html', '商城项目', '商城项目，简单大气的商城模板，气质崇尚，高雅有品位，很好的选择');
INSERT INTO `water_img` VALUES ('4', '全部', '系列', '装修', 'img/mibear_bt2/xm_amountRoom.jpg', 'www/xm_amountRoom.html', '装修量房', '装修模板，装修量房页面表单模板');
INSERT INTO `water_img` VALUES ('5', '全部', '系列', '装修', 'img/mibear_bt2/amRoomDesign.jpg', 'www/xm_amRoomDesign.html', '装修量房', '装修模板，装修量房页面表单模板');
INSERT INTO `water_img` VALUES ('6', '全部', '系列', '装修', 'img/mibear_bt2/ny_DecorationStage.jpg', 'www/ny_DecorationStage.html', '装修量房', '装修模板，装修分期贷款,免费量房，免费设计');
INSERT INTO `water_img` VALUES ('7', '全部', '插件', null, 'img/mibear_bt2/banner_Highlights.jpg', 'www/banner_Highlights/xm_Summary_banner.html', 'banner汇总-xm', 'banner汇总-xm 3D 手风琴 等多样有趣的设计');
INSERT INTO `water_img` VALUES ('8', '全部', '插件', null, 'img/mibear_bt2/hover_Highlights.jpg', 'www/hover_Highlights/xm_Summary_hover.html', 'hover汇总-xm', 'hover汇总-xm 3D 炫酷hover鼠标悬停样式');
INSERT INTO `water_img` VALUES ('9', '全部', '布局', null, 'img/mibear_bt2/cool_web.jpg', 'www/Cool_Web_1.html', '样式DIV布局', '样式DIV布局');

-- ----------------------------
-- Table structure for water_lis
-- ----------------------------
DROP TABLE IF EXISTS `water_lis`;
CREATE TABLE `water_lis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) NOT NULL,
  `xtitle` varchar(500) NOT NULL,
  `img1` varchar(500) NOT NULL,
  `img2` varchar(500) NOT NULL,
  `mstitle1` varchar(500) NOT NULL,
  `msmain1` varchar(500) NOT NULL,
  `mstitle2` varchar(500) NOT NULL,
  `msmain2` varchar(500) NOT NULL,
  `mstitle3` varchar(500) NOT NULL,
  `msmain3` varchar(500) NOT NULL,
  `mstitle4` varchar(500) NOT NULL,
  `msmain4` varchar(500) NOT NULL,
  `times` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `bgimg` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of water_lis
-- ----------------------------
INSERT INTO `water_lis` VALUES ('1', '1024小书柜', 'web', 'img/mibear_bt2/1024_1.jpg', 'img/mibear_bt2/1024_2.jpg', '描述列表', 'This is a personal website, this is a website for Kindle, we provide e-book downloads, of course, here are literary works, I hope useful to you', '功能列表', 'The feature is under development, a web site with downloads as well as from the media', '相关设计领域', 'Using a front-end technology, using JQ, JS to participate in the design, while adding a lot of third party plug-ins', '作者学习报告 ', 'Learned a lot of things, know, web site is not simple, of course, we will adhere to, because this is what we like, and I hope that better and better', '2017-07-01 00:00:00', 'img/1024.jpg');
INSERT INTO `water_lis` VALUES ('2', '商城模板项目', 'web', 'img/mibear_bt2/sMall_1_x2.jpg', 'img/mibear_bt2/sMall_1_x1.jpg', '描述列表', 'Mall template, can be used for the mall, ready templates, of course, is a single page, but enough to use the current requirements, using rem as the basis of the web site, of course, there are still some small problems. But that\'s enough, at least for the time being', '功能列表', 'A mall template, home display. Simple data interaction, of course, is actually enough', '相关设计领域', 'Using a front-end technology, using JQ, JS to participate in the design, while adding a lot of third party plug-ins', '作者学习报告', 'Learned a lot of things, know, web site is not simple, of course, we will adhere to, because this is what we like, and I hope that better and better', '2017-11-11 16:54:15', 'img/mibear_bt2/sMall_1.jpg');

-- ----------------------------
-- Table structure for water_menu
-- ----------------------------
DROP TABLE IF EXISTS `water_menu`;
CREATE TABLE `water_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menus` varchar(255) NOT NULL,
  `values` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of water_menu
-- ----------------------------
INSERT INTO `water_menu` VALUES ('1', '全部', '全部');
INSERT INTO `water_menu` VALUES ('2', '系列', '系列');
INSERT INTO `water_menu` VALUES ('3', '插件', '插件');
INSERT INTO `water_menu` VALUES ('4', '布局', '布局');
INSERT INTO `water_menu` VALUES ('5', '商城', '商城');
INSERT INTO `water_menu` VALUES ('6', '装修', '装修');
INSERT INTO `water_menu` VALUES ('7', 'fashion', 'Fashion');
INSERT INTO `water_menu` VALUES ('8', 'video', 'Video');
INSERT INTO `water_menu` VALUES ('9', 'art', 'Art');
INSERT INTO `water_menu` VALUES ('10', 'add', 'Add');

-- ----------------------------
-- Table structure for water_webjishu
-- ----------------------------
DROP TABLE IF EXISTS `water_webjishu`;
CREATE TABLE `water_webjishu` (
  `id` int(255) NOT NULL AUTO_INCREMENT COMMENT '23',
  `name` varchar(255) NOT NULL,
  `urls` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of water_webjishu
-- ----------------------------
INSERT INTO `water_webjishu` VALUES ('1', 'boostrap', 'http://###');
INSERT INTO `water_webjishu` VALUES ('2', 'Aangularjs', 'http://###');
INSERT INTO `water_webjishu` VALUES ('3', 'vue.js', 'http://###');
INSERT INTO `water_webjishu` VALUES ('4', 'sea.js', 'http://###');
INSERT INTO `water_webjishu` VALUES ('5', 'Ajax', 'http://###');
INSERT INTO `water_webjishu` VALUES ('6', 'reart.js', 'http://###');
INSERT INTO `water_webjishu` VALUES ('7', 'jQurey', 'http://###');

-- ----------------------------
-- Table structure for water_youqing
-- ----------------------------
DROP TABLE IF EXISTS `water_youqing`;
CREATE TABLE `water_youqing` (
  `id` int(255) NOT NULL AUTO_INCREMENT COMMENT '23',
  `name` varchar(255) NOT NULL,
  `urls` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of water_youqing
-- ----------------------------
INSERT INTO `water_youqing` VALUES ('1', '1024小书柜', 'http://www.1024books.com/');
INSERT INTO `water_youqing` VALUES ('2', '熊一乐', 'http://mibear.cc/');
INSERT INTO `water_youqing` VALUES ('3', '小熊一乐', 'http://mibear.cc/');
INSERT INTO `water_youqing` VALUES ('4', '个人博客', 'http://###');
INSERT INTO `water_youqing` VALUES ('5', '小熊资讯', 'http://###');
INSERT INTO `water_youqing` VALUES ('6', '小熊阅读', 'http://###');

-- ----------------------------
-- Table structure for websites
-- ----------------------------
DROP TABLE IF EXISTS `websites`;
CREATE TABLE `websites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(20) NOT NULL DEFAULT '' COMMENT '站点名称',
  `url` varchar(255) NOT NULL DEFAULT '',
  `alexa` int(11) NOT NULL DEFAULT '0' COMMENT 'Alexa 排名',
  `country` char(10) NOT NULL DEFAULT '' COMMENT '国家',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of websites
-- ----------------------------
INSERT INTO `websites` VALUES ('1', 'Google', 'https://www.google.cm/', '1', 'USA');
INSERT INTO `websites` VALUES ('2', '淘宝', 'https://www.taobao.com/', '13', 'CN');
INSERT INTO `websites` VALUES ('3', '菜鸟教程', 'http://www.runoob.com/', '4689', 'CN');
INSERT INTO `websites` VALUES ('4', '微博', 'http://weibo.com/', '20', 'CN');
INSERT INTO `websites` VALUES ('5', 'Facebook', 'https://www.facebook.com/', '3', 'USA');
SET FOREIGN_KEY_CHECKS=1;
