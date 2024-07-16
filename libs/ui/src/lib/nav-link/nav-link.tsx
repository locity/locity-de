'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren, useEffect, useState } from 'react'

type NavLinkProps = LinkProps & {
  className?: string
  activeClassName: string
}

export function NavLink({ children, activeClassName, className, ...props }: PropsWithChildren<NavLinkProps>) {
  const pathname = usePathname()
  const [computedClassName, setComputedClassName] = useState(className)

  useEffect(() => {
    if (pathname) {
      const linkUrl = getLinkUrl(props.href, props.as)

      const linkPathname = new URL(linkUrl, location.href).pathname
      const activePathname = new URL(pathname, location.href).pathname

      const newClassName = linkPathname === activePathname ? `${className} ${activeClassName}`.trim() : className

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName)
      }
    }
  }, [pathname, props.as, props.href, activeClassName, className, computedClassName])

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  )
}

export default NavLink

const getLinkUrl = (href: LinkProps['href'], as?: LinkProps['as']): string => {
  if (as) return as.toString()
  return href.toString()
}
