var initDemo = function () {
    var header = document.getElementById("header");
    var skin = location.href.split('skin=')[1];

    if (!skin) {
        skin = 'Snapgram';
    }

    if (skin.indexOf('#') !== -1) {
        skin = skin.split('#')[0];
    }

    var skins = {
        'Snapgram': {
            'avatars': true,
            'list': false,
            'autoFullScreen': false,
            'cubeEffect': true
        },

        'VemDeZAP': {
            'avatars': false,
            'list': true,
            'autoFullScreen': false,
            'cubeEffect': false
        },

        'FaceSnap': {
            'avatars': true,
            'list': false,
            'autoFullScreen': true,
            'cubeEffect': false
        },

        'Snapssenger': {
            'avatars': false,
            'list': false,
            'autoFullScreen': false,
            'cubeEffect': false
        }
    };

    var timeIndex = 0;
    var shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10];
    var timestamp = function () {
        var now = new Date();
        var shift = shifts[timeIndex++] || 0;
        var date = new Date(now - shift * 1000);

        return date.getTime() / 1000;
    };

    var stories = new Zuck('stories', {
        backNative: true,
        previousTap: true,
        autoFullScreen: skins[skin]['autoFullScreen'],
        skin: skin,
        avatars: skins[skin]['avatars'],
        list: skins[skin]['list'],
        cubeEffect: skins[skin]['cubeEffect'],
        localStorage: true,
        stories: [
            Zuck.buildTimelineItem(
              "User-1", 
              "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg",
              "User-1",
              "",
              timestamp(),
              [
                ["user-1", "photo", 3, "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg", "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg", '', false, false, timestamp()],
              ]
            ),
            Zuck.buildTimelineItem(
              "User-2",
              "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg",
              "User-2",
              "",
              timestamp(),
              [
                ["user-1", "video", 0, "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg", "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg", '', false, false, timestamp()],
              ]
            ),
            Zuck.buildTimelineItem(
              "User-3",
              "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg",
              "User-3",
              "",
              timestamp(),
              [
                ["user-1", "photo", 5, "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg", "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg", '', false, false, timestamp()],
              ]
            ),
            Zuck.buildTimelineItem(
              "User-4",
              "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg",
              "User-4",
              "",
              timestamp(),
              [
                ["user-1", "photo", 5, "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg", "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg", '', false, false, timestamp()]
              ]
            ),
            Zuck.buildTimelineItem(
              "User-5",
              "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg",
              "User-5",
              "",
              timestamp(),
              [
                ["user-5", "photo", 10, "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg", "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg", '', false, false, timestamp()]
              ]
            ),
            Zuck.buildTimelineItem(
              "Raif",
              "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg",
              "Raif Yüksel",
              "",
              timestamp(),
              [
                ["raif", "photo", 10, "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg", "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg", '', false, false, timestamp()]
              ]
            ),
            Zuck.buildTimelineItem(
              "User-6",
              "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg",
              "User-6",
              "",
              timestamp(),
              [
                ["user", "photo", 10, "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg", "https://www.haftalikgunluk.com/wp-content/uploads/2022/01/Gorsel-Sanatlar.jpg", '', false, false, timestamp()],
              ]
            ),
        ]
    });

    var el = document.querySelectorAll('#skin option');
    var total = el.length;
    for (var i = 0; i < total; i++) {
        var what = (skin == el[i].value) ? true : false;

        if (what) {
            el[i].setAttribute('selected', what);

            header.innerHTML = skin;
            header.className = skin;
        } else {
            el[i].removeAttribute('selected');
        }
    }

    document.body.style.display = 'block';
};

initDemo();

// DoubleClick Beğen
var postImages = $(".img-content");
postImages.on("touchstart", tapHandler);
var tapedTwice = false;
function tapHandler(event) {
    if (!tapedTwice) {
        tapedTwice = true;
        setTimeout(function () { tapedTwice = false; }, 300);
        return false;
    }
    event.preventDefault();
    setTimeout(function () {
        $(".fa-heart").removeClass("d-flex");
        $(".fa-heart").addClass("d-none");
    }, 500);
    $(this).parent().find(".fa-heart").addClass("d-flex");
    $(this).parent().find(".fa-heart").removeClass("d-none");
    $(this).parent().parent().find(".heart.icon>svg").html('<path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>');
    $(this).parent().parent().find(".heart.icon>svg").css("fill","rgb(237, 73, 86)");
    $(this).parent().parent().find(".heart.icon>svg").removeClass("liked");
}
// Beğen
$(document).ready(function(){
  $(".heart.icon>svg").click(function(){
    if($(this).hasClass("liked")){
      $(this).html('<path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>');
      $(this).css("fill","rgb(237, 73, 86)");
      $(this).removeClass("liked");

      var counter = $(".profile-details.flow p output").text();
      Number(counter)
      counter += 1;
      $(".profile-details.flow p output").html(counter);

    }else{
      $(this).html('<path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>');
      $(this).css("fill","#fff");
      $(this).addClass("liked");
    }
  });
});
// Kaydet
$(document).ready(function(){
  $(".right .save").click(function(){
    if($(this).hasClass("liked")){
      $(this).html('<svg aria-label="Kaldır" class="_ab6-" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path></svg>');
      $(this).removeClass("liked");
    }else{
      $(this).html('<svg aria-label="Save" class="_8-yf5" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>');
      $(this).addClass("liked");
    }
  });
});
// Message Modal
var messageModal = document.getElementById('myModal');
var messageBtn = document.getElementById("messageBtn");
var messageClose = document.getElementsByClassName("message-close")[0];
messageBtn.onclick = function() {
  messageModal.style.display = "block";
}
messageClose.onclick = function() {
  messageModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == messageModal) {
    messageModal.style.display = "none";
  }
}
// video-scroll
window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);
function videoScroll() {
  if ( document.querySelectorAll('video[autoplay]').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('video[autoplay]');
    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;
      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.2) ) && videoClientRect >= ( 0 - ( videoHeight*.2 ) ) ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }

    }
  }
}
// video ses kapat-aç
function toggleMute() {
  var button=document.getElementById("MuteButton")
  var video=document.getElementById("bgVideo")
  if(video.muted){
    video.muted = false;
    $(button).html('<svg aria-label="Ses oynatılıyor" class="_ab6-" color="#ffffff" fill="#ffffff" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M16.636 7.028a1.5 1.5 0 1 0-2.395 1.807 5.365 5.365 0 0 1 1.103 3.17 5.378 5.378 0 0 1-1.105 3.176 1.5 1.5 0 1 0 2.395 1.806 8.396 8.396 0 0 0 1.71-4.981 8.39 8.39 0 0 0-1.708-4.978Zm3.73-2.332A1.5 1.5 0 1 0 18.04 6.59 8.823 8.823 0 0 1 20 12.007a8.798 8.798 0 0 1-1.96 5.415 1.5 1.5 0 0 0 2.326 1.894 11.672 11.672 0 0 0 2.635-7.31 11.682 11.682 0 0 0-2.635-7.31Zm-8.963-3.613a1.001 1.001 0 0 0-1.082.187L5.265 6H2a1 1 0 0 0-1 1v10.003a1 1 0 0 0 1 1h3.265l5.01 4.682.02.021a1 1 0 0 0 1.704-.814L12.005 2a1 1 0 0 0-.602-.917Z"></path></svg>');
  } else {
    video.muted = true;
    $(button).html('<svg aria-label="Ses kapatıldı." class="_ab6-" color="#ffffff" fill="#ffffff" height="12" role="img" viewBox="0 0 48 48" width="12"><path clip-rule="evenodd" d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z" fill-rule="evenodd"></path></svg>')
  }
  button.classList.toggle('muted');
}