import React, { useEffect } from "react";
function About() {
  return (
    <>
      {/* main */}
      <div
        className="h-screen mb-20 text-center p-2 bg-gray-700"
        method="Get"
        action="/about"
      >
 <h1 className="text-2xl py-4 md:text-xl m-2 p-2 bg-gray-600 text-cyan-300 rounded-lg font-bold text-center tracking-wide">About Me</h1>
        {/* image */}
        <img
          src="./image/Adarsh.jpeg"
          alt=""
          className="w-28 h-28 rounded-lg shadow-zinc-200 shadow-md m-auto my-5 md:"
        />
        {/* cotntent */}
        <div className="w-fill h-fill text-center text-sm md:my-4 md:text-xl text-lime-50 tracking-wider break-words font-mono">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          eveniet modi temporibus commodi cupiditate in iusto error nobis at,
          nihil dignissimos libero rem beatae. Commodi, ut similique voluptate
          vel voluptatum id exercitationem, corrupti deleniti cum provident
          dicta? Ipsam fugit porro voluptates in, reiciendis quia, dolorem non
          reprehenderit aperiam repellendus at modi architecto. Blanditiis
          explicabo sint quo ratione voluptates. Officia, in commodi aliquid rem
          sint inventore corporis animi iure quis sunt alias corrupti doloribus
          autem maxime, maiores ipsa atque cumque magnam voluptatem nisi esse
          aut. Magnam qui, odit iste blanditiis accusamus quas fugit minus quos cupiditate hic maxime consequatur
          facilis accusantium quis ipsum assumenda obcaecati atque sint corrupti
          perspiciatis nostrum illum harum tempora? At nisi, laborum eum eos,
          eaque recusandae laudantium optio amet atque ratione pariatur aliquid
          laboriosam. Sapiente vel sed illo dolore qui dolor quibusdam
          repudiandae eum dicta velit.
        </div>
      </div>
    </>
  );
}

export default About;
