/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { Routes, Route, /* Outlet, Navigate */ } from 'react-router-dom';
// @ts-ignore
import Main from './views/main/';
import GlobalContextProvider from './context/GlobalContextProvider';
/* import useUser from './hooks/useUser';

type Props = {
    redirectTo: string;
};

function ProtectedRoutes({ redirectTo }: Props) {
    const { token } = useUser();

    return token ? <Outlet /> : <Navigate to={redirectTo} />;
} */

export default function MainRoutes() {
    return (
        <GlobalContextProvider>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/main" element={<Main />} />
                {/* <Route element={<ProtectedRoutes redirectTo="/" />}>
                    <Route path="/main" element={<Main />} />
                </Route> */}
                <Route path="*" element={ '404 - Not found'} />
            </Routes>
        </GlobalContextProvider>
    );
}
