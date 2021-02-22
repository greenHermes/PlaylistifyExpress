const express = require('express')
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const ExpressError = require("../utils/ExpressError");
const Playlist = require("../models/playlist");
const { isLoggedIn } = require('../middleware.js');


router.get("/", isLoggedIn, (req, res) => {
  res.render("playlists/index");
});

router.get("/new", isLoggedIn, (req, res) => {

  res.render("playlists/new");

});

router.post(
  "/", isLoggedIn,
  catchAsync(async (req, res) => {
    const playlist = new Playlist(req.body);
    playlist.author = req.user._id;
    await playlist.save();
    res.redirect(`/playlists/${playlist._id}`);
  })
);

// playlist SHOW route
router.get(
  "/:id",
  catchAsync(async (req, res) => {
    const playlist = await Playlist.findById(req.params.id).populate('song').populate('author');
    if (!playlist) {
      req.flash('error', 'Playlist not found');
      return res.redirect('/browse');
    }
    res.render("playlists/show", { playlist });
  })
);

// if click heart icon update "Liked Songs playlist" by adding song to playlists' song array
router.patch(
  "/:id", isLoggedIn,
  catchAsync(async (req, res) => {
    console.log("hit patch route");
    // const song = await Song.findById(req.params.id)
    // const likedPlaylist = await Playlist.find({name: "Liked Songs"})

    res.render();
  })
);

router.delete(
  "/:id", isLoggedIn,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Playlist.findByIdAndDelete(id);
    res.redirect("/browse");
  })
);

module.exports = router;