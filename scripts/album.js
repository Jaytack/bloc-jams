var createSongRow = function(songNumber, songName, songLength) {
    var template =
        '<tr class="album-view-song-item">'
    +   '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
    +   '  <td class="song-item-title">' + songName + '</td>'
    +   '  <td class="song-item-duraiton">' + songLength + '</td>'
    +   '</tr>'
    ;

    var $row = $(template);

    var clickHandler = function() {
        // clickHandler logic
    };


        var onHover = function(event) {
            // Placeholder for function logic
        };
        var offHover = function(event) {
            // Placeholder for function logic
        };

    // #1
     $row.find('.song-item-number').click(clickHandler);
     // #2
     $row.hover(onHover, offHover);
     // #3
     return $row;
};

var setCurrentAlbum = function(album) {
  var $albumTitle = $('.album-view-title');
  var $albumArtist = $('.album-view-artist');
  var $albumReleaseInfo = $('.album-view-release-info');
  var $albumImage = $('.album-cover-art');
  var $albumSongList = $('.album-view-song-list');

  $albumTitle.text(album.title);
  $albumArtist.text(album.artist);
  $albumReleaseInfo.text(album.year + ' ' + album.label);
  $albumImage.attr('src', album.albumArtUrl);

  $albumSongList.empty();

    for (var i = 0; i < album.songs.length; i++) {
      var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
      $albumSongList.append($newRow);
    }
};

// checkpoint - Izumi's own update-1 : Change the Song Number to the Pause Button


// Album button templates
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

//Store state of playing songs
var currentlyPlayingSong = null;

// checkpoint - Izumi's own update-1 :Change the Song Number to the Pause Button
var numToPlayIcon = function(event) {
    if (event.target.parentElement.className === 'album-view-song-item') {
        event.target.parentElement.querySelector('.song-item-number').innerHTML = pauseButtonTemplate;
        // checkpoint - Izumi's own update-2 :getSongItem() Method
        var songItem = getSongItem(event.target);

        if (songItem.getAttribute('data-song-number') !== currentlyPlayingSong) {
            songItem.innerHTML = playButtonTemplate;
        }
    }
};


$(document).ready(function() {
    setCurrentAlbum(albumPicasso);


});
