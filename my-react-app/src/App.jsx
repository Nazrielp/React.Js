import React from "react";
import LoginPage from "./Pages/Login";

// class Button extends React.Component {
//   render() {
//     return (
//       <button className="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white" type="submit">
//           Buy now
//         </button> 
//     );
//   }
// }

// function ButtonBlack () {
//   return (
//     <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
//     Buy now
//   </button> 

//   );
// }

// function App() {
//   return (
//     <div className="flex justify-center bg-blue-600 min-h-screen items-center">
//       <div className="flex gap-x-3">
//         <Button variant="bg-red-700">Login</Button>
//         <Button variant="bg-slate-700">Logout</Button>
//         <Button></Button>
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <LoginPage></LoginPage>
    </div>
  );
}


export default App;
