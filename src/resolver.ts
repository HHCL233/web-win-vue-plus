import type {
  ComponentResolver,
  SideEffectsInfo,
} from "unplugin-vue-components/types";

const getSideEffects = (compName: string): SideEffectsInfo => {
  const packageName = "web-win-vue-plus";
  const styleDir = compName.slice(3).toLowerCase();
  console.log(`${packageName}/dist/es/components/${styleDir}/style.css`);
  return `${packageName}/dist/es/components/${styleDir}/style.css`;
};

export default function WinComponentResolve(): ComponentResolver {
  return {
    type: "component",
    resolve: (name: string) => {
      if (name.startsWith("Win")) {
        const importName = name;
        const path = `web-win-vue-plus/dist/es`;
        return {
          name: importName,
          from: path,
          sideEffects: getSideEffects(importName),
        };
      }
    },
  };
}
