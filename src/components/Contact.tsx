"use client"
import { JSX, useReducer } from "react";

export interface FrameProps {
    property1: "variant-2" | "default";

    className: string;

    divClassName: string;
}

export const Contact = ({
    property1,
    className,
    divClassName,
}: FrameProps): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`w-[110px] left-5 flex items-center h-9 rounded-[20px] justify-center relative ${state.property1 === "variant-2" ? "top-[76px]" : "top-5"} ${state.property1 === "variant-2" ? "bg-[#e7e7e7]" : "bg-[#21186b]"} ${className}`}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
        >
            <div
                className={`[font-family:'Poppins-Medium',Helvetica] w-[66px] tracking-[0] text-base h-6 font-medium leading-[normal] ${state.property1 === "variant-2" ? "text-[#21186b]" : "text-white"} ${divClassName}`}
            >
                Contact
            </div>
        </div>
    );
};

function reducer(state: any, action: any) {
    switch (action) {
        case "mouse_enter":
            return {
                ...state,
                property1: "default",
            };

        case "mouse_leave":
            return {
                ...state,
                property1: "variant-2",
            };
    }

    return state;
}
