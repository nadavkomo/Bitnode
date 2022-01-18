import React from 'react'
import { render } from 'react-dom'
import './InputList.scss'
import ReactListInput from 'react-list-input'
import bitnodeService from '../../services/bitnodeService'

const Input = ({ value, onChange, type = 'text' }) =>
  <input type={type} value={value} onChange={e => onChange(e.target.value)} />

export class InputList extends React.Component {
  constructor(props) {
    super(props)
    this.getProps = this.getProps.bind(this);
    console.log('props', this.props);
    this.state = {
      value: [],
      isReady: false
      // value: ['alpha', 'beta', 'gamma', 'delta', 'epsillon']
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(this.props);
  //   if (nextProps.values) {
  //     this.setState({ values: nextProps.values })
  //   }
  // }

  async componentDidMount() {
    const { id } = this.props
    const bitnode = id ? await bitnodeService.getById(id) : await bitnodeService.getEmptyBitnode()
    this.setState({ value: bitnode.ports, isReady: true })
  }

  Item({ decorateHandle, removable, onChange, onRemove, value }) {
    return (
      <div className='item'>
        {decorateHandle(<span style={{ cursor: 'move' }}>+</span>)}
        <span
          className='mr10'
          onClick={removable ? onRemove : x => x}
          style={{
            cursor: removable ? 'pointer' : 'not-allowed',
            color: removable ? 'black' : 'gray'
          }}>X</span>
        <Input value={value} onChange={onChange} />
      </div>
    )
  }

  StagingItem({ value, onAdd, canAdd, add, onChange }) {
    return (
      <div className='stagingItem'>
        <span
          className='mr10'
          onClick={canAdd ? onAdd : undefined}
          style={{
            color: canAdd ? 'black' : 'gray',
            cursor: canAdd ? 'pointer' : 'not-allowed'
          }}
        >Add</span>
        <Input value={value} onChange={onChange} />
      </div>
    )
  }
  getProps = () => {
    console.log(this.props.values);
    this.setState({ value: this.props.value })
  }

  handleChange(ev) {
    console.log('ev', ev);
    // this.props.change(ev)
    // await this.setState({ value: { ...ev.target.value } })
  }

  render() {
    // const values = this.props.values
    // console.log(values);
    const { value, isReady } = this.state
    return (
      <div className='input-list'>
        {isReady ? <ReactListInput
          name="ports"
          initialStagingValue=''
          onChange={async value => {
            await this.setState({ value })
            console.log(this.state.value);
            this.props.change({ target: { name: 'ports', value } })
          }
          }
          maxItems={30}
          minItems={1}
          ItemComponent={this.Item}
          StagingComponent={this.StagingItem}
          value={value}
        /> : 'Loading...'}
      </div>
    )
  }
}