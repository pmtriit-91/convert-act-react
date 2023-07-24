import { Layout } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";

function DefaultLayout({ children }) {
    return (
        <Layout>
            <Header />
            {children}
            <Footer/>
        </Layout>
    )
}

export default DefaultLayout;