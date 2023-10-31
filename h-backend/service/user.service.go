package service

type UserService struct{}

func (us *UserService) Registry(user UserModel) (userInfo UserModel, err error) {
	userInfo, err = DB.Create(&user)
}
