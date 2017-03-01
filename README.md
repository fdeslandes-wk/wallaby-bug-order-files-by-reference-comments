# wallaby-bug-order-files-by-reference-comments
Small project to reproduce a bug with orderFilesByReferenceComments not working as intented.

1. Run npm install
1. Run wallaby
1. You will have a `Super expression must either be null or a function, not undefined` error because the files are in the wrong order.

The error was reproduced with wallaby in VSCode 2017-03-01
