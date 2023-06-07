import CVHeader from "./CVHeader"


function Cv({personalInfo, educationInfo, experienceInfo}) {

    return(
        <div className="cv">
            <CVHeader />

            {console.log(experienceInfo)}
        </div>
    )
}

export default Cv