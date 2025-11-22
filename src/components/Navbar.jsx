import dayjs from "dayjs";
import { navIcons, navLinks } from "@constants";
import useWindowStore from "@store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Sumit's Portfolio</p>
        <ul>
          {navLinks?.map(({id, name, type}) => (
            <li
              key={id}
              onClick={() => openWindow(type)}
              className="cursor-pointer"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons?.map((icon) => (
            <li key={icon.id}>
              <img
                className="icon-hover"
                src={icon.img}
                alt={`icon-${icon.id}`}
              />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};
export default Navbar;
