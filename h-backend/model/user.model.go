package model

type UserModel struct {
	ID        uint
	Name      string `gorm:"not null"`
	Password  string `gorm:"not null"`
	PhoneNume string `gorm:"unique"`
}

func (table *User) TableName() string {
	return "user"
}
