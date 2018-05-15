var logging = require("./logging.sjs");
var log = logging.getLog("application");
//var directoryAppender = require("./directory_appender.sjs").createMarkLogicDirectoryAppender(logging.LEVELS.ALL, "logs");
//log.addAppender(directoryAppender);
var emailAppender = require("./email_appender.sjs").createEmailAppender(logging.LEVELS.ALL, {"name": "Matt Smith", "address": "matt.smith@marklogic.com"});
log.addAppender(emailAppender);
//var fileAppender = require("./file_appender.sjs").createFileAppender(logging.LEVELS.ALL);
//log.addAppender(fileAppender);
//var errorlogAppender = require("./errorlog_appender.sjs").createMarkLogicErrorLogAppender(logging.LEVELS.ALL);
//log.addAppender(errorlogAppender);
module.exports = log;