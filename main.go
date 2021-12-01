package main

import (
	"github.com/jwoodmansee/crm/application/controller"

	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.Use(static.Serve("/", static.LocalFile("./public", true)))

	api := router.Group("/api")
	{
		api.GET("/menu", controller.GetMenu)
	}

	router.Run(":8080")
}
