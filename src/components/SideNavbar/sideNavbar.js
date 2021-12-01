import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo-small-1.jpg'

import './index.css'

const menu = [
    {
        'name': 'dashboard',
        'path': '/',
        'icon': 'fas fa-tachometer-alt-fast',
        // 'access' : 'panel'
    },
    // {
    //     'name' : 'calendar',
    //     'path' : '/calendar',
    //     'icon' : 'fa fa-calendar'
    // },
    // {
    //     'name' : 'tasks',
    //     'path' : '/tasks',
    //     'icon' : 'fa fa-tasks'
    // },
    {
        'name': 'projects',
        'path': '/projects',
        'icon': 'fas fa-briefcase',
        "access": 'projects'
    },
    {
        'name': 'leads',
        'path': '/app/r/leads',
        'icon': 'fas fa-share-alt',
        'access': 'leads'
    },
    {
        'name': 'clients',
        'path': '/app/r/clients',
        'icon': 'fas fa-users',
        'access': 'clients'
    },
    {
        'name': 'services',
        'path': '/products',
        'icon': 'fas fa-th',
        'access': 'products'
    },
    {
        'name': 'resources',
        'path': '/emails/templates',
        'icon': 'fal fa-crosshairs',
        'access': 'resources'
    },
    {
        'name': 'users',
        'path': '/app/r/users',
        'icon': 'fal fa-user-circle',
        'access': 'staff'
    },
    {
        'name': 'teams',
        'path': '/teams',
        'icon': 'fas fa-sitemap',
        'access': 'teams'
    },
    {
        'name': 'Monthly Recurring',
        'path': '/app/r/recurring',
        'icon': ' fas fa-sync',
        'access': 'monthly_recurring'
    },
    {
        'name': 'Client Payments',
        'path': '/app/r/payments',
        'icon': 'fas fa-credit-card',
        'access': 'client_payments'
    },
    {
        'name': 'Affiliates',
        'path': '/app/r/leadSources',
        'icon': 'far fa-exchange',
        'access': 'affiliates'
    },
    {
        'name': 'Payroll Report',
        'path': '/app/r/payroll',
        'icon': 'far fa-dollar-sign',
        'access': 'pay_roll'

    },
    {
        'name': 'reports',
        'path': '/report',
        'icon': 'fas fa-chart-area',
        'access': 'reports',
        'submenu': [
            {
                'name': 'Sales Report',
                'path': '/app/r/salesReport'
            },
            {
                'name': 'Sales Rep Commissions',
                'path': '/app/b/salesRepCommissions'
            },
            {
                'name': 'Affiliate Commissions',
                'path': '/app/b/leadSourceCommissions'
            },
            {
                'name': 'Affiliate Override Commissions',
                'path': '/app/b/leadSourceOverrideCommissions'
            },
            {
                'name': 'Client Status Report',
                'path': '/app/r/clientStatusReport'
            },
            {
                'name': 'Export Payments',
                'path': '/app/b/paymentExport'
            }
        ]
    },
    // [
    //     'name' : 'proposals',
    //     'path' : '/proposals',
    //     'icon' : 'fa fa-files-o'
    // ],
];

const SideNavbar = () => {
    const [loading, setLoading] = useState(true)
    const [menuItems, setMenuItems] = useState(menu);

    useEffect(() => {
        setLoading(false);
    }, [menuItems])

    useEffect(() => {
        menu.map(m => {
            if (m.submenu) {
                m.submenuItems = m.submenu
                m.submenu = m.path.replace('/', "")
                setMenuItems([...menuItems, m])
            }
        })
    }, [])

    console.log(menuItems)
    if (loading) return <h1>Loading...</h1>
    return (
        <nav className='main-menu'>
            <div>
                <p className="hidden-sm hidden-md hidden-lg">
                    <a data-toggle="collapse" href="#mainLeftNav" aria-expanded="false" aria-controls="mainLeftNav">
                        <i className="fa fa-times-circle"></i>
                    </a>
                </p>
                <div className="logo hidden-xs">
                    <a href="{{appurl + 'panel'}}">
                        <img className="transform_logo" width="34px" height="34px" src={logo} />
                    </a>
                </div>
                <ul>
                    {menuItems.map(menu => {
                        return (
                            <li key={menu.name}>
                                {!menu.submenu &&
                                    <span>
                                        <i className={`${menu.icon} fa fa-2x`}></i>
                                        <span className='nav-text'>
                                            <a href={menu.path}>
                                                {menu.name}
                                            </a>
                                        </span>
                                    </span>
                                }
                                {menu.submenu &&
                                    <span>
                                        <i className={`${menu.icon} fa fa-2x`}></i>
                                        <span className='nav-text'>
                                            <a
                                                className='dropdown-toggle'
                                                href="#"
                                                id={menu.submenu}
                                                role='button'
                                                aria-expanded='true'
                                                data-bs-toggle="dropdown"
                                                aria-controls={menu.submenu}
                                            >
                                                {menu.name}
                                            </a>
                                        </span>
                                        <ul className='dropdown-menu' id={menu.submenu} aria-labelledby={menu.submenu}>
                                            {
                                                menu.submenuItems.map(sub => {
                                                    return (
                                                        <li className='subitem' key={sub.name}>
                                                            <a href={sub.path}>{sub.name}</a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </span>
                                }
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default SideNavbar;