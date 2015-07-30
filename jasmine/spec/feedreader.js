$(function () {

  describe('RSS Feeds', function () {

    it('are defined', function () {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('url is not empty', function () {
      allFeeds.forEach(function (url) {
        //check if it is defines first
        expect(url).toBeDefined();
        console.log(url);
        //loop trough all items and check if the length of the property 'url' is not 0
        expect(url.length).not.toBe(0);
      });
    });

    it('name is not empty', function () {
      for (var i = 0; i < allFeeds.length; i++) {
        //check if it is defines first
        expect(allFeeds[i].name).toBeDefined();
        //loop trough all items and check if the length of the property 'url' is not 0
        expect(allFeeds[i].name.length).toBeGreaterThan(0);
      }
    });

  });

  describe('The Menu', function () {

    it('Showing/hiding menu element', function () {
      //check if the body has a 'menu-hidden' class
      expect($('body').hasClass("menu-hidden")).toBe(true);

    });

    it('does menu display and hide', function () {
      //Click the menu icon and check if there is NO 'menu-hidden' class
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass("menu-hidden")).toBe(false);
      //Click the menu icon and check if there is an 'menu-hidden' class
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass("menu-hidden")).toBe(true);

    });
  });


  describe('Initial Entries', function () {
    beforeEach(function (done) {
      //Empty the feed and remove all children before running
      $('.feed').empty();
      loadFeed(0, done);
    });

    it('loadFeed function is called an completes its work', function () {
      //After the before is run check if the feed length isn't 0
      expect($('.feed').length).not.toBe(0);

    });
  });

  describe('New Feed Selection', function () {

    var oldFeedInfo,
      newFeedInfo;

    beforeEach(function (done) {
      $('.feed').empty();

      loadFeed(0, function () {
        oldFeedInfo = $('.feed').html();
        done();
      });

      loadFeed(1, function () {
        newFeedInfo = $('.feed').html();
        done();
      });
    });

    it('asynchronous loadFeed() is loaded', function () {

      //Expect that the NewfeedInfo is not equal to the OldfeedInfo
      expect(newFeedInfo).not.toBe(oldFeedInfo);
    });
  });
} ());