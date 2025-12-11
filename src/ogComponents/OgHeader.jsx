import "ogHeader.scss"
import ui from "../../public/ui.png"

const OgHeader = () => {
  return (
    <div className="OgHeader">
      <div className="logo">
        <img src={ui} alt="" />
      </div>
    </div>
  )
}

export default OgHeader