<<<<<<< HEAD
=======
/* eslint-disable no-undef */
>>>>>>> 3266aa14f4756d392d8415292a7d731e0135f421
/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

<<<<<<< HEAD
interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}
=======
// eslint-disable-next-line no-undef
interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}
>>>>>>> 3266aa14f4756d392d8415292a7d731e0135f421

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
<<<<<<< HEAD
  export { svgComponent as ReactComponent }
=======
  export { svgComponent as ReactComponent };
>>>>>>> 3266aa14f4756d392d8415292a7d731e0135f421
}
