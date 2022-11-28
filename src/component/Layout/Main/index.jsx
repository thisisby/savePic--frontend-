import Headerbar from "../../Element/Headerbar";
import { headerbarNavigation } from "../../../data/Headerbar";

const MainTemplate = ({ contents }) => {
  return (
    <>
      <Headerbar nav={headerbarNavigation} />
      <div className="p-10 md:p-20 text-center">{contents}</div>
    </>
  );
};

export default MainTemplate;
