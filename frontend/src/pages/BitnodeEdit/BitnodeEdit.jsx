
import React, { Component } from 'react'
import { connect } from 'react-redux';
import bitnodeService from '../../services/bitnodeService'
import { addBitnode, updateBitnode, removeBitnode } from '../../store/actions/bitnodeActions';
import './BitnodeEdit.scss'
import back from '../../assets/icons/back.png'
import remove from '../../assets/icons/delete.png'
import save from '../../assets/icons/save.png'
import MultipleSelect from '../../cmps/element-ui/MultiSelect'
import { InputList } from '../../cmps/InputList/InputList'

class _BitnodeEdit extends Component {
    elInput = React.createRef();
    state = {
        bitnode: null,
        portsCount: 1,
        errMsg: '',
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.bitnode) {
            this.setState({ bitnode: nextProps.bitnode })
        }
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        const bitnode = id ? await bitnodeService.getById(id) : await bitnodeService.getEmptyBitnode()
        if (bitnode) this.setState({ bitnode })
        else this.setState({ errMsg: 'Bitnode Not Found!' })
        console.log(bitnode);
        this.elInput.current.focus()
    }

    handleChange = async ({ target }) => {
        console.log('change', target.name);
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        await this.setState(prevState => ({ bitnode: { ...prevState.bitnode, [field]: value } }))
        console.log(this.state.bitnode);
    }

    onSaveBitnode = async (ev) => {
        ev.preventDefault()
        const { bitnode } = this.state
        if (bitnode.title === '' || bitnode.description === '') {
            this.setState({ errMsg: 'Please fill all the above filled' })
            setTimeout(() => {
                this.setState({ errMsg: '' })
            }, 2500)
            return
        }
        if (bitnode._id) await this.props.updateBitnode(bitnode)
        else await this.props.addBitnode(bitnode)
        this.props.history.push('/bitnode')
        // this.props.history.goBack()
    }
    onRemoveBitnode = async () => {
        await this.props.removeBitnode(this.state.bitnode._id)
        this.props.history.push('/bitnode')
    }



    render() {
        if (!this.state.bitnode) return <h3 className='text-center'>Loading...</h3>
        const { ipAddress, port } = this.state.bitnode
        return this.state.bitnode && (
            <section className="bitnode-edit flex column align-center text-center">
                <section className="btns flex space-between">
                    <button className="btn back-btn" onClick={() => this.props.history.goBack()}><img src={back} alt="" /></button>
                    {this.state.bitnode._id && <button className="btn" onClick={this.onRemoveBitnode}><img src={remove} alt="" /></button>}
                </section>
                <form className="flex column auto-center" onSubmit={this.onSaveBitnode}>
                    <label>IP Address</label>
                    <input autoFocus type="text" ref={this.elInput} name="ipAddress" value={ipAddress} onChange={this.handleChange} />
                    <label>Port</label>
                    <input autoFocus type="text" name="port" value={port} onChange={this.handleChange} />
                    <button className="btn save-btn"><img src={save} /></button>
                    <span className="err-msg">{this.state.errMsg}</span>
                </form >
            </section >
        )
    }
}

const mapDispatchToProps = {
    addBitnode,
    updateBitnode,
    removeBitnode
}
export const BitnodeEdit = connect(null, mapDispatchToProps)(_BitnodeEdit)
