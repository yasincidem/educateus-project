import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
const convert = require('xml-js');


class NewsFeeds extends Component {
    state = {
        // arr: []
    };
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }

  componentDidUpdate() {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    // fetch('https://cors-anywhere.herokuapp.com/http://bio.biologists.org/rss/mfr.xml')
    //   .then((data) => data.text())
    //   .then((data) => this.setState({ arr: convert.xml2js(data).elements[0].elements }));
  }

  render() {
    // const items = this.state.arr.slice(9).map((item, index) => {
    //     return (
    //       <a
    //         key={index}
    //         className="embedly-card"
    //         data-card-controls="0"
    //         href={item.elements[1].elements[0].text}
    //       >
    //       </a>
    //     );
    // });
    return (
      <div>
        <div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-5">
                  <a
                    className="twitter-timeline"
                    data-link-color="#F5F8FA"
                    data-chrome="transparent noheader noborders noscrollbar"
                    href="https://twitter.com/EU_Biology?ref_src=twsrc%5Etfw"
                  >
                  </a>
                  <Helmet>
                    <script src="https://platform.twitter.com/widgets.js"></script>
                  </Helmet>
                </div>
                <div className="col-lg-6">
                  {/* {items} */}
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
export default NewsFeeds;
