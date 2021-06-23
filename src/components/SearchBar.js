import React from "react";

export class SearchBar extends React.Component {
  state = { term: " " };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  onFormSUbmit = (e) => {
    e.preventDefault();
    this.props.frmChildToParent(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSUbmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              /* onChange={this.onInputChange} */
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
