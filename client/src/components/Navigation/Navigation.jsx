import React from 'react';
import classNames from 'classnames';

import styles from './navigation.css';

const Navigation = props => {
  const navTitles = ['Women', 'Men', 'Girls', 'Collections', 'Community'];
  return (
    <div>
      <div className={styles.whiteSpace}></div>
      <div className={classNames(styles.nav, styles.flexRow)}>
        <div className={styles.flexRow}>
          <img className={classNames(styles.logo, styles.clickable)} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/lulumelon_logo.png"/>
          <div className={classNames(styles.navDirectory, styles.flexRow, styles.spaceBetween)}>
            {navTitles.map(title => {
              return (
                <div className={classNames(styles.navSelection, styles.clickable)} key={title}>{title}</div>
              );
            })}
          </div>
        </div>
        <div className={styles.flexRow}>
          <div className={classNames(styles.navButtons, styles.flexRow, styles.spaceBetween)}>
            <span className={classNames(styles.signIn, styles.clickable)}>Sign In</span>
            <img className={classNames(styles.search, styles.clickable)} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/search_icon.png"/>
            <img className={classNames(styles.shoppingBag, styles.clickable)} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/bag_icon.png"/>
            <img className={classNames(styles.dropMenu, styles.clickable)} src="https://s3-us-west-1.amazonaws.com/fec-lulumelon/icons/drop_icon.png"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;