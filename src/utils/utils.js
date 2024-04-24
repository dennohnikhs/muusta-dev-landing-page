angular.module("myApp", []).controller("TabController", function () {
  this.showDetails = false;
  this.toggleDetails = function () {
    this.showDetails = !this.showDetails;
  };
});
