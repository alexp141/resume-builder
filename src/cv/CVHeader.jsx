
function CVHeader({personalInfo}) {

    return(
        <div className="cv-header">
            <div className="name-info">
                <h1>{personalInfo.fname + ' ' + personalInfo.lname}</h1>
                <h3>{personalInfo.title}</h3>
            </div>
            <div className="header-p-info">
                <p>{personalInfo.phone}</p>
                <p>{personalInfo.email}</p>
                <p>{personalInfo.address}</p>
            </div>
        </div>
    )
}

export default CVHeader