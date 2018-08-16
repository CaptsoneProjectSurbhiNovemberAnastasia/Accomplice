import React, { Component } from 'react'
import RadioForm from './RadioForm'
import { connect } from 'react-redux'
import { fetchQuestions } from '../store'

class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      i: 0,
      answer: 0,
      checked: false,
      extraversionValue: 0,
      emotionalStabilityValue: 0,
      agreeablenessValue: 0,
      conscientiousnessValue: 0,
      intellectImaginationValue: 0
    }
  }

  componentDidMount() {
    this.props.loadQuestions()
  }

  currentQuestion = () => {
    this.setState({
      i: this.state.i+1,
      answer: this.state.answer,
      extraversionValue: this.state.extraversionValue,
      emotionalStabilityValue: this.state.emotionalStabilityValue,
      agreeablenessValue: this.state.agreeablenessValue,
      conscientiousnessValue: this.state.conscientiousnessValue,
      intellectImaginationValue: this.state.intellectImaginationValue
    })
  }

  handleChange = (evt) => {
    console.log('ON CHANGE',evt.target.value)
    console.log('STATE',this.state.answer)
    this.setState({
      answer: evt.target.value,
      checked: !this.state.checked
    })
  }

  handleClick = (evt) => {
    evt.preventDefault()
    this.currentQuestion()
  }


  render() {
    const {questions, handleSubmit} = this.props
    return (
      (questions.length === 0) ? null :
      <div>
        Personality Quiz
        <RadioForm checked={this.state.checked} question ={questions[this.state.i]} handleChange={this.handleChange} handleSubmit={handleSubmit} handleClick={this.handleClick}/>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  loadQuestions: () => dispatch(fetchQuestions()),
  handleSubmit (evt) {
    evt.preventDefault()
    //dispatch final values to the store to update user_trait values
  }
})

const mapState = state => ({
  questions: state.questions,
  extraversionValue: state.extraversionValue,
  emotionalStabilityValue: state.emotionalStabilityValue,
  agreeablenessValue: state.agreeablenessValue,
  conscientiousnessValue: state.conscientiousnessValue,
  intellectImaginationValue: state.intellectImaginationValue
})


export default connect(mapState, mapDispatch)(Quiz)
