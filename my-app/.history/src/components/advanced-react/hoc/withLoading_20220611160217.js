function withLoading(Component) {
  return (props) => {
    return <Component {...props}></Component>;
  };
}
export default withLoading;
