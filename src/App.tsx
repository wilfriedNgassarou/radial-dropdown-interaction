import { MouseEvent, useState } from "react"

export default function App() {
  const [index, setIndex] = useState(0) ;
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false) ;

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement 

    // si on clique sur le bouton bleu, on ferme le dropdown
    if(target.tagName == 'DIV' || target.tagName == 'IMG') {
      setDropdownIsOpen(false)
      setIndex(0)
    }

    if(!dropdownIsOpen) {
      setDropdownIsOpen(true)
      return 
    }

    if(target.tagName != 'SPAN') return 

    const index = +target.dataset.index! 

    setIndex(index)
  }

  return (
    <main>
      {/* utilisé pour masquer le texte quand on ferme le dropdown  */}
      <div className={`container ${dropdownIsOpen ? 'container-open' : ''}`}>
        <div className="button" onClick={handleClick}>
          <div
            style={{
              transform: `rotate(${(-1 * index) * 18}deg)`
            }} 
            className={`circle ${dropdownIsOpen ? 'open' : ''}`}
          >
            <span data-index="-2" className={index == -2 ? 'text-active' : ''} >Edit</span>
            <span data-index="-1" className={index == -1 ? 'text-active' : ''}>Archived</span>
            <span data-index="0" className={index == 0 ? 'text-active' : ''}>Saved</span>
            <span data-index="1" className={index == 1 ? 'text-active' : ''}>Delete</span>
            <span data-index="2" className={index == 2 ? 'text-active' : ''}>Cancel</span>
          </div>
          {/* utilisé pour masquer les icones pas actives  */}
          <div className="icons-container">
            <div className="icons">
              <span data-index="-2" className={`icon ${dropdownIsOpen && index == -2 ? 'icon-active' : ''}`}>
                <img src="/svg/edit.png" alt="" />
              </span>
              <span data-index="-1" className={`icon ${dropdownIsOpen && index == -1 ? 'icon-active' : ''}`}>
                <img src="/svg/archive.png" alt="" />
              </span>
              <span data-index="0" className={`icon ${dropdownIsOpen && index == 0 ? 'icon-active' : ''}`}>
                <img src="/svg/document-download.png" alt="" />
              </span>
              <span data-index="1" className={`icon ${dropdownIsOpen && index == 1 ? 'icon-active' : ''}`}>
                <img src="/svg/trash.png" alt="" />
              </span>
              <span data-index="2" className={`icon ${dropdownIsOpen && index == 2 ? 'icon-active' : ''}`}>
                <img src="/svg/close-circle.png" alt="" />
              </span>
              <span data-index="0" className={`icon ${!dropdownIsOpen ? 'icon-active' : ''}`}>
                <img src="/svg/arrow-up.png" alt="" />
              </span>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}