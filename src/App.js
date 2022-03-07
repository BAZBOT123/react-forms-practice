import { useState } from "react";
import "./App.css";

export default function App() {

  //TODO: Add your state fields here

  // const [userData, setUserData] = useState({
  //   fullName: '',
  //   Address: '',
  //   phoneNumber: '',
  //   email: '',
  //   complaint: '',
  //   tickContact: '',
  //   tickterms: false
  // })

  const [fullName, setFullName] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [complaint, setComplaint] = useState('')
  const [contacted, setContacted] = useState('')
  const [terms, setTerms] = useState(false)

  console.log('form data:', fullName, address, phoneNumber, email, complaint)
  console.log('ticks data:', contacted)
  console.log('terms data:', terms)

  function fullNameInput(event) {
    const inputValue = event.target.value
    setFullName(inputValue)
  }

  function addressInput(event) {
    const inputValue = event.target.value
    setAddress(inputValue)
  }

  function phoneNumberInput(event) {
    const inputValue = event.target.value
    setPhoneNumber(inputValue)
  }

  function emailInput(event) {
    const inputValue = event.target.value
    setEmail(inputValue)
  }

  function complaintInput(event) {
    const inputValue = event.target.value
    setComplaint(inputValue)
  }

  function contactedInput(event) {
    const inputValue = event.target.value
    setContacted(inputValue)
  }

  function checkboxInput(event) {
    const inputValue = event.target.checked;
    setTerms(inputValue);
  }


  return (
    <>
      <form className="form">
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text"
              name="name"
              onChange={fullNameInput}
              value={fullName}
              required />
          </label>
          <label>
            Address
            <input type="text" 
            name="address"
            onChange={addressInput}
              value={address} />
          </label>
          <label>
            Phone Number
            <input type="telephone" 
            name="phone" 
            onChange={phoneNumberInput}
              value={phoneNumber} />
          </label>

          <label>
            Email
            <input type="email" 
            name="email"
            onChange={emailInput}
              value={email} />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={complaintInput}
              value={complaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" 
              name="contact" 
              value="phone"
              onChange={contactedInput}
              checked={contacted === 'phone'} />
              Phone
            </label>

            <label>
              <input type="radio"
              name="contact" 
              value="email"
              onChange={contactedInput}
              checked={contacted === 'email'}
              />
              Email
            </label>

            <label>
              <input type="radio" 
              name="contact" 
              value="post" 
              onChange={contactedInput}
              checked={contacted === 'post'}/>
              Slow Mail
            </label>

            <label>
              <input type="radio" 
              name="contact" 
              value="none" 
              onChange={contactedInput}
              checked={contacted === 'none'}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" 
            name="consent" 
            id="consent" 
            onChange={checkboxInput}
          checked={terms} />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
