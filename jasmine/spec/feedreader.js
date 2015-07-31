$(function () {

  describe('RSS Feeds', function () {

    it('are defined', function () {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('url is not empty', function () {
      allFeeds.forEach(function (feed) {
        //check if it is defines first
        expect(feed.url).toBeDefined();
        //loop trough all items and check if the length of the property 'url' is not 0
        expect(feed.url.length).not.toBe(0);
      });
    });

    it('name is not empty', function () {
      allFeeds.forEach(function (feed) {
        //check if it is defines first
        expect(feed.name).toBeDefined();
        //loop trough all items and check if the length of the property 'url' is not 0
        expect(feed.name.length).not.toBe(0);
      });
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
      //empty current feed
      $('.feed').empty();
      //LoadFeed with index 0
      loadFeed(0, function () {
        //set the output of this feed to variable oldFeedInfo
        oldFeedInfo = $('.feed').html();
        //LoadFeed with index 1 (other then before)
        loadFeed(1, function () {
          //Set this html to variable newFeedInfo
          newFeedInfo = $('.feed').html();
          done();//Pas the beforeEach function as done
        });
      });
    });

    it('asynchronous loadFeed() is loaded', function () {

      //Expect that the NewfeedInfo(index0) is not equal to the OldfeedInfo(index1)
      expect(newFeedInfo).not.toBe(oldFeedInfo);
    });
  });
} ());