import React, { useEffect } from 'react'
import './BitnodePreview.scss'
import edit from '../../assets/icons/edit.png'
export function BitnodePreview({ bitnode, onSelectBitnode }) {
  useEffect(() => {
    console.log(bitnode);
  }, [])
  function selectBitnode(ev) {
    ev.stopPropagation()
    onSelectBitnode(bitnode._id)
  }
  return bitnode && (
    <li className="bitnode-preview flex column align-center">
      <div className="contant flex column">
        <div className="title-container">
          <h3>{bitnode.ipAddress} : {bitnode.port}</h3>
          <h3>Status: {bitnode.status}</h3>
        </div>
        <div className="funs flex center width-100 space-around">
          <button className="btn" onClick={selectBitnode}><img src={edit} /></button>
        </div>
      </div>
    </li>
  )
}
