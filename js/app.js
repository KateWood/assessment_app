console.log('connected')

$(document).ready(function() {
  var events = []
  $('#play').click(function() {
    $('textarea').val('')
    console.log('Playback started')
    var playBack = setInterval(function() {
      var currEvent = events.shift()
      console.log(currEvent)
      $('textarea').val(currEvent.textarea)
      if(events.length < 1) {
        clearInterval(playBack)
        console.log('Playback complete')
      }
    }, 1000)
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
