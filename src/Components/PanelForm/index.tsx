import * as React from 'react';


function PanelForm() {
  return (
    <form className="panel-form">
      <input
        type="text"
        className="text-input is-rounded"
        placeholder="Choose town.."/>
      <button className="btn submit is-rounded">
        Search
      </button>
    </form>
  );
}

export default PanelForm;