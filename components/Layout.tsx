import Header from "./Header";
import Footer from "./Footer";
import Copyright from "./index/Copyright";


interface LayoutInterface {
    children: any;
}

const Layout = ({ children }: LayoutInterface) => {
    return (
        <div>
            {children}
            <Footer />
            <Copyright />
        </div>
    );
};

export default Layout;
