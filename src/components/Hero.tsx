import styles from "./Hero.module.css";

export default function Hero({ first, second }) {
  return (
    <>
      <section className="h-[200px] bg-[url('/hero_bg.png')] bg-cover bg-top flex justify-center">
      <article className="w-[1080px] flex flex-col items-start justify-center pr-0 pl-5">
          <span className="text-white font-bold text-[20px]">{first}</span>
          <span className="text-white font-bold text-[50px] leading-[30px]">{second}</span>
        </article>
      </section>
    </>
  );
}
