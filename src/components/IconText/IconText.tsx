export const IconText: React.FC<{ Icon: React.FC<{ className: string }> }> = ({
  Icon,
  children,
}) => {
  return (
    <p className={`iconText`}>
      <Icon className={`inline`} />
      <span className={`m-1`}>{children}</span>
    </p>
  );
};
