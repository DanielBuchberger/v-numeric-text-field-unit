<script setup lang="ts">
import { computed, ref, useAttrs, watch } from 'vue';
import type {
  NumericTextFieldUnitSettings,
  UnitSettings,
} from '@/types/unitsettings';
import type { QuantityType, Unit } from '@/plugins/unitConverter/types';
import type { Props } from './VNumericTextField.vue';
import { useUnitConverter } from '@/plugins/unitConverter/useUnitConverter';

defineOptions({
  inheritAttrs: false,
});

const model = defineModel<number>({ default: 0 });
const settings = defineModel<NumericTextFieldUnitSettings<QuantityType>>(
  'settings',
  { required: true }
);

const props = withDefaults(defineProps<Props>(), {
  minExpo: -3,
  maxExpo: 5,
  hover: true,
});

const { convert, getSIUnit } = useUnitConverter();

const numerictextfield = ref();

const currentUnitSettings = computed({
  get() {
    return settings.value.currentUnit
      ? settings.value.currentUnit
      : settings.value.units[0];
  },
  set(newValue) {
    settings.value.currentUnit = newValue;
  },
});
const currentUnit = computed(() => currentUnitSettings.value.unit);
const currentPrecision = computed(() => currentUnitSettings.value.precision);

const changeUnit = (unit: UnitSettings<QuantityType>) => {
  currentUnitSettings.value = unit;
};

const validate = () => {
  return numerictextfield.value?.validate();
};

const lockUnit = ref<boolean>(false);

const attrs = useAttrs();

const siUnit = computed(() => getSIUnit(settings.value.type));
const baseUnit = computed(
  (): Unit<QuantityType> =>
    settings.value.baseUnit ? settings.value.baseUnit : siUnit.value
);

const minRule = (v: string) => {
  if (settings.value.min == undefined) return true;
  const float = parseFloat(v);
  const minConverted = convert<QuantityType>(
    settings.value.min,
    settings.value.type,
    baseUnit.value,
    currentUnit.value
  );
  return (
    float >= minConverted ||
    `Input below minimum value of ${minConverted} ${currentUnitSettings.value.unit}`
  );
};

const maxRule = (v: string) => {
  if (settings.value.max == undefined) return true;
  const float = parseFloat(v);
  const maxConverted = convert<QuantityType>(
    settings.value.max,
    settings.value.type,
    baseUnit.value,
    currentUnit.value
  );
  return (
    float <= maxConverted ||
    `Input above maximum value of ${maxConverted} ${currentUnitSettings.value.unit}`
  );
};

const rules = computed(() => {
  const rules = [];
  if (Array.isArray(attrs.rules)) rules.push(...attrs.rules);
  rules.push(minRule);
  rules.push(maxRule);
  return rules;
});

const input = computed({
  get() {
    if (isNaN(model.value) || model.value == null) return NaN;
    return convert(
      model.value,
      settings.value.type,
      baseUnit.value,
      currentUnit.value
    );
  },
  set(newValue: number) {
    model.value = convert(
      newValue,
      settings.value.type,
      currentUnit.value,
      baseUnit.value
    );
  },
});

watch(
  settings.value,
  () => {
    validate();
  },
  { deep: true }
);

const attrsFiltered = computed(() => {
  const { rules, ...filtered } = attrs; // remove rules from attrs
  return filtered;
});

defineExpose({ numerictextfield });
</script>

<template>
  <v-numeric-text-field
    ref="numerictextfield"
    v-model="input"
    :hover="props.hover"
    :integer="props.integer"
    :label="settings.label"
    :max-expo="props.maxExpo"
    :min-expo="props.minExpo"
    :precision="currentPrecision"
    :rules="rules"
    :suffix="currentUnit"
    v-bind="attrsFiltered"
  >
    <!-- have to skip ts checks -->
    <!-- @vue-skip -->
    <template v-for="(slot, name) in $slots" #[name]="slot">
      <slot :name="name" v-bind="slot"></slot>
    </template>
    <template v-if="settings.units.length > 1" #append>
      <v-menu
        close-on-content-click
        location="bottom"
        transition="slide-y-transition"
      >
        <template #activator="{ props }">
          <v-icon
            v-bind="props"
            class="switch-unit-button"
            :disabled="lockUnit"
            :tabindex="-1"
          >
            mdi-menu-down
          </v-icon>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in settings.units"
            :key="index"
            @click="changeUnit(item)"
          >
            <v-list-item-title>{{ item.unit }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-numeric-text-field>
</template>

<style scoped>
.switch-unit-button {
  pointer-events: auto;
}
</style>
