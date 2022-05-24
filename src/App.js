import { useState } from "react";
import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
import CollapsibleWidget from "./components/CollapsibleWidget/CollapsibleWidget";
import "./App.scss";

const App = () => {
  const [count, setCount] = useState(0);
  const pageTitle = document.title;
  const pageLink = window.location.href;

  const increaseCount = () => {
    setCount(count + 1);
  };

  const actions = [
    {
      label: "Twitter",
      icon: <BsTwitter />,
      navigate: () => {
        increaseCount();
        window.open(
          `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageLink}`,
          "sharer",
          "toolbar=0,status=0,width=626,height=436"
        );
      },
    },
    {
      label: "Facebook",
      icon: <BsFacebook />,
      navigate: () => {
        increaseCount();
        window.open(
          `http://www.facebook.com/sharer.php?u=${pageLink}&quote=${pageTitle}`,
          "sharer",
          "toolbar=0,status=0,width=626,height=436"
        );
      },
    },
    {
      label: "Pinterest",
      icon: <BsPinterest />,
      navigate: () => {
        increaseCount();
        window.open(
          `https://www.pinterest.com/pin/create/button/?&text=${pageTitle}&url=${pageLink}&description=${pageTitle}`,
          "sharer",
          "toolbar=0,status=0,width=626,height=436"
        );
      },
    },
  ];

  return (
    <main>
      <div className="count">Count: {count}</div>
      <CollapsibleWidget actions={actions} />
    </main>
  );
};

export default App;
