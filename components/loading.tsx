import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";

interface Props {
    loading: boolean
}

export const Loading = (props: Props) => {
    return (
        <div className="flex h-screen justify-center pt-5 items-center">
            <MoonLoader color={"#66A37A"} loading={props.loading} size={60} />
        </div>
    )
}
