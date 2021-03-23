// import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
// import Background from '../form/Onboarding_3.png';
// import '../form/form.css';
// import { makeStyles } from '@material-ui/core/styles';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormLabel from '@material-ui/core/FormLabel';

// export class Step3 extends Component {

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

//     back = e => {
//         e.preventDefault();
//         this.props.prevStep();
//     };

//     render() {
//         const { values, handleChange } = this.props;
//         return (
//             <div>
//                 <div className="step3Backgound">
//                     <img src={Background} />
//                 </div>
//                 <div className="buttonContainer">
//                     <Button
//                         color="secondary"
//                         variant="contained"
//                         onClick={this.back}
//                     >Back</Button>
//                     <br />
//                     <Button
//                         color="primary"
//                         variant="contained"
//                         onClick={this.continue}
//                     >Continue</Button>
//                 </div>
//                 {/* <div>
//                     <FormControl >
//                         <FormLabel >Gender</FormLabel>
//                         <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
//                             <FormControlLabel value="female" label="Female" />
//                             <FormControlLabel value="male" label="Male" />
//                             <FormControlLabel value="other" label="Other" />
//                         </RadioGroup>
//                     </FormControl>
//                 </div> */}
//             </div>

//         );
//     }
// }

// export default Step3;