import { useState } from 'react';

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    setValues,
    e => {
      setValues({
        ...initialValues,
        [e.target.name]: e.target.value
      })
    }
  ];
};
