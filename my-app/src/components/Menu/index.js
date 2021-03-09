import React, { useState } from "react";
import styles from "./styles.module.scss";

const ChildMenuItem = ({ item = {}, depth = 0, index }) => {
  // We can use depth and index for further customization
  const { children } = item;
  const [show, setShow] = useState(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ position: "relative" }}
    >
      <li className={styles.navSubmenuItem}>
        {item.title}
        {children && children.length !== 0 && show && (
          <ul depth={depth} index={index} className={styles.navChildrenMenu}>
            {children.map((c) => {
              return <ChildMenuItem item={c} depth={depth + 1} />;
            })}
          </ul>
        )}
      </li>
    </div>
  );
};

const MenuItem = ({ data }) => {
  const renderSubMenuItem = (items) => {
    return (
      <>
        <ul className={styles.navSubmenu}>
          {items.map((item, index) => {
            return (
              <div>
                <ChildMenuItem item={item} index={index} />
              </div>
            );
          })}
        </ul>
      </>
    );
  };

  return (
    <div>
      <ul className={styles.navMenu}>
        {data.map((item) => {
          const { children } = item;
          return (
            <>
              <li className={styles.navMenuItem}>
                {item.title}
                {children &&
                  children.length !== 0 &&
                  renderSubMenuItem(children)}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuItem;
