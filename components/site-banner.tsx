import Link from "next/link";

export function SiteBanner() {
  return (
    <div className="relative top-0 bg-[#ff6154] text-background py-3 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link
          href="https://github.com/anuplayz"
          target="_blank"
          className="text-center text-sm leading-loose text-muted-background"
        >
          ✨
          <span className="font-bold"> We&apos;re live! - </span>{" "}
          Come check us out! ✨
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
    </div>
  );
}
