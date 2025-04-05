import { Content, FloatingNoteTitle, RootLayout, Sidebar } from '@/components'
import { useRef } from 'react'
import { ActionButtonRow } from './components/ActionButtonRow'
import MarkdownEditor from './components/MarkdownEditor'
import NotePreviewList from './components/NotePreviewList'

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)
  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }
  return (
    <>
      {/* <DragableTopBar /> */}
      <RootLayout>
        <Sidebar className="p-2 border-1 border-gray-200 bg-gray-200/10">
          <ActionButtonRow className="flex justify-between " />
          <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
        </Sidebar>
        <Content ref={contentContainerRef} className="">
          <FloatingNoteTitle className="p-2 sticky top-0 z-10" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
