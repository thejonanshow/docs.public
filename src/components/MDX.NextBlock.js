import React from 'react'
import { styled } from './styles/stitches.config'
import { ArrowRightS } from '@styled-icons/remix-line'

const NextBlockContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  margin: '0',
  padding: '2em 0 0',

  '&:after': {
    position: 'absolute',
    top: '0',
    left: '0',
    content: '',
    display: 'block',
    height: '1px',
    width: '100%',
    background:
      'linear-gradient(to right,var(--border-primary),var(--bg-primary))',
  },
})

const NextBlockHeading = styled('h2', {
  margin: '0 !important',
  padding: '0 0 1em',
})

const NextBlockList = styled('ul', {
  listStyle: 'none',
  padding: '0 !important',
  margin: '0 !important',
})

const NextBlockListItem = styled('li', {
  margin: '0 -1em !important',
  padding: '0 1em',
  borderRadius: '6px',

  '&:hover': {
    backgroundColor: 'var(--bg-secondary)',
  },
})

const NextBlockListItemLink = styled('a', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5em 0',
  borderBottom: '0 !important',

  '> svg': {
    width: '1em',
  },

  '&:hover': {
    borderBottom: '0 !important',
  },
})

export default function NextBlock(props) {
  const { steps } = props

  return (
    <NextBlockContainer>
      <NextBlockHeading>Next Steps</NextBlockHeading>
      <NextBlockList>
        {steps.map((step) => {
          return (
            <NextBlockListItem key={step.link}>
              <NextBlockListItemLink href={step.link}>
                <span>{step.text}</span>
                <ArrowRightS />
              </NextBlockListItemLink>
            </NextBlockListItem>
          )
        })}
      </NextBlockList>
    </NextBlockContainer>
  )
}
