'use client'

import { LoginModal } from '@/components'
import { useRouter } from 'next/navigation'

export default function HoneyPage() {
  const router = useRouter()
  return (
    <div>
      <LoginModal
        isOpen={true}
        handleClose={() => {
          router.back()
        }}
      />
    </div>
  )
}
