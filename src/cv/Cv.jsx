import CVHeader from "./CVHeader"


function Cv({personalInfo, educationInfo}) {

    return(
        <div className="cv">
            <CVHeader />
            {console.log(personalInfo)}
            {console.log(educationInfo)}
        </div>
    )
}

export default Cv