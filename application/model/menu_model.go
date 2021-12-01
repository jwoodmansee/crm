package model

type Menu struct {
	Name    string
	Path    string
	Icon    string
	Access  string
	Submenu struct {
		Name string
		Path string
	}
}
