function waitFor(handler, next, time) {
  var time = time || 500;
  var result = handler();

  if (! result) {
    setTimeout(function() {
      waitFor(handler, next);
    }, 500);
  } else {
    next();
  }
}

function openWin(url, closeHandler, width, height, name) {
  url = url || 'about:blank';
  width = width || 800;
  height = height || 500;

  name = name || 'openedWindow';

  var win = window.open('about:blank', name, 'top=' + Math.ceil((screen.height / 2) - (height / 2)) + ', left=' + Math.ceil((screen.width / 2) - (width / 2)) + ', width=' + width + ', height=' + height + ', location=1, status=1, toolbar=0, menubar=0, resizable=0, scrollbars=1');

  try {
    win.document.write('<style>* { cursor: wait; }</style><div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; width: 200px; height: 60px; text-align: center; line-height: 60px; font-family: sans-serif; border-radius: 30px; background-color: rgb(19, 95, 181); color: white;">Loading...</div>');
  } catch (e) { }

  if (closeHandler) {
    waitFor(function() {
      return win.closed;
    }, closeHandler);
  }

  if (url !== 'about:blank') {
    setTimeout(function() {
      win.window.location.href = url;
    }, 10);
  }

  win.focus();

  return win;
}

module.exports = openWin;
