import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditHelper() {
    const [Helper, setHelper] = useState({});

    useEffect(()=>{
        init();
    },[]);

    const navigate = useNavigate();

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setHelper({...Helper,[name]:value});
    }

    const init = ()=>{
        axios.get(`http://localhost:8081/helper/get/${id}`).then(res=>{
            setHelper(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const {id} = useParams();

    const updateHelper = (e) =>{
        e.preventDefault();
        axios.post(`http://localhost:8081/helper/update/${id}`,Helper).then((res)=>{
            alert("Helper information has been updated successfully");
            console.log(res.data);
            navigate('/helplist');
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className="container mt-5 col-6">
            <div id="myalert"></div>
            <h1 style={{textAlign:'center'}}>Helper Registration </h1><hr /><br />
            <form id="form" onSubmit={(e)=>{updateHelper(e)}}>
                <div className="form-group col-12">
                    <b>Name</b>
                    <input type="text" name="helperName" className="form-control" placeholder="Enter First Name and Last Name" value={Helper.helperName}
                        onChange={(e)=>{changeHandler(e)}} /* onBlur={formik.handleBlur} */ />
                    {/* {formik.touched.helperName && formik.errors.helperName ? <span className="text-danger">{formik.errors.helperName}</span> : null}<br /> */}
                </div>
                <div>
                    <b>Gender</b><br />
                    <input type="radio" defaultValue={Helper.helperGender} value="Male" name="helperGender" className="form-check-input" onChange={(e)=>{changeHandler(e)}}/> Male &nbsp;
                    <input type="radio" defaultValue={Helper.helperGender} value="Female" name="helperGender" className="form-check-input" onChange={(e)=>{changeHandler(e)}}/> Female &nbsp;
                    <input type="radio" defaultValue={Helper.helperGender} value="Other" name="helperGender" className="form-check-input" onChange={(e)=>{changeHandler(e)}}/> Other &nbsp;
                    {/* {formik.touched.gender && formik.errors.gender ? <span className="text-danger">{formik.errors.gender}</span> : null} */}
                    <br /><br />
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <b>DOB</b>
                        <input type="date" name="dob" className="form-control" placeholder="Enter Your DOB" onChange={(e)=>{changeHandler(e)}} value={Helper.dob} /* onBlur={formik.handleBlur} */ />
                        {/* {formik.touched.dob && formik.errors.dob ? <span className="text-danger">{formik.errors.dob}</span> : null} */}
                        <br />
                    </div>
                    <div className="form-group col-6">
                        <b>E-mail</b>
                        <input type="email" name="helperEmail" className="form-control" placeholder="Enter Your Email Id" onChange={(e)=>{changeHandler(e)}} /* onBlur={formik.handleBlur} */ value={Helper.helperEmail} />
                        {/* {formik.touched.email && formik.errors.email ? <span className="text-danger">{formik.errors.email}</span> : null} */}
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-6">
                        <b>Service</b><br />
                        <select className="form-control" name="helperService" value={Helper.helperService} onChange={(e)=>{changeHandler(e)}}>
                            <option selected disabled>Please Select</option>
                            <option value="Nanny">Nanny</option>
                            <option value="Maid">Maid</option>
                            <option value="Gardener">Gardener</option>
                            <option value="Pet-Care">Pet-Care</option>
                        </select>
                    </div><br />
                    <div className="form-group col-6">
                        <b>Charges</b>
                        <input type="text" name="helperServicecharge" className="form-control" placeholder="Enter Service Charge" onChange={(e)=>{changeHandler(e)}} value={Helper.helperServicecharge}/><br />
                    </div>
                </div>
                <div className="form-group col-6">
                    <b>Mobile</b>
                    <input type="text" name="helperContact" className="form-control" placeholder="Enter Mobile No." onChange={(e)=>{changeHandler(e)}}/*  onBlur={formik.handleBlur} */ value={Helper.helperContact} />
                    {/* {formik.touched.mobile && formik.errors.mobile ? <span className="text-danger">{formik.errors.mobile}</span> : null} */}
                    <br />
                </div>
                <div className="form-group col-12">
                    <b>Address</b>
                    <input type="" name="helperAddress" className="form-control" placeholder="Enter Your Address" onChange={(e)=>{changeHandler(e)}}/*  onBlur={formik.handleBlur} */ value={Helper.helperAddress} />
                    {/* {formik.touched.address && formik.errors.address ? <span className="text-danger">{formik.errors.address}</span> : null} */}
                    <br />
                </div>
                <span id="errorToShow"></span>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" name="ch" id="ch" value="" /* onBlur={formik.handleBlur} */ />
                    <label className="form-check-label">I accept Terms & Conditions</label><br />
                    {/* {formik.touched.ch && formik.errors.ch ? <span className="text-danger">{formik.errors.ch}</span> : null} */}
                </div><br />
                <div className="mt-2">
                    <input type="submit" className="btn btn-success ms-2" id="submit" value="SUBMIT" />
                    <Link className="btn btn-secondary ms-2" to={'/helplist'}>Cancel</Link>
                </div>
                <br /><br />
            </form>

        </div>
    )
}