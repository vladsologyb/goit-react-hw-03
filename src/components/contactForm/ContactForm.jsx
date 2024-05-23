import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {nanoid} from 'nanoid'
import css from "./ContactForm.module.css"

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.number().required("it is required")
})

export default function ContactForm({ onAdd }) {
    
    const handleSubmit = (value, actions) => {
        console.log(value)
        onAdd({
      id: nanoid(),
            name: value.name,
            number: value.number
      
       
    });
        actions.resetForm()

      
    }



    return (
        <Formik
            initialValues={{
                name: "",
                number: "",
                id: nanoid()
            }}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
         <Form className={css.form}>
            <p className={css.text}>Name</p>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="span" />
            <p className={css.text}>Number</p>
            <Field className={css.field} name="number" type="number" />
            <ErrorMessage name="number" component="span" />
            <button className={css.btn} type="submit">Add Contacts</button>
        </Form>
            
        </Formik>
    )
}