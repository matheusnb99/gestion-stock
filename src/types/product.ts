import * as yup from "yup";

export interface Product {
  id: number | undefined;
  name: string;
  description: string;
  quantity: number;
}

export const articleDtoSchema: yup.SchemaOf<Product> = yup.object({
  id: yup.number().notRequired(),
  name: yup.string().min(4).required(),
  quantity: yup.number().required(),
  description: yup.string().min(10).required(),
});
