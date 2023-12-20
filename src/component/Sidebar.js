import React from 'react'
import './Sidebar.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Document, Driver, Home2, Lock1, Star1 } from 'iconsax-react';


const Sidebar = ({children}) => {
  return (
      <div className='sidebar'>
          <div className='sidebar-menu'>
              <div className='sidebar-header'>
                  <span style={{ color: "#1B2559", fontSize: '26px' }}><strong>CUSTOMIZE</strong> MENU</span>
              </div>
              <div className='sidebar-list'>
                  <ul>
                      <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                          <Star1 variant="Bold" color="#d9e3f0" /> <NavLink to="/"><p>Chat UI</p></NavLink>
                      </li>
                      <li style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                            <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                                <Driver variant="Bold" color="#d9e3f0"/> <NavLink to="/projects">My Projects</NavLink>
                            </div>
                            <div className='pro-badge'>PRO</div>
                      </li>
                      <li style={{display: "flex", alignItems: "center",  justifyContent: "space-between", marginTop: "1rem"}}>
                            <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                                <Home2 variant="Bold" color="#d9e3f0"/> <NavLink to="/templates">Templates</NavLink>
                            </div>
                            <div className='pro-badge'>PRO</div>
                      </li>
                      <li style={{display: "flex", gap: "1rem", marginTop: "1rem"}}>
                          <Document variant="Bold" color="#d9e3f0" />
                          <div>
                              <NavLink to="/otherPages">Other Pages</NavLink>
                              <ul style={{padding: 0}}>
                                  <li>
                                      <NavLink style={{fontWeight: 500, fontSize: "14px"}} to="/otherPages/promptPage">Prompt Page</NavLink>
                                  </li>
                                  <li>
                                      <NavLink style={{fontWeight: 500, fontSize: "14px"}} to="/otherPages/register">Register</NavLink>
                                  </li>
                                  <li>
                                      <NavLink style={{fontWeight: 500, fontSize: "14px"}} to="/otherPages/signIn">Sign In</NavLink>
                                  </li>
                              </ul>
                          </div>
                      </li>
                      <li style={{display: "flex", gap: "1rem", marginTop: "1rem"}}>
                          <Lock1 variant="Bold" color="#d9e3f0" />
                          <div>
                              <NavLink to="/adminPages">Admin Pages</NavLink>
                              <ul className="nested-li" style={{padding: 0}}>
                                  <li>
                                      <NavLink style={{fontWeight: 500, fontSize: "14px", whiteSpace: "nowrap"}} to="/adminPages/allTemplate">All Template</NavLink>
                                  </li>
                                  <li>
                                      <NavLink style={{fontWeight: 500, fontSize: "14px",  whiteSpace: "nowrap"}} to="/adminPages/newTemplate">New Template</NavLink>
                                  </li>
                                  <li>
                                      <NavLink style={{fontWeight: 500, fontSize: "14px",  whiteSpace: "nowrap"}} to="/adminPages/editTemplate">Edit Template</NavLink>
                                  </li>
                                  <li>
                                      <NavLink style={{fontWeight: 500, fontSize: "14px",  whiteSpace: "nowrap"}} to="/adminPages/usersOverview">Users Overview</NavLink>
                                  </li>
                              </ul>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
          <div className='children'>
              {children}
          </div>
      </div>
  )
}

export default Sidebar

// background: #1B2559;

