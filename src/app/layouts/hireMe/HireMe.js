import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

import { withStyles , ThemeProvider} from '@material-ui/styles';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import SendIcon from '@material-ui/icons/Send';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#50E3C2',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }
  },
  input: {
    color: "red"
  },
});


class HireMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      emailAddress: '',
      message: '',
      formSubmitted: false
      }
  }

  handleCancel() {
    this.setState({
      name: '',
      emailAddress: '',
      message: '',
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const template = process.env.REACT_APP_EMAILJS_TEMPLATEID
    const user = process.env.REACT_APP_EMAILJS_USERID

    this.sendFeedback(
      template,
      user
    );

    this.setState({
      formSubmitted: true,
      name: '',
      emailAddress: '',
      message: ''
    });
  }

 // Note: this is using default_service, which will map to whatever
 // default email provider you've set in your EmailJS account.
  sendFeedback(templateId, user) {
    const {name, emailAddress, message} = this.state;
    window.emailjs
      .send('default_service', templateId, {
          name,
          emailAddress,
          message
        },
        user
      )
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }


  render(){
const useStyles = makeStyles({
  root: `
    justifyContent: 'center'
  `,
  margin: `
    margin: theme.spacing(2),
  `,
});
    const str =
      "- Tell us about this project\n What skills are you looking for?";

    console.log("state " , this.state)
    return(
      <div className="contact-wrapper" style={this.props.isOpen ?  {'filter': 'grayscale(100%)'} : null}>
        
        <div className="triangleish-shape" style={this.props.isOpen ?  {'marginLeft': '-20%'} : null}>
          <div className="triangleish-content">
            <div className="triangle-content-div">
                    <h1 className="title-tag">Hire Me!</h1>
                    <p>I enjoy working on front end and back end.</p>
                    <p> I am also very interested in working with machine learning. Machine Learning was the topic for my thesis and Artifical Intelligence was what I focus on during my practicums</p>
                    <p> Let's chat more, send me an email </p>
                </div>
          </div>
        </div>
        <div className="form-shape-container" style={this.props.isOpen ?  {'marginLeft': '10%'} : null}>
          <div className="form-shape">
            <div className="form-content">
                <div>
                  <div style={!this.state.formSubmitted ?  {'display': 'none'} : {'display': 'block'}}><p>Thank you, this form has been submitted. I will get back at you shortly. </p></div>
                <ThemeProvider theme={theme}>
                  
                  <div className={useStyles.margin} style={{width: '1200px'}}>
                      <Grid container  spacing={2} alignItems="flex-end">
                      <Grid item>
                        <AccountCircle />
                      </Grid>
                      <Grid item xs={12} sm={6} >
                        <TextField 
                          id="input-with-icon-grid" 
                          label="Name" 
                          fullWidth
                          onChange={e => this.setState({name: event.target.value, formSubmitted: false})}
                          value={this.state.name}
                          />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="flex-end">
                      <Grid item>
                        <AlternateEmailIcon />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField 
                          id="input-with-icon-grid"
                          label="Email Address" 
                          fullWidth
                          onChange={e => this.setState({emailAddress: event.target.value, formSubmitted: false})}
                          value={this.state.emailAddress}/>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="flex-end">
                      <Grid item>
                        <EmailIcon />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Message"
                          multiline={true}
                          rows={3}
                          fullWidth
                          id="multiline-static"
                          onChange={e => this.setState({message: event.target.value, formSubmitted: false})}
                          value={this.state.message}
                        />
                      </Grid>
                      <Grid container alignItems="flex-start" justify="flex-start" direction="row">
                        <Grid item  xs={12} sm={6} >
                        <Button
                          style={{width: '110%', marginTop: '5%'}}
                          variant="contained"
                          color="primary"
                          endIcon={<SendIcon/>}
                          size="large"
                          onClick={this.handleSubmit.bind(this)}
                        >Send
                      </Button>
                      </Grid>
                      </Grid>
                    </Grid>
                  </div>
              </ThemeProvider>
              </div>
 
            </div>
          </div>
        </div>
      </div>
      )
  }

  // render(){
  //   return (
  //   <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
  //       <span className="big-title">Contact Me</span>

  //   </div>
  //   )
  // }

  // render() {

  //   return (
  //     <div>
  //     <form className="feedback-form" onSubmit={this.handleSubmit.bind(this)}>
  //       <h1>Your Feedback</h1>
  //       <textarea
  //         className="text-input"
  //         id="feedback-entry"
  //         name="feedback-entry"
  //         onChange={this.handleChange.bind(this)}
  //         placeholder="Enter your feedback here"
  //         required
  //         value={this.state.feedback}
  //       />
  //       <div className="btn-group">
  //         <button className="btn btn--cancel" onClick={this.handleCancel.bind(this)}>
  //           Cancel
  //         </button>
  //         <input type="submit" value="Submit" className="btn btn--submit" />
  //       </div>
  //     </form>
  //     </div>
  //   );
  // }
}


// export default withStyles(styles)(HireMe);
export default HireMe;
