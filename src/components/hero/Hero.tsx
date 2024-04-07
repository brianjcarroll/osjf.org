import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col gap-y-4 mt-2.5 z-auto relative pt-25 pb-2.5">
      <Image
        alt="Background Pattern"
        src="/BackgroundPattern.svg"
        quality={100}
        fill
        sizes="100vw"
        style={{
          zIndex: "-1",
          objectFit: "cover",
        }}
      />
      <h1 className="text-4xl md:text-6xl font-mona text-titleGrey">
        Open Source
        <br />
        Justice Foundation
      </h1>
      <p className="font-hubot text-bodyGrey text-2xl  max-w-[660px]">
        We build and fund open source tools to empower sovereign communities and
        individuals to peacefully and voluntarily resolve their own disputes.
      </p>
      <div className="flex flex-col md:flex-row gap-2">
        <Button className="bg-bitcoin text-black font-semibold self-start hover:bg-bitcoin hover:text-white">
          Donate Now
        </Button>
        <Button className="bg-white text-headingBlack hover:text-white border-headingBlack border font-semibold self-start">
          Join Us On Discord
        </Button>
      </div>
    </div>
  );
}