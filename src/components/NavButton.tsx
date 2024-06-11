import styles from "./NavButton.module.css";

export default function NavBar({ title, link }) {
  return (
    <>
      <li className="
      sm:h-[50px] sm:w-[50px]
      h-auto w-auto justify-start
      ">
        <a className="
        sm:text-white sm:font-bold sm:text-center sm:no-underline sm:inline-block sm:w-[90px] sm:py-[5px] sm: px-[5px] sm:text-[14px]
        text-white font-bold text-center no-underline inline-block w-auto h-auto py-[5px] justify-start
        " 
        href={link}>
          {title}
        </a>
      </li>
    </>
  );
}
