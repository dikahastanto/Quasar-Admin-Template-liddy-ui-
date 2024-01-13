export interface ChildMenu {
  icon: string,
  text: string,
  to: string,
  params?: Record<string, string>
}
export interface Menu {
  icon: string,
  text: string,
  isDivider: boolean,
  isTitle: boolean,
  child?: ChildMenu[],
  to?: string
}
