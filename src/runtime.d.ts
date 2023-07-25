/*
 * @Author: zihao.zhu@united-imaging.com 
 * @Date: 2022-04-16 11:41:46 
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-04-26 10:56:59
 * @desc : tool 类型声明 
 */
export namespace VueEmit {
  type Interface = Record<string, ((...args: any[]) => any) | any>;

  type UnionToIntersection<U> = (
    U extends any ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;
  export declare type WrapperEmit<
    T extends Interface,
    EventKey extends keyof T = keyof T
    > = UnionToIntersection<
      {
        [K in EventKey]: T[K] extends (...args: infer Params) => any
        ? (event: K, ...args: Params) => ReturnType<T[K]>
        : (...args: any[]) => ReturnType<T[K]>;
      }[EventKey]
    >;
}
export namespace VueComponent {
  type ObjectProps = Record<string, any>;
  type EmitFunctionProps = Record<string, (...args: any[]) => any>;

  export type VueProps<
    Props extends ObjectProps = { propsA: number },
    Event extends EmitFunctionProps = { eventsA: (data: any) => void },
    Expose extends ObjectProps = { propsA: number, methodA: () => Promise<any> },
    > = {
      ComponentType: Props & VueEmit.WrapperEmit<Event>,
      ComponentValue: { props: [keyof Props], emits: [keyof Event] },
      ComponentInstance: Expose
    }
}
