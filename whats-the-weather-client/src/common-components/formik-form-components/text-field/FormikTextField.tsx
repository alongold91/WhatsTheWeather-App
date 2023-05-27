import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";
import { makeStyles } from "tss-react/mui";

interface FormikTextFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "email";
  disabled?: boolean;
}

const useStyles = makeStyles()((theme) => {
  return {
    labelClass: {
      color: theme.palette.primary.light
    },
  };
});

const FormikTextField = ({
  name,
  label,
  placeholder,
  type = "text",
  disabled,
}: FormikTextFieldProps) => {
  const { classes } = useStyles();
  const [field, meta] = useField(name);
  const thereIsError: boolean = meta && meta.touched && meta.error ? true : false;
  return (
    <TextField
      type={type}
      variant="standard"
      label={label}
      placeholder={placeholder}
      InputLabelProps={{className: classes.labelClass}}
      fullWidth
      InputProps={{ name }}
      onChange={field.onChange}
      value={field.value}
      error={thereIsError}
      helperText={thereIsError ? meta.error : undefined}
      disabled={disabled}
    />
  );
};

export default FormikTextField;
