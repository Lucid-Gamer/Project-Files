import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
// import CustomerService from '../Service/CustomerService'
import axios from 'axios'
import * as Yup from 'yup';


const initialValues = ({
            customerName:'',
            customerGender:'',
            dob:'',
            customerEmailID:'',
            customerContact:'',
            customerAddress:'',
            ch:''
})


export default function TempCustReg(){

	const [Customer,SetCustomer] = useState({
        customerName:'',
        dob:'',
        customerContact:'',
        customerAddress:'',
        customerEmailID:'',
        customerGender:''
    })

    

     const custregval = Yup.object({
        customerName:Yup.string().min(2).max(30).required("Please enter your name"),
        dob:Yup.date().required("Please enter your date of birth"),
        customerContact:Yup.string().required("Please enter your mobile number"),
        customerAddress:Yup.string().required("Please enter your address"),
        customerEmailID:Yup.string().email().required("Please enter your EmailID"),
        // customerGender:Yup.string().required("Please select a gender"),
        ch:Yup.string().required("Please check this box")
})

	const navigate = useNavigate();

    /* const changeHandler = (e) =>{
        const value = e.target.value;
        SetCustomer({...Customer,[e.target.name]:value})
    } */

    /* const enterval=() => SetCustomer({
        customerName: values.customerName,
        dob:values.dob,
        customerContact:values.customerContact,
        customerAddress:values.customerAddress,
        customerEmailID:values.customerEmailID
    }) */

    const {values,errors,handleBlur,handleChange,handleSubmit,touched} = useFormik({
        initialValues: initialValues,
        validationSchema:custregval,
        onSubmit: ()=>{
            addCustomer();
        }
    })

    const addCustomer = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8081/customer/create",Customer).then((res)=>{
            alert("New Customer has been added");
            navigate('/custlist');
        }).catch((err)=>{
            console.log(err);
        }) 
    }
        return (
            <div>
                <div className="container mt-5 col-6">
                    <div id="myalert"></div>
                    <h1 style={{textAlign:'center'}}>Customer Registration </h1><hr/><br/>
                    <form id="form" method="post" onSubmit={(e)=>{addCustomer(e)}}>
                        <div className="form-group col-12">
                            <b>Name</b>
                            <input type="text" name="customerName" className="form-control" 
                            placeholder="Enter First Name and Last Name" value={(values.customerName)} 
                            onChange={(handleChange)} onBlur={handleBlur} />
                            {touched.customerName && errors.customerName?<span className="text-danger">{errors.customerName}</span>:null}
                            <br />
                        </div>
                        <b>Gender</b><br />
                        <input id="gender" type="radio" value="Male" name="customerGender" /> Male &nbsp;
                        <input id="gender" type="radio" value="Female" name="customerGender" /> Female &nbsp;
                        <input  type="radio" value="Other" name="customerGender" /> Other &nbsp;
                        {touched.customerGender && errors.customerGender?<span className="text-danger">{errors.customerGender}</span>:null}
                        <br /><br />

                        <div className="row">
                            <div className="form-group col-6">
                                <b>DOB</b>
                                <input type="date" name="dob" className="form-control" placeholder="Enter Your DOB" value={values.dob}
                                onChange={handleChange} onBlur={handleBlur}/>
                            {touched.dob && errors.dob?<span className="text-danger">{errors.dob}</span>:null}
                            <br />
                            </div>
                            <div className="form-group col-6">
                                <b>E-mail</b>
                                <input type="email" name="customerEmailID" className="form-control" placeholder="Enter Your Email Id" value={values.customerEmailID}  onChange={handleChange} onBlur={handleBlur}/>
                            {touched.customerEmailID && errors.customerEmailID?<span className="text-danger">{errors.customerEmailID}</span>:null}
                            <br />
                            </div>

                            <div className="form-group col-6">
                                <b>Mobile</b>
                                <input type="text" name="customerContact" className="form-control" placeholder="Enter Mobile No." value={values.customerContact} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.customerContact && errors.customerContact?<span className="text-danger">{errors.customerContact}</span>:null}
                            <br />
                            </div>
                        </div>
                        <div className="form-group col-12">
                            <b>Address</b>
                            <input type="" name="customerAddress" className="form-control" placeholder="Enter Your Address" value={values.customerAddress} onChange={handleChange} onBlur={handleBlur}/>
                            {touched.customerAddress && errors.customerAddress?<span className="text-danger">{errors.customerAddress}</span>:null}
                            <br />
                        </div>
                        <span id="errorToShow"></span>
                        <div className="form-check">
                            <input type="checkbox" class="form-check-input" name="ch" id="ch" value="" onChange={handleChange} onBlur={handleBlur}/>
                            
                            <label className="form-check-label">I accept Terms and Conditions</label><br />
                            {touched.ch && errors.ch?<span className="text-danger">{errors.ch}</span>:null}
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