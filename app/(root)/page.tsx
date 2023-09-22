"use client";

import { Button } from "@/components/ui/button";
import { FileCheck2 } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const HomePage = () => {
   return (
      <div className="min-h-[80vh] w-full p-16">
         <div className="flex justify-around items-center h-full mx-40">
            <div className="flex flex-col justify-around h-full w-full">
               <div className="">
                  <h1 className="text-5xl font-bold mb-10">
                     Get Yourself Certified
                  </h1>
                  <h3 className="text-2xl max-w-2xl">
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
                     className="max-w-[150px] bg-green-300 text-lg py-10 px-20"
                     size={"lg"}
                  >
                     Generate
                  </Button>
               </Link>
            </div>
            <div className="w-[50%] p-48 border border-green-300 rounded-3xl">
               <FileCheck2 className="w-full h-full text-green-300" />
            </div>
         </div>
      </div>
   );
};

export default HomePage;
