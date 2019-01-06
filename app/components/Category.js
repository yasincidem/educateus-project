import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import fire from 'firebase'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import BlockUi from 'react-block-ui'
import 'react-block-ui/style.css'
import Button from '@material-ui/core/Button'

const techScience = [
    "biology",
    "chemistry",
    "geology",
    "mathematics",
    "medicine",
    "physics",
    "technology",
    "zoology"
]
const social = [
    "economics",
    "geography",
    "history",
    "journalism",
    "linguistics",
    "philosophy",
    "politics",
    "psychology",
    "sociology",
    "world"
]
const inspiration = [
    "creativity",
    "education",
    "human",
    "leadership",
    "motivation",
    "productivity",
    "relationship",
    "selfimprovement"
]
const art = [
    "culture",
    "design",
    "literature",
    "photography",
    "artists"
]

function snapshotToArray(snapshot) {
  var returnArr = []

  snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val()
      item.key = childSnapshot.key

      returnArr.push(item)
  })

  return returnArr.reverse()
}

class Category extends Component {
    constructor(props) {
        super(props)
        this.handleTabsChange = this.handleTabsChange.bind(this)
        this.getNormalPlaylists = this.getNormalPlaylists.bind(this)
      
      this.state = {
        arr: [],
        arr2: [],
        arrPodcast: [],
        loading: true,
        value: 0,
        expanded: 'panel1',
        blocking: true,
        reference: '',
        reference2: '',
        referencePodcast: '',
        isDisabled1: false,
        isDisabled2: false
      }
    }

    handleTabsChange = (event, value) => {
      this.setState({ value })
    }

    getNormalPlaylistsFirst(category){
      fire.database().ref()
      .child(`category/${category}`)
       .orderByChild('id')
       .limitToLast(6)
       .once('value')
       .then((snapshot) => { 
         if(snapshot){

           console.log('üüüüü0', snapshot.val())
           if(Object.keys(snapshot.val()).indexOf('0') !== -1){
            this.setState({isDisabled1: true})
          } 

           this.setState({reference: (Object.keys(snapshot.val())[0] - 1)})
           let items =  snapshotToArray(snapshot).map((elem, idx) => {
           return(
               <GridListTile 
               key={elem.id}
               component='a' 
               href={`/${category}/playlist/${elem.channelid}`}
               >
               <img src={elem.thumbnail} />
               <GridListTileBar
                 title={elem.channelname}
                 
               />
             </GridListTile>
           )

           console.log(this.state.reference)
         })
         this.setState({arr: items, loading: false})
         }
       }).then(() => {
          setTimeout(() => this.setState({blocking:  false}), 500)
        })
    }

    getNormalPlaylistsLater(category){
      fire.database().ref()
      .child(`category/${category}`)
      .orderByChild('id')
       .endAt(this.state.reference)
       .limitToLast(6)
       .once('value')
       .then((snapshot) => {
         if(snapshot){

           console.log('llllll', snapshot.val())
           

           if(Object.keys(snapshot.val()).indexOf('0') !== -1){
             this.setState({isDisabled1: true})
           } 
           
           this.setState({reference: (Object.keys(snapshot.val())[0] - 1)})
           
            let items = snapshotToArray(snapshot).map((elem, idx) => {
             return(
                 <GridListTile 
                 key={elem.id}
                 component="a" href={`/${category}/playlist/${elem.channelid}`}
                 >
                 <img src={elem.thumbnail} />
                 <GridListTileBar
                   title={elem.channelname}
                   
                 />
               </GridListTile>
             )

             console.log(this.state.reference)
           })
           this.setState(prevState => ({
             arr: [...prevState.arr, ...items],
             loading: false
           }))
         }
       }).then(() => {
          setTimeout(() => this.setState({blocking:  false}), 500)
        })
    }

    getAcademicPlaylists(category){
      if (this.state.reference2 === '') {
        this.getAcademicPlaylistsFirst(category)
      } else {
        this.getAcademicPlaylistsLater(category)
      }
    }

    getAcademicPlaylistsFirst(category){
      fire.database().ref()
      .child(`category/academic/${category}`)
       .orderByChild('id')
       .limitToLast(6)
       .once('value')
       .then((snapshot) => { 
         if(snapshot){
           if(Object.keys(snapshot.val()).indexOf('0') !== -1){
            this.setState({isDisabled2: true})
          } 
           this.setState({reference2: (Object.keys(snapshot.val())[0] - 1)})
           let items = snapshotToArray(snapshot).map((elem, idx) => {
           return(
               <GridListTile 
               key={elem.id}
               component="a" href={`/${category}/playlist/${elem.channelid}`}
               >
               <img src={elem.thumbnail} />
               <GridListTileBar
                 title={elem.channelname}
                 
               />
             </GridListTile>
           )
         })
         this.setState({arr2: items, loading: false})
         }
       }).then(() => {
          setTimeout(() => this.setState({blocking:  false}), 500)
        })
    }

    getAcademicPlaylistsLater(category){
      fire.database().ref()
      .child(`category/academic/${category}`)
      .orderByChild('id')
      .endAt(this.state.reference2)
      .limitToLast(6)
      .once('value')
      .then((snapshot) => {
        if(snapshot){
          console.log('llllll', snapshot.val())
          
          if(Object.keys(snapshot.val()).indexOf('0') !== -1){
            this.setState({isDisabled2: true})
          } 
          
          this.setState({reference2: (Object.keys(snapshot.val())[0] - 1)})
          
           let items = snapshotToArray(snapshot).map((elem, idx) => {
            return(
                <GridListTile 
                key={elem.id}
                component="a" href={`/${category}/playlist/${elem.channelid}`}
                >
                <img src={elem.thumbnail} />
                <GridListTileBar
                  title={elem.channelname}
                  
                />
              </GridListTile>
            )
          })
          this.setState(prevState => ({
            arr2: [...prevState.arr2, ...items],
            loading: false
          }))
        }
      }).then(() => {
        setTimeout(() => this.setState({blocking:  false}), 500)
      })
    }
    


   

    getNormalPlaylists(category){
    if (this.state.reference === '') {
      this.getNormalPlaylistsFirst(category)
    } else {
      this.getNormalPlaylistsLater(category)
    }

    }

    getPodcasts(category){
      if (this.state.referencePodcast === '') {
        this.getPodcastsFirst(category)
      } else {
        this.getPodcastsLater(category)
      }
    }

    getPodcastsFirst(category){
      fire.database().ref()
      .child(`channels/${category}`)
      .orderByChild('id')
      .limitToLast(6)
      .once('value')
      .then((snapshot) => {
        if(snapshot){
          if(Object.keys(snapshot.val()).indexOf('0') !== -1){
            //  this.setState({isDisabled1: true})
          } 
          this.setState({referencePodcast: (Object.keys(snapshot.val())[0] - 1)})
          let items =  snapshotToArray(snapshot).map((elem, idx) => {
            console.log(elem.thumbnail, "jrjnfjfnrjfnr")
          return(
              <GridListTile 
              key={elem.id}
              component={Link}
              to={`/videosofchannel/${elem.channelid}`}>
              <img src={elem.thumbnail} />
              <GridListTileBar
                title={elem.channelname}
              />
            </GridListTile>
          )
        })
        this.setState({arrPodcast: items, loading: false})
        }
      }).then(() => {
        setTimeout(() => this.setState({blocking:  false}), 500)
      })
    }

    getPodcastsLater(category){
      fire.database().ref()
      .child(`channels/${category}`)
      .orderByChild('id')
      .endAt(this.state.referencePodcast)
      .limitToLast(6)
      .once('value')
      .then((snapshot) => {
        if(snapshot){
          
          if(Object.keys(snapshot.val()).indexOf('0') !== -1){
            // this.setState({isDisabled1: true})
          } 
          
          this.setState({referencePodcast: (Object.keys(snapshot.val())[0] - 1)})
          
           let items = snapshotToArray(snapshot).map((elem, idx) => {
            return(
                <GridListTile 
                key={elem.id}
                component={Link}
                to={`/videosofchannel/${elem.channelid}`}>
                <img src={elem.thumbnail} />
                <GridListTileBar
                  title={elem.channelname}
                />
              </GridListTile>
            )
            
          })
          this.setState(prevState => ({
            arrPodcast: [...prevState.arrPodcast, ...items],
            loading: false
          }))
        }
      }).then(() => {
        setTimeout(() => this.setState({blocking:  false}), 500)
      })
    }
            

    componentDidMount() {
      document.title = this.props.match.params.category.charAt(0).toUpperCase() + this.props.match.params.category.slice(1)

        
        this.props.logoHandle(this.props.match.params.category)
        if(techScience.indexOf(this.props.match.params.category) != -1){
            this.props.handler(0)
        }
        if(social.indexOf(this.props.match.params.category) != -1){
            this.props.handler(1)
        }
        if(inspiration.indexOf(this.props.match.params.category) != -1){
            this.props.handler(2)
        }
        if(art.indexOf(this.props.match.params.category) != -1){
            this.props.handler(3)
        }

        console.log(this.props.match.params.category)
        
        this.getNormalPlaylistsFirst(this.props.match.params.category)
        if(this.props.match.params.category !==  'culture' || this.props.match.params.category !==  'motivation'){
          this.getAcademicPlaylistsFirst(this.props.match.params.category)
          this.getPodcastsFirst(this.props.match.params.category)
        }
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.location.pathname != this.props.location.pathname){
        document.title = nextProps.match.params.category.charAt(0).toUpperCase() + nextProps.match.params.category.slice(1)
        this.setState({reference: '', isDisabled1: false, isDisabled2: false, blocking: true, arr: null, arr2: null, expanded: 'panel1'})
            nextProps.logoHandle(nextProps.match.params.category)
            if(techScience.indexOf(nextProps.match.params.category) != -1){
                nextProps.handler(0)
            }
            if(social.indexOf(nextProps.match.params.category) != -1){
                nextProps.handler(1)
            }
            if(inspiration.indexOf(nextProps.match.params.category) != -1){
                nextProps.handler(2)
            }
            if(art.indexOf(nextProps.match.params.category) != -1){
                nextProps.handler(3)
            }
        this.getNormalPlaylistsFirst(nextProps.match.params.category)
        if(nextProps.match.params.category !==  'culture' || nextProps.match.params.category !==  'motivation'){
          this.getAcademicPlaylistsFirst(nextProps.match.params.category)
          this.getPodcastsFirst(nextProps.match.params.category)
        }
      }
        
    }

    handleChange = panel => (event, expanded) => {
      this.setState({
        expanded: expanded ? panel : false,
      })
    }
    

    render() {
        const { expanded } = this.state;
        return(
        <div>

        <BlockUi tag="div" blocking={this.state.blocking}>
        <ExpansionPanel 
        style={{marginLeft: -10, marginRight: -10}}
        expanded={expanded === 'panel1'} 
        onChange={this.handleChange('panel1')}
        >

        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <p className='lead'>Playlists</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{marginLeft: -10, marginRight: -10}}>


        <div className="container-fluid">
        <Paper>
            <Tabs 
            value={this.state.value} 
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleTabsChange}
            centered
            >
              <Tab component='span' label="Popular Sci." />
              <Tab component='span' label="Academic" />
            </Tabs>
        </Paper>
        {this.state.value === 0 && (
          <React.Fragment>
            <GridList cols={2} >
              {this.state.arr}
            </GridList>
        <div  className='text-center'>
        <Button
        style={{margin: 10}}
        variant='outlined'
        disabled={this.state.isDisabled1} 
        onClick={(e) => {
          e.preventDefault()
          this.getNormalPlaylists(this.props.match.params.category)
        }}>Show More</Button>
        </div>
        </React.Fragment>
        )}
        {this.state.value === 1 && (
          <React.Fragment>
          <GridList cols={2} >
            {this.state.arr2}
          </GridList>
          <div  className='text-center'>
          <Button
          style={{margin: 10}}
          variant='outlined'
          disabled={this.state.isDisabled2 || this.state.arr2 == null} 
          onClick={(e) => {
            e.preventDefault()
            this.getAcademicPlaylists(this.props.match.params.category)
          }}>Show More</Button>
          </div>
          </React.Fragment>
        )}

        </div>


        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel 
      style={{marginLeft: -10, marginRight: -10}}
      expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <p className='lead'>Podcast</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{marginLeft: -10, marginRight: -10}}>
          
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel 
      style={{marginLeft: -10, marginRight: -10}}
      expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <p className='lead'>Channels</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{marginLeft: -10, marginRight: -10}}>
        <div className="container-fluid">
          <GridList cols={2} >
            {this.state.arrPodcast}
          </GridList>
        </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel 
      style={{marginLeft: -10, marginRight: -10}}
      expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <p className='lead' >Videos</p>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{marginLeft: -10, marginRight: -10}}>

          {'Videos will be here'}
      </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel 
      style={{marginLeft: -10, marginRight: -10}}
      disabled={true}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <p className='lead' >Articles</p>
        </ExpansionPanelSummary>
        
      </ExpansionPanel>
      </BlockUi>
      

        </div>
        )
    }
}

export default Category;