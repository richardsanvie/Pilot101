import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = 
  | AnchorHTMLAttributes<HTMLAnchorElement> 
  | ButtonHTMLAttributes<HTMLAnchorElement>
export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} {...props} hasIcon={!!icon}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
