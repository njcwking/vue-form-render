/* eslint-disable */
import {toRefs, watch} from 'vue';
import { resolve, clone } from './utils/index';
import {widgets, mapping} from './widgets';

export default {
  props: {
    schema: Object,
    formData: Object,
    options: Object,
  },

  setup(props, {emit}) {
    if (!props.schema) return null;

    const {formData, schema} = toRefs(props)

    let data = resolve(props.schema, formData.value);
    emit('on-change', data);
    watch(formData,() => {
      data = formData.value;
    });

    watch(schema,() => {
      data = resolve(props.schema, formData.value);
      emit('on-change', data);
    });

    const handleChange = (key, val) => {
      emit('on-change', clone(val));
    };
    return () => {
      const Field = widgets[mapping[`${props.schema.type}${props.schema.format ? `:${props.schema.format}` : ''}`]];
      return (
        <div className="vue-form-render">
          <Field
            schema={props.schema}
            formData={data}
            value={data}
            name="$form"
            onChange={handleChange}
            settings={props.options}
          />
        </div>
      )
    }
  }
}