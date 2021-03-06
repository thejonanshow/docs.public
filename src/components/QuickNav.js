import React, { useEffect } from 'react'
import { styled } from './styles/stitches.config'
import { Menu3 } from '@styled-icons/remix-line/Menu3'

const QuickNavContainer = styled('nav', {
  flexBasis: '215px',
  margin: '2em 0 0',
  position: 'sticky',
  top: 'calc(90px + 2em)',
  borderLeft: '1px solid var(--border-primary)',

  '@tinyDesktop': {
    display: 'none',
  },
})

const QuickNavList = styled('ul', {
  listStyle: 'none',
  padding: '0',
  margin: '0',
})

const QuickNavHeader = styled('li', {
  padding: '0 0 0 2em',
  fontSize: '12px',
  textTransform: 'uppercase',
  marginBottom: '1em',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  '> svg': {
    color: 'var(--text-secondary)',
    width: '14px',
    marginRight: '6px',
  },
})

const QuickNavListItem = styled('li', {
  marginLeft: '-1px',
  padding: '0 0 0 2em',
  fontSize: '12px',
  lineHeight: '20px',
  color: 'var(--text-secondary)',
  borderLeft: '1px solid var(--border-primary)',

  '&:not(:last-child)': {
    paddingBottom: '0.5em',
    paddingTop: '0.5em',
  },

  '&.active': {
    borderLeft: '1px solid var(--gray-400)',
  },
})

const AnchorLink = styled('a', {
  color: 'var(--text-secondary)',
  textDecoration: 'unset',

  '&:hover': {
    color: 'var(--text-primary)',
  },
})

export default function QuickNav({ subNavPages }) {
  function createKebabCase(text) {
    return text
      .toLowerCase()
      .split(':')
      .join('')
      .split('.')
      .join('')
      .split('(')
      .join('')
      .split(' ')
      .join('-')
  }

  useEffect(() => {
    const config = {
      rootMargin: '-90px 0px 0px 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')

        if (entry.isIntersecting) {
          document
            .querySelector(`ul#quicknav > li > a[href="#${id}"]`)
            .parentElement.classList.add('active')
        } else {
          document
            .querySelector(`ul#quicknav > li > a[href="#${id}"]`)
            .parentElement.classList.remove('active')
        }
      })
    }, config)

    document.querySelectorAll('h2[id]').forEach((h2) => {
      observer.observe(h2)
    })
  })

  return (
    <QuickNavContainer>
      <QuickNavList id="quicknav">
        <QuickNavHeader>
          <Menu3 />
          On this page
        </QuickNavHeader>
        {subNavPages.length > 0 &&
          subNavPages.map((page) => {
            return (
              <QuickNavListItem key={`#${createKebabCase(page.value)}`}>
                <AnchorLink href={`#${createKebabCase(page.value)}`}>
                  {page.value}
                </AnchorLink>
              </QuickNavListItem>
            )
          })}
      </QuickNavList>
    </QuickNavContainer>
  )
}
