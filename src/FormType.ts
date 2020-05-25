import { FormProps, FormItemProps, FormInstance } from 'antd/es/form';

export interface Store {
  [name: string]: any;
}
export declare type FormLayout = 'horizontal' | 'inline' | 'vertical';
export interface fieldSource extends FormItemProps{
  bindfield?: any,
  name: string;
  [key:string]: any;
  props: any;
  // 是否编辑状态不可编辑
  isEditDisabled: boolean;
  // 是否编辑状态隐藏字段
  isEditHide: boolean;
  /**
   * 网络请求的字段
   */
  request: <T>(item: any) => Promise<T>;
  /**
   * 判断网络是否请求完毕 true 为完毕
   */
  done: boolean;
  /**
   * 判断字段绑定关系
   */
  isbind: boolean;
  // form 支持的表单类型
  type: 'button'|'search'|'rangePicker'|'password'|'textarea'|'autoComplete'|'checkbox'|'cascader'|'datePicker'|'number'|'text'|'mentions'|'rate'|'radio'|'switch'|'slider'|'select'|'treeSelect'|'transfer'|'timePicker'|'upload'
}

/**
 * Form props
 */ 
export interface JsonFormProps<T> extends FormProps {
  // 是否属于编辑状态
  isEdit?: boolean;
  // 表单是否加载中
  loading?: boolean;
  // 表单字段数据源
  fieldsSource?: fieldSource[];
  // 重构表单内部组件
  component: any;
  onReset?: () => void;
  onFinish:(values: Store|string) => void;
}

/**
 * form item 公有数据
 */
export interface FormItemShare {
  form: FormInstance;
  layout?: FormLayout;
  // 是否开启编辑状态
  isEdit?: boolean;
  // 加载中
  loading?: boolean;
  onFinish?:(values: Store|string) => void;
}

/**
 * 初始化时候
 */
export interface FormItemInit extends FormItemShare {
  onReset?: () => void;
}


/**
 * 组件公用
 */
export interface CompleteProps {
  item: fieldSource;
  handleSearch: (value: string, data: any, setData: any) => void
}
