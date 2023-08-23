GOARCH=wasm GOOS=js go build -o eip712.wasm eip712.go

cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" .
cp "$(go env GOROOT)/misc/wasm/wasm_exec_node.js" .
