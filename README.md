# hex-name
> Check if a package name is available on Hex.pm

[![Travis](https://img.shields.io/travis/ecrmnn/hex-name.svg?style=flat-square)](https://travis-ci.org/ecrmnn/hex-name.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/hex-name.svg?style=flat-square)](http://badge.fury.io/js/hex-name)
[![npm downloads](https://img.shields.io/npm/dm/hex-name.svg?style=flat-square)](http://badge.fury.io/js/hex-name)
[![npm license](https://img.shields.io/npm/l/hex-name.svg?style=flat-square)](http://badge.fury.io/js/hex-name)

### Installation
```bash
npm install hex-name --save
```

### Usage
```javascript
hexName('cowboy')
  .then(available => {
    console.log(available);
    //=> false
  });
```

```javascript
hexName('some_random_package_name')
  .then(available => {
    console.log(available);
    //=> true
  });
```

### Related
- [hex-name-cli](https://github.com/ecrmnn/hex-name-cli) - CLI for this module

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)