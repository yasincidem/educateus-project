import React, { Component } from 'react'
import fire from '../config/fire'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

class Paths extends Component {
    constructor(props) {
        
        super(props)

        this.state = {
            arr: []
        }
    }

    componentDidMount(){
      document.title = 'Paths'
      
      fire.database().ref().child(`paths/${this.props.match.params.category}`).once('value', (snap) => {
        console.log(snap.val())
        let items = snap.val().map((elem, idx) => {
          return(

            <VerticalTimelineElement
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#c4c6c8' }}
          >
            <Card elevation='0'>
            <CardMedia
              style={{height: 0, paddingTop: '55%'}}
              image={elem.thumbnail}
            />
            <CardContent>
            <a className='lead' target='_blank' href={`/path/watch/${elem.channelid}`}>{elem.channelname}</a>
            </CardContent>
            </Card>
          </VerticalTimelineElement>
          )
        })
        this.setState({arr: items})
      })
    }

    render() {
        return (
          <React.Fragment>
           
            <div style={{backgroundColor: '#edeff2'}}>
            
            <VerticalTimeline style={{margin: 0}}>
            {this.state.arr}
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#c4c6c8' }}
            />
          </VerticalTimeline>
          </div>
          </React.Fragment>
        )
    }
}

export default Paths