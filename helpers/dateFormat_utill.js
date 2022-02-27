const moment = require("moment");

//formatDate method takes date as input
// format parameter takes the format and return the result in desire format
//this method is used in show handlebars
module.exports = {
  formatDate: function (date, format) {
    return moment(date).utc().format(format);
  },
};
