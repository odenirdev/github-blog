import "styled-components";
import { defaultTheme } from "../styles/theme/defaultTheme";

type Theme = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
