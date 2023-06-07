import { v4 as uid } from 'uuid';

function PersonalInfo({personalInfo, setPersonalInfo}) {

    function onInfoChange(e) {   
        const newInfo = personalInfo.map(entry => {
            if(entry.id === e.target.id) {
                entry[e.target.name] = e.target.value;
            }
            return entry;
        })
        setPersonalInfo(newInfo);
         
    }

    function onClick(e) {
        setPersonalInfo(prev => 
            prev.concat({
                id: uid(),
                fname: '',
                lname: '',
                title: '',
                address: '',
                phone: '',
                email: '',
                description: ''
            }));
    }

    return (
        <>
            <section className="p-info">
                <h3>Personal Information</h3>
                {personalInfo.map(entry => {
                    return (
                        <div className="entry" key={entry.id}>
                        <input type="text" name="fname" id={entry.id} placeholder="First Name" onChange={onInfoChange}/>
                    <input type="text" name="lname" id={entry.id} placeholder="Last Name" onChange={onInfoChange}/>
                    <input type="text" name="title" id={entry.id} placeholder="Title" onChange={onInfoChange}/>
                    <input type="text" name="address" id={entry.id} placeholder="Address" onChange={onInfoChange}/>
                    <input type="tel" name="phone" id={entry.id} placeholder="Phone number" onChange={onInfoChange}/>
                    <input type="email" name="email" id={entry.id} placeholder="Email" onChange={onInfoChange}/>
                    <input type="text" name="description" id={entry.id} placeholder="Description" onChange={onInfoChange}/>
                </div>
                    );
                })}
                <button type="button" onClick={onClick}>Add</button>
            </section>
        </>
    )
}

export default PersonalInfo