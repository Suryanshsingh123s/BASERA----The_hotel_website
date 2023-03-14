import React, { useState } from 'react';
import Hero from '../components/Hero';
import jsPDF from 'jspdf'
// import img1 from "../images/basera-low-resolution-logo-color-on-transparent-background.png"

const App = () => {

    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [checkin, setcheckin] = useState('');
    const [checkout, setcheckout] = useState('');

    const handle = () => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Email', email);
        localStorage.setItem('Phone', phone);
        localStorage.setItem('Checkin', checkin);
        localStorage.setItem('Checkout', checkout);
    };

    const jspdfgenrator = () => {
        var doc = new jsPDF('p', 'pt')
        // doc.addImage(40, 20, {img1})
        doc.text(40, 70, "Name :- "+localStorage.getItem('Name'))
        doc.text(40, 90, "Email :-"+localStorage.getItem('Email'))
        doc.text(40, 110, "Phone NO. :-"+localStorage.getItem('Phone'))
        doc.text(40, 130, "Check-In :-"+localStorage.getItem('Checkin'))
        doc.text(40, 150, "Check-out :-"+localStorage.getItem('Checkout'))
        doc.setFont('courier');
        doc.text(20, 210, "YOUR BOOKING IS CONFORMED")
        doc.save('reciept.pdf')
    }

    return (
        <>
            <Hero>
                <div className="App">
                    Name:
                    <input
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />
                    Email :
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    /><br />
                    Phone no. :
                    <input
                        type="number"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                    /><br />
                    Check-In date :
                    <input
                        type="date"
                        placeholder="Checkin"
                        value={checkin}
                        onChange={(e) => setcheckin(e.target.value)}
                    /><br />
                    Check-Out date :
                    <input
                        type="date"
                        placeholder="Checkout"
                        value={checkout}
                        onChange={(e) => setcheckout(e.target.value)}
                    /><br />
                    <div>
                        <button onClick={handle}>Done</button>
                    </div>
                    <div>
                        <button onClick={jspdfgenrator}>download pdf</button>
                    </div>
                </div>
            </Hero>
        </>
    );
};
export default App;