import React, {Component} from 'react';

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentWillMount() {
    console.log('---', 'mounting')
  }

  componentWillUpdate() {
    console.log('---', 'will update')
  }

  render() {
    const {article, isOpen} = this.props
    const style = {width: '75%'}
    const body = isOpen && <section> className="card-text">{article.text}</section>
    return (
      <div className="card mx-auto" style = {style}>
        <div className="card-header">
          <h2 onClick = {this.incrementCounter}>
            {article.title}
            clicked {this.state.count}
            <button onClick={this.handleClick} className="btn btn-primary float-right">
              {isOpen ? 'cloze' : 'open'}
            </button>
          </h2>
        </div>
          <div className="card-body">
            <h6 className="card-subtitle text-muted">
              creation date: {(new Date(article.date)). toDateString()}
            </h6>
            {body}
          </div>
      </div>
    )
  }


  handleClick = () => {
    // this.setState({
    //   isOpen: !this.state.isOpen
    // })
  }
}

export default Article