import { useState } from "react";
import cn from "classnames";
import { MdShare, MdCancel } from "react-icons/md";

import "./CollapsibleWidget.scss";

const FAB = ({ actions, increaseCount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (action) => {
    increaseCount();
    window.open(action.URL);
  };

  return (
    <ul className="fab-container">
      <li className="fab-button" onClick={() => setOpen(!open)}>
        {open ? <MdCancel /> : <MdShare />}
      </li>
      {actions.map((action, index) => (
        <li
          style={{ transitionDelay: `${index * 25}ms` }}
          className={cn("fab-action", { open })}
          key={action.label}
          onClick={() => handleClick(action)}
        >
          {action.icon}
          <span className="tooltip">{action.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default FAB;
