#   Budgerigar 🐤

An utility for generate a basic `.eslintrc` file with all the dependencies.

To generate a file, just run budgerigar. You can do this via NPX:
```
npx budgerigar
```
or by adding a script in your package.json
```
dependencies: {
    "buderigar": "..."
    ...
}
scripts: {
    "budgerigar": "npm run budgerigar"
}
```
This will generate the file on the current directory.

At the moment, *budgerigar* allows you to use a typescript template, by adding the `--typescript` flag. Note that this will force you to install the default parser.

In order to properly use all the dependencies and features from eslint and prettier, **you must have the VS Code eslint extension**. Then, install and run

