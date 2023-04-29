import NavigationBar from "./NavigationBar";
const Contact = () => {
    return (
        <>
            <NavigationBar />
            <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
                <h2 className="w3-text-light-grey">Contact Me</h2>

                <div className="w3-section">
                    <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Chicago, US</p>
                    <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: +00 151515</p>
                    <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: mail@mail.com</p>
                </div>

                <p>Let's get in touch. Send me a message:</p>

            </div>
        </>
    );
};

export default Contact;