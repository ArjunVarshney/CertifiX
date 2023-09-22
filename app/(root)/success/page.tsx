"use client";

import { certificateDetailStore } from "@/hooks/certificate-detail-store";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const Success = () => {
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

   if (!name || !phone || !email || !adhar_number || !competetion) {
      router.push("/");
   }

   setTimeout(() => {
      router.push("/");
   }, 1000 * 5);

   return (
      <div className="w-full min-h-[80vh]">
         <div className="flex flex-col h-full w-full items-center justify-center p-20">
            <CheckCircle className="h-[300px] w-[300px] text-green-500" />
            <div className="text-green-500 text-3xl mt-20 max-w-md text-center">
               Success ! You can now see your certificate on digilocker
            </div>
            <div className="mt-20 max-w-md text-center">
               You will be redirected back to Home in 5 seconds
            </div>
         </div>
      </div>
   );
};

export default Success;
