import { useState } from "react";
import { Form } from "../../components";
import { Activities } from "../../components/Activities/Activities";
import style from './FormPage.module.css'

export const FormPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
  <div className={style.formPageContainer}
  >
    { !showForm &&
      <button className={style.buttonStyle} onClick={() => setShowForm(true)}>Add activity</button>}

    { showForm ? <Form setShowForm={setShowForm} />
     : <Activities />
    }
  </div>
  );
};