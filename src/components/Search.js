import React from "react";

function Search({ setSearchInput }) {

  function handleSearchTyping(event) {
    setSearchInput(event.target.value)
    console.log(event.target.value)
  }
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearchTyping}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
