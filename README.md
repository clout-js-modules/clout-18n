clout-i18n
==================
## Install
In the directory of your clout-js application, do the following;

1) Install this package
```bash
npm install clout-i18n
```

2) Add this module to ```package.json``` or ```clout.json```
```JSON
{
    ...
    "modules": ["clout-i18n"]
    ...
}
```

## Configure
Create a new file ```i18n.default.js``` or ```i18n.<YOUR_ENV>.js``` in ```/conf``` directory with the following JavaScript.
```JavaScript
module.exports = {
    i18n: {
        locales:['en'],
        directory: '/locales'
    }
};
```

## Usage
This module utilizes [i18n-node](https://github.com/mashpie/i18n-node) to provide the power of internationalization. Please read the [documentation](https://www.npmjs.com/package/i18n) on how to leverage the library.

The library is injected into the scope of APIs and Controllers.
