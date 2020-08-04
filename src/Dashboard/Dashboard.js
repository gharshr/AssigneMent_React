import React, { Component, StrictMode } from 'react';
import Table from '../Table/Table'
import { fetchProfiles } from '../actions';
import './Dashboard.css'
import { connect } from 'react-redux'
// import { store } from '../index'

class Dashboard extends Component {

    constructor () {
        super()
        this.state = {}
        this.updateData = this.updateData.bind(this);
        this.updateCurrentName = this.updateCurrentName.bind(this);
        this.updateCurrentSurname = this.updateCurrentSurname.bind(this);
        this.updateCurrentEmail = this.updateCurrentEmail.bind(this);
        this.add = this.add.bind(this);
    }

    componentWillMount() {
        console.log('hello')
        this.props.fetch_data()
    }

    render() {
        return (
            <div className={this.props.className}>
                <h1>Profile Details</h1>
                <Table data={this.state.profiles || null} updateData={this.updateData}></Table>
                <div className="profileForm">
                    <input type="text" placeholder="name" onChange={this.updateCurrentName}/><br/>
                    <input type="text" placeholder="surname" onChange={this.updateCurrentSurname}/><br/>
                    <input type="email" placeholder="email" onChange={this.updateCurrentEmail}/><br/>
                    <button type="button" onClick={this.add}>Add</button>
                    {/* <button type="button" onClick={} */}
                </div>
            </div>
        )
    }

    componentDidMount() {
        // store.dispatch(fetchProfiles).then(() => console.log(store.getState()))
        // fetch('/getProfiles').then(response => response.json())
        // .then(data => {
        //     console.log(data);
        //     this.setState({
        //         profiles : data.profiles
        //     })
        // });
    }

    UNSAFE_componentWillReceiveProps(props) {
        console.log('inside the propsreceive',props)
        this.setState({
            profiles : props.data.profiles
        })
    }

    updateData(value,group,rowIndex) {
        var tmpProfilesAry = [];
        this.state.profiles.map((profile,index) => {
            var tmpObject = profile;
            if(rowIndex - 1 === index)
                tmpObject[group] = value;
            tmpProfilesAry.push(tmpObject);
        })
        this.setState({
            profiles : tmpProfilesAry
        })
    }

    updateCurrentName(e) {
        this.setState({
            newName : e.target.value
        })
    }

    updateCurrentSurname(e) {
        this.setState({
            newSurname : e.target.value
        })
    }

    updateCurrentEmail(e) {
        this.setState({
            newEmail : e.target.value
        })
    }

    add() {
        var tmpProfilesAry = this.state.profiles;
        tmpProfilesAry.push({
            name : this.state.newName,
            surname : this.state.newSurname,
            email : this.state.newEmail
        })
        this.setState({
            profiles : tmpProfilesAry
        })
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        data : state.fetched_data
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        fetch_data : () => dispatch(fetchProfiles())
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Dashboard)