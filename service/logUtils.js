/**
 * Created by raid on 2016/11/14.
 */

/**
 * 日志工具类
 *
 * logger.setLevel('ERROR');
 *
 * logger.trace('Entering cheese testing');
 * logger.debug('Got cheese.');
 * logger.info('Cheese is Gouda.');
 * logger.warn('Cheese is quite smelly.');
 * logger.error('Cheese is too ripe!');
 * logger.fatal('Cheese was breeding ground for listeria.');
 */

var log4js = require('log4js');

/**
 * 日志文件配置
 */
log4js.configure({
    appenders: [
        {type: 'console'},
        {type: 'file', filename: 'logs/chat.log', category: 'chat'}
    ]
});
var logger = log4js.getLogger('chat');

module.exports = logger;
