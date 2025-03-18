import React, { Dispatch, FC, SetStateAction, useCallback, useState } from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { SIDEBAR_ITEM, SIDEBAR_ITEMS } from "../helper/constants";
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import TableViewIcon from '@mui/icons-material/TableView';
import SaveIcon from '@mui/icons-material/Save';
import { AppBar, Button, CSSObject, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Theme, Toolbar, styled } from '@mui/material';
import { ComponentItem, LayoutItem } from "../types";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MuiDrawer from '@mui/material/Drawer';
import { LayoutProps } from "./GridLayout";
import DeleteIcon from '@mui/icons-material/Delete';

interface DroppableComponentsProps {
    data?: {
        id: string;
        type: string;
        component: {
            type: string;
            draggable: boolean;
        };
    },
    components?: {},
    layout?: LayoutItem[],
    setLayout?: Dispatch<SetStateAction<LayoutProps[]>>
}
const drawerWidth = 240;
const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});
const DroppableComponents: FC<DroppableComponentsProps> = ({layout, setLayout, components}) => {

    const getIcon = (type: string) => {
        switch (type) {
            case "barChart":
                return <BarChartIcon />
            case "lineChart":
                return <ShowChartIcon />
            case "card":
                return <CreditCardIcon />
            case "table":
                return <TableViewIcon />
            case "filter":
                    return <FilterAltIcon />   
            default:
                return <CreditCardIcon />
        }
    }

    const onClickSave = async () => {
        console.log(JSON.stringify({ layout }))
        const res = await fetch("http://localhost:3030/saveLayout", {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ layout, components })
        });
        console.log(res)
    }

    const getButtonComponents = (type: string) => {
        switch (type.toLowerCase()) {
            case "trash":
                return <DeleteIcon style={{ color: 'red' }} />
            case "save":
                return (<div onClick={onClickSave}>
                    <SaveIcon />
                </div>)
        }

    }

    const Drawer = styled(MuiDrawer)(({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }));

    return (
        <>
            <Drawer variant="permanent" open={true} anchor="right">
                <Divider />
                <List style={{ width: '20px' }}>
                    {Object.values(SIDEBAR_ITEMS).map((sideBarItem, index) => (
                        <ListItem key={sideBarItem.id} disablePadding sx={{ display: 'block' }}
                            title={sideBarItem.component.name}
                            draggable
                            unselectable="on"
                            onDragStart={(e) => e.dataTransfer.setData("text", JSON.stringify(sideBarItem))}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: 'initial',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: 3,
                                        justifyContent: 'center',
                                    }}
                                >
                                    {getIcon(sideBarItem.component.type)}
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Save'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: 'initial',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: 3,
                                        justifyContent: 'center',
                                    }}
                                >
                                {getButtonComponents(text)}
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
};

export default DroppableComponents;