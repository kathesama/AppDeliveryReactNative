import React, {useState} from 'react';

export type StateProps = {
  email: string;
  password: string;
}
export enum HomeStateEnum {
  EMAIL = 'email',
  PASSWORD = 'password',
}
const HomeViewModel = () => {
  const [value, setValue] = useState<StateProps>({
    email: '',
    password: '',
  });

  const handleOnChange = (property: string, inputValue: any) => {
    setValue({
    ...value,
      [property]: inputValue,
    });
  }

  return {
    ...value,
    handleOnChange
  }
}

export default HomeViewModel;
