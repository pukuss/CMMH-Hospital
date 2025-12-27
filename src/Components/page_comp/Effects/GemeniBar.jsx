// import React from "react";

// function GemeniBar() {
//   return (
//     <div>
//       <span className="relative inline-block pb-1">
//         <span
//           className="absolute left-0 bottom-0 w-full h-1
//                    bg-[linear-gradient(90deg,green,yellow,blue,hotpink,purple,red)] 
//                    bg-size-[200%_100%] 
//                    animate-border-slide"></span>
//       </span>
//     </div>
//   );
// }

// export default GemeniBar;
import React from "react";

function GemeniBar({ width = "w-full", height = "h-1" }) {
  return (
    <div className={`relative ${width}`}>
      <div
        className={`
          absolute -top-2 left-0 bottom-0
          ${width} h-1
          bg-[linear-gradient(90deg,green,yellow,blue,hotpink,purple,red)]
          bg-[length:200%_100%]
          animate-border-slide
        `}
      />
    </div>
  );
}

export default GemeniBar;
