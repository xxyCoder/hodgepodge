package router

import (
	"github.com/gin-gonic/gin"
)

type UserRouter struct{}

func (ur *UserRouter) InitUserRouter(r *gin.RouterGroup) {
	userRouter := r.Group("user")
	// 绑定中间件
	userRouter.use()
	// 绑定路由路径
	{
		userRouter.POST("registry", CheckArgsIsValid)
	}
}
