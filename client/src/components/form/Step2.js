// import React, { Component } from 'react';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import '../form/form.css';
// import IconButton from '@material-ui/core/IconButton';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';
// import '../form/form.css';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';


// export class Step2 extends Component {

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
//             <div className="step1Container">
//                 <div className="step1">
//                     <div className="intro">
//                         <h3> Nice to meet you, {values.firstName} {values.lastName} !</h3>
//                         <h3> We want to know more about you </h3>
//                     </div>
//                     <br />
//                     <br />
//                     <div className="intro">
//                         <h3>How about a photo?</h3>
//                     </div>
//                     <br />
//                     <div className="intro">
//                         {/* <input accept="image/*" id="icon-button-file" type="file" />
//                     <label htmlFor="icon-button-file"> */}
//                         <IconButton color="primary" aria-label="upload picture" component="span">
//                             <PhotoCamera />
//                         </IconButton>
//                     </div>
//                     <br />
//                     <div>
//                         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//                         <Select
//                             labelId="demo-simple-select-label"
//                             id="demo-simple-select"
//                             onChange={handleChange('language')}
//                             defaultValue={values.language}
//                             margin="normal"
//                             fullWidth
//                             variant="outlined"
//                             placeholder="Select language of study"
//                             label="Language of study"
//                         >
//                             <MenuItem value={1}>English </MenuItem>
//                             <MenuItem value={2}>French</MenuItem>
//                             <MenuItem value={3}>ETC</MenuItem>
//                             <MenuItem value={4}>ETC</MenuItem>
//                             <MenuItem value={5}>ETC I</MenuItem>
//                             <MenuItem value={6}>ETC II</MenuItem>
//                         </Select>
//                     </div>
//                     <TextField
//                         placeholder="Year of study"
//                         label="Year of study"
//                         onChange={handleChange('year')}
//                         defaultValue={values.email}
//                         margin="normal"
//                         fullWidth
//                         variant="outlined"
//                     />
//                     <br />
//                     <div className="buttonContainer">
//                         <Button
//                             color="secondary"
//                             variant="contained"
//                             onClick={this.back}
//                         >Back</Button>
//                         <br />
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

// export default Step2;