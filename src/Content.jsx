import { useState } from "react"
import Cv from "./cv/cv"
import Form from "./form/Form"

function Content() {
    const [personalInfo, setPersonalInfo] = useState({
        fname: '',
        lname: '',
        title: '',
        address: '',
        phone: '',
        email: '',
        description: ''
    });
    
    return (
        <div className="content">
            <Form personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
            <Cv personalInfo={personalInfo} />
        </div>
    )
}

export default Content