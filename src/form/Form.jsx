import Education from "./Education"
import Experience from "./Experience"
import PersonalInfo from "./PersonalInfo"

function Form({personalInfo, setPersonalInfo}) {

    return (
        <div className="form">
            <form action="www.google.com">
                <legend>Form</legend>
                <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
                <Education />
                <Experience />
            </form>
        </div>
    )
}

export default Form