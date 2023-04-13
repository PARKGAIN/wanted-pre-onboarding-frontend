import { useCallback, useState } from 'react';

const useInputValidation = (initialValue,regex) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  useCallback(()=>{setIsValid(regex.test(value))},[value,regex])

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange,isValid];
};


export default useInputValidation;
