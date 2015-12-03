// (function() {
//   if (typeof )
// })();
//
// (function() {
//   if (typeof Hanoi === "undefined") {
//     window.Hanoi = {};
//   }
//
//   var View = Hanoi.View = function() {
//
//   };
//
// })();



function View(game, $el) {
  this.game = game;
  this.$el = $el;
  this.setupTowers();
  this.render();
}

View.prototype.setupTowers = function() {
  // var $allStacks = $("<div>");
  // var $leftStack = $("<div>").addClass("left-stack");
  // var $middleStack = $("<div>").addClass("middle-stack");
  // var $rightStack = $("<div>").addClass("right-stack");
  //
  // this.setupTowersHelper($leftStack);
  // this.setupTowersHelper($middleStack);
  // this.setupTowersHelper($rightStack);
  //
  // $allStacks.append($leftStack);
  // $allStacks.append($middleStack);
  // $allStacks.append($rightStack);

  for (var i = 0; i < 3; i++) {
    this.setupTowersHelper(this.$el);
  }
  this.$el.addClass("hanoi");
};

View.prototype.setupTowersHelper = function($stack) {
  var $ringStack = $("<ul>");

  for (var i = 0; i < 3; i++) {
    $ringStack.append($("<li>"));
  }
  $stack.append($ringStack);
};

View.prototype.render = function() {
  var firstStack = this.game.towers[0];
  var secondStack = this.game.towers[1];
  var thirdStack = this.game.towers[2];

  $("li").removeClass("disk-1 disk-2 disk-3");
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var $stackEl = $(".hanoi:nth-child(i):nth-child(j)");
      if (this.game.towers[i][j] === 1) {
        $stackEl.addClass("disk-1");
      } else if (this.game.towers[i][j] === 2) {
        $stackEl.addClass("disk-2");
      } else if (this.game.towers[i][j] === 3) {
        $stackEl.addClass("disk-3");
      }
    }
  }
};

module.exports = View;
