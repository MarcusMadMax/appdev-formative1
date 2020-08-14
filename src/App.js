import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Articles from './Articles'
import { Component } from 'react';

var token = '74e0c52345ef8a9dc62f6cc169df48d4'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      world: [],
      nation: [],
      sports:[],
      health: [],
    }
  }



  componentDidMount() {
    this.loadArticlesWorld()
    this.loadArticlesNation()
    this.loadArticlesSports()
    this.loadArticlesHealth()
  }

  loadArticlesWorld = () => {
    fetch('https://gnews.io/api/v3/topics/world?&token=' + token)
      .then(res => res.json())
      .then((data) => {
        var articles = data.articles
        this.setState({
          world: articles
        })
      })
  }

  loadArticlesNation = () => {
    fetch('https://gnews.io/api/v3/topics/nation?&token=' + token)
      .then(res => res.json())
      .then((data) => {
        var articles = data.articles
        this.setState({
          nation: articles
        })
      })
  }

  loadArticlesSports = () => {
    fetch('https://gnews.io/api/v3/topics/sports?&token=' + token)
      .then(res => res.json())
      .then((data) => {
        var articles = data.articles
        this.setState({
          sports: articles
        })
      })
  }

  loadArticlesHealth = () => {
    fetch('https://gnews.io/api/v3/topics/health?&token=' + token)
      .then(res => res.json())
      .then((data) => {
        var articles = data.articles
        this.setState({
          health: articles
        })
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


          <Tabs defaultActiveKey="world" transition={false} id="controlled-tab-example">
            <Tab eventKey="world" title="World">
              <div className="cards">
                {
                  this.state.world.map((articles) => {
                    var articlesprops = {
                      key: articles.id,
                      ...articles
                    }
                    return (
                      <Articles {...articlesprops} />
                    )
                  })
                }
              </div>
            </Tab>
            <Tab eventKey="nation" title="Nation">
              <div className="cards">
            {
                  this.state.nation.map((articles) => {
                    var articlesprops = {
                      key: articles.id,
                      ...articles
                    }
                    return (
                      <Articles {...articlesprops} />
                    )
                  })
                }
                </div>
            </Tab>
            <Tab eventKey="sports" title="Sports">
              <div className="cards">
            {
                  this.state.sports.map((sports) => {
                    var articlesprops = {
                      key: sports.id,
                      ...sports
                    }
                    return (
                      <Articles {...articlesprops} />
                    )
                  })
                }
                </div>
            </Tab>
            <Tab eventKey="health" title="Health">
              <div className="cards">
            {
                  this.state.health.map((health) => {
                    var articlesprops = {
                      key: health.id,
                      ...health
                    }
                    return (
                      <Articles {...articlesprops} />
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
