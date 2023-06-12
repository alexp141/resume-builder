import CVEducation from "./CVEducation"
import CVExperience from "./CVExperience"
import CVHeader from "./CVHeader"
import Description from "./Description"


function Cv({personalInfo, educationInfo, experienceInfo}) {

    return(
        <div className="cv">
            <CVHeader personalInfo={personalInfo}/>
            <Description description={personalInfo.description} />
            <CVExperience experienceInfo={experienceInfo} />
            <CVEducation educationInfo={educationInfo} />
        </div>
    )
}

export default Cv