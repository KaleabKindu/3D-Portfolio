type Props = {};

const withWrapper = (WrappedComponent: React.FC<Props>) => {
  return (props: Props) => (
    <div className="lg:px-20 px-2">
      <WrappedComponent {...props} />
    </div>
  );
};

export default withWrapper;
