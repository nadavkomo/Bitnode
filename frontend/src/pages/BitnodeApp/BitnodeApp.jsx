
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { BitnodeFilter } from '../../cmps/BitnodeFilter/BitnodeFilter';
import { BitnodeList } from '../../cmps/BitnodeList/BitnodeList';
import bitnodeService from '../../services/bitnodeService';
import { loadBitnodes } from '../../store/actions/bitnodeActions';
import Select from 'react-select'
// import ReactSelect from '../../cmps/react-select'
import './BitnodeApp.scss'
import plus from '../../assets/icons/plus.png'

export function BitnodeApp(props) {
    const [filterBy, setFilterBy] = useState(null)
    var bitnodes = useSelector(state => state.bitnodeReducer.bitnodes)
    console.log(props.location.search);
    if (props.location.search) {
        var res = props.location.search.substring(1)
        var resArr = res.split('=')
        const field = resArr[0]
        const value = resArr[1]
        if (field === 'term') {
            const term = value.toLocaleLowerCase()
            bitnodes = bitnodes.filter(bitnode => {
                return bitnode.title.toLocaleLowerCase().includes(term) ||
                    bitnode.description.toLocaleLowerCase().includes(term)
            })
        } else {
            bitnodes = bitnodes.filter(bitnode => {
                console.log(bitnode[field]);
                if (field === 'author') return bitnode[field].name === value.replace('%20', ' ')
                return bitnode[field].includes(value)
            })
        }
    }


    const dispatch = useDispatch()
    useEffect(() => {
        console.log('effect');
        dispatch(loadBitnodes(filterBy))
    }, [filterBy])

    const onSetFilter = (filterBy) => {
        setFilterBy(filterBy)
    }

    const onSelectBitnode = (selectedBitnodeId) => {
        console.log(selectedBitnodeId);
        props.history.push(`/bitnode/edit/${selectedBitnodeId}`)
    }

    return (
        <div className="bitnode-app flex column align-center">
            <Link className="add-btn btn" to="/bitnode/edit"><img src={plus} /></Link>
            <section className="filter text-center flex column auto-center">
                <h1>Bitnodes</h1>
                <BitnodeFilter onSetFilter={onSetFilter} />
            </section>
            {bitnodes && <BitnodeList onSelectBitnode={onSelectBitnode} bitnodes={bitnodes} />}
        </div>
    )
}

// function mapStateToProps(state) {
//     return {
//         bitnodes: state.bitnodeReducer.bitnodes
//         // If we want to filter the bitnodes first "like computed" but not really
//         // bitnodes: getBitnodesForDisplay(state.bitnodeReducer.bitnodes)
//     }
// }
// const mapDispatchToProps = {
//     loadBitnodes
// }
// export const BitnodeApp = connect(mapStateToProps, mapDispatchToProps)(_BitnodeApp)
