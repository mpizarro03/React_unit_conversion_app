import React from "react";

function Form() {
  return (
    <form data-testid="form" >
      <div>
        <label htmlFor="weight">Weight:</label>
        <input
          data-testid="weight"
          type="number"
          name="weight"
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          data-testid="height"
          type="number"
          name="height"
        />
      </div>
      <div>
        <label>Unit</label>
        <select
          name="unit"
          id="unit"
          >
           <option value="imperial">Imperial</option>
           <option value="metric">Metric</option>
        </select>
      </div>
      <button type="submit" data-testid="submit">
        Save
      </button>
    </form>
  );
}

export default Form;
