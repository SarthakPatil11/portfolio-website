import CTAButton from "@/components/ctaButton";

export default function ProjectModal({
  onSubmit,
  isOpen,
}: {
  onSubmit: () => void;
  isOpen: boolean;
}) {
  return (
    isOpen && (
      <div className="modal" role="dialog" id="modal_project">
        <div className="modal-box">
          <h2 className="text-lg font-bold">Project</h2>
          <form action="" onSubmit={onSubmit}>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Username" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input type="password" className="grow" value="password" />
            </label>
          </form>
          <div className="modal-action">
            <CTAButton />
          </div>
        </div>
      </div>
    )
  );
}
