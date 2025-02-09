import { Link } from "react-router-dom";

export let AdminSidebar = () => {
    return (
        <div className="w-32 h-dvh bg-amber-500">
            <div
                id="wrapper"
                className="flex items-center justify-around w-full h-full"
            >
                {/* <h1>
            Logo
        </h1> */}
                <div className="flex flex-col items-center justify-center gap-3">
                    <h4>
                        <Link to="/admin/user"> Home</Link>
                    </h4>
                    
                    <h4>
                        <Link to="/admin/contact"> Contact</Link>
                    </h4>

                  
                </div>
            </div>
        </div>
    );
};
