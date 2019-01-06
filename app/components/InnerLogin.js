import React, { Component } from 'react'
import { Form, FormGroup,Input} from 'reactstrap'
import fire from '../config/fire'
import firebase from 'firebase'
import { withRouter} from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import GoogleButton from 'react-google-button'
import { FormFeedback } from 'reactstrap'
import Divider from '@material-ui/core/Divider'
import Slide from '@material-ui/core/Slide'

const styles  =({
    card: {
      minWidth: 150,
      minHeight: 400,
      maxHeight: '100%' 
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    root: {
      flexGrow: 1,
      paddingLeft: 0
    },
    buttonInCard:{
        marginTop: 5
    },
    button: {
        marginBottom: 5
    }
  })
  
class InnerLogin extends Component {
    constructor(props) {
        
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.signInWithEmail = this.signInWithEmail.bind(this)

      this.state = {
          validate:{
            emailState: '',
            passwordState: '',
          },
          firstname: '',
          email: '',
          password: '',
          confirmpassword: '',
          emailmessage: '',
          passwordmessage: '',
      }
    }
    render() {
        return (
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <div className="col-lg-4 offset-lg-4" style={{paddingTop: 120, paddingBottom: 15}}>
            <Card className={styles.card}>
                  <CardContent>
                      
                      <div >
                        <Button size="small" style={{float: 'left'}} onClick={() => {
                            if(this.props.location.state){
                                this.props.history.push({pathname: this.props.location.state.from})
                            }else {
                                this.props.history.push('/dashboard')
                            }
                        }}>
                            <ArrowBackIcon/>
                        </Button>
                        <p className="h3 text-center" style={{paddingRight: 32}} >Log in</p>
                      </div>
                        <GoogleButton 
                            label="Log in with Google"
                            style={{marginBottom: 10}}
                            onClick={() => {
                                this.signInWithGoogle()
                            }}
                        />
                        <Divider style={{marginBottom: 10}}/>
                         <Form>
                            <FormGroup>
                                <Input
                                value={this.state.email} 
                                valid={ this.state.validate.emailState === 'has-success' }
                                invalid={ this.state.validate.emailState === 'has-danger' }
                                onChange={ (e) => {
                                            this.validateEmail(e)
                                            this.handleChange(e)
                                          } }
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                required 
                                />
                                <FormFeedback invalid>
                                  {this.state.emailmessage}
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Input
                                value={this.state.password} 
                                valid={ this.state.validate.passwordState === 'has-success' }
                                invalid={ this.state.validate.passwordState === 'has-danger' }
                                onChange={ (e) => {
                                            this.handleChange(e)
                                          } }
                                type="password"
                                name="password"  
                                placeholder="Password" 
                                required 
                                />
                                <FormFeedback invalid>
                                  {this.state.passwordmessage}
                                </FormFeedback>

                            </FormGroup>
                            <Button  fullWidth type="submit" onClick={(e) => this.signInWithEmail(e)} variant="outlined" size="large" color="primary" style={{marginBottom: 5}}>
                                Log in
                            </Button>

                             <Button fullWidth href='/reset' variant="outlined" size="small" color="secondary">
                              Forgot password?
                            </Button>
                            
                        </Form>
                  </CardContent>
                </Card>
            </div>
            </Slide>
        )
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
        if (emailRex.test(e.target.value)) {
        validate.emailState = 'has-success'
        } else {
        validate.emailState = 'has-danger'
        }
        this.setState({ validate })
        this.setState({emailmessage: 'Uh oh! Looks like there is an issue with your email. Please input a correct email.'})
    }


    signInWithGoogle(){
        var provider = new firebase.auth.GoogleAuthProvider();
        fire.auth().signInWithPopup(provider).then((result) => {
         // This gives you a Google Access Token.

        }).catch((err) => {

        })
    }


    signInWithEmail(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
            window.sessionStorage.setItem("isUserLogIn", true);
        }).catch(err => {
            console.log(err)
            if(err.code === 'auth/user-not-found') {
                const { validate } = this.state
                validate.emailState = 'has-danger'
                this.setState({ validate })
                this.setState({emailmessage: err.message})  
            } else if( err.code === 'auth/wrong-password') {
                const { validate } = this.state
                validate.passwordState = 'has-danger'
                this.setState({ validate })
                this.setState({passwordmessage: err.message})  
            }
        })
    }
}

export default withRouter(InnerLogin)