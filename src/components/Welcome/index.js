import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonTextChange = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const changeText = this.getButtonTextChange()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.onSubscribe}>
          {changeText}
        </button>
      </div>
    )
  }
}
export default Welcome
