import Link from "next/link";

function HeaderButtons({ title, link }) {
  return (
    <Link href={link}>
      <a>{title}</a>
    </Link>
  );
}

export default HeaderButtons;
