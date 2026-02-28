import { Object3DNode, MaterialNode } from "@react-three/fiber";

declare module "*.glb" {
  const src: string;
  export default src;
}
export {};

declare module "*.glb";
declare module "*.png";

declare module "meshline" {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
declare module "*.png" {
  const src: string;
  export default src;
}

declare module "meshline" {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<any, any>;
    meshLineMaterial: MaterialNode<any, any>;
  }
}
