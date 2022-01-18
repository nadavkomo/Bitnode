
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getById, updateBitnode } from '../../store/actions/bitnodeActions'
import { eventBus } from '../../services/eventBusService'
import bitnodeService from '../../services/bitnodeService'
import { storageService } from '../../services/storageService'
import './BitnodeDetails.scss'
import back from '../../assets/icons/back.png'
import edit from '../../assets/icons/edit.png'
import { ChatApp } from '../../cmps/ChatApp/ChatApp'
import socketService from '../../services/socket-service.js'
import TextField from '@material-ui/core/TextField'
import Moment from 'react-moment';

class _BitnodeDetails extends Component {
    state = {
        bitnode: null,
        errMsg: '',
        review: { from: "", txt: "" },
    }
    async componentDidMount() {
        await this.loadBitnode()
    }
    // componentWillUnmount() {
    //     socketService.terminate()
    // }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadBitnode()
        }
    }
    async loadBitnode() {
        await this.props.getById(this.props.match.params.id)
        console.log(this.props.bitnode);
        // const bitnode = await bitnodeService.getById(this.props.match.params.id)
        // this.setState({ bitnode })
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        console.log(value);
        this.setState(prevState => ({ review: { ...prevState.review, [field]: value } }))
    }

    addReview = async (ev) => {
        ev.preventDefault()
        var bitnodeToUpdate = { ...this.props.bitnode }
        if (!bitnodeToUpdate.reviews) bitnodeToUpdate.reviews = []
        var review = { ...this.state.review }
        if (review.from === '') review.from = 'Guest'
        if (review.txt === '') {
            this.setState({ errMsg: 'Invalid review' })
            setTimeout(() => {
                this.setState({ errMsg: '' })
            }, 3000)
            return
        }
        review.createdAt = Date.now()
        bitnodeToUpdate.reviews.push({ ...review })
        this.setState({ bitnode: { ...bitnodeToUpdate } })
        await this.props.updateBitnode(bitnodeToUpdate)
        await this.loadBitnode()
        this.setState({ review: { from: "", txt: "" } })
    }

    render() {
        const { bitnode } = this.props
        const { errMsg, review } = this.state
        if (!bitnode) return <div>Loading...</div>
        return <div className="bitnode-details flex column align-center">
            <section className="btns flex justify-center">
                <button className="btn" onClick={(ev) => {
                    ev.stopPropagation()
                    this.props.history.goBack()
                }}><img src={back} alt="" /></button>
                <button className="btn" onClick={() => this.props.history.push('/bitnode/edit/' + bitnode._id)}><img src={edit} /></button>
            </section>
            <h1 className="title mb15 text-center">{bitnode.title}</h1>
            <div className="contant flex align-center">
                <section className="left mr10 flex column align-center">
                    <h2>Description:</h2>
                    <p className="text-center mb15">{bitnode.description}</p>
                    <h2>Ingredients:</h2>
                    <ul className="bitnode-list ingredients ">
                        {
                            bitnode.ingredients.map((ingredient, idx) => <li className="ingredient" key={idx}>{ingredient}</li>)
                        }
                    </ul>
                    <section className="extra-details flex">
                        <div className="summary-item-wrapper flex align-center">
                            <div className="bitnode-summery-item flex column text-center">
                                <span>{bitnode.ingredients.length}</span>
                                <span>Ingredients</span>
                            </div>
                            <div className="bitnode-summery-item flex column text-center">
                                <span>{bitnode.time}</span>
                                <span>Minutes</span>
                            </div>
                            <div className="bitnode-summery-item flex column text-center">
                                <span>{bitnode.calories}</span>
                                <span>Calories</span>
                            </div>
                            <div className="bitnode-summery-item flex column text-center">
                                <span>{bitnode.servings}</span>
                                <span>Servings</span>
                            </div>
                        </div>
                        <div className="tags-container flex column align-center">
                            <h2>Tags:</h2>
                            <ul className="clean-list mb15 tags flex auto-center wrap">
                                {
                                    bitnode.tags.map((tag, idx) => <p className="tag" key={idx}>{tag}</p>)
                                }
                            </ul>
                        </div>
                    </section>
                </section>
                <section className="right flex column auto-center">
                    <img className="bitnode-img mb15" src={bitnode.imgUrl} alt="" />
                    <div className="chat-app-desktop">
                        <ChatApp bitnodeId={bitnode._id}></ChatApp>
                    </div>
                </section>
            </div>
            <section className="funcs flex column align-center">
                <section className="reviews flex column auto-center">
                    <h2 className="mb15 text-center">Reviews:</h2>
                    <section className="reviews-container flex justify-center">
                        <div className="add-review">
                            <h4 className="mb15 text-center">Add Review</h4>
                            <form onSubmit={this.addReview} className="add-review-form flex column align-center">
                                <TextField className="input-from" label="Enter your name" type="text" name="from" value={review.from} onChange={this.handleChange} />
                                <TextField className="input-msg" id="outlined-multiline-static" variant="outlined" label="Enter your review" type="text" name="txt" value={review.txt} onChange={this.handleChange} />
                                <button className="btn" onClick={this.addReview}>Add review</button>
                            </form>
                            <p>{errMsg}</p>
                        </div>
                        {bitnode.reviews && bitnode.reviews.length > 0 ? <div className="review-list flex wrap mb15">
                            {bitnode.reviews.map(({ from, txt, createdAt }, index) => (
                                <div className="review" key={index}>
                                    <h4>{from}: <span className="review-txt">{txt}</span></h4>
                                    <h5><Moment fromNow>{createdAt}</Moment></h5>
                                </div>
                            ))}
                        </div> : <div className="default-review-list flex auto-center"><h1>No reviews yet, be the first!</h1></div>}
                    </section>
                </section>
                <div className="chat-app-mobile">
                    <ChatApp bitnodeId={bitnode._id}></ChatApp>
                </div>

            </section>
        </div >
    }
}

function mapStateToProps(state) {
    return {
        bitnode: state.bitnodeReducer.currBitnode,

    }
}
const mapDispatchToProps = {
    getById,
    updateBitnode,

}
export const BitnodeDetails = connect(mapStateToProps, mapDispatchToProps)(_BitnodeDetails)

