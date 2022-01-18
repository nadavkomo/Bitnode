
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { BitnodeList } from '../../cmps/BitnodeList/BitnodeList';
import { loadBitnodes } from '../../store/actions/bitnodeActions';

import bitnodeService from '../../services/bitnodeService';
import './HomePage.scss'
import hero from '../../assets/imgs/hero.jpg'
import search from '../../assets/icons/search.png'
export function HomePage(props) {
    const [term, setTerm] = useState('')
    const bitnodes = useSelector(state => state.bitnodeReducer.bitnodes)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('effect');
        dispatch(loadBitnodes())
    }, [])

    var bitnodesToShow = []
    bitnodesToShow = bitnodes.slice(0, 3)
    function bitnodesToShowByTag(tag) {
        return bitnodes.filter(bitnode => bitnode.tags.includes(tag)).splice(0, 3)
    }
    const onSelectBitnode = (selectedBitnodeId) => {
        props.history.push(`/bitnode/${selectedBitnodeId}`)
    }
    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        console.log(value);
        setTerm(value)
    }
    const searchBitnodes = (ev) => {
        ev.preventDefault()
        props.history.push(`/bitnode?term=${term}`)
    }
    return (
        <section className="home-page flex column align-center full">
            <div className="img-container mb15">
                <section className="contant flex column auto-center text-center">
                    <section className="hero-text flex column auto-center text-center mb15">
                        <h2>Welcome To Bitnodes</h2>
                        <h4>Let's estimate the size of the Bitcoin network by finding all the reachable nodes in the network</h4>
                    </section>
                    {/* <form className="flex" onSubmit={searchBitnodes}>
                        <input type="text" placeholder="Find a bitnode" name="term" value={term} onChange={handleChange} />
                        <img onClick={searchBitnodes} src={search} alt=""  />
                    </form>
                    <section className="nav-btns flex wrap auto-center">
                        <button onClick={() => props.history.push(`/bitnode?tags=Quick`)}>Quick</button>
                        <button onClick={() => props.history.push(`/bitnode?tags=Vegetarian`)}>Vegeterian</button>
                        <button onClick={() => props.history.push(`/bitnode?tags=Dinner`)}>Dinner</button>
                        <button onClick={() => props.history.push(`/bitnode`)}>Show All</button>
                    </section> */}
                </section>
            </div>
            <div className="nav-btns flex width-80 align-center space-around wrap height-100">
                <button onClick={() => props.history.push('/bitnode')}>Bitnodes List</button>
                <button onClick={() => props.history.push('/bitnode/edit')}>Add Bitnode!</button>
            </div>
            {/* <section className="previews">
                <section className="nav-contant flex align-center space-between">
                    <h3>Dinner</h3>
                    <h3><Link to="/bitnode">Show All</Link></h3>
                </section>
                <div className="contant flex column">
                    {bitnodesToShowByTag('Dinner') && <BitnodeList onSelectBitnode={onSelectBitnode} bitnodes={bitnodesToShowByTag('Dinner')} />}
                </div>
            </section>
            <section className="previews">
                <section className="nav-contant flex align-center space-between">
                    <h3>Vegetarian</h3>
                    <h3><Link to="/bitnode">Show All</Link></h3>
                </section>
                <div className="contant flex column">
                    {bitnodesToShowByTag('Vegetarian') && <BitnodeList onSelectBitnode={onSelectBitnode} bitnodes={bitnodesToShowByTag('Vegetarian')} />}
                </div>
            </section> */}
        </section>
    )
}

