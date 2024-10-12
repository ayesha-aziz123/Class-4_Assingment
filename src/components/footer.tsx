import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-[100%] flex flex-wrap items-center   h-[10rem] justify-center text-white bg-[#24252A] p-3 text-[14px] ">
      <div className="flex justify-between gap-24">
        <ul className="">
          <li>Home</li>
          <li>About</li>
          <li>Careers</li>
          <li>Blog</li>
        </ul>
        <ul>
          <li>Contact</li>
          <li>Partner with us</li>
          <li>Services</li>
          <li>Privacy policy</li>
        </ul>
        <ul>
          <li>Terms & conditions</li>
          <li>privacy statement</li>
          <li>Theme tweak</li>
        </ul>
        <ul>
          <li>Widget</li>
          <li>Affiliates</li>
          <li>Resources</li>
          <li>Support</li>
        </ul>
        <div className="text-[27px] flex gap-5 items-center">
          <Link
            className="list-none inline-block hover:text-slate-500 hover:scale-[1.1] duration-[0.3s] ease-in"
            href={"https://github.com/ayesha-aziz123"}
          >
            <FaGithub />
          </Link>
          <Link
            className="list-none inline-block hover:text-sky-600 hover:scale-[1.1] duration-[0.3s] ease-in"
            href={"https://www.linkedin.com/in/ayesha-aziz-574780310"}
          >
            <FaLinkedin />
          </Link>
          <Link
            className="list-none inline-block hover:text-blue-600 hover:scale-[1.1] duration-[0.3s] ease-in"
            href={"#"}
          >
            <FaFacebook />
          </Link>
        </div>
      </div>
    </div>
  );
}
