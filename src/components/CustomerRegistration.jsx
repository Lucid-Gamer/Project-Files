import React from 'react'
/* import { useFormik } from 'formik' */

/* const validateCustomer=(custdata) =>{
    const errors={}
    let pattern = /^([a-zA-Z\s]+)$/
    //let numpat = /^([0-9]{10})$/
    //let emailpattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    if (!custdata.name) {
        errors.name="Name is required"
    }
    else if(!pattern.test(custdata.name))
    {
        errors.name="Alphabets Only"
    }
    if (custdata.gender.value==='') {
        errors.gender="Please select a gender"
    }
    if (custdata.dob.value==='') {
        errors.dob="Please enter your date of birth"
    }
    if (custdata.email.value==='') {
        errors.email="Please enter your email address"
    }
    if (custdata.mobile.value==='') {
        errors.mobile="Please enter your mobile number"
    }
    // else if (!numpat.test(custdata.mobile.value)) {
    //     errors.mobile="Please enter valid mobile number"
    // }
    if (custdata.address.value==='') {
        errors.address="Please enter your address"
    }
    if (custdata.ch.value==='unchecked') {
        errors.ch="Please agree to these terms and conditions"
    }
    return errors
}
 */
export default function CustomerRegistration() {

    /* const formik = useFormik({
        initialValues:{
            name:'',
            gender:'',
            dob:'',
            email:'',
            mobile:'',
            address:'',
            ch:''
        },
        validate:validateCustomer
    })*/
        return (
            <div>
                {/*<div className="container mt-5 col-6">
                    <div id="myalert"></div>
                    <h1>Customer Registration </h1><br /><br />
                    <form id="form" method="post" onSubmit={formik.handleSubmit}>
                        <div className="form-group col-12">
                            <b>Name</b>
                            <input type="text" name="name" className="form-control" 
                            placeholder="Enter First Name and Last Name" value={formik.values.name} 
                            onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.name && formik.errors.name?<span className="text-danger">{formik.errors.name}</span>:null}
                            <br />
                        </div>
                        <b>Gender</b><br />
                        <input type="radio" value="Male" name="gender" /> Male &nbsp;
                        <input type="radio" value="Female" name="gender" /> Female &nbsp;
                        <input type="radio" value="Other" name="gender" /> Other &nbsp;
                        {formik.touched.gender && formik.errors.gender?<span className="text-danger">{formik.errors.gender}</span>:null}
                        <br /><br />

                        <div className="row">
                            <div className="form-group col-6">
                                <b>DOB</b>
                                <input type="date" name="dob" className="form-control" placeholder="Enter Your DOB"
                                onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.dob && formik.errors.dob?<span className="text-danger">{formik.errors.dob}</span>:null}
                            <br />
                            </div>
                            <div className="form-group col-6">
                                <b>E-mail</b>
                                <input type="email" name="email" className="form-control" placeholder="Enter Your Email Id"  onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.email && formik.errors.email?<span className="text-danger">{formik.errors.email}</span>:null}
                            <br />
                            </div>

                            <div className="form-group col-6">
                                <b>Mobile</b>
                                <input type="text" name="mobile" className="form-control" placeholder="Enter Mobile No." onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.mobile && formik.errors.mobile?<span className="text-danger">{formik.errors.mobile}</span>:null}
                            <br />
                            </div>
                        </div>
                        <div className="form-group col-12">
                            <b>Address</b>
                            <input type="" name="address" className="form-control" placeholder="Enter Your Address" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.touched.address && formik.errors.address?<span className="text-danger">{formik.errors.address}</span>:null}
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
                <script>
                </script> */}
            <div class="container mt-5 col-6">
                <div id="myalert"></div>
                <h1>Customer Registration </h1><br /><br />
                <form id="form" method="post">
                    <div class="form-group col-12">
                        <b>Name</b>
                        <input type="text" name="name" class="form-control" placeholder="Enter First Name and Last Name" /><br />
                    </div>
                    <b>Gender</b><br />
                    <input type="radio" value="Male" name="gender" /> Male
                    <input type="radio" value="Female" name="gender" /> Female
                    <input type="radio" value="Other" name="gender" /> Other
                    <br /><br />
                    <div class="row">
                        <div class="form-group col-6">
                            <b>DOB</b>
                            <input type="date" name="dob" class="form-control" placeholder="Enter Your DOB" /><br />
                        </div>
                        <div class="form-group col-6">
                            <b>E-mail</b>
                            <input type="text" name="email" class="form-control" placeholder="Enter Your Email Id" /><br />
                        </div>

                        <div class="form-group col-6">
                            <b>Mobile</b>
                            <input type="text" name="mobile" class="form-control" placeholder="Enter Mobile No." /><br />
                        </div>
                    </div>
                    <div class="form-group col-12">
                        <b>Address</b>
                        <input type="" name="address" class="form-control" placeholder="Enter Your Address" /><br />
                    </div>
                    <span id="errorToShow"></span>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" name="ch" id="ch" value="checked" />
                        <label class="form-check-label">I accept Terms & Conditions</label><br />
                        <span id="cherror"></span>
                    </div><br />
                    <div class="mt-2">
                        <input type="submit" class="btn btn-success ms-2" id="submit" value="SUBMIT" disabled="true" />
                        <input type="reset" class="btn btn-success ms-2" />
                    </div>
                    <br /><br/>
                </form>
            </div>
            <script src='header.js'></script>
        </div>
    )
}

