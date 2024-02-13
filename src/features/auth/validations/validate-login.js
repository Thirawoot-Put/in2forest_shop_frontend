import Joi from "joi";
import validate from '../../../utils/validate';

const loginSchema = Joi.object({
    email: Joi.string().email({ tlds: false }).required().messages({
        'string.empty': 'Email address is require',
        'string.email': 'Email address must be a valid email'
    }),
    password: Joi.string().required().messages({
        'string.empty': 'Password is require',
    }),
});

const validateLogin = input => validate(loginSchema)(input);
export default validateLogin;