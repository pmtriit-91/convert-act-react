import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { publicRoutes, privateRoutes } from '~/routes'
import { Fragment } from "react";
import { DefaultLayout } from "./components/Layout"

function App() {
    const isAuth = !!localStorage.getItem('token')

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout

                        if (route.layout) {
                            Layout = route.layout
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }

                        const Page = route.component

                        return <Route
                            key={index}
                            path={route.path}
                            element={<Layout><Page /></Layout>}
                        />
                    })}
                    {privateRoutes.map((route, index) => {
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        const Page = route.component;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={isAuth ? <Layout><Page /></Layout> : <Navigate to={'/login'} />}
                            />
                        )

                    })}
                </Routes>
            </div >
        </Router>
    );
}

export default App;
