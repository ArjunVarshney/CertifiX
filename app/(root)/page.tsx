"use client";

import { Button } from "@/components/ui/button";
import { FileCheck2 } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
   return (
      <div className="min-h-[80vh] w-full p-16">
         <div className="flex justify-around items-center gap-20 h-full mx-0 my-0 md:my-10 md:mx-10 lg:mx-20 xl:mx-32 2xl:mx-40">
            <div className="flex flex-col justify-around h-full w-full">
               <div className="mb-10">
                  <h1 className="text-5xl font-bold mb-10">
                     Get Yourself Certified
                  </h1>
                  <h3 className="text-lg sm:text-2xl max-w-2xl">
                     Generate certificate for Yourself issued by the Government
                     and get Certified. Lorem ipsum, dolor sit amet consectetur
                     adipisicing elit. Temporibus itaque necessitatibus eveniet
                     fuga, quaerat cumque sapiente mollitia nulla recusandae
                     harum sit iusto voluptates ad adipisci atque blanditiis
                     unde explicabo autem?
                  </h3>
               </div>
               <Link href={"/generate"}>
                  <Button
                     className="max-w-[150px] bg-green-500 text-lg p-7"
                     size={"lg"}
                  >
                     Generate
                  </Button>
               </Link>
            </div>
            <div className="w-[50%] p-20 xl:p-36 2xl:p-48 border border-green-500 rounded-3xl hidden lg:block">
               <FileCheck2 className="w-full h-full text-green-500" />
            </div>
         </div>
      </div>
   );
};

export default HomePage;
