"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { certificateDetailStore } from "@/hooks/certificate-detail-store";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const formSchema = z.object({
   name: z.string().min(2, "The name must be more than two alphabets"),
   phone: z.string().length(10, "Phone number should be of 10 digits"),
   email: z.string().email("The email should be valid"),
   adhar_number: z.string().min(12, "Adhar number should be valid"),
   competetion: z.string(),
});

export function GenerateForm() {
   const updateDetails = certificateDetailStore((state) => state.updateDetails);
   const router = useRouter();

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: "",
         phone: "",
         email: "",
         adhar_number: "",
      },
      mode: "onChange",
   });

   function onSubmit(values: z.infer<typeof formSchema>) {
      updateDetails({
         name: values.name,
         phone: values.phone,
         email: values.email,
         adhar: values.adhar_number,
         competetion: values.competetion,
      });
      router.push("/certificate");
   }

   const formFields = [
      {
         label: "Name",
         name: "name",
         placeholder: "Name",
      },
      {
         label: "Phone no.",
         placeholder: "+91 1234567890",
         name: "phone",
      },
      {
         label: "Email",
         placeholder: "example@something.com",
         name: "email",
      },
      {
         label: "Adhar number",
         name: "adhar_number",
         placeholder: "1234 5678 9012",
      },
   ];

   const competetion = [
      "Competetion 1",
      "Competetion 2",
      "Competetion 3",
      "Competetion 4",
      "Competetion 5",
      "Competetion 6",
      "Competetion 7",
      "Competetion 8",
   ];

   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 border rounded-lg p-8 m-auto w-[400px] max-w-[100vw]"
         >
            {formFields.map((formField) => (
               <FormField
                  control={form.control}
                  key={formField.name}
                  // @ts-ignore
                  name={formField.name}
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>{formField.label}</FormLabel>
                        <FormControl>
                           <Input
                              placeholder={formField.placeholder || ""}
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            ))}
            <FormField
               control={form.control}
               name="competetion"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Competetion</FormLabel>
                     <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                     >
                        <SelectTrigger>
                           <SelectValue placeholder="Certificate For" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectGroup>
                              <SelectLabel>Certificate For</SelectLabel>
                              {competetion.map((comp) => (
                                 <SelectItem value={comp} key={comp}>
                                    {comp}
                                 </SelectItem>
                              ))}
                           </SelectGroup>
                        </SelectContent>
                     </Select>
                  </FormItem>
               )}
            />

            <Button type="submit">Generate</Button>
         </form>
      </Form>
   );
}
