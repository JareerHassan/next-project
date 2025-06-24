'use client'
import Image from "next/image";
import Home from "@/components/home";
import Services from "@/components/services";
import Featured from "@/components/featured";
import Skills from "@/components/skills";
import Ourclient from "@/components/ourclient";


export default function page() {
  return (
     <div>

      <Home />
      <Services />
      <Featured />
      <Skills />
      <Ourclient />
    


    </div>
  );
}
