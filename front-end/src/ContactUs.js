import './ContactUs.css'
import React, { useState } from 'react'
const ContactUs = () => (
    <div className = "ContactUs">
        <h1 className = "ContactUs-header"> Issues with a booking? <b>Contact Us...</b> </h1>

        <div className = "formAndTitleHolder">
        <h3 className = "complaintFormHeader"> Report a booking or service issue: </h3>
        <br/>

        <form className="ComplaintFormHolder">
            <label for="first-name">First name:  <input type="text" placeholder="First Name" id="first-name" name="first-name"/></label>
            <label for="last-name">Last name:  <input type="text" placeholder="Last Name" id="last-name" name="last-name"/></label>
            <label for="complaint-title">Complaint Title:  <input type="text" placeholder="Complaint Title" id="complaint-title" name="complaint-title"/></label>
            <label for="booking-id">Booking Id:  <input type="text" placeholder="Booking Id" id="booking-id" name="booking-id"/></label>
            <label for="problem-description">Describe your issue:  <input type="text" placeholder="Issue Description" id="problem-description" name="problem-description"/></label>
            <br/>
            <input type = "submit" value="Submit Complaint" />
        </form>

        </div>

        <div className = "People-Holder">
        <h3 className = "People-header"> Reach out to our developers: </h3>
        <div id="Mark-Lung">
        Mark Lung - <a href=" https://github.com/ml6754" target="_blank"> Github </a>
        </div>

        <div id="Zack-Goldberg">
        Zack Goldberg - <a href=" https://github.com/zrg228" target="_blank"> Github </a>
        </div>

        <div id="Geoffrey-Budiman">
        Geoffrey Budiman - <a href=" https://github.com/geoffreybudiman91" target="_blank"> Github </a>
        </div>

        <div id="Aditya-Pradeep">
        Aditya Pradeep - <a href=" https://github.com/adityapradeep12" target="_blank"> Github </a>
        </div>

        <div id="Rayhan-Ahmed">
        Rayhan Ahmed - <a href=" https://github.com/rfahmed" target="_blank"> Github </a>
        </div>
        </div>
    </div>
)
export default ContactUs;