function withLoading(Component) {
  return (props) => {
    return <Component {...props}></Component>;
  };
}
export default withLoading;
// High order function: map, filter, some, every, reduce
// [1,2,3].map((item, array) => {})
