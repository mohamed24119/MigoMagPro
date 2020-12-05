var relatedTitles = new Array();
var relatedPostNum = 0;
var relatedUrls = new Array();
var relatedThumbnail = new Array();

function related_results_labels(json) {
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


function printRelatedLabels() {
	var randomPost = Math.floor((relatedTitles.length - 1) * Math.random());
	var i = 0;
	while (i < relatedTitles.length && i < 6) {
		var printElements = '<div class="box"><a class="thumbnail" href="'+ relatedUrls[randomPost] +'"><img loading="lazy" class="swiper-lazy lazy" data-src="'+ relatedThumbnail[randomPost] +'" alt="'+ relatedTitles[randomPost] +'"></a><div class="box-content"><h4 class="post-headding"><a class="link" href="'+ relatedUrls[randomPost] +'">'+ relatedTitles[randomPost] +'</a></h4></div></div>';
		document.write('<article class="article-posts swiper-slide">'+ printElements +'</article>');
		if (randomPost < relatedTitles.length - 1) {
			randomPost++;
		} else {
			randomPost = 0;
		}
		i++;
	}
}
