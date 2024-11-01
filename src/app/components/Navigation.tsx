import Link from 'next/link';

interface NavigationProps {
  font: { className: string };
}

function Navigation({ font }: NavigationProps) {
  return (
    <div className={`${font.className} navigator`}>
      <ul className="navigation">
        <li className="navigate">
          <Link href="/works">Works</Link>
        </li>
        <li className="navigate">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="navigate">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
