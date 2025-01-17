// function ShoppingLayout(){
//     return(
//         <div className="flex flex-col bg-white overflow-hidden">
//             <ShoppingHeader/>
//             <main className="flex flex-col w-full">
//                <Outlet/> 
//             </main>
//         </div>
//     );
// }
// export default ShoppingLayout;

import React from 'react';
import './ShoppingLayout.css'; // Import the CSS file

function ShoppingLayout() {
    return (
        <div className="shopping-layout">
            <div className="shopping-header">
                <ShoppingHeader />
            </div>
            <main className="shopping-main">
                <Outlet />
            </main>
        </div>
    );
}

export default ShoppingLayout;
