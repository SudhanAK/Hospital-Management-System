import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Register() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');
    const [num, setNum] = useState('');
    const [dob, setDob] = useState('');
    const [gen, setGen] = useState('');
    const [bg, setBg] = useState('');
    const [addr, setAddr] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [pin, setPin] = useState('');
    const [err, setErr] = useState('');

    async function Fetch(e) {
        e.preventDefault();

        if (!name) return setErr("*Fill the name");
        if (!pass) return setErr("*Fill the password");
        if (!cpass) return setErr("*Fill the confirm password");
        if (!mail) return setErr("*Fill the mail");
        if (!num) return setErr("*Fill the mobile number");
        if (!dob) return setErr("*Fill the date of birth");
        if (!gen) return setErr("*Fill the gender");
        if (!bg) return setErr("*Fill the blood group");
        if (!addr) return setErr("*Fill the address");
        if (!state) return setErr("*Fill the State");
        if (!city) return setErr("*Fill the City");
        if (!pin) return setErr("*Fill the PinCode");

        if (name.length <= 3) return setErr("*Name Is Too Short");
        if (pass.length < 5) return setErr("*Password should at least 5 characters");
        if (pass !== cpass) return setErr("*Password and confirm password are different");
        if (num.length > 10) return setErr("*Invalid Mobile Number");
        if (pin.length !== 6) return setErr("*Invalid PinCode");
        if (new Date(dob) > new Date()) return setErr("*Date Should not be greater than current");
        if (!mail.includes('@') || mail.lastIndexOf('@') > mail.indexOf('.com')) return setErr("*Invalid Mail");

        try {
            const res = await fetch('http://localhost:3000/patient-detail', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mail })
            });

            const data1 = await res.json();

            if (data1 && Object.keys(data1).length > 0) {
                return alert("Already Have An Account!!");
            }

            localStorage.setItem("mail", mail);

            const registerRes = await fetch('http://localhost:3000/add-patient', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, mail, pass, cpass, num, dob, gen, bg, addr, state, city, pin })
            });

            const registerData = await registerRes.text();
            alert(registerData);

            navigate('/PatientDash');

        } catch (error) {
            console.error(error);
            setErr("*Something went wrong");
        }
    }

    return (
        <div className='parent'>
            <div className='child'>
                <form>
                    <p style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>
                        <span style={{ color: 'green' }}>HealthCure</span> <span style={{ color: 'darkred' }}>Hospital</span>
                    </p>
                    <div className='equals'>
                        {/* form inputs here (same as original) */}
                        <div>
                            <label className='text'> Full Name</label><br /><br />
                            <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Your Name...' required></input>
                        </div>
                        <div>
                            <label className='text'> Email</label><br /><br />
                            <input onChange={(e) => setMail(e.target.value)} type="email" placeholder='Your Email...' required></input>
                        </div>
                        <div>
                            <label className='text'> Password</label><br /><br />
                            <input onChange={(e) => setPass(e.target.value)} type="password" placeholder='Your Password...' required></input>
                        </div>
                        <div>
                            <label className='text'> Confirm Password</label><br /><br />
                            <input onChange={(e) => setCpass(e.target.value)} type="password" placeholder='Your Password...' required></input>
                        </div>
                        <div>
                            <label className='text'> Phone Number</label><br /><br />
                            <input onChange={(e) => setNum(e.target.value)} type="number" placeholder='Your Phone...' required></input>
                        </div>
                        <div>
                            <label className='text'> Date Of Birth</label><br /><br />
                            <input onChange={(e) => setDob(e.target.value)} type="date" className='datebox' required></input>
                        </div>
                        <div>
                            <label className='text' > Gender</label><br /><br />
                            <div className='flex'>
                                <input onChange={(e) => setGen(e.target.value)} className='gender' type="radio" id='male' name="genders" value="male" required></input>
                                <label className='text'>Male</label>
                            </div>
                            <div className='flex'>
                                <input onChange={(e) => setGen(e.target.value)} className='gender' type="radio" id='female' name="genders" value="female" required></input>
                                <label className='text'>Female</label>
                            </div>
                            <div className='flex'>
                                <input onChange={(e) => setGen(e.target.value)} className='gender' type="radio" id="Others" name="genders" value="other" required></input>
                                <label className='text'>Others</label>
                            </div>
                        </div>
                        <div className='blood'>
                            <label className='text'> Blood Group</label><br /><br />
                            <select onChange={(e) => setBg(e.target.value)} className='drop'>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>
                        </div>
                        <div>
                            <label className='text'> Address</label><br /><br />
                            <input onChange={(e) => setAddr(e.target.value)} type="text" placeholder='Your Address...' required></input>
                        </div>
                        <div>
                            <label className='text'> State</label><br /><br />
                            <input onChange={(e) => setState(e.target.value)} type="text" placeholder='Your State...' required></input>
                        </div>
                        <div>
                            <label className='text'> City</label><br /><br />
                            <input onChange={(e) => setCity(e.target.value)} type="text" placeholder='Your City...' required></input>
                        </div>
                        <div>
                            <label className='text'> Pincode</label><br /><br />
                            <input onChange={(e) => setPin(e.target.value)} type="number" placeholder='Your Pincode...' required></input>
                        </div>
                    </div>

                    <p style={{ marginTop: "20px", textAlign: "center", color: "red" }}>{err}</p>
                    <br />
                    <button onClick={Fetch} type='submit' className='button2'>Register</button><br />
                    <p style={{ textAlign: "center", marginTop: "10px" }}>Already have an account?<Link to="/" className='nav' style={{ color: "brown" }} >Login</Link></p><br />
                </form>
            </div>
        </div>
    )
}

export default Register;
