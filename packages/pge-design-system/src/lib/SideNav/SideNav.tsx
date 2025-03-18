'use client';
import { PanelMenu } from "primereact/panelmenu";
import "primereact/resources/primereact.min.css";
import { TieredMenu } from 'primereact/tieredmenu';
import "./SideNav.css";
import { snProps } from "../../types/types";
import { useState } from "react";

export const SideNav = ({ menu, isExpanded, classes, noRetract = false }: snProps) => {
    const [expanded, setIsExpanded] = useState(isExpanded)

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    noRetract && {
        ...menu,
        id: "toggle",
        icon: expanded ? "pi pi-times" : "pi pi-bars",
        label: "",
        command: () => setIsExpanded(!expanded),
        className: "toggle-button",
    };
    return (
        <>
            <PanelMenu
                className={`${classes} sidenav-expanded`}
                model={[
                    ...menu,
                ]}
                style={{
                    visibility: expanded ? "visible" : "hidden",
                    width: expanded ? "240px" : "44px",
                }}
            />
            {noRetract ? null :
                <TieredMenu
                    className={`${classes} sidenav-retracted`}
                    model={[
                        {
                            id: "toggle",
                            icon: expanded ? "pi pi-times" : "pi pi-bars",
                            label: "",
                            command: () => setIsExpanded(!expanded),
                            className: "toggle-button",
                        },
                        ...menu,
                    ]}
                    style={{
                        visibility: expanded ? "hidden" : "visible",
                        width: expanded ? "240px" : "44px",
                    }}
                />}
        </>
    );
};
