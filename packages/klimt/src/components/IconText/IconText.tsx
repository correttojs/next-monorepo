export const IconText: React.FC<
  React.PropsWithChildren<{
    Icon: React.FC<React.PropsWithChildren<{ className: string }>>;
  }>
> = ({ Icon, children }) => {
  return (
    <p>
      <Icon className={`inline`} />
      <span className={`m-1`}>{children}</span>
    </p>
  );
};
