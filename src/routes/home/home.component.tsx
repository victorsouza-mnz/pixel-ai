import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Characters",
      imageUrl:
        "https://as2.ftcdn.net/v2/jpg/05/66/76/99/1000_F_566769981_oSzLMOHUNKHQyyC3pN8z7uBILRQXP9Oa.jpg",
    },
    {
      id: 2,
      title: "Enviroment",
      imageUrl: "https://i.redd.it/ot8qpn1xbo8a1.jpg",
    },
    {
      id: 3,
      title: "UI",
      imageUrl: "https://img.craftpix.net/2019/12/Game-UI-Pixel-Art2.webp",
    },
    {
      id: 4,
      title: "Art",
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/05/51/00/24/1000_F_551002462_udyQMzCbVlaClPRbyMa2zYgZgtCWQJqI.jpg",
    },
    {
      id: 5,
      title: "Misc",
      imageUrl:
        "https://i.pinimg.com/originals/ef/13/3b/ef133be731124415079d8d400cf92da1.gif",
    },
  ];
  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
