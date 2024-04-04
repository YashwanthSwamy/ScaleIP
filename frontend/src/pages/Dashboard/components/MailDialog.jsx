import React, { useState } from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { useStateContext } from '../../../contexts/ContextProvider';

const MailDialog = ({ isOpen, onClose }) => {
  const { userInfo } = useStateContext();
  const [mailContent, setMailContent] = useState('');

  const handleSendMail = () => {
    console.log('Sending mail with content:', mailContent);
    onClose();
  };

  const handleOnMailChange = (event) => {
    setMailContent(event.value);
  }

  const buttons = [
    {
      click: handleSendMail,
      buttonModel: {
        content: 'Send',
        isPrimary: true,
      }
    },
    {
      click: onClose,
      buttonModel: {
        content: 'Cancel',
      }
    }
  ];

  return (
    <DialogComponent id="mailDialog" showCloseIcon={true} width="50%" height='50%' visible={isOpen} buttons={buttons} onClose={onClose}>
      <p className="flex justify-center font-semibold text-3xl dark:text-gray-200 mb-8">Send Your Message</p>
      <div className='flex flex-col gap-4'>
        <div className='flex min-w-fit'>
          <label className='font-semibold text-xl dark:text-gray-200 min-w-fit mr-4' >Name:</label>
          <input type="text" value={`${userInfo.firstName} ${userInfo.lastName}`} className='text-cyan-500 text-sm font-semibold dark:text-gray-400 w-full' readOnly />
        </div>
        <div className='flex min-w-fit'>
          <label className='font-semibold text-xl dark:text-gray-200 min-w-fit mr-3' >Mail ID:</label>
          <input type="text" value={userInfo.email} className='text-cyan-500 text-sm font-semibold dark:text-gray-400 w-full' readOnly />
        </div>
        <div className='flex min-w-fit mt-12'>
          <RichTextEditorComponent value={mailContent} change={handleOnMailChange}>
            <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
          </RichTextEditorComponent>
        </div>
      </div>
    </DialogComponent>
  );
};

export default MailDialog;
