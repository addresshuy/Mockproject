// import Header from '../../components/Header';
import Navbar from '../../components/Navbar'

const Layout = (Component) => {
  return (props) => {
    return (
      <>
        <Navbar history={props.history} />
        <Component {...props} />
      </>
    );
  };
};

export default Layout;
