import { Button } from '@packages/ui/components/button'
import { CustomIcons } from '@packages/ui/components/icons'

import { ModalPortal } from './ModalPortal'

interface LoginModalProps {
  isOpen: boolean
  handleClose: () => void
}

function LoginModal({ isOpen, handleClose }: LoginModalProps) {
  return (
    <ModalPortal isOpen={isOpen} handleClose={handleClose} className='h-40'>
      <div className='absolute top-4 right-4 cursor-pointer' onClick={handleClose}>
        <CustomIcons name='close' />
      </div>
      <div className='flex flex-col justify-center items-center h-full w-full p-4 text-lg text-text-secondary font-bold'>
        로그인 후 이용해주세요!
        <Button variant={'outline'} size={'default'}>
          로그인
        </Button>
      </div>
    </ModalPortal>
  )
}

export { LoginModal }
