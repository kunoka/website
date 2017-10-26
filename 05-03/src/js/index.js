/**
 * Created by harry on 10/10/2017.
 */
var React = require('react')
var ReactDOM = require('react-dom')

/*var ExampleApplication = React.createClass({
  render: function() {
    var elapsed = Math.round(this.props.elapsed / 100)
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0')
    var message =
      'React has been successfully runnig for ' + seconds + ' seconds.'
    return React.DOM.p(null, message)
  }
});

var ExampleApplicationFactory = React.createFactory(ExampleApplication)
var start = new Date().getTime()
setInterval(function(){
  ReactDOM.render(
    ExampleApplicationFactory({elapsed: new Date().getTime() - start}),
    document.getElementById('example')
  )
})*/

// ReactDOM.render(
//   <h1>Hello World 124</h1>,
//   document.getElementById('example')
// )

setInterval(function(){
  ReactDOM.render(
    <h1>{new Date().getTime()}</h1>,
    document.getElementById('example')
  )
},100)