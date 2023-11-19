export const SidebarElement = ({
  element,
  setActiveElement,
  activeElement
}) => {

  const handleClickItem = () => {
    setActiveElement(element.id);
  }

  return (
    <div
      className={`sidebar_element ${
        activeElement === element.id ? "active" : ""}`
      }
      onClick={handleClickItem}
    >
      <img
        src={element.icon}
        alt={element.name}
        className="element_icon"
      />
      <p className="element_name">{element.name}</p>
    </div>
  );
};
