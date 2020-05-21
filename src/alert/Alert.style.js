import { Close } from '../button/Button.style';

export const AlertStyle = {
  marginBottom: 'var(--space-16, 16px)',
  padding: 'var(--space-16, 16px)',

  borderRadius: 'var(--border-radius, 3px)',
};

export const AlertSuccess = {
  color: '#1b7940',
  borderColor: 'var(--color-control-positive)',
  backgroundColor: 'var(--color-background-positive)',

  'a:hover, a:focus, .close:hover, .close:focus': {
    color: '#1b7940',
  },
};

export const AlertClose = {
  ...Close,
  position: 'relative',
  top: '-2px',

  float: 'right',

  marginLeft: 'var(--space-8, 8px)',

  textDecoration: 'none',

  color: 'inherit',

  fontSize: '32px',
  fontWeight: '700',
  lineHeight: '24px',
};
