var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },

  ended: function(){
    this.trigger('ended');
  },

  dequeue: function(){
    this.trigger('dequeued', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  }
});
