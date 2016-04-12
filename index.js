/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	css-extend-loader is based on raw-loader(Author Tobias Koppers @sokra)
*/

var loaderUtils = require("loader-utils");

module.exports = function(content ) {
	
	var query = loaderUtils.parseQuery(this.query);
	this.cacheable && this.cacheable();
	
	this.value = content;
	
	var newContent = content;
	if( query.rootPath ) {
			
		newContent = content.replace(
			/url\(\s*?['"]?([^\s-]*)["']?\s*?\)/g,
			"url(" + query.rootPath +"$1 )"
		);
	}
	
	return "module.exports = " + JSON.stringify( newContent );
}
module.exports.seperable = true;
