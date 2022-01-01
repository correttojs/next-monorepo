// These module declarations allow typescript to recognize custom imports, like:

// import logo from './logo.svg';
// import logo from './logo.gif';
// import logo from './logo.png';
// import logo from './logo.jpg';
// import logo from './logo.json';

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.gif" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.json" {
  const content: any;
  export default content;
}

declare module "*.graphql" {
  import { DocumentNode } from "graphql";

  const value: DocumentNode;
  export = value;
}

declare module "*.webp" {
  const content: any;
  export default content;
}

declare module "*.ttf" {
  const content: any;
  export default content;
}

declare module "*.woff" {
  const content: any;
  export default content;
}
