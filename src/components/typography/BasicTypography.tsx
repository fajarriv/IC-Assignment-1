interface TypographyProps {
    children: string
    size : string;
    weight : string;
}

const BasicTypography = (props : TypographyProps) => {
  return (
    <div className={`${props.size} ${props.weight}`}>
      {props.children}
    </div>
  );
};

export default BasicTypography;
