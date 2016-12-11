var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var ControlsTimer = require('ControlsTimer')

describe('ControlsTimer', () => {
  it('should exist', () => {
    expect(ControlsTimer).toExist()
  })

  describe('render', () => {
    it('should render stop when started', () => {
      var controlsTimer = TestUtils.renderIntoDocument(<ControlsTimer onStatusChange={() =>{}} countStatus="started"/>)
      var $el = $(ReactDOM.findDOMNode(controlsTimer))
      var $stopButton = $el.find('button:contains(Stop)')

      expect($stopButton.length).toBe(1)
    })

    it('should render start when stopped', () => {
      var controlsTimer = TestUtils.renderIntoDocument(<ControlsTimer onStatusChange={() =>{}} countStatus="paused"/>)
      var $el = $(ReactDOM.findDOMNode(controlsTimer))
      var $startButton = $el.find('button:contains(Start)')

      expect($startButton.length).toBe(1)
    })
  })
})