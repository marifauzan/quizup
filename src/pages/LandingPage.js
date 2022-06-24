import React from "react";
import { Link } from "react-router-dom";
import 'daisyui';

function LandingPage() {

    return(
        <div>
            <h1>Landing Page</h1>
            <Link to="/Login" className="underline">Go to Login page</Link>
            
            
</div>
    
    )
}

export default LandingPage;