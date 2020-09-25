import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing/Listing'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      articles: [],
      filteredArticles:[]
    }
  }

componentDidMount() {
  fetch(
    "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=25"
  )
    .then((response) => response.json())
    .then((data) =>
      this.setState({
        articles: data.hits,
      })
      );
    }
handleChange = (evt) => {
  const filteredResults = this.state.articles.filter(article => {
    if(article.author === evt.target.value || article.date === evt.target.value || article.title === evt.target.value) {
      return article; 
    }
    return filteredResults;
  })
}
    
    // componentDidUpdate() {
      //   console.log(this.state.articles);
      // }
      
onSubmit = (evt) => {
  evt.preventDefault()
  // fetch(
  //   "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=25"
  // )
  //   .then((response) => response.json())
  //   .then((data) =>
  //     this.setState({
  //       articles: data.hits,
  //     })
  //   );

  this.setState({
    filteredArticles: this.filteredResults,
  })
}


// handleUpdate = (evt) =>{
//   this.setState({
//       searchTerm: evt.target.value
//   })
// }

// handleClick = (event) =>{
//   event.preventDefault()
// }

  render() {
    return (
      <div className="App">
        <h1 className="title">Hacker News!</h1>
        <form onSubmit={this.onSubmit}>
          <button>Submit</button>
          <input type='text'name='searchInput' id='searchInput' placeholder='Search by Author/Title/Date' onChange={this.handleChange}></input>
        </form>
        <div>
          <ul>
            {this.state.filteredArticles.map((article, index) => (
              <Listing article={article} key={index} />
            ))}
          </ul>
        </div>
      </div>
    );


}
}

export default App;
