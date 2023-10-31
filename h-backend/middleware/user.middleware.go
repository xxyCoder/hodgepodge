package middleware

import (
	"github.com/gin-gonic/gin"
)

func CheckArgsIsValid(c *gin.Context) gin.HandlerFunc {
	name := c.PostForm("name")
	password := c.PostForm("password")
	confirmPassword := c.DefaultPostForm("confirmPassword", password)

	if name == nil || password == nil {
		c.JSON(200, UserResponse{code: 41, message: "参数存空值"})
		c.Abort()
	}

	if password != confirmPassword {
		c.JSON(200, UserResponse{code: 42, message: "两次密码不一致"})
		c.Abort()
	}

	c.Next()
}

func checkPhoneIsExists(c *gin.Context) gin.HandlerFunc {

}

func crpytPassword(c *gin.Context) gin.HandlerFunc {

}
