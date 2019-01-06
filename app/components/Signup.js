import React, { Component } from 'react'
import { Form, FormGroup, Input} from 'reactstrap'
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
      maxHeight: '100%' ,
      marginTop: 88
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
    }
  })
  
class Signup extends Component {
    constructor(props) {
        
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.signUpWithEmail = this.signUpWithEmail.bind(this)

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
            note: ''
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
                        <p className="h3 text-center" style={{paddingRight: 32}} >Sign Up</p>
                      </div>
                        <GoogleButton 
                            label="Sign up with Google"
                            style={{marginBottom: 10}}
                            onClick={() => {
                                this.signInWithGoogle()
                            }}
                        />
                        <Divider style={{marginBottom: 10}}/>
                         <Form>
                             <FormGroup>
                                <Input
                                value={this.state.firstname} 
                                valid={ this.state.firstname != null && this.state.firstname != ''}
                                invalid={ this.state.firstname === '' }
                                onChange={ (e) => {
                                            this.handleChange(e)
                                          } }
                                type="name" 
                                name="firstname"  
                                placeholder="Firstname" 
                                required 
                                    
                                />
                            </FormGroup>
                            
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
                                            this.validatePassword(e)
                                            this.handleChange(e)
                                          } }
                                type="password"
                                name="password"  
                                placeholder="Password" 
                                required 
                                />
                                <FormFeedback invalid>
                                  Uh oh! Your password easy to guess!
                                </FormFeedback>

                            </FormGroup>
                            <FormGroup>
                                <Input 
                                value={this.state.confirmpassword} 
                                valid={this.state.password != '' && this.state.password != null && this.state.confirmpassword === this.state.password }
                                invalid={ this.state.confirmpassword !== this.state.password }
                                onChange={ (e) => {
                                            this.handleChange(e)
                                          } } 
                                type="password"
                                name="confirmpassword" 
                                placeholder="Confirm Password" 
                                required/>
                                <FormFeedback invalid>  
                                  Uh oh! Passwords do not match!
                                </FormFeedback>

                            </FormGroup>
                            <Button type="submit" onClick={this.signUpWithEmail} variant="outlined" size="large" color="primary" className={styles.button}>
                                Sign up
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

    validatePassword(e){
    const passwordRex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    const { validate } = this.state
        if (passwordRex.test(e.target.value)) {
        validate.passwordState = 'has-success'
        } else {
        validate.passwordState = 'has-danger'
        }
        this.setState({ validate })
    }

    signInWithGoogle(){
        var provider = new firebase.auth.GoogleAuthProvider();
        fire.auth().signInWithPopup(provider).then((result) => {
         // This gives you a Google Access Token.
        })
    }


    signUpWithEmail(e){
        e.preventDefault();
        console.log(this.state)
        fire.auth().createUserWithEmailAndPassword(
          this.state.email,
          this.state.password
        )
        .then((userRecord) =>{
          // See the UserRecord reference doc for the contents of userRecord.
          console.log("Successfully created new user:", userRecord)
          const { validate } = this.state
        })
        .catch((error) => {
          console.log("Error creating new user:", error);
          const { validate } = this.state
          validate.emailState = 'has-danger'
          this.setState(validate)
          this.setState({emailmessage: error.message})
          if(validate.emailState !== 'has-danger') {
              this.props.history.push('/login')
          }
        })
    }

}

export default withRouter(Signup)