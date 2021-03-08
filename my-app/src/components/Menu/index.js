import React from 'react';
import styles from './styles.module.scss';

const MenuItem = ({ data }) => {
  const renderSubMenuItem = (items) => {
    return (
      <>
        <ul className={styles.navSubmenu}>
          {items.map((item) => {
            const { children } = item
            return (
              <li className={styles.navSubmenuItem}>
                {item.title}
              </li>
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
                {children && children.length !== 0 && renderSubMenuItem(children)}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuItem;
