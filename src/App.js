import { useState } from "react";
import { BsFacebook, BsTwitter, BsPinterest, BsWhatsapp } from "react-icons/bs";
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
      URL: `https://twitter.com/share?url=${pageLink}&text=${pageTitle}`,
    },
    {
      label: "Facebook",
      icon: <BsFacebook />,
      URL: `http://www.facebook.com/sharer.php?u=${pageLink}&quote=${pageTitle}`,
    },
    {
      label: "Pinterest",
      icon: <BsPinterest />,
      URL: `https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=${pageLink}&is_video=[is_video]&description=${pageTitle}`,
    },
    {
      label: "WhatsApp",
      icon: <BsWhatsapp />,
      URL: `https://wa.me/?text=${pageTitle} ${pageLink}`,
    },
  ];

  return (
    <main>
      <div className="count">Count: {count}</div>
      <CollapsibleWidget actions={actions} increaseCount={increaseCount} />
    </main>
  );
};

export default App;
