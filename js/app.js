console.log('connected')

$(document).ready(function() {
  var events = []
  $('#play').click(function() {
    $('textarea').val('')
    console.log('Playback started')
    var playTime = events[0].timeStamp
    // var previousTime = 0
    var playBack = setInterval(function() {
      var currEvent = events.shift()
      console.log(currEvent)
      if (currEvent.timeStamp <= playTime) {
        $('textarea').val(currEvent.textarea)
      } else {
        events.unshift(currEvent)
      }
      if(events.length < 1) {
        clearInterval(playBack)
        console.log('Playback complete')
      }
      playTime += 100
      // previousTime = currEvent.timeStamp
    }, 150)
  })

  $('textarea').keyup(function(e) {
    if (e.keyCode == 16) {
      console.log('Shift')
    } else {
      var newEvent = {
        timeStamp: e.timeStamp,
        textarea: $('textarea').val()
      }
      console.log(newEvent.textarea)
      events.push(newEvent)
    }
  })
})

// A tool to check out
// https://codemirror.net/doc/manual.html#events
