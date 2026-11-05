import Image from "next/image";
import Link from "next/link";
import type { ProjectImage } from "@/content";

export function ProjectGrid({
  images,
  linkToPage = false,
}: {
  images: ProjectImage[];
  linkToPage?: boolean;
}) {
  return (
    <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-4">
      {images.map((image) => {
        const photo = (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="h-auto w-full"
            style={{ width: "100%", height: "auto" }}
          />
        );
        return (
          <li key={image.id} id={linkToPage ? undefined : image.id} className="scroll-mt-28">
            {linkToPage ? (
              <Link
                href={`/projecten#${image.id}`}
                className="block hover:outline hover:outline-2 hover:outline-brand hover:[outline-offset:-3px]"
              >
                {photo}
              </Link>
            ) : (
              photo
            )}
          </li>
        );
      })}
    </ul>
  );
}
