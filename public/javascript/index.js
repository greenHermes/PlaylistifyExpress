


$(document).ready(function() {
  console.log("ready!");

  // toggle Hamgburger menu
  $("span#hamburger").click(function() {
    toggleHamburger();
  });

  function toggleHamburger() {
    var menu = document.getElementById("navbarText");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }

  $("#navbarText").on("click", function() {
    $("a.nav-link").click(function() {
      $("#navbarText").css("display", "none");
    });
  });

  function goBack() {
    window.history.back();
  }

  function goForward() {
    window.history.forward();
  }

  // heart/like button toggle
  function toggleLiked() {
    var listLike = document.getElementsByClassName(".listLike");
    console.log("clicked");
    if (this.classList.contains("far")) {
      this.classList.remove("far");
      this.classList.add("fas");
      this.classList.add("mustShow");
      this.style.color = "green";
      this.style.padding = "0";
      this.style.display = "flex";
      this.style.justifyContent = "center";
      listLike.style.visibility = "visible !important";

      var isLiked = true;
    } else {
      this.classList.remove("fas");
      this.classList.add("far");
      this.classList.remove("mustShow");
      this.style.color = "";
      var isLiked = false;
      this.style.padding = "0";
      this.style.display = "flex";
      this.style.justifyContent = "center";

    }

    return isLiked;
  }

  $("i.like").on("click", toggleLiked);

  function hoverShowOptions(song) {
    var optionsIcon = song.getElementsByClassName("options")[0];
    optionsIcon.style.display = "block";
  }

  function hoverHideOptions(song) {
    var optionsIcon = song.getElementsByClassName("options")[0];
    optionsIcon.style.display = "none";
  }


  function hoverShowPlay(song) {
    var playButton = song.getElementsByClassName("listPlay")[0];
    var number = song.getElementsByClassName("listIndex")[0];
    playButton.style.visibility = "visible";
    playButton.style.display = "block"
    number.style.visibility = "hidden"
    number.style.display = "none"
    playButton.style.position = "static"
  }

  function hoverHidePlay(song) {
    var number = song.getElementsByClassName("listIndex")[0];
    var playButton = song.getElementsByClassName("listPlay")[0];
    number.style.visibility = "visible"
    number.style.display = "block"
    playButton.style.visibility = "hidden";
    playButton.style.display = "none";
  }


  
  function hoverShowLike(song) {
    var heart = song.getElementsByClassName("listLike")[0];
    heart.style.visibility = "visible";
  }

  function hoverHideLike(song) {
    var heartDiv = song.getElementsByClassName("listLike")[0];
    heartDiv.style.visibility = "hidden";
  }

  let songs = document.querySelectorAll(".songRow");

  songs.forEach(song => {
    song.addEventListener("mouseover", e => {
      hoverShowLike(song);
      hoverShowOptions(song);
    });
  });

  songs.forEach(song => {
    song.addEventListener("mouseout", e => {
      hoverHideLike(song);
      hoverHideOptions(song);
    });
  });

  songs.forEach(song => {
    song.addEventListener("mouseover", e => {
      hoverShowPlay(song);
    });
  });

  songs.forEach(song => {
    song.addEventListener("mouseout", e => {
      hoverHidePlay(song);
    });
  });

  // add song to a playlist
  var playlistChoices = document.querySelectorAll("li p.playlistChoice");

  playlistChoices.forEach(choice => {
    choice.addEventListener("click", e => {
      console.log("clicked");
    });
  });


  searchBar = document.getElementById("searchBar");

  $("#searchBar").submit(function(e) {
    e.preventDefault();
  });

  searchBar.addEventListener("keyup", e => {
    console.log(e.target.value);
  });
});



$('.listArtistOverflow p').each(function() {
  $(this)
    .data('width', $(this).css('display','inline-block').width()+10)
    .css('display','');
});

$('.listArtistOverflow').scroll();

