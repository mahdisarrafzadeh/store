import classNames from 'classnames'
import Link from 'next/link'
import React, { AnchorHTMLAttributes } from 'react'


const twClasses = {
    base: 'focus:outline-none justify-center transition cursor-pointer ease-in-out duration-300 flex flex-row space-x-1 items-center',
    disabled: 'opacity-50 cursor-not-allowed',
    pill: 'rounded-xl',
    block: "stroke-1",
    size: {
        small: 'px-2 py-1 text-sm',
    },
    variant: {
        primary: 'bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white',
    },
}

export interface ButtonProps extends AnchorHTMLAttributes<any> {
    children: React.ReactNode
    disabled?: boolean
    block?: boolean
    loading?: boolean
    pill?: boolean | false
    type: 'primary' | 'secondary' | 'danger'
    size?: "small" | "normal" | "large"
}

function Button(
    props: ButtonProps,
    ref: React.Ref<HTMLAnchorElement> | undefined,
) {
    const {
        children,
        disabled,
        href: _href,
        loading,
        onClick: _onClick,
        type,
        pill,
        size,
        ...aProps
    } = props

    const href = disabled || loading ? 'javascript:void(0)' : _href
    const onClick = disabled || loading ? undefined : _onClick

    const className = classNames(
        twClasses.base,
        pill && twClasses.pill,
        twClasses.variant.primary,
        disabled && twClasses.disabled,
        aProps.className,
        twClasses.size.small
    )

    if (loading) {
        return (
            <a ref={ref} href={href} className={classNames(className, 'relative')}>
                <span className="opacity-0">{children}</span>
            </a>
        )
    }

    return href && href.startsWith('/') ? (
        <Link href={href} >
            <a {...aProps} ref={ref} className={className} onClick={onClick}>
                {children}
            </a>
        </Link>
    ) : (
        <a
            {...aProps}
            ref={ref}
            className={className}
            href={href}
            onClick={onClick}
            rel={aProps.target === '_blank' ? 'noopener' : undefined}
        >
            {children}
        </a>
    )
}


export default React.forwardRef(Button)
