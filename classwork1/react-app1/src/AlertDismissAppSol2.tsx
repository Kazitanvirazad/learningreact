import { useState } from "react";
import AlertDismiss from "./components/AlertDismissComponent";

const AlertDismissApp = () => {
    let alertText = "Tabasum is my wife";
    let btnTxt = "Display Alert";
    let [value, setvalue] = useState(true);

    let onAlert = () => {
        setvalue(true);
    };

    let onDismiss = () => {
        setvalue(false);
    };

    return (
        <>
            {value && <AlertDismiss alertTxt={alertText} onDismiss={onDismiss}></AlertDismiss>}
            <button type="button" onClick={onAlert} className="btn btn-primary">{btnTxt}</button>
        </>
    );
};

export default AlertDismissApp;