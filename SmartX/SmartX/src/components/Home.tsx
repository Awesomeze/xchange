
import Xchange from './Xchange';
import Button from "./Button"

const Home = () => {


  return (
  <div> 
   <div 
       className="bg[url('/Frame2.svg')] bg-white relative h-dvh w-screen  flex justify-center overflow-x-hidden" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)' }} >
      
       <div className="w-[90%] h-[70%]  absolute top-20 bg-black/75 border-2 border-white shadow-xl shadow-blue-700 rounded-xl">
         <h1
         className=" px-3 text-white font-[regular] absolute flex text-6xl md:text-7xl left-0 top-0 " 
         > smart<span className="font-[regular] text-yellow-300">X</span>
         </h1>

         <Xchange/>

         <Button/>

         </div> 
         <h1
         className="  text-white font-bold  font-[regular] absolute flex text-xl md:text-2xl right-1/14 bottom-[20%] " 
         >every <span className="font-[regular] text-yellow-300">X</span>change counts!
         </h1>
         </div> 

         </div>
         
  )
}

export default Home