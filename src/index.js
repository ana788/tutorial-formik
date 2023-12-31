import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./styles.css";

// A custom validation function. This must return an object
 // which keys are symmetrical to our values/initialValues
 const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">Primeiro Nome</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
             {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

            <label htmlFor="lastName">Sobrenome</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <button type="submit">Submit</button>
        </form>
    );
};

function App() {
    return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
