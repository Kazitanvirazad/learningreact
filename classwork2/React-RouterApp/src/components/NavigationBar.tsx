import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <>
            <div>
                <button className="btn btn-info"><Link to="/"><span>Home</span></Link></button>
                <button className="btn btn-info"><Link to="/contact"><span>Contact Us</span></Link></button>
                <button className="btn btn-info"><Link to="/about"><span>About</span></Link></button>
                <button className="btn btn-info"><Link to="/data"><span>Data</span></Link></button>
            </div>
        </>
    );
};

export default NavigationBar;