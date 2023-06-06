
function PersonalInfo({personalInfo, setPersonalInfo}) {

    function onInfoChange(e) {        
        setPersonalInfo({
            ...personalInfo,
            [e.target.name] : e.target.value
        }); 
    }

    return (
        <>
            <section className="p-info">
                <h3>Personal Information</h3>
                <input type="text" name="fname" id="fname" placeholder="First Name" onChange={onInfoChange}/>
                <input type="text" name="lname" id="lname" placeholder="Last Name" onChange={onInfoChange}/>
                <input type="text" name="title" id="title" placeholder="Title" onChange={onInfoChange}/>
                <input type="text" name="address" id="address" placeholder="Address" onChange={onInfoChange}/>
                <input type="tel" name="phone" id="phone" placeholder="Phone number" onChange={onInfoChange}/>
                <input type="email" name="email" id="email" placeholder="Email" onChange={onInfoChange}/>
                <input type="text" name="description" id="description" placeholder="Description" onChange={onInfoChange}/>
            </section>
            <button>Add</button>
        </>
    )
}

export default PersonalInfo