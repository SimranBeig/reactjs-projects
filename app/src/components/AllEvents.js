import axios from 'axios';
import React, { Component } from 'react'
import EventDetails from './EventDetails'

export class AllEvents extends Component {
    constructor() {
        super();
        this.state = {
            Details : [],
            Date: new Date()
        };
        const apiUrl = process.env.REACT_APP_API_URL   
    }

    async componentDidMount(){
        axios.get(`${this.apiUrl}/customer//customer/getallpublishedevents&Date=${this.state.Date}`)
    }
  render() {
    return (
        <EventDetails/>
    )
  }
}

export default AllEvents
