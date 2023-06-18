import React, { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type BoxProps = {
    className?: string;
};

export const Box: FC<PropsWithChildren<BoxProps>> = ({ children, className }) => {
    return (
        <div className={twMerge(`
            bg-neutral-900
            rounded-lg
            h-fit
            w-full
        `, className)}>{children}</div>
    );
};
