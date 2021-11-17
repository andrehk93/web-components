import React, {FC, useEffect, useState} from "react";

let timerId: number;

const ANIMATION_TIME = 600;

export const Menu: FC<{open: boolean}> = ({ open }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (timerId) {
            window.clearTimeout(timerId);
        }

        if (open) {
            timerId = window.setTimeout(() => setIsAnimating(true), 1);
        } else {
            timerId = window.setTimeout(() => setIsAnimating(false), ANIMATION_TIME);
        }
    }, [open]);

    if (!open && !isAnimating) {
        return null;
    }

    const menuClasses = ['menu'];
    if (open) {
        menuClasses.push('menu--is-open');
    }
    if (isAnimating) {
        menuClasses.push('menu--is-animating');
    }

    return (
        <div className={menuClasses.join(' ')}>
            <a href={'http://localhost:3000'}>
                App one
            </a>
            <a href={'http://localhost:3001'}>
                App two
            </a>
        </div>
    )
}