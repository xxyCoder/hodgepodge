package model

import (
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func init() {
	username := "root"
	password := "?"
	host := "127.0.0.1"
	port := 3306
	dbName := "gorm"
	timeout := "10s"

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?timeout=%s", username, password, host, port, dbName, timeout)
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("连接数据库失败,err = " + err.Error())
	}
	fmt.Println("连接数据库成功", db)
	DB = db
}

func CreateTable() {
	创建数据表
	DB.AutoMigrate(&User{})
}
