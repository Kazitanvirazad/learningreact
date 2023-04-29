import ButtonComponent from "./components/ButtonComponent";

const ButtonApp = () => {

    let clickHandler = () => {
        console.log("Kazi loves Tabasum");

    };
    return (
        <div><ButtonComponent color="primary" onClick={clickHandler}>Tabasum </ButtonComponent></div>
    );
};

export default ButtonApp