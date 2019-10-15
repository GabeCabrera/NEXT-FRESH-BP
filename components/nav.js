import React from 'react';
import '../styles/master.css';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },

].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <div>
    <nav>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
    <hr />
  </div>


)

export default Nav
