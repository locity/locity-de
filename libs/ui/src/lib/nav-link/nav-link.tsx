'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren, useEffect, useState } from 'react'
import styles from './nav-link.module.scss'

type NavLinkProps = LinkProps & {
  exact?: boolean
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

      const isActive = props.exact ? linkPathname === activePathname : activePathname.startsWith(linkPathname)
      const classes = [className, styles['nav-link']]
      if (isActive) classes.push(activeClassName.trim())
      const newClassName = classes.join(' ')

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

const getLinkUrl = (href: LinkProps['href'], as?: LinkProps['as']): string => {
  if (as) return as.toString()
  return href.toString()
}
