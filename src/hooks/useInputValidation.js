import { useEffect, useState } from 'react';

const useInputValidation = (regex) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
      setIsValid(regex.test(value));
  }, [value, regex]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return { value, handleChange, isValid };
};

export default useInputValidation;