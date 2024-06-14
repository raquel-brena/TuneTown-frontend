import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./UseAuth";

type ProtectedComponentProps = PropsWithChildren & {
    isPrivate?: boolean;
}

export const ProtectedComponent = ({ children, isPrivate }: ProtectedComponentProps) => {
    const { user, handleLogout } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
         if (user == null || (isPrivate && !user)) {
           handleLogout();
           navigate("/", { replace: true });
         }
    }, [navigate, user])

    return (
        <>{children}</>
    );
};
