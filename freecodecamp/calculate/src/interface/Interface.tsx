export interface DisplayProps {
  value: string;
}

export interface ButtonProps {
  value: string;
  id: string;
  optional?:string;
  onClick: () => void;
}
