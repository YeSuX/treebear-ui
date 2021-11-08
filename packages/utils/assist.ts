//向下查找组件
export function findComponentsDownward(context, componentName) {
  console.log('context',context.children.$props);
  let childrens = context.children;
  for (let i = 0; i < childrens.length; i++) {
    console.log('children',childrens.item(i).className);
    
    
  }
  
  // return Array.from(context.children).reduce((components, child) => {
  //   console.log('child', child);
  //   console.log('child', child.classList[0]);

  //   if (child.classList[0] === componentName) components.push(child);
  //   console.log('components', components);
  //   const foundChilds = findComponentsDownward(child, componentName);
  //   return components.concat(foundChilds);
  // }, []);
}