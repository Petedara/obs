import React, { useState } from "react";
// import { defaultProps } from "react-lines-ellipsis";
import SubtopicDropdown from "./SubtopicDropdown";

const SectionDropdown = (props) => {

  const [sectionList, setSectionList] = useState([{ renderSection: "" }]);
  
  const handleSection = () => {
    setSectionList([...sectionList, { renderSection: "" }]);
  };

  const [getName, setName] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      {sectionList.map((sectionInfo, index) => {
        return (
          <div key={index} className="section">
            <div className="section-segment">
              <h2>
                Section<span>{index+1}</span>
              </h2>
              <div className="section-title">
                <label htmlFor="Section title">Section title :</label>
                <input type="text" onChange={handleChange} name={getName}/>
              </div>
              {[<SubtopicDropdown />]}
            </div>
            {sectionList.length - 1 === index && (
              <div className="add-more new-section">
                <button onClick={handleSection}>Add a new section</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SectionDropdown;