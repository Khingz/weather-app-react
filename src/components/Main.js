import React from 'react';
import Header from './Header';
import Weather from './Weather';
import { connect } from 'react-redux';
import { fetchWeather } from '../redux/actionCreator';


const mapStateToProps = state => {
  return {
    weather: state.weather
  }
}

const mapDispatchToProps = dispatch => ({
  fetchWeather: () => (dispatch(fetchWeather()))
})

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchWeather();
  }

  render() {
    console.log(this);
    return (
        <div className="Main">
          <Header />
          <Weather weather={this.props.weather} isLoading={this.props.isLoading} errMsg={this.props.weather.errMess}/>
        </div>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);


