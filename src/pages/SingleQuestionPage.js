import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchQuestion, deleteQuestion } from '../actions/questionActions'

import { Question } from '../components/Question'
import { Answer } from '../components/Answer'
import { Link } from 'react-router-dom'
import FormPageUpdate  from './QuestionFormPageUpdate'

const SingleQuestionPage = ({
  match,
  dispatch,
  question,
  hasErrors,
  loading,
}) => {
  const { id } = match.params
  const userId = localStorage.getItem("uid");

  useEffect(() => {
    dispatch(fetchQuestion(id))
  }, [dispatch, id])

  const onUpdate = (id) => {
    dispatch(deleteQuestion(id))
  }

  const renderQuestion = () => {
    if (loading.question) return <p>Loading question...</p>
    if (hasErrors.question) return <p>Unable to display question.</p>

    return <Question question={question} />
  }

  console.log('estoy por aca')
  // console.log(question.answers.reduce((total,pos) => total+= 1 , 0))
  console.log((question.answers && question.answers.length));

  const renderAnswers = () => {
    return (question.answers && question.answers.length) ? question.answers.map(answer => (
      <Answer key={answer.id} answer={answer} />
    )) : <p>Empty answer!</p>;
  }

  const newpregutna = ()=>{
    alert("no se puede")
    console.log("holaaa")
    return <FormPageUpdate></FormPageUpdate>
  }

  const updateQuestion = (userId) => {
    return <>
    {((question.answers && question.answers.length) >0)? newpregutna() : alert("va") }
    
    </>
  }

  return (
    <section>
      {renderQuestion()}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {console.log(question)}
      <button className="button right" onClick={()=>updateQuestion()}>update</button>

      {userId && <Link to={"/answer/" + id} className="button right">
        Reply
      </Link>}

      <h2>Answers</h2>
      {renderAnswers()}
    </section>
  )
}

const mapStateToProps = state => ({
  question: state.question.question,
  loading: state.question.loading,
  hasErrors: state.question.hasErrors
})

export default connect(mapStateToProps)(SingleQuestionPage)