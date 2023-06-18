declare module '*scss'{
  type IClassNames = Record<string, string>;
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.webp'

declare const IS_DEV: boolean;