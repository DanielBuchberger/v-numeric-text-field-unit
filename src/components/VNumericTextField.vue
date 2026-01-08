<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { VTextField } from 'vuetify/lib/components/index.mjs';
import { useUnitConverter } from '@/plugins/unitConverter/useUnitConverter';

// defineOptions({
//   inheritAttrs: false,
// });

const model = defineModel<number | null>({ default: 0 });

export interface Props {
  precision?: number;
  minExpo?: number;
  maxExpo?: number;
  integer?: boolean;
  hover?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  precision: 2,
  minExpo: -3,
  maxExpo: 5,
  integer: false,
  hover: true,
});

const { numberToScientificNotation, round } = useUnitConverter();

const focused = ref<boolean>(false);
const mouseOver = ref<boolean>(false);

const numberToString = (x: number | null, round: boolean = true): string => {
  if (x == null || isNaN(x)) return '';
  let precision: number | undefined = undefined;
  if (isValid.value == false || mouseOver.value == true) precision = undefined;
  else precision = props.integer ? 0 : round ? props.precision : undefined;

  const result = numberToScientificNotation({
    value: x,
    minExpo: props.minExpo,
    maxExpo: props.maxExpo,
    precision,
  });
  return result;
};
const textfield = ref<VTextField | null>(null);

const isValid = computed(() => textfield.value?.isValid);

const input = ref<string>(numberToString(model.value));

const decimalIndex = computed(() => input.value.indexOf('.'));
const eIndex = computed(() => input.value.toLowerCase().indexOf('e'));

const minusIndexes = computed(() => {
  const minusIndexes = [];
  for (let index = 0; index < input.value.length; index++) {
    if (input.value[index] === '-') {
      minusIndexes.push(index);
    }
  }
  return minusIndexes;
});
const containsMinusAtStart = computed(() => minusIndexes.value.includes(0));
// const containsDecimal = computed(() => decimalIndex.value != -1);
const containsE = computed(() => eIndex.value != -1);
const containsMinusAfterE = computed(() => minusIndexes.value.some((index) => index != 0));

// const minusAtStartIndex = computed(() => (containsMinusAtStart.value ? 0 : -1));
const minusAfterEIndex = computed(() =>
  containsMinusAfterE.value ? (containsMinusAtStart.value ? minusIndexes.value[1] : minusIndexes.value[0]) : -1,
);

const selectionStart = ref(textfield.value?.selectionStart as number);
const selectionEnd = ref(textfield.value?.selectionEnd as number);
const selection = computed(() => input.value.slice(selectionStart.value, selectionEnd.value));

const minusSelected = computed(() => selection.value.includes('-'));
const eSelected = computed(() => selection.value.toLowerCase().includes('e'));
const decimalSelected = computed(() => selection.value.includes('.'));
// const minusAtStartSelected = computed(() => containsMinusAtStart.value && selectionStart.value == 0 && selectionEnd.value > 0);
const minusAfterESelected = computed(() => selectionStart.value <= minusAfterEIndex.value && selectionEnd.value > minusAfterEIndex.value);

const updateSelection = () => {
  selectionStart.value = textfield.value?.selectionStart as number;
  selectionEnd.value = textfield.value?.selectionEnd as number;
};

onMounted(() => {
  selectionStart.value = textfield.value?.selectionStart as number;
  selectionEnd.value = textfield.value?.selectionEnd as number;
  document.addEventListener('selectionchange', updateSelection);
});

onUnmounted(() => {
  document.removeEventListener('selectionchange', updateSelection);
});

const onKeyDown = (event: KeyboardEvent) => {
  if (event.ctrlKey) return;
  // allow all numbers
  const allowedNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (allowedNumbers.includes(event.key)) {
    handleNumber(event);
    return;
  }
  // special keys allowed next to numbers
  const allowedKeys = ['Escape', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'e', 'E', '-'];
  if (!props.integer) {
    allowedKeys.push(...['.', ',']);
  }
  if (!allowedKeys.includes(event.key)) {
    // no allowed number and no allowed key pressed -> prevent!
    event.preventDefault();
    return;
  }

  switch (event.key.toLowerCase()) {
    case 'escape':
      handleEscape(event);
      return;
    case 'backspace':
      handleBackspace(event);
      return;
    case 'delete':
      handleDelete(event);
      return;
    case '.':
    case ',':
      handleDecimal(event);
      return;
    case 'e':
      handleE(event);
      return;
    case '-':
      handleMinus(event);
      return;
    default:
      return;
  }
};
const handleNumber = (event: KeyboardEvent) => {
  if (selection.value.length == 0) {
    // nothing selected -> nothing to handle
    return;
  } else if (containsMinusAfterE.value && eSelected.value && !minusAfterESelected.value) {
    // in case input contains a minus after e and e is selected, but not the minus
    const start = selectionStart.value;
    const end = selectionEnd.value + 1;
    input.value = input.value.slice(0, start) + event.key + input.value.slice(end);
    event.preventDefault();
    nextTick(() => textfield.value?.setSelectionRange(selectionStart.value + 1, selectionStart.value + 1));
  }
};

const handleEscape = (event: KeyboardEvent) => {
  // reset value to model value and unfocus
  input.value = numberToString(model.value);

  textfield.value?.blur();
  return;
};

const handleBackspace = (event: KeyboardEvent) => {
  // check if e is removed -> if true, check if minus also has to be removed
  if (containsMinusAfterE.value) {
    if (eSelected.value) {
      if (minusAfterESelected.value) {
        // selection also contains minus after e -> everything fine
      } else {
        const start = selectionStart.value;
        const end = selectionEnd.value + 1;
        input.value = input.value.slice(0, start) + input.value.slice(end);
        event.preventDefault();
        nextTick(() => textfield.value?.setSelectionRange(selectionStart.value, selectionStart.value));
      }
      return;
    }
    if (selectionStart.value == eIndex.value + 1 && selection.value.length == 0) {
      // cursor behind e and nothing is selected
      const start = selectionStart.value - 1;
      const end = Math.max(selectionEnd.value, selectionStart.value + 1);
      input.value = input.value.slice(0, start) + input.value.slice(end);
      event.preventDefault();
      nextTick(() => textfield.value?.setSelectionRange(selectionStart.value - 1, selectionStart.value - 1));
    }
  }
  return;
};
const handleDelete = (event: KeyboardEvent) => {
  // check if e is removed -> if true, check if minus also has to be removed
  if (containsMinusAfterE.value) {
    if (eSelected.value) {
      if (minusAfterESelected.value) {
        // selection also contains minus after e -> everything fine
      } else {
        const start = selectionStart.value;
        const end = selectionEnd.value + 1;
        input.value = input.value.slice(0, start) + input.value.slice(end);
        event.preventDefault();
        nextTick(() => textfield.value?.setSelectionRange(selectionStart.value, selectionStart.value));
      }
      return;
    }
    if (selectionStart.value == eIndex.value && containsMinusAfterE.value) {
      const start = selectionStart.value;
      const end = Math.max(selectionEnd.value, selectionStart.value + 2);
      input.value = input.value.slice(0, start) + input.value.slice(end);
      event.preventDefault();
      nextTick(() => textfield.value?.setSelectionRange(selectionStart.value, selectionStart.value));
      return;
    }
  }
};
const handleDecimal = (event: KeyboardEvent) => {
  if (decimalIndex.value != -1 && !decimalSelected.value) {
    // decimal separator already in input and selection does not include the old decimal separator
    event.preventDefault();
    return;
  }
  // always use '.' instead of ','
  const beforeDecimal = input.value.slice(0, selectionStart.value);
  const afterDecimal = input.value.slice(selectionEnd.value, input.value.length);
  input.value = beforeDecimal + '.' + afterDecimal;
  event.preventDefault();
  // set cursor to new position (otherwise it is set to the end)
  nextTick(() => textfield.value?.setSelectionRange(selectionStart.value + 1, selectionStart.value + 1));
  return;
};
const handleE = (event: KeyboardEvent) => {
  if (eIndex.value != -1 && !eSelected.value) {
    event.preventDefault();
    return;
  }
};
const handleMinus = (event: KeyboardEvent) => {
  if (minusSelected.value) {
    // handle minus selected
    if (selectionStart.value == 0) {
      // allow new minus at start
      return;
    } else if (selectionStart.value == eIndex.value + 1) {
      // allow new minus after e
      return;
    }
    event.preventDefault();
    return;
  } else {
    // handle minus not selected
    if (selectionStart.value == 0 && !containsMinusAtStart.value) {
      // allow new minus at start if there was none so far
      return;
    } else if (containsE.value && selectionStart.value == eIndex.value + 1 && !containsMinusAfterE.value) {
      // allow minus after e if there was none so far
      return;
    }
    // everthing else: do not allow minus
    event.preventDefault();
    return;
  }
};

const onFocusChange = (newValue: boolean) => {
  focused.value = newValue;
  if (focused.value) {
    input.value = numberToString(model.value, false);
  } else {
    const parsedValue = prepareAndParseInput();
    if (isNaN(parsedValue)) {
      console.error(`could not parse number: ${input.value}`);
    }
    model.value = parsedValue;
    input.value = numberToString(parsedValue);
  }
};

const onMouseOver = () => {
  mouseOver.value = true;
  if (!props.hover || focused.value) return;
  input.value = numberToString(model.value, false);
};

const onMouseOut = () => {
  mouseOver.value = false;
  if (!props.hover || focused.value) return;
  input.value = numberToString(model.value, true);
};

const prepareAndParseInput = () => {
  if (input.value.length == 0) return NaN;
  if (input.value[0].toLowerCase() == 'e') {
    // no number before e
    input.value = input.value.length == 1 ? '1' : '1' + input.value;
  } else if (input.value[0] == '-' && input.value.length == 1) {
    // input is solely a minus sign
    input.value = '0';
  }
  return round(parseFloat(input.value));
};

const validate = () => {
  textfield.value?.validate();
  return textfield.value?.isValid;
};

watch(
  () => model.value,
  (newValue: number | null) => {
    input.value = numberToString(newValue, true);
  },
);

defineExpose({
  validate,
  input,
  focused,
});
</script>

<template>
  <v-text-field
    ref="textfield"
    v-model="input"
    @keydown="onKeyDown($event)"
    @mouseout="onMouseOut"
    @mouseover="onMouseOver"
    @update:focused="onFocusChange"
  >
    <!-- have to skip ts checks -->
    <!-- @vue-skip -->
    <template v-for="(slot, name) in $slots" #[name]="slot">
      <slot :name="name" v-bind="slot"></slot>
    </template>
  </v-text-field>
</template>

<style scoped></style>