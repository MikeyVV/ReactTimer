var expect = require('expect')
var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var $ = require('jQuery')

var CountdownForm = require('CountdownForm')

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist()
  })

  it('should call onSetCountdown if valid seconds entered', () => {
    var spy = expect.createSpy()
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
    var $el = $(ReactDOM.findDOMNode(countdownForm))

    //i set seconds input as 109
    countdownForm.refs.seconds.value = '109'
    TestUtils.Simulate.submit($el.find('form')[0])

    // let's check if it have been called with 109 or not?
    expect(spy).toHaveBeenCalledWith(109) //that's why i pass 109
  })

  it('should not call onSetCountdown if invalid seconds entered', () => {
    var spy = expect.createSpy()
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
    var $el = $(ReactDOM.findDOMNode(countdownForm))

    countdownForm.refs.seconds.value = '109a'
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })
})