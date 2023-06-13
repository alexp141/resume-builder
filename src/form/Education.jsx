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

    function onClickAdd(e) {
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

    function onClickDelete(e) {
        setEducationInfo(prev => 
            prev.slice(0,-1)); //takes out last element
    }

    return(

        <section className="education form-sec">
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
            <button type="button" onClick={onClickAdd}>Add</button>
            <button type="button" onClick={onClickDelete}>Delete</button>
        </section>   
    )
}

export default Education