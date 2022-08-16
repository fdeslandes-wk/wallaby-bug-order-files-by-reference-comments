# wallaby-bug-order-files-by-reference-comments
Small project to reproduce a bug with orderFilesByReferenceComments not working as intented.

1. Run npm install
1. Run wallaby
1. ~~You will have a `Super expression must either be null or a function, not undefined` error because the files are in the wrong order.~~
1. You will have a `expect is not defined` error. When removing the orderFilesByReferenceComments, you don't have this error, but the expected wrong order one.

The error was reproduced with wallaby in VSCode 2017-03-01, version  v1.0.390
