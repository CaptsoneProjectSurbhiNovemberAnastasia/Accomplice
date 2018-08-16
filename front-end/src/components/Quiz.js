import React, { Component } from 'react'
import RadioForm from './RadioForm'
import { connect } from 'react-redux'
import { fetchQuestions } from '../store'

class Quiz extends Component {
  componentDidMount() {
    this.props.loadQuestions()
  }

  render() {
    const {questions} = this.props

    return (
      (questions.length === 0) ? null :
      <div>
        Quiz
        <RadioForm questions={questions}/>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  loadQuestions: () => dispatch(fetchQuestions())
})

const mapState = state => ({ questions: state.questions })


export default connect(mapState, mapDispatch)(Quiz)
