import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

type Props = {
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: (toggleEvent: boolean) => void;
  confirmDeleteUsers: () => void;
};

const DeleteModal = ({
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  confirmDeleteUsers,
}: Props) => {
  const handleClose = () => {
    setIsDeleteModalOpen(false);
  };

  const handleConfirm = () => {
    confirmDeleteUsers();
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <Dialog
        open={isDeleteModalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          고객정보가 삭제됩니다. 정말 삭제하시겠습니까?
        </DialogTitle>

        <DialogActions>
          <Button color="error" onClick={handleConfirm}>
            네
          </Button>
          <Button onClick={handleClose}>아니오</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteModal;
