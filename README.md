# task-autoprefixer
> Add vendor prefixes to CSS rules with autoprefixer.

## The "autoprefixer" task

### Usage Examples

```js
var autoprefixer = new (require('task-autoprefixer'))
autoprefixer.run(inputs, options, logger)
```

### Options

#### options.browsers
Type: `array`
Defaults: '['> 1%', 'last 2 versions']'

You can specify browsers actual for your project:

```js
{
  browsers: ['last 2 version', 'ie 8', 'ie 9']
}
```

[Read more](https://github.com/ai/autoprefixer#browsers).

#### options.cascade
Type: `boolean`
Default: `'false'`

Pass `true` to enable ‘cascade’ indentation. Read more [here](https://github.com/ai/autoprefixer#visual-cascade).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Yuanyan Cao. Licensed under the MIT license.
