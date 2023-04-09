import { useLocation } from "react-router-dom";
import jsonFile1 from "../Json/sample_db_0km.json";
import jsonFile2 from "../Json/sample_db_5km.json";
import jsonFile3 from "../Json/sample_db_10km.json";
import jsonFile4 from "../Json/sample_db_15km.json";
import jsonFile5 from "../Json/sample_db_20km.json";
import jsonFile6 from "../Json/sample_db_25km.json";

const Modes = () => {

  const location = useLocation();
  console.log( location.Mode);
  let selectedDistance = location.selectedDistance;
  let selectedMode = location.selectedMode;
  let Mode;
  let dataBase;

  switch (selectedDistance) {
    case "0":
      dataBase = jsonFile1.Data;
      break;
    case "5":
      dataBase = jsonFile2.Data;
      break;
    case "10":
      dataBase = jsonFile3.Data;
      break;
    case "15":
      dataBase = jsonFile4.Data;
      break;
    case "20":
      dataBase = jsonFile5.Data;
      break;
    case "25":
      dataBase = jsonFile6.Data;
      break;
    default:
      dataBase = {};
      break;
  }

  if (selectedMode === "Auto") {
    Mode = dataBase[0].mode_7;
  } else if (selectedMode === "Cab Service") {
    Mode = dataBase[0].mode_5;
  } else {
    Mode = dataBase[0].mode_7;
  }

  return (
    <table className="table-auto mx-auto my-8 border-seperate border-2 border-gray-400 border-spacing-1">
      <tbody className="text-gray-600 text-sm font-light">
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left">
            {dataBase[0].mode_1}
            <br />
            <span className="relative left-8">
              <input type="radio" name="row1" value="1"></input>
            </span>
          </td>
          <td className="py-3 px-6 text-left">
            {dataBase[0].mode_2}
            <br />
            <span className="relative left-8">
              <input type="radio" name="row1" value="2"></input>
            </span>
          </td>
          <td className="py-3 px-6 text-left">
            {selectedDistance === "1" ? "Walk/Bicycle" : dataBase[0].mode_4}
            <br />
            <span className="relative left-8">
              <input type="radio" name="row1" value="3"></input>
            </span>
          </td>

          <td className="py-3 px-6 text-left">
            {selectedMode === "Own Car" ? dataBase[0].mode_8 : dataBase[0].mode_9}
            <br />
            <span className="relative left-[50px]">
              <input type="radio" name="row1" value="4"></input>
            </span>
          </td>
          <td className="py-3 px-6 text-left">
            {Mode}
            <br />
            <span className="relative left-8">
              <input type="radio" name="row1" value="5"></input>
            </span>
          </td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left">Row 2, Column 1</td>
          <td className="py-3 px-6 text-left">Row 2, Column 2</td>
          <td className="py-3 px-6 text-left">Row 2, Column 3</td>
          <td className="py-3 px-6 text-left">Row 2, Column 4</td>
          <td className="py-3 px-6 text-left">Row 2, Column 5</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left">Row 3, Column 1</td>
          <td className="py-3 px-6 text-left">Row 3, Column 2</td>
          <td className="py-3 px-6 text-left">Row 3, Column 3</td>
          <td className="py-3 px-6 text-left">Row 3, Column 4</td>
          <td className="py-3 px-6 text-left">Row 3, Column 5</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left">Row 4, Column 1</td>
          <td className="py-3 px-6 text-left">Row 4, Column 2</td>
          <td className="py-3 px-6 text-left">Row 4, Column 3</td>
          <td className="py-3 px-6 text-left">Row 4, Column 4</td>
          <td className="py-3 px-6 text-left">Row 4, Column 5</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left">Row 5, Column 1</td>
          <td className="py-3 px-6 text-left">Row 5, Column 2</td>
          <td className="py-3 px-6 text-left">Row 5, Column 3</td>
          <td className="py-3 px-6 text-left">Row 5, Column 4</td>
          <td className="py-3 px-6 text-left">Row 5, Column 5</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left">Row 6, Column 1</td>
          <td className="py-3 px-6 text-left">Row 6, Column 2</td>
          <td className="py-3 px-6 text-left">Row 6, Column 3</td>
          <td className="py-3 px-6 text-left">Row 6, Column 4</td>
          <td className="py-3 px-6 text-left">Row 6, Column 5</td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left">Row 7, Column 1</td>
          <td className="py-3 px-6 text-left">Row 7, Column 2</td>
          <td className="py-3 px-6 text-left">Row 7, Column 3</td>
          <td className="py-3 px-6 text-left">Row 7, Column 4</td>
          <td className="py-3 px-6 text-left">Row 7, Column 5</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Modes;
