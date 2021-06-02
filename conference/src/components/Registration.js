import React from 'react';

class Registration extends React.Component{
	render(){
		return(
			<section id="registration" className="page-section">
				<h1 className="section-heading heading">Registration</h1>
				<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam vulputate, metus ut iaculis tristique, elit erat bibendum lectus, nec lobortis mauris elit sit amet massa. Suspendisse eu vehicula mi. Nullam non sapien eu eros dictum dapibus ut at dui. Fusce tempus orci sit amet dui blandit bibendum.</p>
				<br/>
				<h3 className="section-subheading heading">Payments through Netbanking</h3>
				<ul className="payment-details">
					<li>Bank <strong> Account Holder </strong> Name : SSN College of Engineering</li>
					<li>Bank <strong> A/C Name </strong>(NEFT/RTGS/E-Payment) : 4702803823XXXX</li>
					<li><strong> Bank Name</strong> : Online Payment Bank</li>
					<li><strong> IFSC/MICR Code </strong> : ABCD12345 </li>
					<li><strong> Swift Code </strong> : ABCDEFGHIJK</li>
				</ul>
				<br />
				<h3 className="section-subheading heading">Registration Fee Details</h3>

				<table className="reg-category-table">
					<tr className="odd-row">
						<th> Category </th>
						<th> Indian </th>
						<th> Foreign (USD) </th>
					</tr>
					<tr>
						<td> Student </td>
						<td> 5000 </td>
						<td> 100 </td>
					</tr>
					<tr className="odd-row">
						<td> Academia R&D </td>
						<td> 6000 </td>
						<td> 200 </td>
					</tr>
					<tr>
						<td> Industry Delegates </td>
						<td> 6000 </td>
						<td> 200 </td>
					</tr>
				</table>
				<br />

				<h3 className="section-subheading heading"> Register now! </h3>

				<form action="/submit.html">
					<table className="reg-form-table">
						<tr>
							<td><label for="fname">First name : </label></td>
							<td className="form-field"><input className="input-box" type="text" id="fname" name="fname" /></td>
						</tr>

						<tr>
							<td><label for="lname">Last name : </label></td>
							<td className="form-field"><input className="input-box" type="text" id="lname" name="lname" /></td>
						</tr>

						<tr>
							<td><label for="email-id">Email ID : </label></td>
							<td className="form-field"><input className="input-box" type="email" id="email-id" name="email-id" /></td>
						</tr>

						<tr>
							<td><label for="phone">Phone number : </label></td>
							<td className="form-field"><input className="input-box" type="tel" id="phone" name="phone" /></td>
						</tr>

						<tr>
							<td> Category : </td>
							<td className="form-field">
								<input type="radio" id="student" name="category" value="student" />
								<label for="student">Student</label>			
								<input type="radio" id="academia" name="category" value="academia" />
								<label for="academia">Academia / R&D</label>
								<input type="radio" id="industry" name="category" value="industry" />
								<label for="industry">Industry</label>
							</td>
						</tr>

						<tr>
							<td><label for="id-upload">Upload your ID Proof : </label></td>
							<td className="form-field"><input type="file" id="id-upload" name="idupload" /></td>
						</tr>
					</table>
					<br/>
					<input className="reg-form-submit-btn" type="submit" value="Register" />
				</form>
			</section>

		);
	}
}

export default Registration;