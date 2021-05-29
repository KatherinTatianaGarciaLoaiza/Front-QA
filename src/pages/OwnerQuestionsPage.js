import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchOwnerQuestions, deleteQuestion, fetchQuestion } from '../actions/questionActions'
import { Question } from '../components/Question'

const OwnerQuestionsPage = ({ dispatch, loading, questions, hasErrors, redirect }) => {
    const history = useHistory();
    useEffect(() => {
        const userId = localStorage.getItem("uid");
        dispatch(fetchOwnerQuestions(userId))
    }, [dispatch]);

    useEffect(() => {
        if (redirect) {
            const userId = localStorage.getItem("uid");
            dispatch(fetchOwnerQuestions(userId))
        }
    }, [redirect, dispatch]);

    const onDelete = (id) => {
        dispatch(deleteQuestion(id))
    }

    const onUpdate = (id) => {
        dispatch(fetchQuestion(id, true)).then((value) => {
            if (value.answers.length > 0) {
                alert("No se puede modificar la pregunta, se creara una nueva")
                history.push("/new");
            } else {
                history.push({
                    pathname:'/questiones',
                    state: value 
                });
            }
        });
    }

    const renderQuestions = () => {
        if (loading) return <p>Loading questions...</p>
        if (hasErrors) return <p>Unable to display questions.</p>

        return questions.map(question => <Question
            key={question.id}
            question={question}
            excerpt
            onDelete={onDelete}
            onUpdate={onUpdate} />)
    }

    return (
        <section>
            <h1>Questions</h1>
            {renderQuestions()}
        </section>
    )
}

const mapStateToProps = state => ({
    loading: state.question.loading,
    questions: state.question.questions,
    hasErrors: state.question.hasErrors,
    redirect: state.question.redirect,
})

export default connect(mapStateToProps)(OwnerQuestionsPage)
