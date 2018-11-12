import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import biology from 'images/biology.png';
import chemistry from 'images/chemistry.png';
import geology from 'images/geology.png';
import mathematics from 'images/mathematics.png';
import medicine from 'images/medicine.png';
import physics from 'images/physics.png';
import technology from 'images/technology.png';
import zoology from 'images/zoology.png';

import economics from 'images/economics.png';
import geography from 'images/geography.png';
import history from 'images/history.png';
import journalism from 'images/journalism.png';
import linguistics from 'images/linguistics.png';
import philosophy from 'images/philosophy.png';
import politics from 'images/politics.png';
import psychology from 'images/psychology.png';
import sociology from 'images/sociology.png';
import world from 'images/world.png';

import creativity from 'images/creativity.png';
import education from 'images/education.png';
import human from 'images/human.png';
import leadership from 'images/leadership.png';
import motivation from 'images/motivation.png';
import productivity from 'images/productivity.png';
import relationship from 'images/relationship.png';
import selfimprovement from 'images/selfimprovement.png';

import culture from 'images/culture.png';
import design from 'images/design.png';
import literature from 'images/literature.png';
import photography from 'images/photography.png';
import artists from 'images/artists.png';

class LeftDrawer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
  }
  render() {
    return (
      <List>
        <ListItem button disableRipple style={{ backgroundColor: '#4885ed' }} >
          <ListItemText primary="Tech&Science" className="text-center" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/biology"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('biology');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={biology} alt="biology" />
          </ListItemIcon>
          <ListItemText primary="Biology" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/chemistry"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('chemisty');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={chemistry} alt="chemistry" />
          </ListItemIcon>
          <ListItemText primary="Chemistry" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/geology"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('geology');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={geology} alt="geology" />
          </ListItemIcon>
          <ListItemText primary="Geology" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/mathematics"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('mathematics');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={mathematics} alt="mathematics" />
          </ListItemIcon>
          <ListItemText primary="Mathematics" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/medicine"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('medicine');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={medicine} alt="medicine" />
          </ListItemIcon>
          <ListItemText primary="Medicine" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/physics"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('physics');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={physics} alt="physics" />
          </ListItemIcon>
          <ListItemText primary="Physics" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/technology"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('technology');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={technology} alt="technology" />
          </ListItemIcon>
          <ListItemText primary="Technology" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/firebase"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('zoology');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={zoology} alt="zoology" />
          </ListItemIcon>
          <ListItemText primary="Zoology" />
        </ListItem>

        <ListItem button disableRipple style={{ backgroundColor: '#db3236' }}>
          <ListItemText primary="Inspiration" className="text-center" style={{ color: 'white' }} />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/category/economics"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('economics');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={economics} alt="economics" />
          </ListItemIcon>
          <ListItemText primary="Economics" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/geography"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('geography');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={geography} alt="geography" />
          </ListItemIcon>
          <ListItemText primary="Geography" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/history"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('history');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={history} alt="history" />
          </ListItemIcon>
          <ListItemText primary="History" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/journalism"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('journalism');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={journalism} alt="journalism" />
          </ListItemIcon>
          <ListItemText primary="Journalism" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/linguistics"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('linguistics');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={linguistics} alt="linguistics" />
          </ListItemIcon>
          <ListItemText primary="Linguistics" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/philosophy"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('philosophy');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={philosophy} alt="philosophy" />
          </ListItemIcon>
          <ListItemText primary="Philosophy" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/politics"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('politics');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={politics} alt="politics" />
          </ListItemIcon>
          <ListItemText primary="Politics" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/psychology"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('psychology');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={psychology} alt="psychology" />
          </ListItemIcon>
          <ListItemText primary="Psychology" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/sociology"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('sociology');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={sociology} alt="sociology" />
          </ListItemIcon>
          <ListItemText primary="Sociology" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/world"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('world');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={world} alt="world" />
          </ListItemIcon>
          <ListItemText primary="World" />
        </ListItem>

        <ListItem button disableRipple style={{ backgroundColor: '#3cba54' }} >
          <ListItemText primary="Social Studies" className="text-center" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/category/creativity"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('creativity');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={creativity} alt="creativity" />
          </ListItemIcon>
          <ListItemText primary="Creativity" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/education"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('education');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={education} alt="education" />
          </ListItemIcon>
          <ListItemText primary="Education" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/human"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('human');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={human} alt="human" />
          </ListItemIcon>
          <ListItemText primary="Human" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/leadership"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('leadership');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={leadership} alt="leadership" />
          </ListItemIcon>
          <ListItemText primary="Leadership" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/motivation"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('motivation');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={motivation} alt="motivation" />
          </ListItemIcon>
          <ListItemText primary="Motivation" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/productivity"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('productivity');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={productivity} alt="productivity" />
          </ListItemIcon>
          <ListItemText primary="Productivity" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/relationship"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('relationship');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={relationship} alt="relationship" />
          </ListItemIcon>
          <ListItemText primary="Relationship" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/selfimprovement"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('selfimprovement');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={selfimprovement} alt="selfimprovement" />
          </ListItemIcon>
          <ListItemText primary="Self-Improvement" />
        </ListItem>

        <ListItem button disableRipple style={{ backgroundColor: '#f4c20d' }} >
          <ListItemText primary="Art&Culture" className="text-center" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/category/culture"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('culture');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={culture} alt="culture" />
          </ListItemIcon>
          <ListItemText primary="Culture" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/design"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('design');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={design} alt="design" />
          </ListItemIcon>
          <ListItemText primary="Design" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/literature"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('literature');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={literature} alt="literature" />
          </ListItemIcon>
          <ListItemText primary="Literature" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/photography"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('photography');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={photography} alt="photography" />
          </ListItemIcon>
          <ListItemText primary="Photography" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/category/artists"
          onClick={this.props.closeLeftDrawer}
          onMouseEnter={() => {
            this.props.changeOnhoverCategory('artists');
          }}
        >
          <ListItemIcon>
            <img width="28" height="28" src={artists} alt="artists" />
          </ListItemIcon>
          <ListItemText primary="Artists" />
        </ListItem>

      </List>
    );
  }
}

LeftDrawer.propTypes = {
  changeOnhoverCategory: PropTypes.func,
  closeLeftDrawer: PropTypes.func
};

export default LeftDrawer;
