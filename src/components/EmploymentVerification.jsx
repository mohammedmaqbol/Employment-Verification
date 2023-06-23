import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/css/animation.css';

// React Icons
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi"
import { CiCalendarDate, CiMoneyBill, CiLocationOn, CiUser } from "react-icons/ci";
import { MdOutlinePaid, MdOutlineSubtitles } from "react-icons/md";
import { GrCycle } from "react-icons/gr";
import { VscVerified } from "react-icons/vsc";
import { LuContact } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { TfiTime } from "react-icons/tfi";
import { BsCursor } from "react-icons/bs";


function EmploymentVerification() {
    const [companyname, setCompanyName] = useState('');
    const [employeename, setEmployeeName] = useState('');
    const [employeeposition, setEmployeePosition] = useState('');
    const [startdateofemployment, setStartDateofemployment] = useState('');
    const [enddateofemployment, setEndDateofemployment] = useState('');
    const [numberofhoursworked, setNumberofhoursworked] = useState('')
    const [isPaid, setIsPaid] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [hourlyRate, setHourlyRate] = useState('');
    const [isVerified, setIsVerified] = useState('');
    const [title, setTitle] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isFormFilled, setIsFormFilled] = useState(false);

    const handleInputChange = (e) => {
        setIsPaid(e.target.value);
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleHourlyRateChange = (e) => {
        setHourlyRate(e.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentPage === 1 && isFormFilled) {
            setIsFormFilled(true);
            setCurrentPage(currentPage + 1);
        } else if (currentPage === 2
            && companyname
            && employeename
            && employeeposition
            && startdateofemployment
            && enddateofemployment
            && numberofhoursworked
            && isPaid
            && selectedOption
            && hourlyRate
            && isVerified
            && title
            && contactNumber
        ) {
            const data = {
                companyname: companyname,
                employeename: employeename,
                employeeposition: employeeposition,
                startdateofemployment: startdateofemployment,
                enddateofemployment: enddateofemployment,
                numberofhoursworked: numberofhoursworked,
                isPaid: isPaid,
                selectedOption: selectedOption,
                hourlyRate: hourlyRate,
                isVerified: isVerified,
                title: title,
                contactNumber: contactNumber
            }
            emailjs.send('service_7a1pr9e', 'template_jqeek9w', data, 'MedwSOupMIQJ2eyF_')
                .then((result) => {
                    if (result) {
                        window.location.href = '/thanks';
                    }
                }, (error) => {
                    window.location.href = '/'
                })
        }

    };


    const nextStep = () => {
        if (currentPage === 1 && companyname && employeename && employeeposition && startdateofemployment && enddateofemployment && numberofhoursworked && isPaid) {
            setIsFormFilled(true);
            setCurrentPage(currentPage + 1);
            window.scrollTo(0, 0);
        }
    };

    const prevStep = () => {
        setCurrentPage(currentPage - 1);
        window.scrollTo(0, 0);
    };

    return (
        <main>
            <div className="container">
                <div className="logo">
                    <div className="logo-icon">
                        <img src={require('../assets/images/logo.png')} alt="BeRifma" />
                    </div>
                </div>
                <div className="wrapper">
                    <div className="row">
                        <div className="c-order tab-sm-100 col-md-6">
                            {/* side */}
                            <div className="left">
                                <article className="side-text">
                                    <h2> Employment Verification </h2>
                                </article>
                                <div className="left-img">
                                    <img
                                        src={require('../assets/images/left-bg.gif')}
                                        alt="BeRifma"
                                    />
                                </div>
                                <ul className="links">
                                    <li>
                                        <p><BsCursor size={16} /> First Pacific Group, Inc.</p>
                                    </li>
                                    <li>
                                        <p><CiLocationOn size={18} />675 Gilman St Palo Alto, CA 94301-2528</p>
                                    </li>
                                    <li>
                                        <IoCallOutline size={18} /><a href="tel:(415) 409-6200">(415) 409-6200</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-sm-100 offset-md-1 col-md-5">
                            <div className="right">
                                {/* form */}
                                <div id="step1" className="form-inner lightSpeedIn">
                                    <form id="steps" onSubmit={handleSubmit}>
                                        {currentPage === 1 && (
                                            <div>
                                                <div className="input-field">
                                                    <label htmlFor="companyname"><HiOutlineBuildingOffice2 size={19} /> Company Name <span>*</span></label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="companyname"
                                                        id="companyname"
                                                        placeholder="Type company name"
                                                        value={companyname}
                                                        onChange={(e) => setCompanyName(e.target.value)} />
                                                    <span></span>
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor="employeename"><CiUser size={19} /> Employee Name <span>*</span></label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="employeename"
                                                        id="employeename"
                                                        placeholder="Type employee name"
                                                        value={employeename}
                                                        onChange={(e) => setEmployeeName(e.target.value)} />
                                                    <span></span>
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor="employeeposition"><HiOutlineUserCircle size={19} /> Employee Position <span>*</span></label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="employeeposition"
                                                        id="employeeposition"
                                                        placeholder="Type employee position"
                                                        value={employeeposition}
                                                        onChange={(e) => setEmployeePosition(e.target.value)} />
                                                    <span></span>
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor="startdateofemployment">< CiCalendarDate size={22} /> Start date of employment <span>*</span></label>
                                                    <input
                                                        required
                                                        type="date"
                                                        name="startdateofemployment"
                                                        id="startdateofemployment"
                                                        placeholder="Type dates of employment"
                                                        value={startdateofemployment}
                                                        onChange={(e) => setStartDateofemployment(e.target.value)} />
                                                    <span></span>
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor="startdateofemployment">< CiCalendarDate size={22} /> End date of employment <span>*</span></label>
                                                    <input
                                                        required
                                                        type="date"
                                                        name="enddateofemployment"
                                                        id="enddateofemployment"
                                                        placeholder="Type dates of employment"
                                                        value={enddateofemployment}
                                                        onChange={(e) => setEndDateofemployment(e.target.value)} />
                                                    <span></span>
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor="numberofhoursworked">< TfiTime size={17} />  Number of hours worked <span>*</span></label>
                                                    <input
                                                        required
                                                        type="number"
                                                        name="numberofhoursworked"
                                                        id="numberofhoursworked"
                                                        placeholder="Type number of hours worked"
                                                        value={numberofhoursworked}
                                                        onChange={(e) => setNumberofhoursworked(e.target.value)} />
                                                    <span></span>
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor=""><MdOutlinePaid size={19} /> Is the employee salary paid? <span>*</span></label>
                                                    <div className="line">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                required
                                                                type="radio"
                                                                name="isPaid"
                                                                id="sYes"
                                                                value="yes"
                                                                onChange={handleInputChange}
                                                                checked={isPaid === 'yes'}
                                                                className="form-check-input"
                                                            />
                                                            <label htmlFor="sYes" className="form-check-label">Yes</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                required
                                                                type="radio"
                                                                name="isPaid"
                                                                id="sNo"
                                                                value="no"
                                                                onChange={handleInputChange}
                                                                checked={isPaid === 'no'}
                                                                className="form-check-input"
                                                            />
                                                            <label htmlFor="sNo" className="form-check-label">No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="btn btn-dark" onClick={nextStep}>Next</button>
                                            </div>
                                        )}

                                        {currentPage === 2 && (
                                            <div>
                                                <div className="input-field">
                                                    <label htmlFor=""><GrCycle size={18} />  Pay Cycle <span>*</span></label>
                                                    <div className="line">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                type="radio"
                                                                name="paymentCycle"
                                                                id='weekly'
                                                                value="weekly"
                                                                checked={selectedOption === 'weekly'}
                                                                onChange={handleOptionChange}
                                                                className="form-check-input"
                                                            />
                                                            <label htmlFor="weekly" className="form-check-label">Weekly</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                type="radio"
                                                                name="paymentCycle"
                                                                id='biweekly'
                                                                value="biweekly"
                                                                checked={selectedOption === 'biweekly'}
                                                                onChange={handleOptionChange}
                                                                className="form-check-input"
                                                            />
                                                            <label htmlFor="biweekly" className="form-check-label">Bi-Weekly</label>
                                                        </div>

                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                type="radio"
                                                                name="paymentCycle"
                                                                id='monthly'
                                                                value="monthly"
                                                                checked={selectedOption === 'monthly'}
                                                                onChange={handleOptionChange}
                                                                className="form-check-input"
                                                            />
                                                            <label htmlFor="monthly" className="form-check-label">Monthly</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                type="radio"
                                                                name="paymentCycle"
                                                                id='bimonthly'
                                                                value="bimonthly"
                                                                checked={selectedOption === 'bimonthly'}
                                                                onChange={handleOptionChange}
                                                                className="form-check-input"
                                                            />
                                                            <label htmlFor="bimonthly" className="form-check-label">Bi-Monthly</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor="hourly-rate">< CiMoneyBill size={22} />  Hourly Rate of Pay/Salary Pay <span>*</span></label>
                                                    <input
                                                        required
                                                        type="number"
                                                        name="hourlyrate"
                                                        id="hourlylrate"
                                                        placeholder="Type hourly rate"
                                                        value={hourlyRate}
                                                        onChange={handleHourlyRateChange} />
                                                    <span></span>
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor="isVerified">< VscVerified size={19} />  Verified by <span>*</span></label>
                                                    <input
                                                        type="text"
                                                        id="isVerified"
                                                        name='isVerified'
                                                        checked={isVerified}
                                                        onChange={(e) => setIsVerified(e.target.value)}
                                                        placeholder="verified by"
                                                    />
                                                    <span></span>
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor="title"><MdOutlineSubtitles size={19} />  Title <span>*</span></label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="title"
                                                        id="title"
                                                        placeholder="Type title"
                                                        value={title}
                                                        onChange={(e) => setTitle(e.target.value)} />
                                                    <span></span>
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor="contact-number"><LuContact size={19} /> Contact number <span>*</span></label>
                                                    <input
                                                        required
                                                        type="tel"
                                                        name="contactnumber"
                                                        id="contactnumber"
                                                        placeholder="Type contact number"
                                                        value={contactNumber}
                                                        onChange={(e) => setContactNumber(e.target.value)} />
                                                    <span></span>
                                                </div>
                                                <button className="btn btn-dark next" onClick={prevStep}>Previous</button>
                                                <button className="btn btn-success submit" type="submit">Submit</button>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </main >
    );
}

export default EmploymentVerification;