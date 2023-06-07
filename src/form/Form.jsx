import Education from "./Education"
import Experience from "./Experience"
import PersonalInfo from "./PersonalInfo"

function Form({personalInfo, setPersonalInfo, educationInfo, setEducationInfo, experienceInfo, setExperienceInfo}) {

    return (
        <div className="form">
            <form action="www.google.com">
                <legend>Form</legend>
                <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
                <Education  educationInfo={educationInfo} setEducationInfo={setEducationInfo}/>
                <Experience experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo}/>
            </form>
        </div>
    )
}

export default Form