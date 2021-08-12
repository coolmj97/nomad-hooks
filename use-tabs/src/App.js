import { useState } from 'react';

export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const content = [
  {
    tab: 'Section 1',
    content: "I'm the content of the Section 1",
  },
  {
    tab: 'Section 2',
    content: "I'm the content of the Section 2",
  },
];

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  console.log();
  return (
    <div>
      {content.map((section, index) => (
        <button
          key={index}
          onClick={() => changeItem(index) /*setCurrentIndex(index)*/}
        >
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
