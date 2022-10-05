import React, { useState } from "react";

const SubtopicDropdown = (props) => {

  const [subtopicList, setSubtopicList] = useState([{ renderSubtopic: "" }]);

  const handleSubtopic = () => {
    setSubtopicList([...subtopicList, { renderSubtopic: "" }]);
  };

  const [getName, setName] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      {subtopicList.map((subtopicInfo, index) => {
        return (
          <div key={index} className="subtopic">
            <div>
              <label htmlFor="Subtopic">Subtopic :</label>
            </div>
            <div className="subtopic-input">
              <input onChange={handleChange} type="text"  name={getName}/>
              <input type="file" onChange={handleChange} name={getName} id="video-file" />
            </div>
            {subtopicList.length - 1 === index && (
              <div className="add-more">
                <button onClick={handleSubtopic}>Add a new sub-section</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SubtopicDropdown;
