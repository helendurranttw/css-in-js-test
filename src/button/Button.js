/** @jsx jsx */
import { jsx } from '@emotion/core';

import Types from 'prop-types';
import classNames from 'classnames';
import requiredIf from 'react-required-if';
import { Type, Size } from '../common/propValues';
import { ButtonStyle, ButtonPay } from './Button.style';
import { CommonStyle } from '../common/Common.style';

const ButtonTypes = {
  [Type.PAY]: ButtonPay,
};

const Button = ({
  block,
  children,
  className,
  disabled,
  htmlType,
  loading,
  size,
  special,
  type,
  ...rest
}) => {
  return (
    <button
      type={htmlType}
      css={{
        ...ButtonStyle,
        ...ButtonTypes[type],
        ...CommonStyle,
      }}
      disabled={disabled || loading}
      {...rest}
    >
      {children}
      {loading && <span className={classNames('btn-loader', { 'm-l-2': !block })} />}
    </button>
  );
};

Button.propTypes = {
  block: Types.bool,
  children: Types.node.isRequired,
  className: Types.string,
  disabled: Types.bool,
  htmlType: Types.oneOf(['submit', 'reset', 'button']),
  loading: Types.bool,
  onClick: requiredIf(Types.func, (props) => props.htmlType !== 'submit'),
  size: Types.oneOf([Size.SMALL, Size.MEDIUM]),
  special: Types.bool,
  type: Types.oneOf([Type.PRIMARY, Type.PAY, Type.SECONDARY, Type.DANGER, Type.LINK]),
};

Button.defaultProps = {
  block: false,
  className: null,
  disabled: false,
  htmlType: 'button',
  loading: false,
  onClick: null,
  size: Size.MEDIUM,
  special: false,
  type: Type.PRIMARY,
};

export default Button;
