import { Linkedin, Github, Instagram } from "lucide-react";
import { Mail, Phone, Link } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="Footer"
      className="footer bg-neutral text-neutral-content p-10 px-20"
    >
      <aside>
        <h6 className="footer-title text-white">Get in touch</h6>
        <p className="flex gap-1">
          <Mail className="h-4" /> patilsarthak999@gmail.com
        </p>
        <p className="flex gap-1">
          <Phone className="h-4" /> (+91) 7387945311
        </p>
        <p className="flex gap-1 mt-[-4px] ms-[-6px] p-1 rounded-md hover:bg-zinc-600">
          <Link className="h-4" />{" "}
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1GVvpfhSnA9fiABNenBUf1Svuv0c_flOR/view?usp=drivesdk"
          >
            Resume
          </a>
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-white">Social</h6>
        <div className="grid grid-flow-col gap-3 text-zinc-400">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sarthak-sandeep-patil"
            className="mt-[-10px] p-1 rounded-md hover:bg-zinc-600"
          >
            <Linkedin />
          </a>
          <a
            target="_blank"
            href="https://github.com/SarthakPatil11"
            className="mt-[-10px] p-1 rounded-md hover:bg-zinc-600"
          >
            <Github />
          </a>
          <a
            target="_blank"
            className="mt-[-10px] p-1 rounded-md hover:bg-zinc-600"
          >
            <Instagram />
          </a>
        </div>
      </nav>
    </footer>
  );
}
