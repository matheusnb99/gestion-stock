import { Formik } from "formik";
import { Product, productSchema } from "@/types/product";
import { Field } from "formik";

interface FormFieldProps {
  fieldName: string;
  placeholder: string;
}

export const FormField = ({ fieldName, placeholder }: FormFieldProps) => {
  return <Field name={fieldName} placeholder={placeholder} />;
};

interface FormBtnProps {
  isDisabled: boolean;
  isUpdating: boolean;
  updateMsg: string;
  createMsg: string;
  type: "button" | "submit" | "reset" | undefined;
}
const FormBtn: (data: FormBtnProps) => JSX.Element = ({
  isDisabled,
  isUpdating,
  type,
  createMsg,
  updateMsg,
}: FormBtnProps) => {
  return (
    <button disabled={isDisabled} type={type}>
      {isUpdating ? updateMsg : createMsg}
    </button>
  );
};

//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////

const initialValues: Product = {
  description: "",
  id: undefined,
  name: "",
  quantity: 0,
};
export const ProductFrom: ({
  product,
}: {
  product: Product;
}) => JSX.Element = ({ product }: { product: Product }) => {
  const handleSubmit = async (
    data: Product,
    { resetForm }: { resetForm: () => void }
  ) => {
    //todo
    resetForm();
  };
  return (
    <Formik
      initialValues={product ?? initialValues}
      onSubmit={handleSubmit}
      validationSchema={productSchema}
    >
      {({ isSubmitting, isValid, handleSubmit, values }) => {
        return (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 p-4"
          >
            <FormField fieldName="name" placeholder="Enter the name" />

            <FormField
              fieldName="description"
              placeholder="Enter the description"
            />

            <FormBtn
              isDisabled={!isValid || isSubmitting}
              isUpdating={values.id !== undefined}
              type="submit"
              createMsg="create product"
              updateMsg="update product"
            />
          </form>
        );
      }}
    </Formik>
  );
};
