import { useState } from "react"
import Cv from "./cv/cv"
import Form from "./form/Form"
import { v4 as uid } from 'uuid';

function Content({children}) {
    const [personalInfo, setPersonalInfo] = useState({
        id: uid(),
        fname: '',
        lname: '',
        title: '',
        address: '',
        phone: '',
        email: '',
        description: ''
    });

    const [educationInfo, setEducationInfo] = useState([{
        id: uid(),
        uniName: '',
        city: '',
        degree: '',
        subject: '',
        gDate: '',
    }]);

    const [experienceInfo, setExperienceInfo] = useState([{
        id: uid(),
        position: '',
        company: '',
        city: '',
        startDate: '',
        endDate: '',
        description: '',
    }]);

    
    return (
        <div className="content">
            <div className="form-container">
                <Form personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}
                        educationInfo={educationInfo} setEducationInfo={setEducationInfo}
                        experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo}>
                    {children}
                </Form>
            </div>
            <div className="cv-container">
                <Cv personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo}>
                    {children}
                </Cv>
            </div>
        </div>
    )
}

export default Content