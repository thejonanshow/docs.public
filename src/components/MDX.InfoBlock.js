import React from 'react'
import { styled } from './styles/stitches.config'
import { File4, AlarmWarning, Star } from '@styled-icons/remix-line'

const IconContainer = styled('div', {
  marginRight: '1em',
  fontSize: '14px',
  lineHeight: '24.1818px',

  '&:before': {
    content: '',
    marginBottom: '-0.5em',
    display: 'table',
  },

  '&:after': {
    content: '',
    marginTop: '-0.5em',
    display: 'table',
  },

  '> svg': {
    width: '16px',
  },
})

const TextContainer = styled('div', {
  fontSize: '16px',
  lineHeight: '24px',

  '&:before': {
    content: '',
    marginBottom: '-0.3864em',
    display: 'table',
  },

  '&:after': {
    content: '',
    marginTop: '-0.3864em',
    display: 'table',
  },
})

const ImageBlockContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  color: 'var(--text-secondary)',
  border: '1px solid var(--border-primary)',
  borderRadius: '6px',
  margin: '2em 0',
  padding: '1.5em 1em',

  variants: {
    type: {
      note: {
        [`> ${IconContainer} > svg`]: {
          color: 'rgb(var(--green-600))',
        },
      },
      warning: {
        [`> ${IconContainer} > svg`]: {
          color: 'rgb(var(--orange-500))',
        },
      },
      tip: {
        [`> ${IconContainer} > svg`]: {
          color: 'rgb(var(--blue-500))',
        },
      },
    },
  },
})

export default function InfoBlock(props) {
  const { type, children } = props

  return (
    <ImageBlockContainer type={type}>
      <IconContainer>
        {type === 'note' && <File4 />}
        {type === 'warning' && <AlarmWarning />}
        {type === 'tip' && <Star />}
      </IconContainer>

      <TextContainer>{children}</TextContainer>
    </ImageBlockContainer>
  )
}
