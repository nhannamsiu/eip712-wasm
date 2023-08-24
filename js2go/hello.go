package main

import (
	"fmt"
	"os/exec"
)

func main() {
	cmd := exec.Command("node", "hello.js")
	output, err := cmd.Output()
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Print(string(output))
}
