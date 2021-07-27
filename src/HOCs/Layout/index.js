import Header from '../../components/Header';


const Layout = (Component) => {
  return (props) => {
    return (
      <>
        <Header history={props.history} />
        <Component {...props} />
      </>
    );
  };
};

export default Layout;
