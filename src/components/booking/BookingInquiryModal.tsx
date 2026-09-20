import React from 'react';
import { Modal } from '../common/Modal';
import { BookingInquiryForm } from './BookingInquiryForm';

interface BookingInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomName?: string;
}

export const BookingInquiryModal: React.FC<BookingInquiryModalProps> = ({
  isOpen,
  onClose,
  selectedRoomName
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Reserve Your Stay — Seven Sky Hotel Murree"
      maxWidth="xl"
    >
      <BookingInquiryForm
        initialRoomType={selectedRoomName}
        onSuccess={onClose}
      />
    </Modal>
  );
};
