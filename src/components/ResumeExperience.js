import React, { Component } from "react";

class ResumeExperience extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <h3 className='text-2xl mt-4'>Experience</h3>
                <hr className='border-black mb-4'></hr>
                {this.props.experience.map((experience) => {
                        return (
                            <div key={experience.id}>
                                <div className='grid grid-cols-2'>
                                    <span><strong>{experience.job}</strong></span>
                                    <span className='text-right'>{experience.start} - {experience.end}</span>
                                    <span>{experience.company}</span>
                                    <span className='text-right'>{experience.city}, {experience.province}</span>
                                </div>
                                <ul className="mb-4">
                                {experience.descriptions.map((description) => {
                                    return (
                                        <li key={description.id}>- {description.description}</li>
                                    )
                                })}
                                </ul>
                            </div>
                        )
                    })}
            </div>
        )
    };
}

export default ResumeExperience;