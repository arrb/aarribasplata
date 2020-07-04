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
      main: '#50E3C2',
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
    const trianfleishShape = this.props.isOpen ? 'triangleish-shape change-size' : 'triangleish-shape';
    const formShape = this.props.isOpen ? 'form-shape-container change-size-form' : 'form-shape-container';

    return(
      <div className="contact-wrapper" style={this.props.isOpen ?  {'filter': 'grayscale(100%)'} : null}>
        <div className={trianfleishShape}>
          <div className="triangleish-content">
            <div className="triangle-content-div">
              <h1 className="title-tag">Hire Me!</h1>
              <div className="hire-me-contact-div">
                <p className="hire-me-p">
                  I enjoy working on Web Development, especially using ReactJS. For instance, I designed and wrote the code for this website purely using React and Webpack. 
                  I enjoy using React because it was easy to learn and I like the magic behind the Virtual DOM. Also, I like seeing my code and I consider myself a tech artist.
                </p>
                <p className="hire-me-p"> 
                  At work, as a member of the back end team, I mostly write in Scala, JAVA, and SQL. The part about Back End that I enjoy the most is the mutual learning I 
                  get from my peers via GitHub pull requests. Also, I like working on some performance challenges that front end work does not face. I love optimizing 
                  performance and dealing with data.
                </p>
                <p className="hire-me-p">
                  As part of my Master's program, I am now learning a lot about machine learning. As a consequence, I have started some personal projects that 
                  are written in Python. My practicum is about how can we use Artificial Intelligence for Nation Building. In particular, using Artificial 
                  Intelligence to raise the population at the bottom of the pyramid in India and the United States
                </p>
                <p className="hire-me-p">
                  Overall, I am a person who likes to learn, always waiting to study the next best thing. 
                  I like working as a Full Stack developer with a focus on the Front End side of the project.
                </p>
                <p className="hire-me-p"> Let's chat more, send me an email. You can start looking at <a className="external-link" href="./../../../../arribasplata_ana_resume.pdf" target="_blank">my resume</a> </p> while you wait shortly. 
              </div>
            </div>
          </div>
        </div>
        <div className={formShape}>
          <div className="form-shape">
            <div className="form-content">
              <div>
                <div style={!this.state.formSubmitted ?  {'display': 'none'} : {'display': 'block'}}><p>Thank you, this form has been submitted. I will get back at you shortly. </p></div>
                  <ThemeProvider theme={theme}>
                  <div className={useStyles.margin} id="form-hire-me">
                    <Grid container  spacing={2} alignItems="flex-end">
                      <Grid item>
                        <AccountCircle />
                      </Grid>
                      <Grid item xs={12} sm={6} >
                        <TextField 
                          id="input-with-icon-grid-name" 
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
                          id="input-with-icon-grid-email"
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
                          > Send
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
}

export default HireMe;
