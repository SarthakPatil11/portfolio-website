import Image from "next/image";

export default function Card_ImageOverlay({
  imgPath,
  title,
  description,
  CTAText,
}: {
  imgPath: string;
  title: string;
  description: string;
  CTAText: string;
}) {
  return (
    <div className="card bg-base-100 image-full w-96 shadow-xl">
      <figure>
        <Image src={imgPath} alt="Example Image" width={600} height={800} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-white">{title}</h2>
        <p className="text-zinc-300">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning">{CTAText}</button>
        </div>
      </div>
    </div>
  );
}
