var React = require('react')

var ControlsTimer = React.createClass ({
  propsTypes: {
    countStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus)
    }
  },
  render: function () {
    var {countStatus} = this.props
    var renderStartStopButton = () => {
      if(countStatus === 'started') {
        return <button className="button primary" onClick={this.onStatusChange('paused')}>Stop</button>
      }else {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    }
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button secondary hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  }
})

module.exports = ControlsTimer