import { DefaultSharedButton } from "./style.js";
import { useHistory } from "react-router-dom";

const DefaultButton = ({ value, _onType, _onClick }) => {
  const history = useHistory();
  return (
    <DefaultSharedButton
      className="default-button"
      variant="outlined"
      color="primary"
      type={_onType}
      onClick={_onClick}
    >
      {value}
    </DefaultSharedButton>
  );
};

export default DefaultButton;
