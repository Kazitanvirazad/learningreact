import { ReactNode, useState } from "react";

interface AlertProps {
    children: ReactNode;
    alertText: string;
}

const AlertDismiss = ({ children, alertText }: AlertProps) => {
    let [value, setvalue] = useState("show");
    return (
        <>
            <div className={"alert alert-warning alert-dismissible fade " + value} role="alert">
                <span>{alertText}</span>
                <button type="button" onClick={() => {
                    setvalue("d-none");
                }} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <button type="button" onClick={() => {
                setvalue("show");
            }} className="btn btn-primary">{children}</button>
        </>
    );
};

export default AlertDismiss;