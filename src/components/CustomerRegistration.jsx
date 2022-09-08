import React, { Component } from 'react'
import '../JQuery/JQuerycustform.js'

export default class CustomerRegistration extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5 col-6">
                    <div id="myalert"></div>
                    <h1>Customer Registration </h1><br /><br />
                    <form id="form" method="post">
                        <div className="form-group col-12">
                            <b>Name</b>
                            <input type="text" name="name" className="form-control" placeholder="Enter First Name and Last Name" /><br />
                        </div>
                        <b>Gender</b><br />
                        <input type="radio" value="Male" name="gender" /> Male &nbsp;
                        <input type="radio" value="Female" name="gender" /> Female &nbsp;
                        <input type="radio" value="Other" name="gender" /> Other &nbsp;
                        <br /><br />

                        <div className="row">
                            <div className="form-group col-6">
                                <b>DOB</b>
                                <input type="date" name="dob" className="form-control" placeholder="Enter Your DOB" /><br />
                            </div>
                            <div className="form-group col-6">
                                <b>E-mail</b>
                                <input type="text" name="email" className="form-control" placeholder="Enter Your Email Id" /><br />
                            </div>

                            <div className="form-group col-6">
                                <b>Mobile</b>
                                <input type="text" name="mobile" className="form-control" placeholder="Enter Mobile No." /><br />
                            </div>
                        </div>
                        <div class="form-group col-12">
                            <b>Address</b>
                            <input type="" name="address" className="form-control" placeholder="Enter Your Address" /><br />
                        </div>
                        <span id="errorToShow"></span>
                        <div className="form-check">
                            <input type="checkbox" class="form-check-input" name="ch" id="ch" value="checked" />
                            <label className="form-check-label">I accept Terms and Conditions</label><br />
                            <span id="cherror"></span>
                        </div><br />
                        <div className="mt-2">
                            <input type="submit" className="btn btn-success ms-2" id="submit" value="SUBMIT" disabled={true} />
                            <input type="reset" className="btn btn-success ms-2"></input>
                        </div>
                        <br /><br />
                    </form>
                </div>
                <script>
                    
                </script>
            </div>
        )
    }
}
