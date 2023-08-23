package main

import (
	"fmt"
	"syscall/js"
)

func main() {
	fmt.Println("My Web Assembly")
	js.Global().Set("Print", Print())
	select {}
}

func Print() js.Func {
	return js.FuncOf(func(this js.Value, apiArgs []js.Value) any {
		go func() {
			fmt.Println("Hello from Golang", apiArgs)
		}()
		return nil
	})
}
