import { useState } from "react"
import Cv from "./cv/cv"
import Form from "./form/Form"
import { v4 as uid } from 'uuid';

function Content() {
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
    }]);

    
    return (
        <div className="content">
            <Form personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}
                    educationInfo={educationInfo} setEducationInfo={setEducationInfo}
                    experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo}/>
            <Cv personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo}/>
        </div>
    )
}

export default Content