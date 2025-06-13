import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        // submenu: [
        //     {
        //         id: 11,
        //         title: 'Home style 1',
        //         link: '/home'
        //     },
        //     {
        //         id: 12,
        //         title: 'Home style 2',
        //         link: '/home2'
        //     },
        //     {
        //         id: 13,
        //         title: 'Home style 3',
        //         link: '/home3'
        //     },
        //     {
        //         id: 14,
        //         title: 'Home style 4',
        //         link: '/home4'
        //     },
        //     {
        //         id: 15,
        //         title: 'Home style 5',
        //         link: '/home5'
        //     },
        //     {
        //         id: 16,
        //         title: 'Home style 6',
        //         link: '/home6'
        //     },
        // ]
    },

    {
        id: 4,
        title: 'About Us',
        link: '/about',
        // submenu: [
        //     {
        //         id: 41,
        //         title: 'About Us',
        //         link: '/about',
        //     },
        //     {
        //         id: 42,
        //         title: 'Faq',
        //         link: '/faq'
        //     },
        //     {
        //         id: 43,
        //         title: 'Price',
        //         link: '/price'
        //     },
        //     {
        //         id: 44,
        //         title: 'Team',
        //         link: '/team'
        //     },
        //     {
        //         id: 46,
        //         title: 'Team Details',
        //         link: '/team-single/Bina-Rano'
        //     },
        //     {
        //         id: 47,
        //         title: 'Testimonial',
        //         link: '/testimonial'
        //     },
        //     {
        //         id: 48,
        //         title: 'Comming Soon',
        //         link: '/comming-soon"'
        //     },
        //     {
        //         id: 49,
        //         title: 'Terms & Condition',
        //         link: '/terms'
        //     },
        //     {
        //         id: 50,
        //         title: 'Privacy & Policy',
        //         link: '/privacy'
        //     }
        // ]
    },

    {
        id: 6,
        title: 'Services',
        link: '/services',
        // submenu: [
        //     {
        //         id: 61,
        //         title: 'Services',
        //         link: '/services'
        //     },
        //     {
        //         id: 62,
        //         title: 'Content Marketing',
        //         link: '/service-single/Content-Marketing'
        //     },
        //     {
        //         id: 63,
        //         title: 'Social Marketing',
        //         link: '/service-single/Social-Marketing'
        //     },
        //     {
        //         id: 64,
        //         title: 'App Development',
        //         link: '/service-single/App-Development'
        //     },
        //     {
        //         id: 65,
        //         title: 'SEO Optimization',
        //         link: '/service-single/SEO-Optimization'
        //     },
        //     {
        //         id: 66,
        //         title: 'Web Development',
        //         link: '/service-single/Web-Development'
        //     },
        //     {
        //         id: 67,
        //         title: 'PPC Advertising',
        //         link: '/service-single/PPC-Advertising'
        //     },
        // ]
    },
    // {
    //     id: 7,
    //     title: 'Projects',
    //     link: '/projects',
    //     submenu: [
    //         {
    //             id: 71,
    //             title: 'Projects',
    //             link: '/projects'
    //         },
    //         {
    //             id: 72,
    //             title: 'Projects Left Sidebar',
    //             link: '/projects-left-sidebar'
    //         },
    //         {
    //             id: 73,
    //             title: 'Project Right Sidebar',
    //             link: '/projects-right-sidebar'
    //         },
    //         {
    //             id: 74,
    //             title: 'Projects Details',
    //             link: '/project-single/Movie-Recommendation'
    //         },
    //     ]
    // },

    // {
    //     id: 3,
    //     title: 'Pages',
    //     link: '/',
    //     submenu: [
    //         {
    //             id: 31,
    //             title: 'About Us',
    //             link: '/about',
    //         },
    //         {
    //             id: 32,
    //             title: 'Faq',
    //             link: '/faq'
    //         },
    //         {
    //             id: 33,
    //             title: 'Price',
    //             link: '/price'
    //         },
    //         {
    //             id: 34,
    //             title: 'Team',
    //             link: '/team'
    //         },
    //         {
    //             id: 36,
    //             title: 'Team Details',
    //             link: '/team-single/Bina-Rano'
    //         },
    //         {
    //             id: 37,
    //             title: 'Testimonial',
    //             link: '/testimonial'
    //         },
    //         {
    //             id: 38,
    //             title: 'Comming Soon',
    //             link: '/comming-soon"'
    //         },
    //         {
    //             id: 39,
    //             title: 'Terms & Condition',
    //             link: '/terms'
    //         },
    //         {
    //             id: 30,
    //             title: 'Privacy & Policy',
    //             link: '/privacy'
    //         }
    //     ]
    // },
    // {
    //     id: 8,
    //     title: 'Shop',
    //     link: '/shop',
    //     submenu: [
    //         {
    //             id: 71,
    //             title: 'Our Products',
    //             link: '/shop'
    //         },
    //         {
    //             id: 72,
    //             title: 'Product Single',
    //             link: '/product-single/Book-Item-1'
    //         },
    //         {
    //             id: 73,
    //             title: 'Shopping Cart',
    //             link: '/shopping-cart'
    //         },
    //         {
    //             id: 74,
    //             title: 'Checkout',
    //             link: '/checkout'
    //         },
    //         {
    //             id: 75,
    //             title: 'Account',
    //             link: '/login'
    //         },
    //     ]
    // },

    
    // {
    //     id: 5,
    //     title: 'Blog',
    //     link: '/blog',
    //     submenu: [
    //         {
    //             id: 51,
    //             title: 'Our Blog',
    //             link: '/blog'
    //         },
    //         {
    //             id: 52,
    //             title: 'Blog classNameic',
    //             link: '/blog-classNameic'
    //         },
    //         {
    //             id: 53,
    //             title: 'Blog Left Sidebar',
    //             link: '/blog-left-sidebar'
    //         },
    //         {
    //             id: 54,
    //             title: 'Blog Single',
    //             link: '/blog-details/Google-now-disregards-or-overlooks-all-reciprocal-links'
    //         },
    //         {
    //             id: 55,
    //             title: 'Not Found',
    //             link: '/not-found'
    //         }
    //     ]
    // },

     {
        id: 8,
        title: 'Hosting',
        link: '/package-page',
    },

     {
        id: 9,
        title: 'Domain',
        link: '/domain',
    },
        {
        id: 3,
        title: 'Technology',
        link: '/technology',
    },

    //     {
    //     id: 8,
    //     title: 'Gallery',
    //     link: '/gallery',
    // },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={`mobile-menu-wrap ${menuActive ? "mobile-menu-visible" : ""}`}>
            <div className="mobile-nav-toggler" onClick={() => setMenuState(!menuActive)}><span className="icon flaticon-menu"></span></div>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={() => setMenuState(!menuActive)}></div>
                <div className="close-btn" onClick={() => setMenuState(!menuActive)}><span className="icon flaticon-multiply"></span></div>
                <nav className="menu-box">
                    <div className="menu-outer">
                        <ul className="navigation">
                            {menus.map((item, mn) => {
                                return (
                                    <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                        {item.submenu ?
                                            <Fragment>
                                                <li>
                                                    <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                                        <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                                    </p>
                                                </li>
                                                <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                                    <List className="subMenu">
                                                        <Fragment>
                                                            {item.submenu.map((submenu, i) => {
                                                                return (
                                                                    <ListItem key={i}>
                                                                        <Link onClick={ClickHandler} className="active"
                                                                            to={submenu.link}>{submenu.title}</Link>
                                                                    </ListItem>
                                                                )
                                                            })}
                                                        </Fragment>
                                                    </List>
                                                </Collapse>
                                            </Fragment>
                                            : <Link className="active"
                                                to={item.link}>{item.title}</Link>
                                        }
                                    </ListItem>
                                )
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default MobileMenu;