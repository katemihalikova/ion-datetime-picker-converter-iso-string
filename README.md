# ion-datetime-picker-converter-iso-string

[![GitHub version](https://img.shields.io/github/release/katemihalikova/ion-datetime-picker-converter-iso-string.svg?style=flat-square)](https://github.com/katemihalikova/ion-datetime-picker-converter-iso-string)
[![npm version](https://img.shields.io/npm/v/ion-datetime-picker-converter-iso-string.svg?style=flat-square)](https://npm.im/ion-datetime-picker-converter-iso-string)
[![Bower version](https://img.shields.io/bower/v/ion-datetime-picker-converter-iso-string.svg?style=flat-square)](https://libraries.io/bower/ion-datetime-picker-converter-iso-string)
[![Ionic version](https://img.shields.io/badge/ionic-v1.3-6ea2fb.svg?style=flat-square)](http://ionicframework.com/docs/v1/)
[![License](https://img.shields.io/npm/l/ion-datetime-picker-converter-iso-string.svg?style=flat-square)](https://github.com/katemihalikova/ion-datetime-picker-converter-iso-string/blob/develop/LICENSE)

> Model converter from/to ISO string - for [ion-datetime-picker](https://github.com/katemihalikova/ion-datetime-picker)

# Installation

1. Use bower or npm to install this module:

    ```bash
    bower install ion-datetime-picker-converter-iso-string --save
    ```

    ```bash
    npm install ion-datetime-picker ion-datetime-picker-converter-iso-string --save
    ```

2. Import the javascript file into your HTML file (or use [webpack](https://webpack.js.org/)):

    ```html
    <script src="lib/ion-datetime-picker-converter-iso-string/dist/index.js"></script>
    ```

# Usage

Use `iso-string` as a value of `converter` attribute when you define your picker.

```html
<ion-datetime-picker converter="iso-string" ...></ion-datetime-picker>
```

See [ion-datetime-picker README](https://github.com/katemihalikova/ion-datetime-picker/blob/develop/README.md) for more info.

# Supported model formats

Model value must be formatted according to ISO 8601 standard, using *calendar date* and/or *time*. If both date and time are present, they must be separated by `T` or a whitespace.

If the year is present, it's length must be at least 4 numbers, with an optional sign.

Time can be followed by time zone designator, but it is not used.

| Supported date formats         || Supported time formats                || Supported time zone formats |
| ---------------------------- | -- | --------------------------------- | -- | ------------------------- |
| `YYYY-MM-DD`                   || `HH:MM:SS.sss` (fraction is not used) || `+HH:MM`                    |
| `YYYY-MM`                      || `HH:MM:SS`                            || `-HH:MM`                    |
| `YYYY`                         || `HH:MM`                               || `+HHMM`                     |
| `MM-DD`                        || `HH`                                  || `-HHMM`                     |
| `DD` (only if time is present) ||                                       || `Z`                         |

