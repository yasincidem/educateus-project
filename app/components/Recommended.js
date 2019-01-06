import React, {Component} from 'react'
import fire from '../config/fire'
import { Container, Row, Col} from 'reactstrap'
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';

const alphabet = [
    'A', 
    'B', 
    'C', 
    'D', 
    'E', 
    'F', 
    'G', 
    'H', 
    'I', 
    'J', 
    'K', 
    'L', 
    'M', 
    'N', 
    'O', 
    'P', 
    'Q', 
    'R', 
    'S', 
    'T', 
    'U', 
    'V', 
    'W', 
    'X', 
    'Y', 
    'Z'
]

function snapshotToArray(snapshot) {
  var returnArr = []

  snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val()
      item.key = childSnapshot.key

      returnArr.push(item)
  })

  return returnArr
}

class Recommended extends Component {

    constructor(props){
        super(props)
        this.state = {
            list: [],
            topics: {}
        }
    }

    componentDidMount(){
        document.title = 'Topics'
        fire.database().ref().child(`topics`).once('value', (snap) => {
            this.setState({topics: snap})
            console.log(snapshotToArray(this.state.topics)[0])
        }).then(() => {
            let items = alphabet.map((elem, idx) => {
                return (
                    <React.Fragment>
                    {/* <Row>
                        <h1 className='display-4 d-block' style={{margin: 10}}>{elem}</h1>
                    </Row> */}
                    <Row>
                    {snapshotToArray(this.state.topics)[idx].map((elem2, idx2) => {
                       return (
                        <Chip
                            avatar={idx2 === 0 && <Avatar>{elem}</Avatar>}
                            key={idx2}
                            component={Link}
                            to={`/path/${elem2}`}
                            label={elem2}
                            clickable
                            variant="outlined"
                            style={{
                              marginLeft: 12,
                              marginTop: 12,
                              marginBottom: 12,
                              textDecoration: 'none'
                            }}
                        />
                       )
                    })}
                </Row>
                <Divider/>
                </React.Fragment>
                )
            })
            this.setState({list: items})
        })
    }

    render(){
        return (
            <React.Fragment>
                <h2 className='display-3 d-block'> Discoverr </h2>
                <Container fluid={true}>
                    {this.state.list}
                </Container>
            </React.Fragment>
        )
    }
}

export default Recommended