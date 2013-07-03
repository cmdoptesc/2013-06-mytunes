var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length === 1) {
        this.playFirst();
      }
    });
    this.on('ended', function() {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    });
    this.on('dequeued', function(song){
      this.remove(song);
    });
  },

  playFirst: function(){
    this.at(0).play();
  }
});
