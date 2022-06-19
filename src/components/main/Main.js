import React from "react";
import CourseTube from "./courseTube/CourseTube";
import ContactMe from "./contactMe/ContactMe";

import PropTypes from "prop-types";

function Main(props) {
  const { mainClass, secondaryClass } = props.section;

  const [
    handleMainCloseBtnClick,
    handleContactMeInputsChange,
    handleContactMeInputsReset,
  ] = props.functions;

  const [
    toggleBtn,
    sliderValue,
    nameValue,
    emailValue,
    subjectValue,
    messageValue,
    displayMain,
    displayContact,
    courseTube,
  ] = props.dependencies;

  const mainStyles = {
    gridTemplateColumns: `repeat(${sliderValue}, 1fr)`,
  };

  // console.log(courseTube);
  // console.log(typeof courseTube[0]);
  // console.log(typeof courseTube[1]);
  // console.log(typeof courseTube[2]);
  return (
    <main className={toggleBtn ? secondaryClass : mainClass}>
      {displayMain && (
        <CourseTube courseTubeArray={courseTube} style={mainStyles} />
      )}
      {displayContact && (
        <ContactMe
          handleMainCloseBtnClick={handleMainCloseBtnClick}
          handleInputsChange={handleContactMeInputsChange}
          handleContactMeInputsReset={handleContactMeInputsReset}
          nameValue={nameValue}
          emailValue={emailValue}
          subjectValue={subjectValue}
          messageValue={messageValue}
        />
      )}
    </main>
  );
}

Main.propTypes = {
  section: PropTypes.object.isRequired,
  functions: PropTypes.arrayOf(PropTypes.func).isRequired,
  dependencies: PropTypes.array.isRequired,
};

export default Main;
