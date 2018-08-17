import React, { Component } from 'react'
import RadioForm from './RadioForm'
import { connect } from 'react-redux'
import { fetchQuestions } from '../store'
import { setTraitValues } from '../store'

class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      i: 0,
      answer: 0,
      answersArray: [],
      values: [-33,-15,0,15,33]
    }
  }

  componentDidMount() {
    this.props.loadQuestions()
  }

  currentQuestion = async () => {
    await this.setState({
      i: this.state.i+1,
      answersArray: [...this.state.answersArray, +this.state.answer]
    })
  }

  handleChange = (evt) => {
    this.setState({
      answer: evt.target.value,
    })
  }

  handleClick = (evt, id) => {
    evt.preventDefault()
    this.currentQuestion()
  }


  handleSubmit = (evt) => {
    evt.preventDefault()

    let finalTraitValues = new Array(5).fill(0)
    let j = 0
    for (let i = 0; i < 15; i ++) {
      if (i%3 === 0 && i !== 0) {
        j++
        finalTraitValues[j]= finalTraitValues[j] + this.state.answersArray[i]
      } else {
        finalTraitValues[j]= finalTraitValues[j] + this.state.answersArray[i]
      }
      for (let j = 0; j < 5; j++) {
        if (finalTraitValues[j] < 0) {
          finalTraitValues[j] = 0
        }
      }
    }

    this.props.collectTraitValues(finalTraitValues)
  }


  render() {
    const {questions, user} = this.props

    return (
      (questions.length === 0) ? null :
      <div>
        <h3>Personality Quiz</h3>
        {(this.state.i > 14) ?
        <div><form onSubmit={this.handleSubmit}>All done, please submit your answers!<br/>
          <button type="submit" onSubmit={this.handleSubmit}>Submit</button></form></div> :
          <RadioForm values={this.state.values} answer={this.state.answer} question={questions[this.state.i]} handleChange={this.handleChange} handleClick={this.handleClick}/>
        }
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  loadQuestions: () => dispatch(fetchQuestions()),
  collectTraitValues: (traitValues) => {
    dispatch(setTraitValues(traitValues))
  }
})

const mapState = state => ({
  questions: state.questions,
  answersArray: state.answersArray
})


export default connect(mapState, mapDispatch)(Quiz)
