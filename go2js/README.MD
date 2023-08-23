Compile go logic into wasm and import to nodejs or browser

### Compile go code
* Note that "syscall/js" is excluded from standard go build so you may see some IDE errs and warns
* All exported methods must use go routine to map to callback function in ts. Calling it in main routine will lead to deadlock error.
```
GOARCH=wasm GOOS=js go build -o hello.wasm hello.go
```

### Copy up-to-date go wasm execution script
```
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" .
```

### Execute js code
* Depending on your golang logic and code size, you need to wait certain time before running callback method
```
go.run(instance)
await sleep(1)
globalThis["Print"](1,2,3)
```
```
node eip712.js
```
