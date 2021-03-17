var PostsTitle = [],
    PostsCount = 0,
    PostsUrl = [],
    PostsThumbnail = [],
    PostsLabelFirst = [],
    PostPublished = [];

function MigoMagPosts(t) {
    for(var s = 0; s < t.feed.entry.length; s++) {
        var a = t.feed.entry[s];
        PostsTitle[PostsCount] = a.title.$t,
          PostsThumbnail[PostsCount] = a.media$thumbnail.url,
          PostsLabelFirst[PostsCount] = a.category[0].term,
          PostPublished[PostsCount] = a.published.$t.substring(0, 10);
        for(var o = 0; o < a.link.length; o++)
            if("alternate" == a.link[o].rel) {
                PostsUrl[PostsCount] = a.link[o].href,PostsCount++;
                break
            }
    }
}


function printMigoMagPosts(t, s) {
  if(null == t || "" == t) var t = 4;
  for(var a = o = 0; o < PostsTitle.length && t > o;) {
    var n = PostsThumbnail[a].replace("s72-c", "s1600"),
        e = '<div class="box"><time class="meta-label label-' + PostsLabelFirst[a] + '" datetime="' + PostPublished[a] + '"><span class="meta-icon fas fa-calendar-alt"></span>' + PostPublished[a] + '</time><a class="thumbnail" href="' + PostsUrl[a] + '"><img width="64" hegiht="64" loading="lazy" class="swiper-lazy lazy" src="' + n + '" alt="' + PostsTitle[a] + '"></a><div class="box-content"><h2 class="post-headding"><a class="link" href="' + randomPostsUrl[a] + '">' + PostsTitle[a] + "</a></h2></div></div>",
        r = document.createElement("li"),
        l = document.createAttribute("class"),
        d = (r.innerHTML = e, document.getElementById(s));
    l.value = "article-posts swiper-slide article-label-" + PostsLabelFirst[a],
      r.setAttributeNode(l),
      d.appendChild(r),
      a < PostsTitle.length - 1 ? a++ : a = 1,
      o++
  }
}

