import { v4 as uid } from 'uuid';

function Experience({experienceInfo, setExperienceInfo}) {

    function onInfoChange(e) {   
        const newInfo = experienceInfo.map(entry => {
            if(entry.id === e.target.id) {
                entry[e.target.name] = e.target.value;
            }
            return entry;
        })
        setExperienceInfo(newInfo);
         
    }

    function onClick(e) {
        setExperienceInfo(prev => 
            prev.concat({
                id: uid(),
                position: '',
                company: '',
                city: '',
                startDate: '',
                endDate: '',
            }));
    }

    return(
        <section className="experience">
            <h3>Experience</h3>
            {experienceInfo.map(entry => {
                return (
                    <div className="entry" key={entry.id}>
                        <input type="text" name="position" id={entry.id} onChange={onInfoChange} placeholder="Position"/>
                        <input type="text" name="company" id={entry.id} onChange={onInfoChange} placeholder="Company"/>
                        <input type="text" name="city" id={entry.id} onChange={onInfoChange} placeholder="City"/>
                        <input type="text" name="from" id={entry.id} onChange={onInfoChange} placeholder="From"/>
                        <input type="tel" name="to" id={entry.id} onChange={onInfoChange} placeholder="To"/>
                    </div>
                );
            })}
            <button type="button" onClick={onClick}>Add</button>
        </section>
    )
}

export default Experience