import NavigationBar from "./NavigationBar";
const Home = () => {
    return (<>
        <NavigationBar />
        <div className="w3-content" >
            <div className="mySlides w3-display-container w3-center">
                <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                    <h3>Los Angeles</h3>
                    <p><b>We had the best time playing at Venice Beach!</b></p>
                </div>
            </div>
            <div className="mySlides w3-display-container w3-center">
                <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                    <h3>New York</h3>
                    <p><b>The atmosphere in New York is lorem ipsum.</b></p>
                </div>
            </div>
            <div className="mySlides w3-display-container w3-center">
                <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
                    <h3>Chicago</h3>
                    <p><b>Thank you, Chicago - A night we won't forget.</b></p>
                </div>
            </div>
            <div className="w3-container w3-content w3-center w3-padding-64" id="band">
                <h2 className="w3-wide">THE BAND</h2>
                <p className="w3-opacity"><i>We love music</i></p>
                <p className="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    </>
    );
};

export default Home;