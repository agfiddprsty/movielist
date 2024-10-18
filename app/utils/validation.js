import { convertToNumber, isEmpty, isEmail } from './index';

export const requiredField = value => (isEmpty(value) ? 'required' : '');
export const requiredNumber = value => (convertToNumber(value) <= 0 ? 'required' : '');
export const validateEmail = value => (!isEmail(value) ? 'email is not valid' : '');
export const noValidation = () => '';

export default {
  requiredField,
  requiredNumber,
  noValidation,
  validateEmail
};