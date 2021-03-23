// import React, { Component } from 'react';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from "@material-ui/core/styles";
// import '../form/form.css';


// export class Step1 extends Component {

//     state = {
//         step: 0,
//         firstName: '',
//         lastName: '',
//         phoneNumber: '',
//         language: '',
//         city: '',
//         bio: '',
//         year: ''
//     };

//     continue = e => {
//         e.preventDefault();
//         this.props.nextStep();
//     };


//     render() {
//         const { values, handleChange } = this.props;
//         return (
//             <div className="step1Container">
//                 <div className="step1">
//                     <div className="intro">
//                         <h3> Help us discover you! </h3>
//                         <h3> First, tell us your name and phone number. </h3>
//                     </div>
//                     <TextField
//                         placeholder="Enter Your First Name"
//                         label="First Name"
//                         onChange={handleChange('firstName')}
//                         defaultValue={values.firstName}
//                         margin="normal"
//                         fullWidth
//                         variant="outlined"
//                     />
//                     <br />
//                     <TextField
//                         placeholder="Enter Your Last Name"
//                         label="Last Name"
//                         onChange={handleChange('lastName')}
//                         defaultValue={values.lastName}
//                         margin="normal"
//                         fullWidth
//                         variant="outlined"
//                     />
//                     <br />
//                     <TextField
//                         placeholder="Enter Your Phone Number"
//                         label="Phone Number"
//                         onChange={handleChange('phoneNumber')}
//                         defaultValue={values.phoneNumber}
//                         margin="normal"
//                         fullWidth
//                         variant="outlined"
//                     />
//                     <br />
//                     <div className="buttonContainer">
//                         <Button
//                             color="primary"
//                             variant="contained"
//                             onClick={this.continue}

//                         >Continue</Button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Step1;