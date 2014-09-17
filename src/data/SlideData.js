define(function(require, exports, module) {
    var SlideData = {
        picasaUrl: 'https://picasaweb.google.com/data/feed/api/all',
        queryParams: '?kind=photo&q=puppy&max-results=5&imgmax=720&alt=json',
        defaultImage: 'https://lh4.googleusercontent.com/-HbYp2q1BZfQ/U3LXxmWoy7I/AAAAAAAAAJk/VqI5bGooDaA/s1178-no/1.jpg'
    };
 
    SlideData.getUrl = function() {
        return SlideData.picasaUrl + SlideData.queryParams;
    };
 
    SlideData.parse = function(data) {
        var urls = [];
        data = JSON.parse(data);
        var entries = data.feed.entry;
        for (var i = 0; i < entries.length; i++) {
            var media = entries[i].media$group;
            urls.push(media.media$content[0].url);
        }
        return urls;
    };
 
    module.exports = SlideData;
});