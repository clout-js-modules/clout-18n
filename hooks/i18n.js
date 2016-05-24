/*!
 * clout-i18n
 * Copyright(c) 2015 - 2016 Muhammad Dadu
 * MIT Licensed
 */
const
	debug = require('debug')('clout-i18n:hooks/i18n'),
	i18n = require("i18n"),
	fs = require('fs');

module.exports = {
	initialize: {
		event: 'start',
		priority: 'MIDDLEWARE',
		fn: function (next) {
			var conf = this.config.i18n || {};
			// directory
			!conf.directory && (conf.directory = 'locales');
			if (!fs.existsSync(conf.directory)) {
				conf.directory = path.join(this.rootDirectory, conf.directory);
			}
			if (!fs.existsSync(conf.directory)) {
				this.logger.warn('i18n directory not found');
			}
			// locales
			!conf.locales && (conf.locales = ['en']);
			debug('conf:', conf);
			i18n.configure(conf);
			debug('appended i18n to middlware');
			this.app.use(i18n.init);
			next();
		}
	}
};
