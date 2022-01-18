import { useEffect } from 'react';
import { BitnodePreview } from '../BitnodePreview/BitnodePreview';
import './BitnodeList.scss'
export function BitnodeList({ bitnodes, onSelectBitnode }) {
  useEffect(() => {
    console.log(bitnodes);
  }, [])
  return bitnodes.length ? (
    <ul className="bitnode-list clean-list flex wrap auto-center ">
      {
        bitnodes.map(bitnode => <BitnodePreview onSelectBitnode={onSelectBitnode} bitnode={bitnode} key={bitnode._id} />)
      }
    </ul>
  ) : <div className="bitnode-list-default">There is no bitnodes</div>
}