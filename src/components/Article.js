import React, {Component} from 'react';

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.defaultOpen
    }
  }

  componentWillMount() {
    console.log('---', 'mounting')
  }

  componentWillReceiveProps(nextProps) {
    console.log('---', 'will receive props')
    if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
      isOpen: nextProps.defaultOpen
    })
  }

  componentWillUpdate() {
    console.log('---', 'will update')
  }

  render() {
    const {article} = this.props
    console.log('---', this.props)
    const style = {width: '75%'}
    const body = this.state.isOpen && <section>{article.text}</section>
    return (
      <div className="card mx-auto" style = {style}>
        <div className="card-header">
          <h2>
            {article.title}
            <button onClick={this.handleClick} className="btn btn-primary float-right">
              {this.state.isOpen ? 'cloze' : 'open'}
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
    console.log('---', 'clicked')
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Article