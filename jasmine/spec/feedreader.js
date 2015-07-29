/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
  /* This is our first test suite - a test suite just contains
  * a related set of tests. This suite is all about the RSS
  * feeds definitions, the allFeeds variable in our application.
  */
  describe('RSS Feeds', function () {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function () {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });
    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('url is not empty', function () {
      for (var i = 0; i < allFeeds.length; i++) {
        //check if it is defines first 
        expect(allFeeds[i].url).toBeDefined();
        //loop trough all items and check if the length of the property 'url' is not 0
        expect(allFeeds[i].url.length).not.toBe(0);

      }
    });
  
    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('name is not empty', function () {
      for (var i = 0; i < allFeeds.length; i++) {
        //check if it is defines first 
        expect(allFeeds[i].name).toBeDefined();
        //loop trough all items and check if the length of the property 'url' is not 0
        expect(allFeeds[i].name.length).not.toBe(0);
      }
    });

  });
  /* TODO: Write a new test suite named "The menu" */
  describe('The Menu', function () {
    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it('Showing/hiding menu element', function () {
      //check if the body has a 'menu-hidden' class
      expect($('body').hasClass("menu-hidden")).toBe(true);

    });
    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('does menu display and hide', function () {
      //Click the menu icon and check if there is NO 'menu-hidden' class
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass("menu-hidden")).toBe(false);
      //Click the menu icon and check if there is an 'menu-hidden' class
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass("menu-hidden")).toBe(true);

    });
  });

  /* TODO: Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function () {
    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test wil require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    beforeEach(function () {
      //Empty the feed and remove all children before running
      $('.feed').empty();
      loadFeed(0);

    });

    it('loadFeed function is called an completes its work', function () {
      //After the before is run check if the feed length isn't 0
      expect($('.feed').length).not.toBe(0);

    });
  });

  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function () {
    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    it('asynchronous loadFeed() is loaded', function () {
      beforeEach(function () {
        $('.feed').empty();

        loadFeed(0, function () {
          var oldFeedInfo = $('.feed').html();
          console.log(oldFeedInfo);
        });
        
        loadFeed(1, function () {
          var newFeedInfo = $('.feed').html();
          console.log(newFeedInfo);
        });
      });
      //expect that there is a new Feed and that the Old stuff isn't the same orso?! HElP!
      expect(newFeedInfo).not.toBeEqual(oldFeedInfo);
    });
  });
} ());
