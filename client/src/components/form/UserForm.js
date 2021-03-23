// import React, { Component } from 'react';
// import Step1 from './Step1';
// import Step2 from './Step2';
// import Step3 from './Step3';
// import Step4 from './Step4';

// export class UserForm extends Component {
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

//     // Proceed to next step
//     nextStep = () => {
//         const updatedStep = this.state.step + 1;
//         this.setState({
//             step: updatedStep
//         });
//         this.props.setStep(updatedStep);
//     };

//     // Go back to prev step
//     prevStep = () => {
//         const updatedStep = this.state.step - 1;
//         this.setState({
//             step: updatedStep
//         });
//         this.props.setStep(updatedStep);
//     };

//     // Handle fields change
//     handleChange = input => e => {
//         this.setState({ [input]: e.target.value });
//     };

//     render() {
//         const { step } = this.state;
//         const { firstName, lastName, email, language, city, bio, year } = this.state;
//         const values = { firstName, lastName, email, language, city, bio, year };

//         switch (step) {
//             case 0:
//                 return (
//                     <Step1
//                         nextStep={this.nextStep}
//                         handleChange={this.handleChange}
//                         values={values}
//                     />
//                 );
//             case 1:
//                 return (
//                     <Step2
//                         nextStep={this.nextStep}
//                         prevStep={this.prevStep}
//                         handleChange={this.handleChange}
//                         values={values}
//                     />
//                 );
//             case 2:
//                 return (
//                     <Step3
//                         nextStep={this.nextStep}
//                         prevStep={this.prevStep}
//                         values={values}
//                     />
//                 );
//             case 4:
//                 return <Step4 />;
//             default:
//                 (console.log('This is a multi-step form built with React.'))
//         }
//     }

// }

// export default UserForm;