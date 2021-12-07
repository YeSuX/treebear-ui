export default function () {
  const dispatch = (componentName, parent, value, eventFlag) => {
    const name = parent.vnode.type.name;
    if (name === componentName) {
      parent.ctx.handleClick(value,eventFlag)
    }
  }

  return {
    dispatch
  }
}