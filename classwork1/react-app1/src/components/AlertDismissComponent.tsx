interface AlertProps {
    alertTxt: string;
    onDismiss: () => void;
}
const AlertDismiss = ({ alertTxt, onDismiss }: AlertProps) => {
    return (
        <>
            <div className="alert alert-warning alert-dismissible fade show">
                <span>{alertTxt}</span>
                <button type="button" onClick={onDismiss} className="btn-close"></button>
            </div>
        </>
    );
};

export default AlertDismiss;