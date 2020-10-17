var relatedTitles = new Array();
var relatedPostNum = 0;
var relatedUrls = new Array();
var relatedThumbnail = new Array();

function RelatedPostslabel(json) {
 for (var i = 0; i < json.feed.entry.length; i++) {
    var entry = json.feed.entry[i];
    relatedTitles[relatedPostNum] = entry.title.$t;
    relatedThumbnail[relatedPostNum] = entry.media$thumbnail.url;

    for (var k = 0; k < entry.link.length; k++) {
       if (entry.link[k].rel == 'alternate') {
          relatedUrls[relatedPostNum] = entry.link[k].href;
          relatedPostNum++;
          break;
       }
    }
 }
}


function PrintRelatedPosts() {
var randomPost = Math.floor((relatedTitles.length - 1) * Math.random());
var i = 0;
while (i < relatedTitles.length && i < 6) {
document.write('<article class="article-posts start">');
  document.write('<div class="box">');
  if (showPostThumbnail == true) {
      document.write('<a class="thumbnail" href="' + relatedUrls[randomPost] + '">');
      document.write('<img class="lozad" data-src="' + relatedThumbnail[randomPost] + '" alt="' + relatedTitles[randomPost] + '">');
      document.write('</a>');
  }
  document.write('<div class="box-content">');
  document.write('<header class="article-header">');
  document.write('<h2 class="post-headding">');
  document.write('<a class="link" href="' + relatedUrls + '">');
  document.write(relatedTitles[randomPost]);
  document.write('</a>');
  document.write('</h2>');
  document.write('</header>');
  document.write('</div>');
  document.write('</div>');
  document.write('</article>');

  if (randomPost < relatedTitles.length - 1) {
    randomPost++;
  } else {
    randomPost = 0;
  }
  i++;
}

}
