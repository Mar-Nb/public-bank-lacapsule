import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Image src="/ring-loader.gif" width={115} height={115} alt="loader ring" />
    </div>
  );
}
