  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var options = {'exitDelay': 3000};
    var instances = M.Tooltip.init(elems, options);
  });
