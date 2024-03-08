// Sidebar.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuToggle } from './MenuToggle';

const sidebarVariants = {
  open: { 
    translateX: 0,
    transition: { 
      when: "beforeChildren",
      staggerChildren: 0.1,
    }
  },
  closed: { 
    translateX: '-100%',
    transition: { 
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1 
    }
  },
};

const menuItemVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -10 },
};

export const Sidebar = ({ isOpen }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="overlay" onClick={() => isOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, pointerEvents: 'auto' }}
            exit={{ opacity: 0, pointerEvents: 'none' }}
          />
        )}
      </AnimatePresence>
      <MenuToggle toggle={() => isOpen(!isOpen)} isOpen={isOpen} />
      <motion.nav
        className="sidebar"
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div variants={menuItemVariants} className="menu-item">Settings</motion.div>
        <motion.div variants={menuItemVariants} className="menu-item">Profile</motion.div>
        <motion.div variants={menuItemVariants} className="menu-item">Privacy</motion.div>
      </motion.nav>
    </>
  );
};
export default Sidebar;