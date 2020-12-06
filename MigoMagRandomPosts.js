var randomPostsArray = new Array();
var l = 0;
var flag;
var numRandomPosts = 4;
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
  


for (n in randomPostsArray) {
  var p = randomPostsArray[n];
  var entry = json.feed.entry[p - 1];
  for (k = 0; k < entry.link.length; k++) {
    if (entry.link[k].rel == "alternate") {
	    
	    var RThumbnail = entry.media$thumbnail.url;
	    var fixThumbnail = RThumbnail.replace("s72-c", "s1600");
      
      var printElements = '<div class="box"><a class="thumbnail" href="'+ entry.link[k].href +'"><img loading="lazy" class="swiper-lazy lazy" data-src="'+ fixThumbnail +'" alt="'+ entry.title.$t +'"></a><div class="box-content"><h2 class="post-headding"><a class="link" href="'+ entry.link[k].href +'">'+ entry.title.$t +'</a></h2></div></div>';
		document.write('<article class="article-posts swiper-slide">'+ printElements +'</article>');
    }
  }
}

} 


function getLastPostsRandom(url,name,style) {
  document.write('<div class="featured '+ style +'">');
    document.write('<div class="cat-title">');
      document.write('<span class="cat-text">'+ name +'</span>');
    document.write('</div>');
    document.write('<div class="articles">');
      document.write('<script src="' + url + '/feeds/posts/default?alt=json-in-script&start-index=1&max-results=1000&callback=MigoMagRandomPosts"></script>');
    document.write('</div>');
  document.write('</div>');
}

function getLastPostsLabelRandom(url,label,style) {
  document.write('<div class="featured '+ style +'">');
    document.write('<div class="cat-title">');
      document.write('<a class="cat-text">'+ label +'</a>');
    document.write('</div>');
    document.write('<div class="articles">');
      document.write('<script src="' + url + '/feeds/posts/default/-/'+ label +'?alt=json-in-script&start-index=1&max-results=1000&callback=MigoMagRandomPosts"></script>');
    document.write('</div>');
  document.write('</div>');
}


function getRandomPostsLabelSlide(url,label,style,slideId){
	document.write('<div class="featured '+ style +'"><div class="cat-title"><a class="cat-text" href="'+ url +'/search/label/'+ label +'">'+ label +'</a></div><div class="swiper-container" id="'+ slideId +'"><div class="articles swiper-wrapper"><script src="'+ url +'/feeds/posts/default/-/'+ label +'?alt=json-in-script&start-index=1&max-results=1000&callback=MigoMagRandomPosts"></script></div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div></div>');
}
  
/* 
* example
* getLastPostsRandom('https://migomag-pro.mohamed24119.com','رياضة','className');
* getLastPostsLabelRandom('https://migomag-pro.mohamed24119.com','مشاركات عشوائية','className');
*/
