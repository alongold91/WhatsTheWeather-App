import { Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";

interface PrimaryButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  extraClasses?: string;
}

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.secondary
    },
  };
});

const PrimaryButton = ({
  label,
  onClick,
  disabled,
  extraClasses,
}: PrimaryButtonProps) => {
  const { classes, cx } = useStyles();
  const combinedClasses = cx(classes.root, extraClasses);
  return (
    <Button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
