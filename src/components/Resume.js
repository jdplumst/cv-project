import React, { Component } from 'react';
import ResumePersonalInfo from './ResumePersonalInfo';
import ResumeEducation from './ResumeEducation';

class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='flex justify-center'>
                <div className='container m-10 bg-gray-100 shadow-lg p-5 h-screen'>
                    <ResumePersonalInfo personalInfo={this.props.personalInfo} />
                    <ResumeEducation />
                </div>
            </div>
        )
    }
}

export default Resume;