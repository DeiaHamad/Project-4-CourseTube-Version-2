import { render, screen, fireEvent } from "@testing-library/react";
import regeneratorRuntime from "regenerator-runtime";
import App from "../../../App";
import coursesData from "../../../data/coursesData";

function createElements({
  leftHeaderDiv,
  middleHeaderDiv,
  rightHeaderDiv,
  miniSearchButton,
  searchArrowBtn,
  searchInput,
  searchBtn,
  mic,
  miniOptionsButton,
  OptionsArrowBtn,
  rightHeaderCloseBtn,
  themeBtn,
  gridBtn,
  contactMeBtn,
  themes,
  slider,
  user,
  sidebar,
  main,
  mainCourseTubePage,
  videoContainers,
  mainContactPage,
  leftContactDiv,
  rightContactDiv,
  mainCloseBtn,
}) {
  const elementsArray = [];
  if (leftHeaderDiv) {
    const leftHeaderDivElement = screen.queryByTestId("left-header");
    elementsArray.push(leftHeaderDivElement);
  }
  if (middleHeaderDiv) {
    const middleHeaderDivElement = screen.queryByTestId(/middle-header/i);
    elementsArray.push(middleHeaderDivElement);
  }
  if (rightHeaderDiv) {
    const rightHeaderDivElement = screen.queryByTestId("right-header");
    elementsArray.push(rightHeaderDivElement);
  }
  if (miniSearchButton) {
    const miniSearchButtonElement = screen.queryByTitle(
      "Display Search Components"
    );
    elementsArray.push(miniSearchButtonElement);
  }
  if (searchArrowBtn) {
    const searchArrowBtnElement = screen.queryByRole("button", {
      name: "middle-header-arrow-btn",
    });
    elementsArray.push(searchArrowBtnElement);
  }
  if (searchInput) {
    const searchInputElement = screen.queryByPlaceholderText("Search");
    elementsArray.push(searchInputElement);
  }
  if (searchBtn) {
    const searchBtnElement = screen.queryByTitle("Search Button");
    elementsArray.push(searchBtnElement);
  }
  if (mic) {
    const micElement = screen.queryByTitle("Search with your voice");
    elementsArray.push(micElement);
  }
  if (miniOptionsButton) {
    const miniOptionsButtonElement = screen.queryByTitle("Options");
    elementsArray.push(miniOptionsButtonElement);
  }
  if (OptionsArrowBtn) {
    const OptionsArrowBtnElement = screen.queryByRole("button", {
      name: "right-header-arrow-btn",
    });
    elementsArray.push(OptionsArrowBtnElement);
  }
  if (rightHeaderCloseBtn) {
    const rightHeaderCloseBtnElement = screen.queryByRole("button", {
      name: "right-header-close-btn",
    });
    elementsArray.push(rightHeaderCloseBtnElement);
  }
  if (themeBtn) {
    const themeBtnElement = screen.queryByTitle("Select Color Theme");
    elementsArray.push(themeBtnElement);
  }
  if (gridBtn) {
    const gridBtnElement = screen.queryByTitle("Select Grid Template");
    elementsArray.push(gridBtnElement);
  }
  if (contactMeBtn) {
    const contactMeBtnElement = screen.queryByTitle("Contact Me");
    elementsArray.push(contactMeBtnElement);
  }
  if (themes) {
    const themeElements = screen.queryAllByTestId("theme");
    elementsArray.push(themeElements);
  }
  if (slider) {
    const sliderElement = screen.queryByRole("slider");
    elementsArray.push(sliderElement);
  }
  if (user) {
    const userDivElement = screen.queryByTestId("user");
    elementsArray.push(userDivElement);
  }
  if (sidebar) {
    const sidebarElement = screen.queryByTestId("sidebar");
    elementsArray.push(sidebarElement);
  }
  if (main) {
    const sidebarElement = screen.queryByRole("main");
    elementsArray.push(sidebarElement);
  }
  if (mainCourseTubePage) {
    const mainCourseTubePageElement = screen.queryByTestId("coursetube-page");
    elementsArray.push(mainCourseTubePageElement);
  }
  if (videoContainers) {
    const videoContainerElements = screen.queryAllByTestId("video-container");
    elementsArray.push(videoContainerElements);
  }
  if (mainContactPage) {
    const mainContactPageElement = screen.queryByTestId("contact-page");
    elementsArray.push(mainContactPageElement);
  }
  if (leftContactDiv) {
    const leftContactDivElement = screen.queryByTestId("left-contact");
    elementsArray.push(leftContactDivElement);
  }
  if (rightContactDiv) {
    const rightContactDivElement = screen.queryByTestId("form");
    elementsArray.push(rightContactDivElement);
  }
  if (mainCloseBtn) {
    const mainCloseBtnElement = screen.queryByRole("button", {
      name: "main-close-btn",
    });
    elementsArray.push(mainCloseBtnElement);
  }

  return elementsArray;
}

let totalCourses = 0;
coursesData.forEach((instructor) => {
  return (totalCourses += instructor.courses.length);
});

function targetedCourses(courseName) {
  let totalCourses = 0;
  coursesData.forEach((instructor) => {
    const coursesList = instructor.courses;
    coursesList.forEach((course) => {
      course.category === courseName.toLowerCase() ? (totalCourses += 1) : null;
    });
  });
  return totalCourses;
}

function generalRender({ sidebarClass, mainClass }) {
  const [leftHeaderDiv, middleHeaderDiv, rightHeaderDiv, sidebar, main] =
    createElements({
      leftHeaderDiv: true,
      middleHeaderDiv: true,
      rightHeaderDiv: true,
      sidebar: true,
      main: true,
    });
  expect(leftHeaderDiv).toBeInTheDocument();
  expect(middleHeaderDiv).toBeInTheDocument();
  expect(rightHeaderDiv).toBeInTheDocument();
  expect(sidebar).toBeInTheDocument();
  expect(sidebar).toHaveClass(sidebarClass);
  expect(main).toBeInTheDocument();
  expect(main).toHaveClass(mainClass);
}

function initiallyShouldRender({ device }) {
  const [leftHeaderDiv, middleHeaderDiv] = createElements({
    leftHeaderDiv: true,
    middleHeaderDiv: true,
  });

  if (device === "IPad") {
    expect(leftHeaderDiv).toBeInTheDocument();
    expect(middleHeaderDiv).toBeInTheDocument();
  } else {
    expect(leftHeaderDiv).toBeInTheDocument();
  }
}

function renderMiniOptionsButton({ sidebarClass, mainClass }) {
  const [
    rightHeaderDiv,
    miniOptionsButton,
    OptionsArrowBtn,
    themeBtn,
    gridBtn,
    contactMeBtn,
    sidebar,
    main,
  ] = createElements({
    rightHeaderDiv: true,
    miniOptionsButton: true,
    OptionsArrowBtn: true,
    themeBtn: true,
    gridBtn: true,
    contactMeBtn: true,
    sidebar: true,
    main: true,
  });
  expect(miniOptionsButton).toBeInTheDocument();
  expect(rightHeaderDiv).not.toBeInTheDocument();
  expect(OptionsArrowBtn).not.toBeInTheDocument();
  expect(themeBtn).not.toBeInTheDocument();
  expect(gridBtn).not.toBeInTheDocument();
  expect(contactMeBtn).not.toBeInTheDocument();
  expect(sidebar).toBeInTheDocument();
  expect(sidebar).toHaveClass(sidebarClass);
  expect(main).toBeInTheDocument();
  expect(main).toHaveClass(mainClass);
}

function miniOptionsButtonEvents() {
  // Step 1: Clicking on the miniOptionsButton
  const [miniOptionsButton] = createElements({ miniOptionsButton: true });
  fireEvent.click(miniOptionsButton);

  // Step 2: OptionsArrowBtn, themeBtn, gridBtn, contactMeBtn should appear & miniOptionsButton should disappear
  const [OptionsArrowBtn, themeBtn, gridBtn, contactMeBtn] = createElements({
    OptionsArrowBtn: true,
    themeBtn: true,
    gridBtn: true,
    contactMeBtn: true,
  });
  expect(miniOptionsButton).not.toBeInTheDocument();
  expect(OptionsArrowBtn).toBeInTheDocument();
  expect(themeBtn).toBeInTheDocument();
  expect(gridBtn).toBeInTheDocument();
  expect(contactMeBtn).toBeInTheDocument();

  // Step 3: Clicking on the themeBtn
  // Notes:
  //  1- OptionsArrowBtn should always be in the document till the user selects his favorite options
  //  2- miniOptionsButton should never appear back till the user clicks on the OptionsArrowBtn
  fireEvent.click(themeBtn);
  const [miniOptionsButton2, rightHeaderCloseBtn, themes] = createElements({
    miniOptionsButton: true,
    rightHeaderCloseBtn: true,
    themes: true,
  });
  expect(miniOptionsButton2).not.toBeInTheDocument();
  expect(themeBtn).not.toBeInTheDocument();
  expect(gridBtn).not.toBeInTheDocument();
  expect(contactMeBtn).not.toBeInTheDocument();
  expect(OptionsArrowBtn).toBeInTheDocument();
  expect(rightHeaderCloseBtn).toBeInTheDocument();
  expect(themes.length).toBe(3);

  fireEvent.click(rightHeaderCloseBtn);
  const [miniOptionsButton3, themeBtn2, gridBtn2, contactMeBtn2] =
    createElements({
      miniOptionsButton: true,
      themeBtn: true,
      gridBtn: true,
      contactMeBtn: true,
    });
  expect(miniOptionsButton3).not.toBeInTheDocument();
  expect(rightHeaderCloseBtn).not.toBeInTheDocument();
  expect(OptionsArrowBtn).toBeInTheDocument();
  expect(themeBtn2).toBeInTheDocument();
  expect(gridBtn2).toBeInTheDocument();
  expect(contactMeBtn2).toBeInTheDocument();

  // Step 3: Clicking on the gridBtn
  fireEvent.click(gridBtn2);
  const [miniOptionsButton4, rightHeaderCloseBtn2, slider] = createElements({
    miniOptionsButton: true,
    rightHeaderCloseBtn: true,
    slider: true,
  });
  expect(miniOptionsButton4).not.toBeInTheDocument();
  expect(themeBtn).not.toBeInTheDocument();
  expect(gridBtn).not.toBeInTheDocument();
  expect(contactMeBtn).not.toBeInTheDocument();
  expect(OptionsArrowBtn).toBeInTheDocument();
  expect(rightHeaderCloseBtn2).toBeInTheDocument();
  expect(slider).toBeInTheDocument();

  fireEvent.click(rightHeaderCloseBtn2);
  const [miniOptionsButton5, themeBtn3, gridBtn3, contactMeBtn3] =
    createElements({
      miniOptionsButton: true,
      themeBtn: true,
      gridBtn: true,
      contactMeBtn: true,
    });
  expect(miniOptionsButton5).not.toBeInTheDocument();
  expect(rightHeaderCloseBtn2).not.toBeInTheDocument();
  expect(OptionsArrowBtn).toBeInTheDocument();
  expect(themeBtn3).toBeInTheDocument();
  expect(gridBtn3).toBeInTheDocument();
  expect(contactMeBtn3).toBeInTheDocument();

  // Step 4: Clicking on the contactMeBtn
  fireEvent.click(contactMeBtn3);
  const [
    miniOptionsButton6,
    rightHeaderCloseBtn3,
    mainContactPage,
    leftContactDiv,
    rightContactDiv,
    mainCloseBtn,
  ] = createElements({
    miniOptionsButton: true,
    rightHeaderCloseBtn: true,
    mainContactPage: true,
    leftContactDiv: true,
    rightContactDiv: true,
    mainCloseBtn: true,
  });
  expect(miniOptionsButton6).not.toBeInTheDocument();
  expect(rightHeaderCloseBtn3).not.toBeInTheDocument();
  expect(OptionsArrowBtn).toBeInTheDocument();
  expect(themeBtn3).toBeInTheDocument();
  expect(gridBtn3).toBeInTheDocument();
  expect(contactMeBtn3).toBeInTheDocument();
  expect(mainContactPage).toBeInTheDocument();
  expect(leftContactDiv).toBeInTheDocument();
  expect(rightContactDiv).toBeInTheDocument();
  expect(mainCloseBtn).toBeInTheDocument();

  fireEvent.click(mainCloseBtn);
  const [miniOptionsButton7, mainCourseTubePage] = createElements({
    miniOptionsButton: true,
    mainCourseTubePage: true,
  });
  expect(miniOptionsButton7).not.toBeInTheDocument();
  expect(rightHeaderCloseBtn3).not.toBeInTheDocument();
  expect(mainContactPage).not.toBeInTheDocument();
  expect(leftContactDiv).not.toBeInTheDocument();
  expect(rightContactDiv).not.toBeInTheDocument();
  expect(OptionsArrowBtn).toBeInTheDocument();
  expect(themeBtn3).toBeInTheDocument();
  expect(gridBtn3).toBeInTheDocument();
  expect(contactMeBtn3).toBeInTheDocument();
  expect(mainCourseTubePage).toBeInTheDocument();

  // Step 5: Clicking on the OptionsArrowBtn to minimize the rightHeaderDiv
  // Notes:
  //  1- OptionsArrowBtn should disappear
  //  2- rightHeaderDiv should disappear
  //  3- miniOptionsButton should appear back again
  fireEvent.click(OptionsArrowBtn);
  const [
    rightHeaderDiv,
    miniOptionsButton8,
    OptionsArrowBtn2,
    themeBtn4,
    gridBtn4,
    contactMeBtn4,
  ] = createElements({
    rightHeaderDiv: true,
    miniOptionsButton: true,
    OptionsArrowBtn: true,
    themeBtn: true,
    gridBtn: true,
    contactMeBtn: true,
  });
  expect(rightHeaderDiv).not.toBeInTheDocument();
  expect(OptionsArrowBtn2).not.toBeInTheDocument();
  expect(themeBtn4).not.toBeInTheDocument();
  expect(gridBtn4).not.toBeInTheDocument();
  expect(contactMeBtn4).not.toBeInTheDocument();
  expect(miniOptionsButton8).toBeInTheDocument();
}

function renderMiniSearchButton({ sidebarClass, mainClass }) {
  const [
    middleHeaderDiv,
    miniSearchButton,
    searchArrowBtn,
    searchInput,
    searchBtn,
    mic,
    sidebar,
    main,
  ] = createElements({
    middleHeaderDiv: true,
    miniSearchButton: true,
    searchArrowBtn: true,
    searchInput: true,
    searchBtn: true,
    mic: true,
    sidebar: true,
    main: true,
  });
  expect(miniSearchButton).toBeInTheDocument();
  expect(middleHeaderDiv).not.toBeInTheDocument();
  expect(searchArrowBtn).not.toBeInTheDocument();
  expect(searchInput).not.toBeInTheDocument();
  expect(searchBtn).not.toBeInTheDocument();
  expect(mic).not.toBeInTheDocument();
  expect(sidebar).toBeInTheDocument();
  expect(sidebar).toHaveClass(sidebarClass);
  expect(main).toBeInTheDocument();
  expect(main).toHaveClass(mainClass);
}

function miniSearchButtonEvents() {
  // Step 1: Clicking on the miniSearchButton
  const [leftHeaderDiv, miniSearchButton, miniOptionsButton, user] =
    createElements({
      leftHeaderDiv: true,
      miniSearchButton: true,
      miniOptionsButton: true,
      user: true,
    });
  expect(leftHeaderDiv).toBeInTheDocument();
  expect(miniSearchButton).toBeInTheDocument();
  expect(miniOptionsButton).toBeInTheDocument();
  expect(user).toBeInTheDocument();

  fireEvent.click(miniSearchButton);

  // Step 2: searchArrowBtn, searchInput, searchBtn, mic should appear & leftHeader, miniSearchButton, miniOptionsButton and the user should disappear
  const [searchArrowBtn, searchInput, searchBtn, mic] = createElements({
    searchArrowBtn: true,
    searchInput: true,
    searchBtn: true,
    mic: true,
  });
  expect(leftHeaderDiv).not.toBeInTheDocument();
  expect(miniSearchButton).not.toBeInTheDocument();
  expect(miniOptionsButton).not.toBeInTheDocument();
  expect(user).not.toBeInTheDocument();
  expect(searchArrowBtn).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
  expect(searchBtn).toBeInTheDocument();
  expect(mic).toBeInTheDocument();

  // Step 3: The user can search whatever he wants without the app rendering back the normal headerSection (the searchInput will always be rendered on the screen till the user clicks on the searchArrowBtn)
  const [videoContainers] = createElements({ videoContainers: true });
  expect(videoContainers.length).toBe(totalCourses);

  expect(searchInput.value).toBe("");
  fireEvent.change(searchInput, { target: { value: "React" } });
  expect(searchInput.value).toBe("React");

  expect(leftHeaderDiv).not.toBeInTheDocument();
  expect(miniSearchButton).not.toBeInTheDocument();
  expect(miniOptionsButton).not.toBeInTheDocument();
  expect(user).not.toBeInTheDocument();
  expect(searchArrowBtn).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
  expect(searchBtn).toBeInTheDocument();
  expect(mic).toBeInTheDocument();

  fireEvent.click(searchBtn);

  const [videoContainers2] = createElements({
    videoContainers: true,
  });

  expect(videoContainers2.length).toBe(targetedCourses("React"));
  expect(searchInput.value).toBe("");

  expect(leftHeaderDiv).not.toBeInTheDocument();
  expect(miniSearchButton).not.toBeInTheDocument();
  expect(miniOptionsButton).not.toBeInTheDocument();
  expect(user).not.toBeInTheDocument();
  expect(searchArrowBtn).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
  expect(searchBtn).toBeInTheDocument();
  expect(mic).toBeInTheDocument();

  // Step 4: Clicking on the searchArrowBtn to move back to the full mobile headerSection
  fireEvent.click(searchArrowBtn);
  const [
    leftHeaderDiv2,
    miniSearchButton2,
    searchArrowBtn2,
    searchInput2,
    searchBtn2,
    mic2,
    miniOptionsButton2,
    user2,
  ] = createElements({
    leftHeaderDiv: true,
    miniSearchButton: true,
    miniOptionsButton: true,
    searchArrowBtn: true,
    searchInput: true,
    searchBtn: true,
    mic: true,
    user: true,
  });
  expect(leftHeaderDiv2).toBeInTheDocument();
  expect(miniSearchButton2).toBeInTheDocument();
  expect(miniOptionsButton2).toBeInTheDocument();
  expect(user2).toBeInTheDocument();
  expect(searchArrowBtn2).not.toBeInTheDocument();
  expect(searchInput2).not.toBeInTheDocument();
  expect(searchBtn2).not.toBeInTheDocument();
  expect(mic2).not.toBeInTheDocument();
}

function renderSlider(min, max) {
  const [gridBtn] = createElements({ gridBtn: true });
  fireEvent.click(gridBtn);

  const [slider] = createElements({ slider: true });
  expect(slider).toHaveAttribute("min", `${min}`);
  expect(slider).toHaveAttribute("max", `${max}`);
  expect(slider).toHaveAttribute("value", `${max}`);
}

describe("CourseTube on Pc/Desktop", () => {
  describe("innerwidth > 1600", () => {
    beforeEach(() => {
      render(<App />);
      global.innerWidth = 1601;
    });

    test("should render the header section including all the components + sidebar should have class sidebar-max & the main should have a class main-min", () => {
      generalRender({ sidebarClass: "sidebar-max", mainClass: "main-min" });
    });

    test("should render the slider with the min value (3), max value (5) & the default value should be equal to the max value (5)", () => {
      renderSlider(3, 5);
    });
  });

  describe("innerwidth === 1600", () => {
    beforeEach(() => {
      render(<App />);
      global.innerWidth = 1600;
    });

    test("should render the header section including all the components + sidebar should have class sidebar-max & the main should have a class main-min", () => {
      generalRender({ sidebarClass: "sidebar-max", mainClass: "main-min" });
    });

    test("should render the slider with the min value (3), max value (4) & the default value should be equal to the max value (4)", () => {
      renderSlider(3, 4);
    });
  });

  describe("innerwidth === 1300", () => {
    beforeEach(() => {
      render(<App />);
      global.innerWidth = 1300;
    });

    test("should render the header section including all the components + sidebar should have class sidebar-max & the main should have a class main-min", () => {
      generalRender({ sidebarClass: "sidebar-max", mainClass: "main-min" });
    });

    test("should render the slider with the min value (2), max value (3) & the default value should be equal to the max value (3)", () => {
      renderSlider(2, 3);
    });
  });
});

describe("CourseTube on IPad", () => {
  describe("innerwidth === 1000", () => {
    beforeEach(() => {
      render(<App />);
      global.innerWidth = 1000;
    });

    test("should render the header section including all the components and sidebar should have class sidebar-max, main should have class main-min", () => {
      generalRender({ sidebarClass: "sidebar-max", mainClass: "main-min" });
    });

    test("should render the slider with the min value (2), max value (3) & the default value should be equal to the max value (3)", () => {
      renderSlider(2, 3);
    });
  });

  describe("innerwidth === 880", () => {
    beforeEach(() => {
      render(<App />);
      global.innerWidth = 880;
    });

    test("should render the header section including all the components and sidebar should have class sidebar-min, main should have class main-max", () => {
      generalRender({ sidebarClass: "sidebar-min", mainClass: "main-max" });
    });

    test("should render the slider with the min value (1), max value (3) & the default value should be equal to the max value (3)", () => {
      renderSlider(1, 3);
    });
  });

  describe("innerwidth === 810", () => {
    beforeEach(() => {
      render(<App />);
      global.innerWidth = 810;
    });

    test("should render the leftHeaderDiv, middleHeaderDiv", () => {
      initiallyShouldRender({
        device: "IPad",
      });
    });

    test("should not render the rightHeaderDiv (themeBtn, gridBtn, contactMeBtn) and instead should render the miniOptionsButton and sidebar should have class sidebar-min , main should have class main-max", () => {
      renderMiniOptionsButton({
        sidebarClass: "sidebar-min",
        mainClass: "main-max",
      });
    });

    test("should render the OptionsArrowBtn once the user clicks on miniOptionsButton", () => {
      miniOptionsButtonEvents();
    });

    test("should render the slider with the min value (1), max value (2) & the default value should be equal to the max value (2)", () => {
      // Step 1: Clicking on the miniOptionsButton
      const [miniOptionsButton] = createElements({ miniOptionsButton: true });
      fireEvent.click(miniOptionsButton);

      // Step 2: OptionsArrowBtn, themeBtn, gridBtn, contactMeBtn should appear
      renderSlider(1, 2);
    });
  });
});

describe("CourseTube on Mobile", () => {
  describe("innerwidth === 585", () => {
    beforeEach(() => {
      render(<App />);
      global.innerWidth = 585;
    });

    test("should render the leftHeaderDiv", () => {
      initiallyShouldRender({
        device: "Mobile",
      });
    });

    describe("miniOptionsButton", () => {
      test("should not render the rightHeaderDiv (themeBtn, gridBtn, contactMeBtn) and instead should render the miniOptionsButton and sidebar should have class sidebar-off , main should have class main-full", () => {
        renderMiniOptionsButton({
          sidebarClass: "sidebar-off",
          mainClass: "main-full",
        });
      });

      test("should render the OptionsArrowBtn once the user clicks on miniOptionsButton", () => {
        miniOptionsButtonEvents();
      });

      test("should render the slider with the min value (1), max value (2) & the default value should be equal to the max value (2)", () => {
        // Step 1: Clicking on the miniOptionsButton
        const [miniOptionsButton] = createElements({ miniOptionsButton: true });
        fireEvent.click(miniOptionsButton);

        // Step 2: OptionsArrowBtn, themeBtn, gridBtn, contactMeBtn should appear
        renderSlider(1, 2);
      });
    });

    describe("miniSearchButton", () => {
      test("should not render the middleHeaderDiv (searchInput, searchBtn, mic) and instead should render the miniSearchButton and sidebar should have class sidebar-off , main should have class main-full", () => {
        renderMiniSearchButton({
          sidebarClass: "sidebar-off",
          mainClass: "main-full",
        });
      });

      test("should render the searchArrowBtn once the user clicks on miniSearchButton", () => {
        miniSearchButtonEvents();
      });
    });
  });

  describe("innerwidth === 500", () => {
    beforeEach(() => {
      render(<App />);
      global.innerWidth = 500;
    });

    test("should render the leftHeaderDiv", () => {
      initiallyShouldRender({
        device: "Mobile",
      });
    });

    describe("miniOptionsButton", () => {
      test("should not render the rightHeaderDiv (themeBtn, gridBtn, contactMeBtn) and instead should render the miniOptionsButton and sidebar should have class sidebar-off , main should have class main-full", () => {
        renderMiniOptionsButton({
          sidebarClass: "sidebar-off",
          mainClass: "main-full",
        });
      });

      test("should render the OptionsArrowBtn once the user clicks on miniOptionsButton", () => {
        miniOptionsButtonEvents();
      });

      test("should render the slider with the min value (1), max value (2) & the default value should be equal to the max value (2)", () => {
        // Step 1: Clicking on the miniOptionsButton
        const [miniOptionsButton] = createElements({ miniOptionsButton: true });
        fireEvent.click(miniOptionsButton);

        // Step 2: OptionsArrowBtn, themeBtn, gridBtn, contactMeBtn should appear
        renderSlider(1, 2);
      });
    });

    describe("miniSearchButton", () => {
      test("should not render the middleHeaderDiv (searchInput, searchBtn, mic) and instead should render the miniSearchButton and sidebar should have class sidebar-off , main should have class main-full", () => {
        renderMiniSearchButton({
          sidebarClass: "sidebar-off",
          mainClass: "main-full",
        });
      });

      test("should render the searchArrowBtn once the user clicks on miniSearchButton", () => {
        miniSearchButtonEvents();
      });
    });
  });

  describe("innerwidth === 450", () => {
    beforeEach(() => {
      render(<App />);
      global.innerWidth = 450;
    });

    test("should render the leftHeaderDiv", () => {
      initiallyShouldRender({
        device: "Mobile",
      });
    });

    describe("miniOptionsButton", () => {
      test("should not render the rightHeaderDiv (themeBtn, gridBtn, contactMeBtn) and instead should render the miniOptionsButton and sidebar should have class sidebar-off , main should have class main-full", () => {
        renderMiniOptionsButton({
          sidebarClass: "sidebar-off",
          mainClass: "main-full",
        });
      });

      test("should render themeBtn & contactMeBtn only, should not render the gridBtn", () => {
        const [miniOptionsButton] = createElements({ miniOptionsButton: true });
        expect(miniOptionsButton).toBeInTheDocument();
        fireEvent.click(miniOptionsButton);

        const [themeBtn, gridBtn, contactMeBtn] = createElements({
          themeBtn: true,
          gridBtn: true,
          contactMeBtn: true,
        });
        expect(themeBtn).toBeInTheDocument();
        expect(contactMeBtn).toBeInTheDocument();
        expect(gridBtn).not.toBeInTheDocument();
      });
    });

    describe("miniSearchButton", () => {
      test("should not render the middleHeaderDiv (searchInput, searchBtn, mic) and instead should render the miniSearchButton and sidebar should have class sidebar-off , main should have class main-full", () => {
        renderMiniSearchButton({
          sidebarClass: "sidebar-off",
          mainClass: "main-full",
        });
      });

      test("should render the searchArrowBtn once the user clicks on miniSearchButton", () => {
        miniSearchButtonEvents();
      });
    });
  });
});
