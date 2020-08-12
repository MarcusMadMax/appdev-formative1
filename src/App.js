import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import World from './World'
import Politics from './Politics'
import Weather from './Weather'
import Sports from './Sports'
import { Component } from 'react';

var token = '74e0c52345ef8a9dc62f6cc169df48d4'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [
        { id: 1, title: "The latest on the coronavirus pandemic: Live updates", description: "The latest on the coronavirus pandemic: Live updates" },
        { id: 2, title: "Putin claims Russia has registered the world's fir…ronavirus vaccine, says his daughter has taken it" },
        { id: 3, title: "Apple Daily prints half a million copies in defiance of founder Jimmy Lai's arrest in Hong" }
      ]
    }
  }

  // addAticles = (data) => {
  //   var newArticles = {
  //     id: Date.now(),
  //     ...data
  //   }

  //   var newList = [newArticles, ...this.state.articles]
  //   this.setState({ articles: newList })
  // }

  loadArticlesByTopic = (topic) => {
    var url = 'https://gnews.io/api/v3/topics/'+topic+'?token='+token
    fetch(url)
      .then( res=>res.json())
      .then((data)=>{
        var articles = data.articles
        console.log(articles)
      })
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


          <Tabs defaultActiveKey="world" transition={false} id="noanim-tab-example">
            <Tab eventKey="world" title="World">
              <div className="cards">

                {
                  this.state.articles.map((things) => {
                    var articlesprops = {
                      key: things.id,
                      ...things
                    }
                    return (
                      <World {...articlesprops} />
                    )
                  })
                }
              </div>
            </Tab>
            <Tab eventKey="politics" title="Politics">
              <div className="cards">

                {
                  this.state.articles.map((things) => {
                    var articlesprops = {
                      key: things.id,
                      ...things
                    }
                    return (
                      <Politics {...articlesprops} />
                    )
                  })
                }
              </div>
            </Tab>
            <Tab eventKey="weather" title="Weather">
              <div className="cards">

                {
                  this.state.articles.map((things) => {
                    var articlesprops = {
                      key: things.id,
                      ...things
                    }
                    return (
                      <Weather {...articlesprops} />
                    )
                  })
                }
              </div>
            </Tab>
            <Tab eventKey="sports" title="Sports">
              <div className="cards">

                {
                  this.state.articles.map((things) => {
                    var articlesprops = {
                      key: things.id,
                      ...things
                    }
                    return (
                      <Sports {...articlesprops} />
                    )
                  })
                }
              </div>
            </Tab>
          </Tabs>
        </main>
      </div >
    );
  }
}

export default App;
