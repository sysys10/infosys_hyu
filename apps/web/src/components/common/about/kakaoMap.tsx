'use client'

import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk'

export function KakaoMap() {
  const [loading, error] = useKakaoLoader({
    appkey: '7338d6ea6cff89479186cf61ee729122'
  })

  if (loading) return <div className='w-full h-96 flex items-center justify-center bg-gray-900 text-white'>Loading...</div>
  if (error) return <div className='w-full h-96 flex items-center justify-center bg-gray-900 text-white'>Error...</div>

  return (
    <div className='w-full p-8 space-y-8'>
      <div className='max-w-3xl mx-auto w-full'>
        <h2 className='text-3xl font-bold text-center mb-5 text-black'>지도</h2>
        <div className='w-full h-[400px] rounded-lg overflow-hidden shadow-lg'>
          <Map center={{ lat: 37.5559538819672, lng: 127.049281331623 }} style={{ width: '100%', height: '100%' }}>
            <MapMarker position={{ lat: 37.5559538819672, lng: 127.049281331623 }}>
              <div className='p-3 bg-white rounded-lg shadow-lg'>
                <h3 className='font-semibold text-black'>정보시스템학과 학생회실</h3>
                <p className='text-sm text-gray-600'>it/bt관 2xx호</p>
              </div>
            </MapMarker>
          </Map>
        </div>

        <div className='space-y-6 pt-10'>
          <div>
            <h3 className='text-xl font-bold mb-2'>주소</h3>
            <p className='text-gray-600'>[00000]</p>
            <p className='text-gray-600'>서울특별시 성동구 000,</p>
            <p className='text-gray-600'>한양대학교 it/bt관 2xx호, 정보시스템학과 과방</p>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-2'>이메일</h3>
            <p className='text-gray-600'>ys1014@hanyang.ac.kr</p>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-2'>문의하기</h3>
            <p className='text-gray-600'>정보시스템학과 학생회에 문의하실 내용이 있으신 경우, 이메일로 보내시거나 회장단에게 연락하시기 바랍니다.</p>
            <p className='text-gray-600'>채널톡을 이용한다면 더욱 빠르게 답변을 받으실 수 있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
