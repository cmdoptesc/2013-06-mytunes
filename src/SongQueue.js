var SongQueue = Songs.extend({

  initialize: function(){
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

  enqueue: function() {
    console.log('enqueued');
    if(this.length === 1) {
      this.playFirst();
    }
    this.add(song);
  },

  playFirst: function(){
    this.at(0).play();
  }
});
