import {toRefs} from 'vue';
import '../styles/common.less';

export default {
  props: {
    schema: Object,
    formData: Object,
    options: Object,
    name: String,
    onChange: Function,
    value: [String, Number, Boolean, Object],
    disabled: Boolean,
    readOnly: Boolean,
  },
  setup(props) {
    let {
      onChange,
      name,
      value
    } = toRefs(props);
    const handleChange = (v) => {
      onChange.value(name.value, v);
    }
    return () => {
      return (
        <div className="form-item">
          <div>{props.schema.title}</div>
          <a-select
            mode="multiple"
            value={value.value}
            onChange={handleChange}
            style="width: 200px"
            placeholder="Please select"
          >
            {
              props.schema.enum.map((item, index) => (
                <a-select-option
                  value={item}
                  key={item}
                >
                  {props.schema.enumNames ? props.schema.enumNames[index] || props.schema.enum[index] : props.schema.enum[index]}
                </a-select-option>
              ))
            }
          </a-select>
        </div>
      )
    }
  }
}