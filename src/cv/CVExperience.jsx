
function CVExperience({experienceInfo}) {

    return (
        <div className="cv-experience">
            {experienceInfo.map(entry => {
                return (
                    <div className="exp-entry">
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