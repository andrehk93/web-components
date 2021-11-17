import React, {FC, useState} from "react";
import {Menu} from "./menu/Menu";

export const Header: FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className={'header'}>
            <div className={'header__inner'}>
                <div>
                    <h1>Header Web Component</h1>
                </div>
                <div className={'header__tools'}>
                    <button onClick={() => setOpen(prev => !prev)}>Menu</button>
                </div>
            </div>
            <Menu open={open}/>
        </nav>
    )
}