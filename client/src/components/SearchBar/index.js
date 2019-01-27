import React, { Component } from "react"
import './index.css'

class SearchBar extends Component {
    state = { query: "" }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSearch(this.state.query)
        this.setState({ query: "" })
        console.log(this.state.query)
    }

    render() {
        return (
            <div className='container'>
                <form className='form-group' onSubmit={this.handleSubmit}>
                    <div className="field">
                        <input className="col-11"
                            type="text"
                            value={this.state.query}
                            onChange={(e) => this.setState({ query: e.target.value })}
                        />
                        <button className="submit-button" type="button" onClick={this.handleSubmit}>Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar