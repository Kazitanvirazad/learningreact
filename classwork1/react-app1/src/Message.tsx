
/**
 * In this course we are using latest functional components instead of 
 * old Class based componenets
 */

// PascalCasing - We capitalize the first letter of every word
function Message() {
    let name = "Kazi";
    if (name)
        // JSX - Javascript XML
        return <h1>Hello {name}</h1>;
    return <h1>{getName()} </h1>;
}

function getName() {
    return "Kazi Tanvir Azad";
}
export default Message;