import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import CustomerService from '../Service/CustomerService'

const validateCustomer=(custdata) =>{
    const errors={}
    let pattern = /^([a-zA-Z\s]+)$/
    //let numpat = /^([0-9]{10})$/
    //let emailpattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    if (!custdata.customerName) {
        errors.customerName="Name is required"
    }
    else if(!pattern.test(custdata.customerName))
    {
        errors.customerName="Alphabets Only"
    }
    if (!custdata.gender) {
        errors.gender="Please select a gender"
    }
    if (!custdata.dob) {
        errors.dob="Please enter your date of birth"
    }
    if (!custdata.customerEmailID) {
        errors.customerEmailID="Please enter your email address"
    }
    if (!custdata.customerContact) {
        errors.customerContact="Please enter your mobile number"
    }
    // else if (!numpat.test(custdata.mobile.value)) {
    //     errors.mobile="Please enter valid mobile number"
    // }
    if (!custdata.customerAddress) {
        errors.customerAddress="Please enter your address"
    }
    if (!custdata.ch) {
        errors.ch="Please agree to these terms and conditions"
    }
    return errors
}

export default function CustomerRegistration(){


	const [Customer,SetCustomer] = useState({
        customerName:'',
        dob:'',
        customerContact:'',
        customerAddress:'',
        customerEmailID:'',
        customerGender:''
    })

	const navigate = useNavigate();

    const handleChange = (e) =>{
        const value = e.target.value;
        SetCustomer({...Customer,[e.target.name]:value})
    }

    const addCustomer = (e) =>{
        CustomerService.createCustomer(Customer).then((res)=>{
            e.preventDefault();
            alert("New Customer has been added");
            navigate('/custlist');
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
	
    const formik = useFormik({
        initialValues:{
            customerName:'',
            gender:'',
            dob:'',
            customerEmailID:'',
            customerContact:'',
            customerAddress:'',
            ch:''
        },
        validate:validateCustomer
    })
        return (
            <div>
                <div className="container mt-5 col-6">
                    <div id="myalert"></div>
                    <h1 style={{textAlign:'center'}}>Customer Registration </h1><hr/><br/>
                    <form id="form" method="post" onSubmit={formik.handleSubmit || ((e)=>{addCustomer(e)})}>
                        <div className="form-group col-12">
                            <b>Name</b>
                            <input type="text" name="customerName" className="form-control" 
                            placeholder="Enter First Name and Last Name" value={(formik.values.customerName) || (Customer.customerName)} 
                            onChange={(formik.handleChange) && ((e)=>{handleChange(e)})} onBlur={formik.handleBlur} />
                            {formik.touched.customerName && formik.errors.customerName?<span className="text-danger">{formik.errors.customerName}</span>:null}
                            <br />
                        </div>
                        <b>Gender</b><br />
                        <input id="gender" type="radio" value="Male" name="gender" /> Male &nbsp;
                        <input id="gender" type="radio" value="Female" name="gender" /> Female &nbsp;
                        <input  type="radio" value="Other" name="gender" /> Other &nbsp;
                        {formik.touched.gender && formik.errors.gender?<span className="text-danger">{formik.errors.gender}</span>:null}
                        <br /><br />

                        <div className="row">
                            <div className="form-group col-6">
                                <b>DOB</b>
                                <input type="date" name="dob" className="form-control" placeholder="Enter Your DOB" value={formik.values.dob || Customer.dob}
                                onChange={formik.handleChange  && ((e)=>{handleChange(e)})} onBlur={formik.handleBlur}/>
                            {formik.touched.dob && formik.errors.dob?<span className="text-danger">{formik.errors.dob}</span>:null}
                            <br />
                            </div>
                            <div className="form-group col-6">
                                <b>E-mail</b>
                                <input type="email" name="customerEmailID" className="form-control" placeholder="Enter Your Email Id" value={formik.values.customerEmailID || Customer.customerEmailID}  onChange={formik.handleChange && ((e)=>{handleChange(e)})} onBlur={formik.handleBlur}/>
                            {formik.touched.customerEmailID && formik.errors.customerEmailID?<span className="text-danger">{formik.errors.customerEmailID}</span>:null}
                            <br />
                            </div>

                            <div className="form-group col-6">
                                <b>Mobile</b>
                                <input type="text" name="customerContact" className="form-control" placeholder="Enter Mobile No." value={formik.values.customerContact || Customer.customerContact} onChange={formik.handleChange && ((e)=>{handleChange(e)})} onBlur={formik.handleBlur}/>
                            {formik.touched.customerContact && formik.errors.customerContact?<span className="text-danger">{formik.errors.customerContact}</span>:null}
                            <br />
                            </div>
                        </div>
                        <div className="form-group col-12">
                            <b>Address</b>
                            <input type="" name="customerAddress" className="form-control" placeholder="Enter Your Address" value={formik.values.customerAddress || Customer.customerAddress} onChange={formik.handleChange && ((e)=>{handleChange(e)})} onBlur={formik.handleBlur}/>
                            {formik.touched.customerAddress && formik.errors.customerAddress?<span className="text-danger">{formik.errors.customerAddress}</span>:null}
                            <br />
                        </div>
                        <span id="errorToShow"></span>
                        <div className="form-check">
                            <input type="checkbox" class="form-check-input" name="ch" id="ch" value="" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            
                            <label className="form-check-label">I accept Terms and Conditions</label><br />
                            {formik.touched.ch && formik.errors.ch?<span className="text-danger">{formik.errors.ch}</span>:null}
                        </div><br />
                        <div className="mt-2">
                            <input type="submit" className="btn btn-success ms-2" id="submit" value="SUBMIT" />
                            <input type="reset" className="btn btn-success ms-2"></input>
                        </div>
                        <br /><br />
                    </form>
                </div>
            </div>
    )
}