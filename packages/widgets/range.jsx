import {toRefs} from 'vue';
import moment from 'moment';
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
    const handleChange = (moment, str) => {
      onChange.value(name.value, str);
    }
    const options = props.schema["ui:options"] || {};

    const getRangeValue = (value, format) => {
      if (!value) return [];
      const startTime = value[0] ? moment(value[0], format) : '';
      const endTime = value[1] ? moment(value[1], format) : '';
      return [startTime, endTime];
    }

    return () => {
      return (
        <div className="form-item">
          <div>{props.schema.title}</div>
          <a-range-picker
            {...options}
            value={getRangeValue(value.value, options.format)}
            onChange={handleChange}
          />
        </div>
      )
    }
  }
}