import AlertDismiss from "./components/AlertDismiss";

const AlertDismissApp = () => {
    let alertText = "Tabasum is my wife";
    let btnTxt = "Display Alert";

    return (
        <div><AlertDismiss alertText={alertText}>
            <span>{btnTxt}</span>
        </AlertDismiss></div>
    );
};

export default AlertDismissApp;