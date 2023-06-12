
function CVExperience({experienceInfo}) {

    return (
        <div className="cv-experience">
            <h2>Work Experience</h2>
            {experienceInfo.map(entry => {
                return (
                    <div className="exp-entry" key={entry.id}>
                        <div className="exp-top">
                            <h3>{entry.position}, {entry.city}</h3>
                            <p>{entry.company} | {entry.startDate} - {entry.endDate}</p>
                        </div>
                        <p>{entry.description}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default CVExperience