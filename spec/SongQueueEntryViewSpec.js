describe('SongQueueEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new Song({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url'
    });
    spyOn(Song.prototype, 'dequeue'); // Uncomment this when working on the second test
    //spyOn(Song.prototype, 'play');
    view = new SongQueueEntryView({model: model});
    view.render();
  });

  // Comment out the above spec when implementing the below
  it('dequeues clicked songs', function(){
    view.$el.children().first().click();
    expect(model.dequeue).toHaveBeenCalled();
  });
});