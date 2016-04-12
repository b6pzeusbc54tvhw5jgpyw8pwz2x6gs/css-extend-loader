# css-extend-loader for webpack

## Special thanks
css-extend-loader is based on [raw-loader@0.5.1](https://github.com/webpack/raw-loader) by @sokra

## Usage

in webpack.config.js
``` javascript

var rootPath = encodeURIComponent('https://127.0.0.1/img/');
module.exports = {

	/*
	......
	......
	*/
	
	module: {
		loaders: [
			test: /\.css$/,
			loader: 'style!css-extend?rootPath='+rootPath
		]
	}
};
```

See `webpack` documentation.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
