import { useState } from "react";
import { Form } from "../../components";
import { Activities } from "../../components/Activities/Activities";



export const FormPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
  <>
    { !showForm &&
      <button onClick={() => setShowForm(true)}>Agregar actividad</button>}

    { showForm ? <Form setShowForm={setShowForm} />
     : <Activities />
    }
  </>
  );
};