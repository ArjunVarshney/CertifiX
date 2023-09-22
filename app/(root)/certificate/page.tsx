"use client";

import { Button } from "@/components/ui/button";
import { certificateDetailStore } from "@/hooks/certificate-detail-store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Certificate = () => {
   const router = useRouter();
   const { name, phone, email, adhar_number, competetion } =
      certificateDetailStore((state) => {
         return {
            name: state.name,
            phone: state.phone,
            email: state.email,
            adhar_number: state.adhar_number,
            competetion: state.competetion,
         };
      });

   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) return null;

   if (!name || !phone || !email || !adhar_number || !competetion) {
      router.push("/generate");
   }
   const getDate = () => {
      const date = new Date();
      let num = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      return num + "/" + month + "/" + year;
   };
   return (
      <div>
         <div className="h-full w-full p-10 min-w-[1000px] max-w-[1100px] m-auto">
            <div className="border-4 border-black dark:border-white p-10 rounded-lg">
               <h1 className="mx-auto text-5xl font-bold text-center mb-20">
                  Certificate
               </h1>
               <p className="text-2xl text-center my-48">
                  This certificate is issued for{" "}
                  <span className="font-bold">{name}</span> <br /> to
                  participate in{" "}
                  <span className="font-bold">{competetion}</span>
               </p>
               <p>Issue Time: {getDate()}</p>
               <p>Adhar number: {adhar_number}</p>
            </div>
         </div>
         <div className="w-full flex items-center justify-center">
            <Button
               className="bg-green-500"
               size={"lg"}
               onClick={() => router.push("/success")}
            >
               Save to Digilocker
            </Button>
         </div>
      </div>
   );
};

export default Certificate;
