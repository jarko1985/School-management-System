const Spinner = () => {
  return (
    <div id="ui">
      <div className="dice child">
        <ol className="dice_list">
          <li className="dice_list_item"></li>
          <li className="dice_list_item"></li>
          <li className="dice_list_item"></li>
          <li className="dice_list_item"></li>
          <li className="dice_list_item"></li>
          <li className="dice_list_item"></li>
        </ol>
      </div>
      <div className="dice parent">
        <ol className="dice_list">
          <li className="dice_list_item"></li>
          <li className="dice_list_item break"></li>
          <li className="dice_list_item"></li>
          <li className="dice_list_item"></li>
          <li className="dice_list_item bottom"></li>
          <li className="dice_list_item"></li>
        </ol>
      </div>
    </div>
  );
};

export default Spinner;
