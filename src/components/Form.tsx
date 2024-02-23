
export function Form() {
  return (
    <form className="form">
      <div className="inputs">
        <input value="" className="addItem text" type="text" placeholder="+ Add Item" required />
        <input value="" className="addItem author" type="text" placeholder="+ Author" required />
      </div>
      <button type="submit" className="btn-primary add">
        Add
      </button>
    </form>
  );
}
