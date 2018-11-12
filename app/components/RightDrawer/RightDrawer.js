import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

class RightDrawer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }
  render() {
    return (
      <div>
        {this.props.category === 'chemisty' && (
          <React.Fragment>
            <div
              style={{
                border: '1px solid white',
                borderRadius: '5px',
                display: 'inline-block',
                margin: 8,
              }}
            >
              <div style={{ display: 'inline' }}>
                <div className="float-left" style={{ margin: 8 }}>
                  <Avatar src="https://image.flaticon.com/icons/svg/1176/1176327.svg"></Avatar>
                </div>
                <div className="float-left">
                  <h1 className="lead" style={{ color: 'white', margin: 8 }}>NUCLEAR CHEMISTRY</h1>
                </div>

              </div>
              <Chip
                color="primary"
                label="Isotopes"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="Nuclear fusion‎"
                onClick={() => this.props.closeLeftDrawer()}
                color="secondary"
                style={{ margin: 8 }}
              />

              <Chip
                label="Nuclear magnetic resonance‎"
                onClick={() => this.props.closeLeftDrawer()}
                color="secondary"
                style={{ margin: 8 }}
              />

              <Chip
                label="Radioactivity‎ "
                onClick={() => this.props.closeLeftDrawer()}
                color="secondary"
                style={{ margin: 8 }}
              />
            </div>
            <div className="col-lg-6">
              <a
                style={{
                  fontSize: 10
                }}
                className="twitter-timeline"
                data-theme="dark"
                data-link-color="#F5F8FA"
                data-chrome="transparent noheader noborders noscrollbar"
                href="https://twitter.com/NatureChemistry?ref_src=twsrc%5Etfw"
              >
              </a>
              <Helmet>
                <script src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
              </Helmet>
            </div>
          </React.Fragment>
        )}

        {this.props.category === 'history' && (
          <div
            style={{
              border: '1px solid white',
              borderRadius: '5px',
              display: 'inline-block',
              margin: 8
            }}
          >

            <div style={{ display: 'inline' }}>
              <div className="float-left" style={{ margin: 8 }}>
                <Avatar src="https://image.flaticon.com/icons/svg/882/882971.svg"></Avatar>
              </div>
              <div className="float-left">
                <h1 className="lead" style={{ color: 'white', margin: 8 }}>ANCIENT WORLD</h1>
              </div>

            </div>

            <Chip
              color="primary"
              label="American Civilizations & Empires"
              onClick={() => this.props.closeLeftDrawer()}
              style={{ margin: 8 }}
            />

            <Chip
              label="Ancient Egypt"
              onClick={() => this.props.closeLeftDrawer()}
              color="secondary"
              style={{ margin: 8 }}
            />

            <Chip
              label="Chinese Civilizations & Empires"
              onClick={() => this.props.closeLeftDrawer()}
              color="secondary"
              style={{ margin: 8 }}
            />

            <Chip
              label="Feudal Japan"
              onClick={() => this.props.closeLeftDrawer()}
              color="secondary"
              style={{ margin: 8 }}
            />

            <Chip
              label="Greece & Rome"
              onClick={() => this.props.closeLeftDrawer()}
              color="secondary"
              style={{ margin: 8 }}
            />

            <Chip
              label="Indian Civilizations & Empires"
              onClick={() => this.props.closeLeftDrawer()}
              color="secondary"
              style={{ margin: 8 }}
            />

            <Chip
              label="Mesopotamia & Agricultural Revolution"
              onClick={() => this.props.closeLeftDrawer()}
              color="secondary"
              style={{ margin: 8 }}
            />

            <Chip
              label="All"
              onClick={() => this.props.closeLeftDrawer()}
              color="default"
              style={{ margin: 8 }}
            />

          </div>
        )}
        {this.props.category === 'history' && (
          <div
            style={{
              border: '1px solid white',
              borderRadius: '5px',
              display: 'inline-block',
              margin: 8
            }}
          >

            <div style={{ display: 'inline' }}>
              <div className="float-left" style={{ margin: 8 }}>
                <Avatar src="https://image.flaticon.com/icons/png/512/814/814513.png"></Avatar>
              </div>
              <div className="float-left">
                <h1 className="lead" style={{ color: 'white', margin: 8 }}>COUNTRIES</h1>
              </div>

            </div>

            <Chip
              color="primary"
              label="United States"
              onClick={() => this.props.closeLeftDrawer()}
              style={{ margin: 8 }}
            />

            <Chip
              label="France"
              onClick={() => this.props.closeLeftDrawer()}
              style={{ margin: 8 }}
            />

            <Chip
              label="Spain"
              onClick={() => this.props.closeLeftDrawer()}
              style={{ margin: 8 }}
            />

            <Chip
              label="Korea"
              onClick={() => this.props.closeLeftDrawer()}
              style={{ margin: 8 }}
            />

            <Chip
              label="Italy"
              onClick={() => this.props.closeLeftDrawer()}
              style={{ margin: 8 }}
            />

            <Chip
              label="England"
              onClick={() => this.props.closeLeftDrawer()}
              style={{ margin: 8 }}
            />

            <Chip
              label="China"
              onClick={() => this.props.closeLeftDrawer()}
              style={{ margin: 8 }}
            />

            <Chip
              label="Japan"
              onClick={() => this.props.closeLeftDrawer()}
              style={{ margin: 8 }}
            />

            <Chip
              label="All"
              onClick={() => this.props.closeLeftDrawer()}
              color="secondary"
              style={{ margin: 8 }}
            />
          </div>
        )}
        {this.props.category === 'history' && (
          <React.Fragment>
            <div
              style={{
                border: '1px solid white',
                borderRadius: '5px',
                display: 'inline-block',
                margin: 8
              }}
            >

              <div style={{ display: 'inline' }}>
                <div className="float-left" style={{ margin: 8 }}>
                  <Avatar src="https://image.flaticon.com/icons/svg/1198/1198971.svg"></Avatar>
                </div>
                <div className="float-left">
                  <h1 className="lead" style={{ color: 'white', margin: 8 }}>WARS & BATTLES</h1>
                </div>

              </div>

              <Chip
                label="World War I "
                color="primary"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="World War II"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="American Civil War"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="Norman Conquest of England"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="Chinese Civil War"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="Vienna"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="All"
                onClick={() => this.props.closeLeftDrawer()}
                color="secondary"
                style={{ margin: 8 }}
              />
            </div>
            <div className="col-lg-6">
              <a
                className="twitter-timeline"
                data-theme="dark"
                data-link-color="#F5F8FA"
                data-chrome="transparent noheader noborders noscrollbar"
                href="https://twitter.com/HISTORY?ref_src=twsrc%5Etfw"
              >
              </a>
              <Helmet>
                <script src="https://platform.twitter.com/widgets.js"></script>
              </Helmet>
            </div>
          </React.Fragment>
        )}
        {this.props.category === 'biology' && (
          <React.Fragment>
            <div
              style={{
                border: '1px solid white',
                borderRadius: '5px',
                display: 'inline-block',
                margin: 8
              }}
            >

              <div style={{ display: 'inline' }}>
                <div className="float-left" style={{ margin: 8 }}>
                  <Avatar src="https://image.flaticon.com/icons/svg/1176/1176353.svg"></Avatar>
                </div>
                <div className="float-left">
                  <h1 className="lead" style={{ color: 'white', margin: 8 }}>BIOLOGY</h1>
                </div>

              </div>

              <Chip
                label="Animals"
                color="primary"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="Bacteria & Prokaryotes"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="Cells"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="Chemistry of Life"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="Ecology"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="Evolution"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="Genetics"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="Health"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="All"
                onClick={() => this.props.closeLeftDrawer()}
                color="secondary"
                style={{ margin: 8 }}
              />
            </div>
            <div className="col-lg-6">
              <a
                className="twitter-timeline"
                data-theme="dark"
                data-link-color="#F5F8FA"
                data-chrome="transparent noheader noborders noscrollbar"
                href="https://twitter.com/Discovery?ref_src=twsrc%5Etfw"
              >
              </a>
              <Helmet>
                <script src="https://platform.twitter.com/widgets.js"></script>
              </Helmet>
            </div>
          </React.Fragment>
        )}
        {this.props.category === 'geology' && (
          <React.Fragment>
            <div
              style={{
                border: '1px solid white',
                borderRadius: '5px',
                display: 'inline-block',
                margin: 8
              }}
            >

              <div style={{ display: 'inline' }}>
                <div className="float-left" style={{ margin: 8 }}>
                  <Avatar src="https://image.flaticon.com/icons/svg/722/722075.svg"></Avatar>
                </div>
                <div className="float-left">
                  <h1 className="lead" style={{ color: 'white', margin: 8 }}>GEOLOGY</h1>
                </div>

              </div>

              <Chip
                label="Agrogeology"
                color="primary"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="Environmental geology"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="Ethnogeology"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="Forensic geology"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="Geophysics"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="Marine geology"
                onClick={() => this.props.closeLeftDrawer()}
                style={{ margin: 8 }}
              />

              <Chip
                label="All"
                onClick={() => this.props.closeLeftDrawer()}
                color="secondary"
                style={{ margin: 8 }}
              />
            </div>
            <div className="col-lg-6">
              <a
                className="twitter-timeline"
                data-theme="dark"
                data-link-color="#F5F8FA"
                data-chrome="transparent noheader noborders noscrollbar"
                href="https://twitter.com/geolsoc?ref_src=twsrc%5Etfw"
              >
              </a>
              <Helmet>
                <script src="https://platform.twitter.com/widgets.js"></script>
              </Helmet>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

RightDrawer.propTypes = {
  category: PropTypes.string,
  closeLeftDrawer: PropTypes.func
};

export default RightDrawer;
