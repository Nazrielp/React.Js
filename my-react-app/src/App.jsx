import React from "react";
//import Button from "./components/Elements/Button";

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
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
        <p className="font-medium text-slate-500 mb-8">Welcome, please enter your details</p>

        <from action ="">
          <div className="mb-6">
            <label htmlFor="email" className="block text-slate-700 text-sm font-bold mb-2">
              Email
            </label>
            <input type="text" className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" 
            placeholder="zriell@gmail.com"/>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-slate-700 text-sm font-bold mb-2">
              Password
            </label>
            <input type="password" className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" 
            placeholder="*******"/>
          </div>

          <Button classname="bg-blue-600 w-full">Login</Button>
        </from>
      </div>
    </div>
  );
}


export default App;
