// MenuToggle.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="black"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }) => (
  <button onClick={toggle} className="menu-toggle-button">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5", stroke: "#000" },
          open: { d: "M 3 16.5 L 17 2.5", stroke: "#000" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
      />
      <Path
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346", stroke: "#000" },
          open: { d: "M 3 2.5 L 17 16.346", stroke: "#000" }
        }}
      />
    </svg>
  </button>
);
// Default export

