import { Field, Form, Formik } from 'formik';
import css from '../SearchBar/SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSearch }) 
 {
    const handleSubmit = (values, actions) => {
      if (values.search.trim() === '') {
        toast.error('Please enter a correct search term!');
        return;
      }
      onSearch(values.search.trim());
      actions.resetForm();
    };
  
    return (
      <>
        <header className={css.searchHeader}>
          <Formik className={css.wrapper} initialValues={{ search: '' }} onSubmit={handleSubmit}>
            <Form className={css.form}>
              <Field className={css.search}
                type="text"
                name="search"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
              <button className={css.btn} type="submit">
                Search
              </button>
              <Toaster />
            </Form>
          </Formik>
        </header>
      </>
    );
  };