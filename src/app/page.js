'use client'
import Image from "next/image";
import Services from "@/components/services";
import Featured from "@/components/featured";
import Skills from "@/components/skills";
import Ourclient from "@/components/ourclient";


export default function page() {
  return (
     <div>

      <Services />
      <Featured />
      <Skills />
      <Ourclient />
    


    </div>
  );
}
