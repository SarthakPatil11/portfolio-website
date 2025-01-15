import { SquareArrowOutUpRight } from "lucide-react";

export default function Card_Glass({
  title,
  description,
  CTAText,
  workTopic,
}: {
  title: string;
  description: string;
  CTAText: string;
  workTopic: string;
}) {
  return (
    <div className="card glass w-96">
      <div className="card-body">
        <h2 className="card-title text-2xl font-mono">{title}</h2>
        <p className="text-zinc-300 font-mono text-justify text-sm">
          {description}
        </p>
        <div className="card-actions justify-end">
          <a
            href={`/application/user/projectsDetail/#${workTopic}`}
            className="btn btn-warning"
          >
            {CTAText}
            <SquareArrowOutUpRight className="h-3 mx-[-8px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
