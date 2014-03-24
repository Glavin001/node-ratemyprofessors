// Dependencies
var request = require('request');
var cheerio = require('cheerio');
var Q = require('q');

module.exports = function() {
    
    function rmp() {

    };

    rmp.prototype.search = function() {
        var deferred = Q.defer();
        var url = "http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=10&json.wrf=noCb&q=scobey&limit=10&siteName=rmp&fq=content_type_s%3ATEACHER";
        request(url, function(error, response, body) {
            if (error) {
                deferred.reject(error);
            } else {
                deferred.resolve(body);
            }
        });
        return deferred.promise;
    };

    return new rmp();
}();
