// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';  

const FormikComp = () => (
  <div>
    <h1>Fill in your Form Details</h1>
    <Formik
      initialValues={{ email: '', name: '',contact:'' }}
      validate={values => {
        const errors = {};
        if(!values.name){
          errors.name = 'name is required'
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        
        if(!values.contact){
            errors.contact = 'Required';
        }else if( !/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/i.test(values.contact) ){
            errors.contact = 'invalid Mob num'
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting,resetForm }) => {
        console.log(values);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          axios.post(' https://62e4c03a20afdf238d717e82.mockapi.io/Users',values)
          .then(function(response){
            console.log(response)
            if(response.status === 201){
              alert('Success')
            }            
          })
          .catch(function(error){
            console.log(error,'Data is not saved')
          })

          
          setSubmitting(true);
          resetForm()
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" /> <br/>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" /> <br/>
          <Field type="Number" name="contact" placeholder="Contact"/> <br/>
          <ErrorMessage name="contact" component="div" />
          
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormikComp;