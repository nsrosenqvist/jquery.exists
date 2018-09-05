(function ($) {
  $.fn.exists = function(callback) {
    var args = [].slice.call(arguments, 1);

    if (callback) {
      if (this.length) {
        callback.call(this, args);
      }

      return this;
    }
    else {
      if (this.length) {
        return true;
      }

      return false;
    }
  };
}(jQuery));
