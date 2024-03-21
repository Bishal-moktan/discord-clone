'use client';

import { useEffect, useState } from 'react';
import CreateServerModal from '../modals/create-server-modal';
import InviteModal from '../modals/invite-modal';
import EditServerModal from '../modals/edit-server-modal';
import ManageMembersModal from '../modals/manage-members-modal';
import CreateChannelModal from '../modals/create-channel-modal';
import LeaveServerModal from '../modals/leaver-server-modal';
import DeleteServerModal from '../modals/delete-server-modal';
import { DeleteChannelModal } from '../modals/delete-channel-modal';
import { EditChannelModal } from '../modals/edit-channel-modal';

export const ModalProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <ManageMembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
    </>
  );
};
