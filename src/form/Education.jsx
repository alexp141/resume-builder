import { v4 as uid } from 'uuid';

function Education({educationInfo, setEducationInfo}) {

    function onInfoChange(e) {   
        const newInfo = educationInfo.map(entry => {
            if(entry.id === e.target.id) {
                entry[e.target.name] = e.target.value;
            }
            return entry;
        })
        setEducationInfo(newInfo);
         
    }

    function onClick(e) {
        setEducationInfo(prev => 
            prev.concat({
                id: uid(),
                uniName: '',
                city: '',
                degree: '',
                subject: '',
                gDate: '',
            }));
    }


    return(

        <section className="education">
            <h3>Education</h3>
            {educationInfo.map(entry => {
                return (
                    <div className="entry" key={entry.id}>
                        <input type="text" name="uniName" id={entry.id} onChange={onInfoChange} placeholder="University Name"/>
                        <input type="text" name="city" id={entry.id} onChange={onInfoChange} placeholder="City"/>
                        <input type="text" name="degree" id={entry.id} onChange={onInfoChange} placeholder="Degree"/>
                        <input type="text" name="subject" id={entry.id} onChange={onInfoChange} placeholder="Subject"/>
                        <input type="text" name="gDate" id={entry.id} onChange={onInfoChange} placeholder="Graduation Date"/>
                    </div>
                );
            })}
            <button type="button" onClick={onClick}>Add</button>
        </section>   
    )
}

export default Education