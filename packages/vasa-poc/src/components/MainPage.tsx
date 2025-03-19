import React, { useEffect, useState } from "react";
import { useGlobalContext } from "src/context/globalContext";

import { Filter } from "./Filter";
import { Layout3Vertical } from "@pge-fe-monorepo/pge-design-system/src/lib";
import { RightPanel } from "./RightPanel";
import { CenterPanel } from "./CenterPanel";


export const MainPage = () => {
    const { state } = useGlobalContext();
    const { rightVisible } = state;
    return (
        <Layout3Vertical rightVisible={rightVisible}>
            <Filter />
            <CenterPanel />
            <RightPanel />
        </Layout3Vertical>
    )

}