import { useState } from "react"
import Cv from "./cv/cv"
import Form from "./form/Form"
import { v4 as uid } from 'uuid';

function Content() {
    const [personalInfo, setPersonalInfo] = useState([{
        id: uid(),
        fname: '',
        lname: '',
        title: '',
        address: '',
        phone: '',
        email: '',
        description: ''
    }]);

    const [educationInfo, setEducationInfo] = useState({
        uniName: '',
        city: '',
        degree: '',
        subject: '',
        gDate: '',
    });

    
    return (
        <div className="content">
            <Form personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
            <Cv personalInfo={personalInfo} />
        </div>
    )
}

export default Content