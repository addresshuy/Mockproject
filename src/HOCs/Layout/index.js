// import Header from '../../components/Header';
import Navbar from '../../components/Navbar'
import Footer  from '../../components/Footer'

const Layout = (Component) => {
  return (props) => {
    return (
      <>
        <Navbar history={props.history} />
        <Component {...props} />
        <Footer />
      </>
    );
  };
};

export default Layout;
