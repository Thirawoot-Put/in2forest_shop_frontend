import Joi from "joi";
import validate from "../../../utils/validate";

const editProduct = Joi.object({
  productName: Joi.string().trim().required().messages({
    "string.empty": "Product name is require",
  }),
  size: Joi.string().trim().required().messages({
    "string.empty": "Size is require",
  }),
  productDetail: Joi.string().trim().allow(null, ""),
  defect: Joi.string().trim().allow(null, ""),
  price: Joi.number().required().messages({
    "string.empty": "Price name is require",
    "number.base": "Price name is require and must be number",
  }),
  productTypeId: Joi.number().required().messages({
    "number.base": "Please select one",
  }),
  mainImage: Joi.allow(null, ""),
  id: Joi.allow(),
  status: Joi.allow(),
  createdAt: Joi.allow(),
  updatedAt: Joi.allow(),
});

const validateEditProduct = (input) => validate(editProduct)(input);
export default validateEditProduct;
