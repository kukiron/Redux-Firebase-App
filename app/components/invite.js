import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const styles = {
  marginTop: 15
}

export default class Invite extends React.Component {

  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    this.props.onGetInvite();
  }

  onInputChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  onButtonClick() {
    this.props.onAddToInvite(this.state.name);
    this.setState({ name: '' });
  }

  render() {
    const { host, agenda, guest_count, guests } = this.props.invite;
    return (
      <div className="container">
        <Paper zDepth={3} className="well">
          <h1>Meeting invitation</h1>
        </Paper>
        <Paper zDepth={2} className="meeting-summary">
          <div className="row">
            <div className="col-sm-4 col-md-2">
              <b>Host:</b>
            </div>
            <div className="col-sm-8 col-md-10">
              {host}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-2">
              <b>Agenda:</b>
            </div>
            <div className="col-sm-8 col-md-10">
              {agenda}
            </div>
          </div>
        </Paper>
        <Paper zDepth={2} className="meeting-form">
            <div className="row">
              <div className="col-sm-4 col-md-2" style={styles}>
                <b>Name:</b>
              </div>
              <div className="col-sm-8 col-md-10">
                <TextField
                  hintText="Full Name"
                  value={this.state.name}
                  onChange={this.onInputChange.bind(this)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <RaisedButton
                  label="I am coming!"
                  onClick={this.onButtonClick.bind(this)}
                />
              </div>
            </div>
        </Paper>
        <Paper zDepth={2} className="meeting-list">
          <h2>Guests</h2>
          {guests && guests.length > 0 ? (
            <ul>
              {guests.map((guest, index) => {
                return (
                  <li key={index}>
                    {guest.name}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </Paper>
      </div>
    );
  }
}
