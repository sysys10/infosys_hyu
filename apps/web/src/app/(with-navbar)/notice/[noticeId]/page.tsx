import { NoticeDetail } from '@/components/common'
import { getNoticeById } from '@/utils/supabase/database'
import { getImageUrlsByNoticeId } from '@/utils/supabase/imageUpload'
import { createClient } from '@/utils/supabase/supabase'
import { notFound } from 'next/navigation'

export default async function NoticePage({ params }: { params: Promise<{ noticeId: string }> }) {
  const supabase = createClient()
  const { noticeId } = await params
  try {
    if (!noticeId) {
      return notFound()
    }
    const notice = await getNoticeById(supabase, noticeId)
    const imageUrls = await getImageUrlsByNoticeId(supabase, noticeId)

    if (!notice) {
      return notFound()
    }

    return <NoticeDetail notice={notice} imageUrls={imageUrls} />
  } catch (error) {
    console.error('Error fetching notice:', error)
    return notFound()
  }
}
