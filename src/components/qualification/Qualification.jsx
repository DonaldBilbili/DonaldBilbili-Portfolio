import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    }
  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={ toggleState === 1 ? "qualification__button qualification__active" :
                 "qualification__button "}
                    onClick={() => toggleTab(1)}
                 >
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div className={ toggleState === 2 ? "qualification__button qualification__active " :
                 "qualification__button"}
                    onClick={() => toggleTab(2)}
                 >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> 
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? 
                "qualification__content qualification__content-active" :
              "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"> Front-End Developer</h3>
                            <span className="qualification__subtitle"> SDA Albania by Protik </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> May 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Administration of Computer Networks</h3>
                            <span className="qualification__subtitle"> "Harry Fulz" Institute Community College </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> March 2020 - August 2020
                            </div>
                        </div>

                       
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"> Bachelor - Italian Language</h3>
                            <span className="qualification__subtitle"> "Aleksander Xhuvani" University </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2012 - 2015
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Front-end Developer</h3>
                            <span className="qualification__subtitle"> SDA Albania P4 </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> May 2023 - Present
                            </div>
                        </div>

                       
                    </div> */}

                </div>


                   

                <div className={toggleState === 2 ? 
                "qualification__content qualification__content-active" :
              "qualification__content"}>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"> Front-End Developer</h3>
                            <span className="qualification__subtitle"> SDA Albania by Protik </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> May 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Web Developer</h3>
                            <span className="qualification__subtitle"> WordPress "HTML, CSS, JavaScript" </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2019 - Present "Free time" 
                            </div>
                        </div>

                       
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"> Service Technician</h3>
                            <span className="qualification__subtitle"> Alb Computers and Distribution </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    

                </div>

            </div>
        </div>
        </section>
  )
}

export default Qualification;