import React, { MouseEventHandler } from 'react';
import { IconType } from 'react-icons/lib/cjs';

import './styles.css';

interface OverlayMessageProps {
  Icon: IconType, // need to begin win capital letter
  message: string,
  isVisible: boolean,
  onClick?: MouseEventHandler<HTMLDivElement>
}

const OverlayMessage: React.FC<OverlayMessageProps> = (props) => {

  const Icon = props.Icon; 
  const messageText = props.message;
  const isVisible = props.isVisible;
  const onClicEvent = props.onClick;

  return (
    <div onClick={onClicEvent} className={isVisible ? 'success-modal-background show' : 'success-modal-background'}>
      <div className='success-modal-box'>
        <Icon />
        <span>{messageText}</span>
      </div>
    </div>
  );
};


export default OverlayMessage;