import React from 'react'
import './style.css'

const Course = (props) => {

    const courses = [
        {
          cIcon:"ti-heart",
          heading:"Community",
          pra:"Establishing a community that is tightly intertwined by the mutual love of Allah (SWT).", 
          
        },
        {
          cIcon:"ti-book",
          heading:"Education",
          pra:"Promoting weekly classes that not only educate but communicate core principles & ideas of Islam itself.",
        },
        {
          cIcon:"ti-stats-up",
          heading:"Relevance",
          pra:"As an organization we focus on teaching things that provide contemporary value from partnerships with leaders in education to personal finance.",
        },
        {
          cIcon:"ti-control-shuffle",
          heading:"Flexibile",
          pra:"We understand the need for modern solutions - all of our classes are 100% online and accessible to anyone with internet.",
        },
        {
          cIcon:"ti-cloud-up",
          heading:"Inclusive",
          pra:"We have made it a priority to include all who wish to learn into our teachings, we even created our Youth Wing to include the youth",
        },
        {
          cIcon:"ti-infinite",
          heading:"Scalable",
          pra:"Our classes and events are designed in a way that can support hundreds to thousands of people without sacrificing on quality.",
        },
    ]
    return(
        <div className="courses-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Our Values</span>
                            <h2>What We Offer</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {courses.map((cource, i) => (
                        <div className="col-lg-4 col-md-6 custom-grid col-12" key={i}>
                            <div className="courses-item">
                                <div className="course-icon"> 
                                       <span><i className={cource.cIcon}/></span>
                                </div>
                                <div className="course-text">
                                    <h2>{cource.heading}</h2>
                                    <p>{cource.pra}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Course;