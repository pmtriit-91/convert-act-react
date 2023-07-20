import { Layout } from "antd";
import Header from "../components/Header";

function DefaultLayout({ children }) {
    return (
        <Layout>
            <Header />
            {children}
        </Layout>
    )
}

export default DefaultLayout;