import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing/Listing'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      articles: [],
      filteredArticles:[],
      text: '',
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

componentDidUpdate() {
  console.log(this.state.filteredArticles);
}

handleChange = (evt) => {
this.setState({
  text: evt.target.value,
})
// const filteredResults = this.state.articles.filter(article => {
//     return article.title.toLowerCase().includes(evt.target.value.toLowerCase())
// })

// this.setState({
//   filteredArticles: filteredResults
// })
}

handleSubmit = (evt) => {
  evt.preventDefault()
//   console.log('Clicked')
  // const filteredResults = this.state.articles.filter(article => article.title.toLowerCase()===this.state.text.toLowerCase())

// this.setState({
//   filteredArticles: filteredResults,
// })
const filteredResults = this.state.articles.filter(article => {
  return article.title.toLowerCase().includes(this.state.text.toLowerCase())
})

this.setState({
filteredArticles: filteredResults
})
}

      
// onSubmit = (evt) => {
//   evt.preventDefault()
//   // fetch(
//   //   "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=25"
//   // )
//   //   .then((response) => response.json())
//   //   .then((data) =>
//   //     this.setState({
//   //       articles: data.hits,
//   //     })
//   //   );

//   this.setState({
//     filteredArticles: this.filteredResults,
//   })
// }


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
        <form onSubmit={this.handleSubmit}>
          <input type='submit' value='Search'/>
          <input type='text'name='searchInput' id='searchInput' placeholder='Search by Author/Title/Date' onChange={this.handleChange}/>
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
