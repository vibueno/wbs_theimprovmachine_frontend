# The Improv Machine - Frontend - Technical Details

This project have been created using:

- [React.js](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

in the following environment:

- [Fedora](https://getfedora.org)
- [Atom](https://atom.io)

The following steps have been performed in order to set-it up:

1. Create React application

```bash
npx create-react-app wbs_theimprovmachine_frontend --template typescript
```

2. Add prettier config to package.json:

```json
"prettier": {
"trailingComma": "none",
"tabWidth": 2,
"semi": true,
"singleQuote": true,
"arrowParens": "avoid"
}

```

3. Install TypeScript compiler, if not already available:

```bash
npx tsc
```

4. Modify tsconfig.json to use es6

```json
"compilerOptions": {
  "target": "es6"
}
```

5. Create ESLint config using:

```bash
npx eslint --init
```

You should then have a file called .eslintrc.json in the root folder of your project. The content of this file can be copied to package.json inside the property _eslintConfig_

Since React already comes with ESLint set-up, make sure you mix both configurations to suit your needs.

6. Add following rule to _eslintConfig_:

```json
"rules": {
  "semi": [
    2,
    "always"
  ]
}
```

7. Now you should be able to start your project with this command:

```bash
npm start
```
