import { FormProps, FormInstance } from 'antd/es/form';
import { FieldProps } from 'rc-field-form/lib/Field'; 
import { FormItemLabelProps } from 'antd/es/form/FormItemLabel';
import { FormItemInputProps } from 'antd/es/form/FormItemInput'

declare const ValidateStatuses: ["success", "warning", "error", "validating", ""];
export declare type ValidateStatus = typeof ValidateStatuses[number];
declare type RcFieldProps = Omit<FieldProps, 'children'>;
declare type RenderChildren = (form: FormInstance) => React.ReactNode;
declare type ChildrenType = RenderChildren | React.ReactNode;
export interface Store {
  [name: string]: any;
}
export declare type FormLayout = 'horizontal' | 'inline' | 'vertical';
export interface fieldSource extends FormItemLabelProps, FormItemInputProps, RcFieldProps{
  [key:string]: any;
  prefixCls?: string;
  noStyle?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: ChildrenType;
  id?: string;
  hasFeedback?: boolean;
  validateStatus?: ValidateStatus;
  required?: boolean;
  /** Auto passed by List render props. User should not use this. */
  fieldKey?: number;
  bindfield?: any,
  name?: string;
  label?: string; 
  props?: any;
  // 是否编辑状态不可编辑
  isEditDisabled?: boolean;
  // 是否编辑状态隐藏字段
  isEditHide?: boolean;
  /**
   * 网络请求的字段
   */
  request?: <T>(item: any) => Promise<T>;
  // form 支持的表单类型
  // type?: 'button'|'search'|'rangePicker'|'password'|'textarea'|'autoComplete'|'checkbox'|'cascader'|'datePicker'|'number'|'text'|'mentions'|'rate'|'radio'|'switch'|'slider'|'select'|'treeSelect'|'transfer'|'timePicker'|'upload'|'editor'
  type?: string;
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
  onReset?: () => void;
  onFinish?:(values: Store|string) => void;
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
