//child component to show the tasks
function TaskListElement(props) {
  function handleCLick(e) {
    props.handleCLick(e.target);
  }
  function handleCLickDelete(e) {
    props.handleCLickDelete(e.target);
  }

  function handleChange(e) {
    props.handleChange(e.target);
  }

  let buttonName = props.data ? "column1" : "column2";
  return (
    <div className="containerList">
      <h3 className="tittleContainer">{props.data ? "Tasks" : "Done"}</h3>
      {Array.from(props.data || props.data2).map((val, index) => (
        <div className="divList" key={index}>
          <div
            id={index}
            suppressContentEditableWarning={true}
            spellcheck="false"
            className="textList"
            contentEditable="true"
            onBlur={handleChange}
            column={props.data ? "column1" : "column2"}
          >
            {val[1]}
          </div>
          <button
            onClick={handleCLickDelete}
            id={index}
            name={buttonName}
            value={val[1]}
          >
            X
          </button>
          &nbsp;
          <button
            onClick={handleCLick}
            id={index}
            name={buttonName}
            value={val[1]}
          >
            {props.data ? ">" : "<"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskListElement;
