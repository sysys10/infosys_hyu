'use client'

const GALLERY_IMAGES = {
  col1: [
    'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
  ],
  col2: [
    'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    'https://docs.material-tailwind.com/img/team-3.jpg'
  ],
  col3: [
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    'https://docs.material-tailwind.com/img/team-3.jpg',
    'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  ],
  col4: [
    'https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'
  ]
}

export function MasonryGridGallery() {
  return (
    <>
      <div className='grid grid-cols-2 max-w-5xl mx-auto gap-4 md:grid-cols-4 overflow-hidden'>
        <div className='grid gap-4'>
          <div className='animate-scroll-1 space-y-4'>
            {[...GALLERY_IMAGES.col1, ...GALLERY_IMAGES.col1].map((src, index) => (
              <div key={`col1-${index}`} className='relative h-64 w-full'>
                <img className='h-full w-full rounded-lg object-cover' src={src} alt={`gallery-photo-${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className='grid gap-4'>
          <div className='animate-scroll-2 space-y-4'>
            {[...GALLERY_IMAGES.col2, ...GALLERY_IMAGES.col2].map((src, index) => (
              <div key={`col2-${index}`} className='relative h-64 w-full'>
                <img className='h-full w-full rounded-lg object-cover' src={src} alt={`gallery-photo-${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className='grid gap-4'>
          <div className='animate-scroll-3 space-y-4'>
            {[...GALLERY_IMAGES.col3, ...GALLERY_IMAGES.col3].map((src, index) => (
              <div key={`col3-${index}`} className='relative h-64 w-full'>
                <img className='h-full w-full rounded-lg object-cover' src={src} alt={`gallery-photo-${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className='grid gap-4'>
          <div className='animate-scroll-4 space-y-4'>
            {[...GALLERY_IMAGES.col4, ...GALLERY_IMAGES.col4].map((src, index) => (
              <div key={`col4-${index}`} className='relative h-64 w-full'>
                <img className='h-full w-full rounded-lg object-cover' src={src} alt={`gallery-photo-${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-scroll-1 {
          animation: scrollUp 20s ease-in-out infinite alternate;
        }

        .animate-scroll-2 {
          animation: scrollDown 18s ease-in-out infinite alternate;
        }

        .animate-scroll-3 {
          animation: scrollUp 22s ease-in-out infinite alternate;
        }

        .animate-scroll-4 {
          animation: scrollDown 24s ease-in-out infinite alternate;
        }
      `}</style>
    </>
  )
}

export default MasonryGridGallery
