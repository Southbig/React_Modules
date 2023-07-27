import { Union } from "./type";

export interface ImodalButtons {
  confirm?: {
    isExist? : boolean | undefined;
    isClose? : false;
    isActive? : true;
    title?: string;
    onClick?: () => void;
  };
  cancel?: {
    isExist?: true;
    title?: string;
  };
}

export interface IModal {
  title: UModals;
  component: () => JSX.Element | JSX.Element;
  buttons?: ImodalButtons;
  isBackgroundClose?: boolean | undefined;
}

export const modals = [
  'testModal'
] as const


export type UModals = Union<typeof modals>

// export type UTotalMorals = UModals | USmallModals | 'defaultModal'