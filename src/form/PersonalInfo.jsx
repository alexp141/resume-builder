
function PersonalInfo({personalInfo, setPersonalInfo}) {

    function onInfoChange(e) {   
        setPersonalInfo({
            ...personalInfo,
            [e.target.name] : e.target.value
        });
         
    }

    return (
        <section className="p-info form-sec">
            <h3>Personal Information</h3>
                <div className="entry">
                    <input type="text" name="fname"  placeholder="First Name" onChange={onInfoChange}/>
                    <input type="text" name="lname"  placeholder="Last Name" onChange={onInfoChange}/>
                    <input type="text" name="title"  placeholder="Title" onChange={onInfoChange}/>
                    <input type="text" name="address"  placeholder="Address" onChange={onInfoChange}/>
                    <input type="tel" name="phone"  placeholder="Phone number" onChange={onInfoChange}/>
                    <input type="email" name="email"  placeholder="Email" onChange={onInfoChange}/>
                    <textarea name="description"  placeholder="Description" onChange={onInfoChange}/>
                </div>
        </section>
    )
}

export default PersonalInfo