import CVHeader from "./CVHeader"


function Cv({personalInfo}) {

    return(
        <div className="cv">
            <CVHeader />
            <h1>{personalInfo[0].fname}</h1>
            <h1>{personalInfo.length > 1 ? personalInfo[1].fname : 'test2'}</h1>
        </div>
    )
}

export default Cv