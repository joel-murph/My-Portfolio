import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col justify-center color md:flex-row bg-primary px-5 py-32">
      <div className="flex flex-col items-center ">
          <h1 className="text-4xl border-color border-b-4 mb-5 font-bold  w-[130px]">Contact</h1>
          <p className="pb-5">If you want to discuss more in detail, please contact me</p>
          <p className="py-2"><span className="font-bold">E-Mail :</span> joelmurphy123123@gmail.com</p>
          <p className="py-2"><span className="font-bold">Phone :</span> +916379747334</p>
      </div>
    </section>
  );
}
 