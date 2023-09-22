import { create } from "zustand";

type State = {
   name: string;
   phone: string;
   email: string;
   adhar_number: string;
   competetion: string;
};

type Action = {
   updateName: (name: State["name"]) => void;
   updatePhone: (phone: State["phone"]) => void;
   updateEmail: (email: State["email"]) => void;
   updateAdhar: (adhar: State["adhar_number"]) => void;
   updateDetails: (details: {
      name: string;
      phone: string;
      email: string;
      adhar: string;
      competetion: string;
   }) => void;
};

export const certificateDetailStore = create<State & Action>((set) => ({
   name: "",
   phone: "",
   email: "",
   adhar_number: "",
   competetion: "",
   updateName: (name: string) => set(() => ({ name: name })),
   updatePhone: (phone: string) => set(() => ({ phone: phone })),
   updateEmail: (email: string) => set(() => ({ email: email })),
   updateAdhar: (adhar: string) => set(() => ({ adhar_number: adhar })),
   updateDetails: (details: {
      name: string;
      phone: string;
      email: string;
      adhar: string;
      competetion: string;
   }) =>
      set(() => ({
         name: details.name,
         phone: details.phone,
         email: details.email,
         adhar_number: details.adhar,
         competetion: details.competetion,
      })),
}));
