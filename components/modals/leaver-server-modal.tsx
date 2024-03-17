'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

import { useModal } from '@/hooks/use-modal-store';
import { Button } from '../ui/button';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LeaveServerModal = () => {
  const { isOpen, onClose, type, data } = useModal();

  const router = useRouter();
  const { server } = data;

  const [loading, setLoading] = useState(false);

  const isModalOpen = isOpen && type === 'leaverServer';

  const leaveServer = async () => {
    try {
      setLoading(true);
      await axios.patch(`/api/servers/${server?.id}/leave`);

      onClose();
      router.refresh();
      router.push('/');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Leave Server
          </DialogTitle>
          <DialogDescription className="text-zinc-500">
            Are you sure to leave{' '}
            <span className="font-semibold text-indigo-500">
              {' '}
              {server?.name}{' '}
            </span>
            ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="px-6 py-4 bg-gray-100">
          <div className="flex items-center justify-between w-full">
            <Button disabled={loading} onClick={onClose} variant={'ghost'}>
              Cancel
            </Button>
            <Button
              disabled={loading}
              onClick={leaveServer}
              variant={'primary'}
            >
              Confirm
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default LeaveServerModal;
