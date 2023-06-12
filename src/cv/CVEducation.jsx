
function CVEducation({educationInfo}) {

    return (
        <div className="cv-education">
            <h2>Education</h2>
            {educationInfo.map(entry => {
                return (
                    <div className="edu-entry" key={entry.id}>
                        <div className="edu-top">
                            <h3>{entry.degree}, {entry.subject}</h3>
                            <p>{entry.city} | {entry.gDate}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default CVEducation