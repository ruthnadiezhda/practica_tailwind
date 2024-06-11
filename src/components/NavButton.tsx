import styles from "./NavButton.module.css";

export default function NavBar({ title, link }) {
  return (
    <>
      <li className="
      sm:h-[50px] sm:w-[50px]
      ">
        <a className="
        sm:text-white sm:font-bold sm:text-center sm:no-underline sm:inline-block sm:w-full sm:py-[5px] sm:text-[14px]
        text-white font-bold text-center no-underline inline-block w-full py-[5px] text-auto
        " 
        href={link}>
          {title}
        </a>
      </li>
    </>
  );
}
