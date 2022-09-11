import React from 'react'
import { useFormik } from 'formik'

const validateHelper=(helpdata) =>{
    const errors={}
    let pattern = /^([a-zA-Z\s]+)$/
    //let numpat = /^([0-9]{10})$/
    //let emailpattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    if (!helpdata.name) {
        errors.name="Name is required"
    }
    else if(!pattern.test(helpdata.name))
    {
        errors.name="Alphabets Only"
    }
    if (helpdata.gender.value==='') {
        errors.gender="Please select a gender"
    }
    if (helpdata.dob.value==='') {
        errors.dob="Please enter your date of birth"
    }
    if (helpdata.email.value==='') {
        errors.email="Please enter your email address"
    }
    if (helpdata.mobile.value==='') {
        errors.mobile="Please enter your mobile number"
    }
    // else if (!numpat.test(custdata.mobile.value)) {
    //     errors.mobile="Please enter valid mobile number"
    // }
    if (helpdata.address.value==='') {
        errors.address="Please enter your address"
    }
    if (helpdata.ch.value==='unchecked') {
        errors.ch="Please agree to these terms and conditions"
    }
    return errors
}

export default function HelperRegistration (){

    const formik = useFormik({
        initialValues:{
            name:'',
            gender:'',
            dob:'',
            email:'',
            mobile:'',
            address:'',
            ch:''
        },
        validate:validateHelper
    })

        return (
            <div className="container mt-5 col-6">
                <div id="myalert"></div>
                <h1>Helper Registration </h1><br /><br />
                <form id="form" method="post">
                    <div className="form-group col-12">
                        <b>Name</b>
                        <input type="text" name="name" className="form-control" placeholder="Enter First Name and Last Name" value={formik.values.name} 
                            onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.name && formik.errors.name?<span className="text-danger">{formik.errors.name}</span>:null}<br/>
                    </div>
                    <div>
                        <b>Gender</b><br />
                        <input type="radio" value="Male" name="gender" /> Male &nbsp;
                        <input type="radio" value="Female" name="gender" /> Female &nbsp;
                        <input type="radio" value="Other" name="gender" /> Other &nbsp;
                        {formik.touched.gender && formik.errors.gender?<span className="text-danger">{formik.errors.gender}</span>:null}
                        <br/><br/>
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <b>DOB</b>
                            <input type="date" name="dob" className="form-control" placeholder="Enter Your DOB" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.dob && formik.errors.dob?<span className="text-danger">{formik.errors.dob}</span>:null}
                            <br />
                        </div>
                        <div className="form-group col-6">
                            <b>E-mail</b>
                            <input type="text" name="email" className="form-control" placeholder="Enter Your Email Id" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.email && formik.errors.email?<span className="text-danger">{formik.errors.email}</span>:null}
                            <br />
                        </div>
                    </div>
                    <div className="form-group col-6">
                        <b>Service</b><br />
                        <select className="form-control" name="services">
                            <option selected disabled>Please Select</option>
                            <option>Nanny</option>
                            <option>Maid</option>
                            <option>Gardener</option>
                            <option>Pet care</option>
                        </select>
                    </div><br/>
                    <div className="form-group col-6">
                        <b>Charges</b>
                        <input type="text" name="charge" className="form-control" placeholder="Enter Service Charge" /><br />
                    </div>
                    <div className="form-group col-6">
                        <b>Mobile</b>
                        <input type="text" name="mobile" className="form-control" placeholder="Enter Mobile No."  onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.mobile && formik.errors.mobile?<span className="text-danger">{formik.errors.mobile}</span>:null}
                            <br />
                    </div>
                    <div className="form-group col-12">
                        <b>Address</b>
                        <input type="" name="address" className="form-control" placeholder="Enter Your Address" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.address && formik.errors.address?<span className="text-danger">{formik.errors.address}</span>:null}
                            <br />
                    </div>
                    <span id="errorToShow"></span>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name="ch" id="ch" value="checked" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        <label className="form-check-label">I accept Terms & Conditions</label><br />
                        {formik.touched.ch && formik.errors.ch?<span className="text-danger">{formik.errors.ch}</span>:null}
                    </div><br />
                    <div className="mt-2">
                        <input type="submit" className="btn btn-success ms-2" id="submit" value="SUBMIT" disabled="true" />
                        <input type="reset" className="btn btn-success ms-2" />
                    </div>
                    <br /><br />
                </form>
            </div>
        )
    }

