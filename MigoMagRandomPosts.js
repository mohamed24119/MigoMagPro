var randarray = new Array();
var l = 0;
var flag;
var numofpost = 1;
function randomposts(json) {
var total = parseInt(json.feed.openSearch$totalResults.$t, 10);
for (i = 0; i < numofpost; ) {
  flag = 0;
  randarray.length = numofpost;
  l = Math.floor(Math.random() * total);
  for (j in randarray) {
    if (l == randarray[j]) {
      flag = 1;
    }
  }
  if (flag == 0 && l != 0) {
    randarray[i++] = l;
  }
}
document.write("<ul>");
for (n in randarray) {
  var p = randarray[n];
  var entry = json.feed.entry[p - 1];
  for (k = 0; k < entry.link.length; k++) {
    if (entry.link[k].rel == "alternate") {
      document.write('<li>');
      document.write('<a href=" '+ entry.link[k].href +' ">');
      document.write('<img src=" ' + entry.media$thumbnail.url +' ">');
      document.write(entry.title.$t);
      document.write('</a>');
      document.write('</li>');
    }
  }
}
document.write("</ul>");
}


function gitRandomPosts(url,style,numofpost) {
document.write('<div class="featured ' + style + '">');
document.write('<div class="cat-title">');
document.write('<a>مشاركات عشوائية</a>');
document.write('</div>');
document.write('<div class="articles">');
document.write('<script src="' + url + '/feeds/posts/default/?alt=json-in-script&start-index=1&max-results=1000&callback=randomposts"/>');
document.write('</div>');
document.write('</div>');
}

/*


var randomPostsArray = new Array();
var l = 0;
var flag;
var numRandomPosts = 5;
function MigoMagRandomPosts(json) {
var totalRandomPosts = parseInt(json.feed.openSearch$totalResults.$t, 10);
for (i = 0; i < numRandomPosts; ) {
flag = 0;
randomPostsArray.length = numRandomPosts;
l = Math.floor(Math.random() * totalRandomPosts);
for (j in randomPostsArray) {
  if (l == randomPostsArray[j]) {
    flag = 1;
  }
}
if (flag == 0 && l != 0) {
  randomPostsArray[i++] = l;
}

}


document.write("<ul>");
for (n in randomPostsArray) {
var p = randomPostsArray[n];
var entry = json.feed.entry[p - 1];
for (k = 0; k < entry.link.length; k++) {
  if (entry.link[k].rel == "alternate") {
    document.write('<li>');
    document.write('<a href=" '+ entry.link[k].href +' ">');
    document.write('<img src=" ' + entry.media$thumbnail.url +' ">');
    document.write(entry.title.$t);
    document.write('</a>');
    document.write('</li>');
  }
}
}
document.write("</ul>");
}


function gitRandomPostsLabel(url, label, style) {
document.write('<div class="featured ' + style + '">');
document.write('<div class="cat-title">');
document.write('<a href="' + url + '/search/label/' + label + ' ">' + label + '</a>');
document.write('</div>');
document.write('<div class="articles">');
document.write('<script src="' + url + '/feeds/posts/default/-/' + label + '?alt=json-in-script&start-index=1&max-results=1000&callback=MigoMagRandomPosts"></script>');
document.write('</div>');
document.write('</div>');
}

function gitRandomPosts(url,style) {
document.write('<div class="featured ' + style + '">');
document.write('<div class="cat-title">');
document.write('<a>مشاركات عشوائية</a>);
document.write('</div>');
document.write('<div class="articles">');
document.write('<script src="' + url + '/feeds/posts/default?alt=json-in-script&start-index=1&max-results=1000&callback=MigoMagRandomPosts"/>');
document.write('</div>');
document.write('</div>');
}

/* 
* example
* gitRandomPostsLabel('https://migomag-pro.mohamed24119.com','رياضة','className');
* gitRandomPosts('https://migomag-pro.mohamed24119.com','className');
*/
