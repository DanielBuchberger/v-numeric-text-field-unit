# v-unit-numeric-text-field

Vue 3 component for numeric text fields with unit conversion.

## Installation

```bash
npm install @enrag/v-numeric-text-field-unit
```

## Usage

### Basic Example with Temperature Units

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { VNumericTextFieldUnit, settingsTemperature } from '@enrag/v-numeric-text-field-unit'

const temperature = ref(273.15 + 20)
const temperatureSettings = ref(settingsTemperature)
</script>

<template>
  <div>
    <VNumericTextFieldUnit 
      v-model="temperature"
      v-model:settings="temperatureSettings"
      label="Temperature"
    />
    <p>Current value: {{ temperature }} {{ temperatureSettings.currentUnit?.unit }}</p>
  </div>
</template>
```

### Custom Settings with Min/Max Values

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { VNumericTextFieldUnit } from '@enrag/v-numeric-text-field-unit'
import type { NumericTextFieldUnitSettings } from '@enrag/v-numeric-text-field-unit'

const processingTemp = ref(85)
const customSettings = ref<NumericTextFieldUnitSettings<'temperature'>>({
  type: 'temperature',
  label: 'Processing Temperature',
  min: 0,
  max: 150,
  baseUnit: '°C'
  units: [
    { unit: '°C', precision: 2 },
    { unit: '°F', precision: 2 },
    { unit: 'K', precision: 2 }
  ]
})
</script>

<template>
  <div>
    <h2>Custom Temperature Range</h2>
    <VNumericTextFieldUnit 
      v-model="processingTemp"
      v-model:settings="customSettings"
    />
    <p>Value: {{ processingTemp }} {{ customSettings.currentUnit?.unit }}</p>
    <p class="info">Range: {{ customSettings.min }}–{{ customSettings.max }}</p>
  </div>
</template>

<style scoped>
.info {
  font-size: 0.9em;
  color: #666;
}
</style>
```

### Available Preset Settings

The package includes pre-configured settings for common units:

```typescript
import {
  settingsLength,
  settingsMassFlow,
  settingsVolumeFlow,
  settingsPressure,
  settingsTemperature,
  settingsDensity
} from '@enrag/v-numeric-text-field-unit'
```

### Using VNumericTextField (Without Units)

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { VNumericTextField } from '@enrag/v-numeric-text-field-unit'

const value = ref(0)
</script>

<template>
  <VNumericTextField v-model="value" label="Enter a number" />
</template>
```

## Features

- 📊 Numeric input with validation
- 🔄 Automatic unit conversion
- 📏 Pre-configured units (length, mass flow, volume flow, pressure, temperature, density)
- ✨ Full TypeScript support
- 🎨 Vuetify 3 integration

## License

MIT
