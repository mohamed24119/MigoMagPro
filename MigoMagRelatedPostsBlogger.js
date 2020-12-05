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




/*
function contains(a, e) {
   for(var j = 0; j < a.length; j++) if (a[j]==e) return true;
return false;
}*/


function printRelatedLabels() {
  var randomPost = Math.floor((relatedTitles.length - 1) * Math.random());
  var i = 0;
  document.write('<ul>');
  while (i < relatedTitles.length && i < 6) {
    document.write('<li>');
    document.write('<a href="' + relatedUrls[randomPost] + '">');
    document.write('<img src="' + relatedThumbnail[randomPost] + '">');
    document.write(relatedTitles[randomPost]);
    document.write('</a>');
    document.write('<li>');
    if (randomPost < relatedTitles.length - 1) {
      randomPost++;
    } else {
      randomPost = 0;
    }
    i++;
  }
  document.write('</ul>');
}
