import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { putQuestion } from '../actions/questionActions'
import { connect } from 'react-redux'
import { useLocation } from "react-router-dom";

const FormPageUpdate = ({ dispatch, loading, redirect,id, userId, question, type, category }) => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const location = useLocation();

    const[texto, setTexto] = useState(location.state.question);

    useEffect(() => {
        console.log(location.pathname); // result: '/secondpage'
        console.log(location.state);
     }, [location]);

    const onSubmit = data => {
        data.userId =  location.state.userId;
        data.id = location.state.id;
        dispatch(putQuestion(data));
    };

    useEffect(() => {
        if (redirect) {
            history.push(redirect);
        }
    }, [redirect, history])


    console.log(question);
    return (
        <section>
            <h1>New Question</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label for="type">Type selected</label>
                    <input type="text" value={location.state.type} readOnly/>
                    <select {...register("type")} id="">
                        <option value="OPEN (LONG OPEN BOX)">OPEN (LONG OPEN BOX)</option>
                        <option value="OPINION (SHORT OPEN BOX)">OPINION (SHORT OPEN BOX)</option>
                        <option value="WITH RESULT (OPEN BOX WITH LINK)">WITH RESULT (OPEN BOX WITH LINK)</option>
                        <option value="WITH EVIDENCE (OPEN BOX WITH VIDEO)">WITH EVIDENCE (OPEN BOX WITH VIDEO)</option>
                    </select>
                </div>
                <div>
                    <label for="category">Category selected</label>
                    <input type="text" value={location.state.category} readOnly/>
                    <select {...register("category")} id="category">
                        <option value="TECHNOLOGY AND COMPUTER">TECHNOLOGY AND COMPUTER</option>
                        <option value="SCIENCES">SCIENCES</option>
                        <option value="SOFTWARE DEVELOPMENT">SOFTWARE DEVELOPMENT</option>
                        <option value="SOCIAL SCIENCES">SOCIAL SCIENCES</option>
                        <option value="LANGUAGE">LANGUAGE</option>

                    </select>
                </div>

                <div>
                    <label for="question">Question</label>
                    <textarea id="question" {...register("question", { required: true, maxLength: 300 })} value={texto} onChange = {(e)=>setTexto(e.target.value)}/>
                </div>
                <button type="submit" className="button" disabled={loading} >{
                    loading ? "Saving ...." : "Save"
                }</button>
            </form>
        </section>

    );
}

const mapStateToProps = state => ({
    loading: state.question.loading,
    redirect: state.question.redirect,
    hasErrors: state.question.hasErrors,
})

export default connect(mapStateToProps)(FormPageUpdate)