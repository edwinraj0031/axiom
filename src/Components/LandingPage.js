import React, { useState } from 'react'

import background from '../Asset/Images/background.mov'
import logo from '../Asset/Images/logo.svg'
import comment from '../Asset/Images/bubble-chat.png'
// import Ticker from 'react-ticker'


import "../Asset/StyleSheets/LandingPage.scss";

import icons from '../Asset/Icon/Icon';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function LandingPage() {

    // const commentForm = yup.object().shape({
    //     comments: yup.string().required("Enter comments *"),
    // })
    //for desktop view
    const { register: register1, handleSubmit: submit1, formState: { errors: error1 }, reset: reset1 } = useForm();

    //for mobile view
    const { register: register2, handleSubmit: submit2, formState: { errors: error2 }, reset: reset2 } = useForm();




    //use state

    //1.) to set comment section (open or close)
    const [commentSection, setCommentSection] = useState([false, false])

    //2.) to store comment data
    const [commentData, setCommentData] = useState({})

    //function
    //****** */
    //1.) to change comment section open status

    function changeCommentSectionOpenStatus(index) {

        if (index == 0) {
            reset1()
        } else if (index == 1) {
            reset2()
        }
        let temp = [...commentSection]
        temp[index] = !temp[index]
        setCommentSection(temp)
        setCommentSection(temp)
    }

    //2.)to send data 
    function sendData1(e) {

        // console.log("erropr1",error1);
        // console.log("send data1", e);


        let doc = document.querySelector(".form1")
        // console.log("doc", doc);

        var url = "https://script.google.com/macros/s/AKfycbyRLnwmHglCVZyQbJ14yEIxlxVYFE6hwjgZOZDiwFjkVseMPx1cYYQy7UBJmRUUMwU/exec"

        // var url = "https://script.google.com/macros/s/AKfycbzLrrYu3mLT-oRyejBdgjuQrLQrpH_VVTk2Il_Z0h-hzLj53KL4-_0eMKWUKJvk7Jm_/exec"
        var formData = new FormData(doc)
        fetch(
            url,
            {
                method: "POST",
                body: formData
            }
        )
            .then((res) => {
                let temp = [...commentSection]
                temp[0] = !temp[0]
                setCommentSection(temp)
                reset1()
                res.json()
            })
            .then((data) => {
                // console.log("data", data);
            })
            .catch((error) => {
                // console.log(error);
            });
    }

    function sendData2(e) {

        // console.log("error2", error2);
        // console.log("send data2", e);

        let doc = document.querySelector(".form2")
        // console.log("doc", doc);

        var url = "https://script.google.com/macros/s/AKfycbyRLnwmHglCVZyQbJ14yEIxlxVYFE6hwjgZOZDiwFjkVseMPx1cYYQy7UBJmRUUMwU/exec"

        // var url = "https://script.google.com/macros/s/AKfycbzLrrYu3mLT-oRyejBdgjuQrLQrpH_VVTk2Il_Z0h-hzLj53KL4-_0eMKWUKJvk7Jm_/exec"
        var formData = new FormData(doc)
        fetch(
            url,
            {
                method: "POST",
                body: formData
            }
        )
            .then((res) => {
                let temp = [...commentSection]
                temp[1] = !temp[1]
                setCommentSection(temp)
                reset2()
                res.json()
            })
            .then((data) => {
                // console.log("data", data);
            })
            .catch((error) => {
                // console.log(error);
            });
    }

    return (
        <>
            <video className='videoTag' autoPlay loop muted>
                <source src={background} type='video/mp4' />
            </video>
            <div id='desktop-content' >
                <div className='row'>
                    <div className='col-lg-4 main-content'>
                        <div className='marquee-box'>
                            <span className='heading'>SPIRIT OF EDUCATION</span>
                            <ol className='data'>
                                <li>
                                    <span>
                                        Humankind has established itself as the most technologically advanced species on the planet by excelling in two traits.
                                        Learning: gaining knowledge from experience.
                                        Teaching: sharing knowledge through communication.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Learning is ubiquitous in nature. Lower lifeforms rely on instinctive behaviour that is encoded in their DNA. This genetic information can only update very gradually through the process of natural selection. Such organisms spend their entire lifetime as little more than organic robots. Higher lifeforms that have evolved central nervous systems with sufficient complexity can process sensory information to make conscious decisions. The retention of memories in conjunction with referencing to past experiences, the brain can shape the organism’s behaviour. Learning liberates an organism from sole dependence on genetic programming and provides agency to direct its course through life.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Numerous species have evolved the ability to signal other life forms and communicate simple ideas through sounds and visual cues. Verbal communication lasts only as long as the sound persists and the impression it leaves in the memory of any that listen. Spoken ideas live as long as they echo in the minds of the listeners, while written words reverberate across the pages of history. Oral traditions can transmit enormous corpus of knowledge across generations but are limited by the intellectual capacity and the level of consciousness of the stewards of those information.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Humans gained the evolutionary edge by developing sophisticated writing systems that have enabled the accumulation of generational knowledge and discourses lasting centuries. The collective knowledge thus accrued is at a gargantuan scale and is exponentially growing. This demands a system of transmission that not only provides preservation but also ensures comprehension. Such an orchestration of organised communication is possible within the framework of educational platforms like schools and Universities. Educational research is the study and refinement of such frameworks.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Facts may present themselves invariably to any who faces them but no two persons are the same. People carry diversity at every level, from their genetics to temperaments. Biases may be categorised but the perception of every person is nuanced and demands unique approaches to communicate effectively. One form cannot fit all and educational institutions cannot function like manufacturing facilities. Empathy elevates the craft of instruction to the art of teaching.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Human curiosity compels exploration into the landscape of the unknown and rationality acts as a trusted compass for guidance. History has taught us that the most systematic method to decipher the natural phenomena is the scientific method. The entire scientific enterprise is supported by epistemology, the philosophical inquiry into the nature of knowledge and the validity of its acquisition. At L&ERH, we go further and undertake research to enhance the crystallisation of knowledge that is seeded by engaging experiences in the crucible of comfortable learning spaces. Scientific concepts cease to be abstract and become rooted in reality when they are taught in tandem with experiments and demonstrations.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        To discover and design effective teaching tools and methods one has to investigate how understanding blooms in a person’s mind. Learning goes beyond the assimilation of knowledge and its comprehension. An epiphany occurs when seemingly disparate pieces of information are integrated to create meaning.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Pedagogy is the study and refinement of teaching. The pedagogy adopted by a teacher defines their actions, judgements, and communication style and takes into consideration the social, cultural, political context. Learning occurs best when knowledge is drawn from experience and implemented subsequently to create new experiences. Experience, Learn and Apply is the mantra of the new educational movement.
                                    </span>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className='col-lg-4 mid-content'>
                    </div>

                    <div className='col-lg-4 right-col'>
                        <div className='top-content content'>
                            <div className='logo'>
                                <img src={logo} />
                            </div>
                            {
                                commentSection[0] == false ?
                                    <span className='img-box' onClick={() => changeCommentSectionOpenStatus(0)}>
                                        <img src={comment} className='comment' title='Enter your comments' />
                                    </span>
                                    :
                                    <div className='comment-box'>
                                        <div className='comment-section card'>
                                            <div className='row error-row'>
                                                <div className='col-lg-10 error '>
                                                    <span >{error1.comments?.message}</span>
                                                </div>

                                                <div className='col-lg-2'>
                                                    <span className='btn cancel-button' onClick={() => changeCommentSectionOpenStatus(0)}>
                                                        {icons.cancel}
                                                    </span>
                                                </div>
                                            </div>

                                            <form className='form1' onSubmit={submit1((data) => { sendData1(data) })}>
                                                <div className='row mt-2 input'>
                                                    <textarea className='form-control' name='comments' placeholder='Enter your comments' {...register1('comments', { required: "Enter your comments *" })} />
                                                </div>
                                                <div className='row mt-2 input'>
                                                    <div className='col-lg-10'>
                                                        <input className='form-control email' name='email' type='email' placeholder='Enter your email' />
                                                    </div>
                                                    <div className='col-lg-2' >
                                                        <button className='btn btn-block btn-success' type='submit'>{icons.send}</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                            }

                        </div>
                    </div>

                </div>
            </div>

            <div id='mobile-content'>
                {/* <div className='box'> */}
                <div className='heading-section'>
                    <div className='logo'>
                        <img src={logo} />
                    </div>

                </div>
                <div className='bottom-box'>

                    <div className='content-section'>

                        <div className='heading'>
                            <span className=''>SPIRIT OF EDUCATION</span>
                        </div>

                        <ol className='data'>
                            <li>
                                <span>
                                    Humankind has established itself as the most technologically advanced species on the planet by excelling in two traits.
                                    Learning: gaining knowledge from experience.
                                    Teaching: sharing knowledge through communication.
                                </span>
                            </li>
                            <li>
                                <span>
                                    Learning is ubiquitous in nature. Lower lifeforms rely on instinctive behaviour that is encoded in their DNA. This genetic information can only update very gradually through the process of natural selection. Such organisms spend their entire lifetime as little more than organic robots. Higher lifeforms that have evolved central nervous systems with sufficient complexity can process sensory information to make conscious decisions. The retention of memories in conjunction with referencing to past experiences, the brain can shape the organism’s behaviour. Learning liberates an organism from sole dependence on genetic programming and provides agency to direct its course through life.
                                </span>
                            </li>
                            <li>
                                <span>
                                    Numerous species have evolved the ability to signal other life forms and communicate simple ideas through sounds and visual cues. Verbal communication lasts only as long as the sound persists and the impression it leaves in the memory of any that listen. Spoken ideas live as long as they echo in the minds of the listeners, while written words reverberate across the pages of history. Oral traditions can transmit enormous corpus of knowledge across generations but are limited by the intellectual capacity and the level of consciousness of the stewards of those information.
                                </span>
                            </li>
                            <li>
                                <span>
                                    Humans gained the evolutionary edge by developing sophisticated writing systems that have enabled the accumulation of generational knowledge and discourses lasting centuries. The collective knowledge thus accrued is at a gargantuan scale and is exponentially growing. This demands a system of transmission that not only provides preservation but also ensures comprehension. Such an orchestration of organised communication is possible within the framework of educational platforms like schools and Universities. Educational research is the study and refinement of such frameworks.
                                </span>
                            </li>
                            <li>
                                <span>
                                    Facts may present themselves invariably to any who faces them but no two persons are the same. People carry diversity at every level, from their genetics to temperaments. Biases may be categorised but the perception of every person is nuanced and demands unique approaches to communicate effectively. One form cannot fit all and educational institutions cannot function like manufacturing facilities. Empathy elevates the craft of instruction to the art of teaching.
                                </span>
                            </li>
                            <li>
                                <span>
                                    Human curiosity compels exploration into the landscape of the unknown and rationality acts as a trusted compass for guidance. History has taught us that the most systematic method to decipher the natural phenomena is the scientific method. The entire scientific enterprise is supported by epistemology, the philosophical inquiry into the nature of knowledge and the validity of its acquisition. At L&ERH, we go further and undertake research to enhance the crystallisation of knowledge that is seeded by engaging experiences in the crucible of comfortable learning spaces. Scientific concepts cease to be abstract and become rooted in reality when they are taught in tandem with experiments and demonstrations.
                                </span>
                            </li>
                            <li>
                                <span>
                                    To discover and design effective teaching tools and methods one has to investigate how understanding blooms in a person’s mind. Learning goes beyond the assimilation of knowledge and its comprehension. An epiphany occurs when seemingly disparate pieces of information are integrated to create meaning.
                                </span>
                            </li>
                            <li>
                                <span>
                                    Pedagogy is the study and refinement of teaching. The pedagogy adopted by a teacher defines their actions, judgements, and communication style and takes into consideration the social, cultural, political context. Learning occurs best when knowledge is drawn from experience and implemented subsequently to create new experiences. Experience, Learn and Apply is the mantra of the new educational movement.
                                </span>
                            </li>
                        </ol>
                    </div>

                    <div className='comment-section '>
                        {
                            commentSection[1] == false ?
                                <span className='img-box' onClick={() => changeCommentSectionOpenStatus(1)}>
                                    <img src={comment} className='comment' title='Enter your comments' />
                                </span>
                                :
                                <div className='comment-box'>
                                    <div className='card'>
                                        <div className='row error-row'>
                                            <div className='col-lg-10 error'>
                                                <span >{error2.comments?.message}</span>
                                            </div>

                                            <div className='col-lg-2'>
                                                <span className='btn cancel-button' onClick={() => changeCommentSectionOpenStatus(1)}>
                                                    {icons.cancel}
                                                </span>
                                            </div>
                                        </div>

                                        <form className='form2' onSubmit={submit2((data) => { sendData2(data) })}>
                                            <div className='row input'>
                                                <textarea className='form-control' name='comments' placeholder='Enter your comments' {...register2('comments', { required: "Enter your comments *" })} />
                                            </div>

                                            <div className='row input mt-2'>
                                                <div className='col-lg-10'>
                                                    <input className='form-control' name='email' type='email' placeholder='Enter your email' />
                                                </div>
                                                <div className='col-lg-2 button'>
                                                    <button className='btn btn-block btn-success' type='submit'>{icons.send}</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                        }

                    </div>

                </div>

                {/* </div> */}
            </div>
        </>
    )
}
