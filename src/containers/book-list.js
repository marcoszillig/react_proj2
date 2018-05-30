import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title}
          onClick={() => this.props.selectBook(book)} 
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render() {
    return ( 
      <ul className = "list-group col-sm-4" >
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returner will show up as props
  // inside BookList
  return {
    books: state.books  
  }
}

// Anything returner from this function will end up as  props 
// on the BookList container
function mapDispatchToProps(dispatch){
  // Whenever selectBook is called, the result should be passed
  //to all of reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// Prommote BookList from a component to a container  - it needs to know
// about this new dispatch method, selectbook. Make it available 
// as a group
export default connect(mapStateToProps, mapDispatchToProps)(BookList);