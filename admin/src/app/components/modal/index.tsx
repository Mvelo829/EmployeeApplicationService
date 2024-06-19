import React from 'react';
import './CustomModal.css';
import { Modal, Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

export interface ModalProps {
    title: string;
    isOpen: boolean;
    onOk: () => void;
    onCancel: () => void;
    formComponent: JSX.Element;
    buttonTitle?: string;
    useCustomFooter?: boolean | false;
    disableFooter?: boolean | false;
}

const CustomModal: React.FC<ModalProps> = ({ title, isOpen, onOk, onCancel, formComponent, buttonTitle, useCustomFooter = false, disableFooter= false}) => {

    const modalFooter = (
        disableFooter == true ? null :
        <div>
            <Button key="submit" className='button' onClick={onOk}>
                <PlusCircleFilled className='buttonicon' />
                <span >{buttonTitle}</span>
            </Button>

        </div>
    );

    return (
        useCustomFooter ? (
            <Modal
                title={title}
                open={isOpen}
                onOk={onOk}
                onCancel={onCancel}
                footer={modalFooter}
                wrapClassName="custom-modal"
            >
                {formComponent}
            </Modal>
        ) :
            <Modal title={title} open={isOpen} onOk={onOk} onCancel={onCancel}>
                {formComponent}
            </Modal>

    );

};

export default CustomModal;
