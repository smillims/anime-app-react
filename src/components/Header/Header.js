import { header, headerH1 } from "./Header.module.css";

export default function Header() {
  return (
    <header className={header}>
      <h1 className={headerH1} title="* read like Tsundoku">
        積ん読 *
      </h1>
    </header>
  );
}
