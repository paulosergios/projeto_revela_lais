import React, { useState, useRef, useEffect } from 'react';
import { v4 as chave } from 'uuid';
import Contacto from './dados'

import './cadastro0.css'

export default function App() {
  const [initialValues, setInitialValues] = useState({
    companyname: "",
    email: "",
    phone: "",
    website: ""
  });
  const [formValues, setFormValues] = useState([]);

  const submitForm = () => {
    setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
  };

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);
  return (
    <div className="App">
      <div>
        companyname
        <input
          value={initialValues.companyname}
          onChange={(e) =>
            setInitialValues({ ...initialValues, companyname: e.target.value })
          }
        />
      </div>
      <div>
        website
        <input
          value={initialValues.website}
          onChange={(e) =>
            setInitialValues({ ...initialValues, website: e.target.value })
          }
        />
      </div>
      <button onClick={submitForm}>onSubmit </button>
    </div>
  );
}