import React from "react"
import './index.css'

const SearchBar = () => {
        return (
            <div className='container'>
                <form onSubmit='' className='form-group'>
                    <div className="field">
                        <input className="col-11"
                            type="text"
                            // value={this.state.term}
                            // onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        )
}

export default SearchBar