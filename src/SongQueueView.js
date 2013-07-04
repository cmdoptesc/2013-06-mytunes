var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.on('all', this.render);
  },

  render: function() {
    //this.$el.children.detach();

    return this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
