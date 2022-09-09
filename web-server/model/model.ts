import Joi from 'joi';

export const productPriceSchema = Joi.object().keys({
  value: Joi.number().required(),
  currency: Joi.string().valid('PLN').min(0).required(),
});

export const productSchema = Joi.object().keys({
  name: Joi.string().max(100).required(),
  price: productPriceSchema,
  qty: Joi.number().min(0).required(),
  createdDate: Joi.date().required(),
  category: Joi.string().valid('SMARTPHONES', 'LAPTOPS', 'DISPLAYS').required(),
  description: Joi.string().max(2000),
});
