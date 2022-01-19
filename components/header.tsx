import React, { Children } from 'react'

interface Props {
    children: any;
    title: string;
}

export const Header = (props: Props) => {
    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap  p-6">
                <div className="flex space-x-2 items-center flex-shrink-0  mr-6">
                    {props.children}
                    <span className="font-semibold text-xl tracking-tight">{props.title}</span>
                </div>
            </nav>
        </header>
    )
}
