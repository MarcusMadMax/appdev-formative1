import React from 'react';
import './App.css';
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
import Cards from './Card'
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [

        {
          description: "Oil settled higher on Monday, supported by data suggesting Chinese factories were returning to pre-pandemic levels, signs of rising energy demand and hopes for an agreement in the United States on ...",
          image: "https://images.gnews.io/c0b3b01d298aac98badb7b84f528a972",
          publishedAt: "2020-08-10 17:22:00 UTC",
          title: "Oil settles higher on Chinese factory data, U.S. stimulus hopes",
          url: "https://finance.yahoo.com/news/oil-prices-back-rise-u-003254628.html",
        },
        {
          description: "Oil settled higher on Monday, supported by data suggesting Chinese factories were returning to pre-pandemic levels, signs of rising energy demand and hopes for an agreement in the United States on ...",
          image: "https://images.gnews.io/c0b3b01d298aac98badb7b84f528a972",
          publishedAt: "2020-08-10 17:22:00 UTC",
          title: "Oil settles higher on Chinese factory data, U.S. stimulus hopes",
          url: "https://finance.yahoo.com/news/oil-prices-back-rise-u-003254628.html",
        },

      ]
    }
  }



  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Fake News</h1>
          <h4>The best in town</h4>
        </header>

        <main>
        <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
          <div className="cards">
            {
              this.state.articles.map((things) => {
                var articlesprops = {
                  key: things.id,
                  ...things
                }
                return(
                  <Cards {...articlesprops}/>
                )
              })
            }
          </div>


          {/* <Tabs defaultActiveKey="profile">
            <Tab eventKey="top" title="Top Stories">
              <div className="card">
                <img className="card-img-top" src="" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Hello</h5>
                  <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eligendi?</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </Tab>
            <Tab eventKey="politics" title="Politics">
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
            </Tab>
          </Tabs> */}

        </main>
      </div >
    );
  }
}

export default App;
