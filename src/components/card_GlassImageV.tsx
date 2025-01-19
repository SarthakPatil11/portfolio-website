import Image from "next/image";
import CTAButton from "./ctaButton";
import { iButton } from "@/types/types";

export default function Card_GlassImageV({
  imgPath,
  title,
  subtitle,
  description,
  links,
}: {
  imgPath: string;
  title?: string;
  subtitle?: string;
  description?: string;
  links?: iButton[];
}) {
  const linkLength = links?.length ?? 0;

  return (
    <div className="card glass w-96">
      <figure>
        <Image
          src={imgPath}
          alt="Example Image"
          width={1100}
          height={800}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{title}</h2>
        <h3 className="font-bold text-sm text-zinc-200">{subtitle}</h3>
        <p className="text-zinc-300 text-justify text-sm">{description}</p>
        <div
          className={`card-actions ${
            linkLength > 1 ? "justify-between" : "justify-end"
          }`}
        >
          {links?.map((v, i) => (
            <CTAButton key={i} href={v.btnLink}>
              {v.btnText}
            </CTAButton>
          ))}
        </div>
      </div>
    </div>
  );
}
