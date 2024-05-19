import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from 'react';
import {nanoid} from 'nanoid'

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.number().required("it is required")
});


export default function ContactForm(onAdd) {
    
    const initialValues = {
        username: "",
        namber: "",
    };
    const handleSubmit = (value, actions) => {

         onAdd({
      id: nanoid(),
            name: value.name,
            number: value.number
      
       
    })
   actions.resetForm();
    }

     const usernameId = useId();
    const numberId = useId();


    return (
        <Formik
            initialValues={initialValues}
            onSabmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            <Form>
                <label htmlFor={usernameId}>Name</label>
                <Field type="text" name="name" id={usernameId} />
                <ErrorMessage name="email" component="span" />

                <label htmlFor={numberId}>Namber</label>
                <Field type="text" name="name" id={numberId} />
                <ErrorMessage name="email" component="span" />

                <button type="submit">Add contact</button>
            </Form>
            
        </Formik>
    )
}