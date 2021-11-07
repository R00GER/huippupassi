const ViewContainer = ({ children, customHeight, fullHeight, padding }) => {
  const chooseHeight = () => {
    const defaultHeight = "70vh";

    if (fullHeight) return "100vh";
    if (customHeight) return customHeight;

    return defaultHeight;
  };

  return (
    <div
      style={{
        width: "100%",
        height: chooseHeight(),
        padding: padding ? "1rem 1rem" : "0",
      }}
    >
      {children}
    </div>
  );
};

export default ViewContainer;
