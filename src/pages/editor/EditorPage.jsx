

import { useParams } from "react-router-dom"
import BackgroundRemover from "./components/BackgroundRemover"

const EditorPage = () => {
  const { templateId } = useParams()

  return (
    <div className="pt-20">
      <BackgroundRemover templateId={templateId} />
    </div>
  )
}

export default EditorPage
