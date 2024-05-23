import { Formik, Form } from "formik"
import css from './SearchBox.module.css'

export default function SearchBox({ value, onFilter }) {
    return <Formik>
        <Form className={css.form}>
            <p className={css.label}>Search by name</p>
            <input type="text" value={value} onChange={(e) => onFilter(e.target.value)} />
        </Form>
    </Formik>
}