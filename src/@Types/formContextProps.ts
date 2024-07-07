import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch
} from 'react-hook-form';
import { FormProps } from './formType';

export type ContextProps = {
  watch: UseFormWatch<FormProps>;
  handleSubmit: UseFormHandleSubmit<FormProps>;
  formState: FormState<FormProps>;
  register: UseFormRegister<FormProps>;
};
