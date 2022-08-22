const onSlideUnderline = (underLineRef, activeRef, selectedItem) => {
  underLineRef.current.style.marginLeft = `${
    selectedItem * activeRef.current.getBoundingClientRect().width
  }px`;
  underLineRef.current.style.width = `${
    activeRef.current.getBoundingClientRect().width
  }px`;
  underLineRef.current.style.borderRadius = `${
    activeRef.current.getBoundingClientRect().height / 10
  }px`;
};
export default onSlideUnderline;
