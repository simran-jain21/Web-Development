// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormikComp = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '',contact:'' }}
      validate={values => {
        const errors = {};
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
      onSubmit={(values, { setSubmitting ,resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(true);
          resetForm()
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" /> <br/>
          <Field type="password" name="password"placeholder="Password" /> <br/>
          <ErrorMessage name="password" component="div" />
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