import React, {useState} from 'react';

export type StateProps = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}
export enum RegisterStateEnum {
  NAME = 'name',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  PHONE = 'phone',
  PASSWORD = 'password',
  PASSWORD_CONFIRM = 'passwordConfirm',
}
const RegisterViewModel = () => {
  const [values, setValue] = useState<StateProps>({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
  });

  const handleOnChange = (property: string, inputValue: any) => {
    setValue({
    ...values,
      [property]: inputValue,
    });
  }
  
  const register = () => {
    console.log(JSON.stringify(values));
  }

  return {
    ...values,
    handleOnChange,
    register,
  }
}

export default RegisterViewModel;
