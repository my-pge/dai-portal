'use client'
import React from "react";
import { Menu } from 'primereact/menu';
import { Badge } from "primereact/badge"
import { classNames } from 'primereact/utils';
import { useRouter } from 'next/navigation'
import { useGlobalContext } from "../context/globalContext";
import Link from 'next/link'


export const MenuBar = () => {
    const router = useRouter();
    const { state, dispatch } = useGlobalContext();
    const { leftVisible } = state;

    const handleClick = () => {
        dispatch({
            type: "setLeftVisible",
            payload: !leftVisible
        });
    }
    const itemRenderer = (item: any) => (
        <div className='p-menuitem-content'>
            <Link href={item.url} className="flex align-items-center p-menuitem-link">
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
            </Link>
        </div>
    );
    let items = [
        {
            template: () => {
                return (
                    <div style={{ display: 'grid' }}>
                        <span className="inline-flex align-items-center gap-1 px-2 py-2">
                            <img src="../pge logo square.png" alt="logo" width="40px" height="40px" />
                            <span className="font-medium text-xl font-semibold">
                                DA&I <span className="text-primary">Portal</span>
                            </span>
                            {/* <button className={`filter-icon py-2 ${leftVisible ? 'rotate-180' : 'rotate-0'}`} onClick={handleClick}>
                                <img src="./expand-icon.svg" alt="expand icon" /></button> */}
                        </span>
                    </div>
                );
            }
        },
        {
            separator: true
        },
        {
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-home',
                    url: "/",
                    template: itemRenderer,
                },
                {
                    label: 'Services',
                    icon: 'pi pi-star',
                    url: "/services",
                    template: itemRenderer,
                },
                {
                    label: 'Products',
                    icon: 'pi pi-box',
                    url: "/products",
                    template: itemRenderer,
                },
                {
                    label: 'FAQs',
                    icon: 'pi pi-question',
                    url: "/faqs",
                    template: itemRenderer,
                },
                // {
                //     label: 'Tickets',
                //     icon: 'pi pi-ticket',
                //     url: "/tickets",
                //     template: itemRenderer,
                // },
                // {
                //     label: 'Resources',
                //     icon: 'pi pi-file-o',
                //     url: "/resources",
                //     template: itemRenderer,
                // }
            ]
        },
        {
            separator: true
        },
        {
            items: [
                // {
                //     label: 'Profile',
                //     icon: 'pi pi-user',
                //     url: "/profile",
                //     template: itemRenderer,
                // },
                // {
                //     label: 'Logout',
                //     icon: 'pi pi-sign-out',
                //     url: "/logout",
                //     template: itemRenderer,
                // }
            ]
        },

        {
            command: () => {

            },
            template: (item: any, options: any) => {
                return (
                    <button onClick={(e) => options.onClick(e)} className={classNames(options.className, 'flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround')}>
                        {/* <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" shape="circle" />
                        <div className="flex flex-column align">
                            <span className="font-bold">Amy Elsner</span>
                            <span className="text-sm">Agent</span>
                        </div> */}
                    </button>
                );
            }
        }
    ];

    return (
        <div className="sticky top-0 left-0 flex justify-content-center h-screen">
            <Menu model={items} className="w-full md:w-15rem" />
        </div>
    )

}